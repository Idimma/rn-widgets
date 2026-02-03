import React, { useEffect, useMemo, useState } from 'react';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageStyle,
  ActivityIndicator,
  ViewStyle,
  ColorValue,
  ImageSourcePropType,
} from 'react-native';
import View from '../View';
import { viewStyler } from '../../helper/styles.view';
import { THEME_COLORS } from '../../helper';
import { IViewProps } from '../../helper/@types';
import { tryRequire, warnMissingDependency } from '../../helper/platform';

// Try image libraries in order of preference
const ExpoImage = tryRequire<typeof import('expo-image')>('expo-image');
const FastImage = tryRequire<any>('react-native-fast-image');
const Lightbox = tryRequire<any>('react-native-lightbox-v2');

let hasWarnedLightbox = false;

interface ImageProps extends Omit<RNImageProps, 'source' | 'borderRadius'> {
  source?: ImageSourcePropType;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  contain?: boolean;
  stretch?: boolean;
  showLoader?: boolean;
  cover?: boolean;
  loadingColor?: ColorValue;
  center?: boolean;
  show?: boolean;
  hide?: boolean;
  lightbox?: boolean;
  lightboxProps?: any;
  fallback?: ImageSourcePropType;
  onHandleError?: (e?: any, setUrl?: React.Dispatch<any>) => void;
  borderRadius?: number;
  /** Placeholder image source */
  placeholder?: ImageSourcePropType;
}

/**
 * Image component that works with Expo and bare React Native
 *
 * Supports (in order of priority):
 * 1. expo-image (best performance for Expo)
 * 2. react-native-fast-image (best for bare RN)
 * 3. Standard React Native Image (universal fallback)
 *
 * Optional lightbox support with react-native-lightbox-v2
 *
 * @example
 * <Image source={{ uri: 'https://example.com/image.jpg' }} cover />
 *
 * @example
 * <Image source={require('./local-image.png')} lightbox />
 */
const Image = ({
  contain,
  stretch,
  showLoader = false,
  cover,
  center,
  loadingColor = THEME_COLORS.primary,
  source,
  show,
  hide,
  fallback,
  onHandleError,
  lightbox,
  lightboxProps,
  borderRadius,
  style,
  placeholder,
  ...props
}: ImageProps & IViewProps) => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSource, setImageSource] = useState(source);

  useEffect(() => {
    if (source) {
      setImageSource(source);
      setHasError(false);
    }
  }, [source]);

  const resizeMode = useMemo(() => {
    if (contain) return 'contain';
    if (stretch) return 'stretch';
    if (center) return 'center';
    if (cover) return 'cover';
    return 'contain';
  }, [contain, stretch, center, cover]);

  if (hide === true || show === false) return null;

  // Show loading indicator
  if (isLoading && showLoader) {
    return (
      <View h={props.h || '100%'} w={props.w || '100%'} center>
        <ActivityIndicator size={'large'} color={loadingColor} />
      </View>
    );
  }

  const imageStyle = viewStyler(props, style as ViewStyle) as ImageStyle;
  const actualSource = hasError && fallback ? fallback : imageSource;

  const handleError = (e: any) => {
    setLoading(false);
    setHasError(true);
    onHandleError?.(e, setImageSource);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  const handleLoadStart = () => {
    if (showLoader) {
      setLoading(true);
    }
  };

  let child: React.ReactNode;

  // Priority 1: expo-image (best performance in Expo)
  if (ExpoImage.available && ExpoImage.module) {
    const { Image: ExpoImageComponent } = ExpoImage.module;
    child = (
      <ExpoImageComponent
        source={actualSource}
        contentFit={resizeMode as any}
        placeholder={placeholder}
        onLoad={handleLoad as any}
        onLoadStart={handleLoadStart}
        onError={handleError}
        style={imageStyle}
        {...props}
      />
    );
  }
  // Priority 2: react-native-fast-image (best for bare RN)
  else if (FastImage.available && FastImage.module) {
    const FastImageComponent = FastImage.module.default || FastImage.module;
    const resizeMap: Record<string, any> = {
      contain: FastImageComponent.resizeMode?.contain,
      cover: FastImageComponent.resizeMode?.cover,
      stretch: FastImageComponent.resizeMode?.stretch,
      center: FastImageComponent.resizeMode?.center,
    };
    child = (
      <FastImageComponent
        source={actualSource}
        resizeMode={resizeMap[resizeMode] || resizeMap.contain}
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        onError={handleError}
        style={imageStyle}
        {...props}
      />
    );
  }
  // Priority 3: Standard React Native Image (universal fallback)
  else {
    child = (
      <RNImage
        source={actualSource as RNImageProps['source']}
        resizeMode={resizeMode}
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        onError={handleError as any}
        style={imageStyle}
        {...props}
      />
    );
  }

  // Lightbox wrapper (optional)
  if (lightbox) {
    if (Lightbox.available && Lightbox.module) {
      const LightboxComponent = Lightbox.module.default || Lightbox.module;
      return <LightboxComponent {...lightboxProps}>{child}</LightboxComponent>;
    } else if (!hasWarnedLightbox) {
      warnMissingDependency('react-native-lightbox-v2', 'lightbox feature');
      hasWarnedLightbox = true;
    }
  }

  return <>{child}</>;
};

export default Image;
