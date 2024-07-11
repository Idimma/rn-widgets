import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { verticalScale } from 'react-native-size-matters';
import Colors from 'themes/colors';
import PropTypes from 'prop-types';
import { Text, View } from '../../widgets';

const styles = StyleSheet.create({
  wrapper: { height: verticalScale(200) },
  slide: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

const Carousel = ({ style, images, ...otherProps }) => (
  <Swiper
    style={StyleSheet.flatten([styles.wrapper, style])}
    autoplay
    activeDotColor={Colors.primary}
    dotColor={'white'}
    {...otherProps}
  >
    {images.map(({ uri, text }, index) => (
      <View h={'100%'} key={'coud' + index} relative w={'100%'}>
        <Image
          key={Math.random().toString()}
          source={{ uri }}
          resizeMode="cover"
          style={styles.slide}
        />
        <View absolute color={'rgba(0,0,0,0.4)'} h={'100%'} w={'100%'} central>
          <Text white fs={18} center p={20}>
            {text || ' '}
          </Text>
        </View>
      </View>
    ))}
  </Swiper>
);

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  style: PropTypes.any,
};

Carousel.defaultProps = {
  style: null,
};

export default Carousel;
