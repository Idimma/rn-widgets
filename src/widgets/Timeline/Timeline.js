import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import { INACTIVE, GRAY_ACTIVE, PRIMARY, WHITE } from '../../utils/Colors';
import Icon from '../Icon';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  event: {
    width: scale(37),
    height: scale(37),
    borderRadius: scale(20),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: INACTIVE,
    backgroundColor: GRAY_ACTIVE,
  },
  track: {
    borderLeftWidth: 1,
    height: 'auto',
    flex: 1,
    borderColor: GRAY_ACTIVE,
  },
  block: {
    marginRight: scale(14),
    alignItems: 'center',
    minHeight: scale(80),
  },
  selected: {
    borderColor: PRIMARY,
    backgroundColor: PRIMARY,
  },
  passedEvent: {
    borderColor: PRIMARY,
    backgroundColor: PRIMARY,
  },
  passedTrack: {
    borderColor: PRIMARY,
  },
});

function RenderIcon({ icon, color }) {
  if (typeof icon === 'string')
    return <Icon name={icon} size={scale(20)} color={color} />;
  return icon;
}

RenderIcon.propTypes = {};
const Timeline = ({ children, reverse, currentIndex }) => {
  const blocks = React.Children.toArray(children);

  const displayBlocks = blocks.map((block, index) => {
    const passedEvent = reverse ? currentIndex >= index : currentIndex > index;
    const currentEvent = currentIndex === index;
    return (
      <View style={styles.container} key={index}>
        <View style={styles.block}>
          <View
            style={[
              styles.event,
              passedEvent && styles.passedEvent,
              currentEvent && styles.selected,
              block.props.bg && block.props.bg,
            ]}
          >
            <RenderIcon icon={block.props.icon} color={WHITE} />
          </View>
          {!block.props.hideTrack && (
            <View style={[styles.track, passedEvent && styles.passedTrack]} />
          )}
        </View>
        {block}
      </View>
    );
  });

  return reverse ? displayBlocks.reverse() : displayBlocks;
};

Timeline.propTypes = {
  currentIndex: PropTypes.number,
  reverse: PropTypes.bool,
};

Timeline.defaultProps = {
  currentIndex: 0,
  reverse: false,
};

export default Timeline;
