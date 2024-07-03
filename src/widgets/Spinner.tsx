import { ActivityIndicator, Text, TextStyle, View } from 'react-native';
import React, { Component } from 'react';
import { IViewProps } from './styles.view';
import { THEME_COLORS } from './styles.helper';

interface ISpinner {
  center: boolean;
  bottom?: boolean;
  color?: string;
  text?: string;
  large?: boolean;
  textStyle: TextStyle;
}

class Spinner extends Component<ISpinner & IViewProps> {
  render() {
    const { text, textStyle, color, large, ...props } = this.props;
    return (
      <View {...props}>
        <ActivityIndicator
          animating
          color={color || THEME_COLORS.primary}
          size={large ? 'large' : 'small'}
        />
        {text ? (
          <Text style={textStyle}>{text || 'Please Wait...'}</Text>
        ) : null}
      </View>
    );
  }
}

export default Spinner;
