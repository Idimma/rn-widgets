import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(2),
    marginBottom: scale(14),
  },
  children: {
    marginVertical: scale(10),
  },
});

const TimelineBlock = ({
  children = null,
  title,
  subtitle,
  hideTrack = false,
}) => (
  <View style={styles.container}>
    <Text medium>{title}</Text>
    <Text gray>{subtitle}</Text>
    {children && <View style={styles.children}>{children}</View>}
  </View>
);

TimelineBlock.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any.isRequired,
  hideTrack: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.any.isRequired,
};

export default TimelineBlock;
