// @ts-ignore
import { Text as RNText } from 'react-native';
import { flattenStyle, type ITextProps, ITextStyleProp } from './styles.text';
import { omit } from 'lodash';
import React from 'react';

const Text = ({
  nl,
  numberOfLines,
  hide,
  show,
  style,
  ...props
}: ITextProps) => {
  if (hide || show === false) return null;
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <RNText
      allowFontScaling={false}
      numberOfLines={nl || numberOfLines || undefined}
      {...omit(props, ['flex'])}
      style={flattenStyle(props as ITextStyleProp, style)}
    />
  );
};
export default Text;
