import React, { useEffect, useMemo, useState } from 'react';

import { Image as RNImage, ImageStyle, ImageProps as RnImageProps, ImageErrorEventData } from 'expo-image';
import { ActivityIndicator, ViewStyle, ColorValue, CursorValue } from 'react-native';
//@ts-ignore
import Lightbox from 'react-native-lightbox';

import View from '../View';
import { viewStyler } from '../../helper/styles.view';
import { THEME_COLORS } from '../../helper';
import { IViewProps } from '../../helper/@types';

interface ImageProps extends RnImageProps {
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | undefined;
  cursor?: CursorValue | undefined;
  contain?: boolean,
  stretch?: boolean,
  showLoader?: boolean,
  cover?: boolean,
  loadingColor?: ColorValue
  center?: boolean,
  show?: boolean,
  random?: boolean,
  hide?: boolean,
  lightbox?: boolean,
  lightboxProps?: any,
  fallback?: ImageProps['source'],
  onHandleError?: (e ?: ImageErrorEventData, setUrl?: React.Dispatch<string>) => void
  borderRadius?: ImageStyle['borderRadius'],
}

const generateRandomImageUrl = (width: number = 630, height: number = 400): string => `https://loremflickr.com/${width}/${height}/people?random=${Math.floor(Math.random() * 1000)}`;
const Image = ({
                 contain,
                 stretch,
                 showLoader,
                 cover,
                 center,
                 loadingColor = THEME_COLORS.primary,
                 source,
                 show,
                 random,
                 hide,
                 fallback,
                 onHandleError,
                 lightbox,
                 lightboxProps,
                 borderRadius,
                 style,
                 ...props
               }: ImageProps & IViewProps) => {
  const [isLoading, setLoading] = useState(false);
  const [imageSource, setUrl] = useState(source);

  useEffect(() => {
    if (random) {
      setUrl({ uri: generateRandomImageUrl() });
    } else {
      if (source) setUrl(source);
    }
  }, [source, random]);

  const resize = useMemo(() => {
    if (contain) return 'contain';
    if (stretch) return 'stretch';
    if (center) return 'center';
    if (cover) return 'cover';
    return 'contain';
  }, [contain, stretch, center, cover]);


  if (hide === true || show === false) return null;
  if (isLoading)
    return (
      <View h={props.h || '100%'} w={props.w || '100%'} center>
        <ActivityIndicator size={'large'} />
      </View>
    );

  const child = (
    <RNImage
      source={imageSource}
      contentFit={resize as any}
      placeholderContentFit={resize as any}
      onLoad={() => {
        setLoading(false);
      }}
      onError={(e: ImageErrorEventData) => {
        setLoading(false);
        onHandleError && onHandleError(e, setUrl);
      }}
      placeholder={require('../loader.gif')}
      onLoadEnd={() => {
        setLoading(false);
      }}
      // onLoadStart={(e) => setLoading(true)}
      style={viewStyler(props, style as ViewStyle) as ImageStyle}
    />
  );

  if (lightbox) return <Lightbox {...lightboxProps}>{child}</Lightbox>;

  return child;
};


export default Image;
