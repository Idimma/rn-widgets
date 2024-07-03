import React, { useEffect, useMemo, useState } from 'react';

import { Image as RNImage } from 'expo-image';
import { ActivityIndicator } from 'react-native';
//@ts-ignore
import Lightbox from 'react-native-lightbox';

import View from './View';
import { viewStyles } from './ViewStyles';
import { THEME_COLORS } from './styles.helper';

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
  ...props
}: any) => {
  const [isLoading, setLoading] = useState(false);
  const [imageSource, setUrl] = useState(source);

  useEffect(() => {
    if (random) {
      setUrl({ uri: 'https://loremflickr.com/640/480/people' });
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
      onLoad={( ) => {
        setLoading(false);
      }}
      onError={(e: any) => {
        setLoading(false);
        onHandleError && onHandleError(e, setUrl);
      }}
      placeholder={require('./loader.gif')}
      onLoadEnd={() => {
        setLoading(false);
      }}
      // onLoadStart={(e) => setLoading(true)}
      style={[viewStyles(props), props.style]}
    />
  );

  if (lightbox) return <Lightbox {...lightboxProps}>{child}</Lightbox>;

  return child;
};


export default Image;
