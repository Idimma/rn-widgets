import { ActivityIndicator, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { useRnWidgetContext } from '../context';
import { IViewProps, ThemeColorsType } from '../helper/@types';

interface ISpinner {
  center: boolean;
  bottom?: boolean;
  color?: string;
  text?: string;
  large?: boolean;
  textStyle: TextStyle;
}

const Spinner = ({ text, textStyle, color, large, ...props }: ISpinner & IViewProps) => {
  const colors = useRnWidgetContext('colors') as ThemeColorsType;
  return (
    <View {...props}>
      <ActivityIndicator
        animating
        color={color || colors.primary}
        size={large ? 'large' : 'small'}
      />
      {text ? (
        <Text style={textStyle}>{text || 'Please Wait...'}</Text>
      ) : null}
    </View>
  );
};

export default Spinner;
