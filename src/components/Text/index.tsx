import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { flattenStyle, type ITextProps, ITextStyleProp } from '../../helper/styles.text';
import React from 'react';

// Native JavaScript replacement for lodash omit
const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
};

const Text = ({
  nl,
  numberOfLines,
  hide,
  show,
  style,
  ...props
}: ITextProps) => {
  if (hide || show === false) return null;

  // Omit non-RN props before spreading
  const rnProps = omit(props, ['flex'] as const) as RNTextProps;

  return (
    <RNText
      allowFontScaling={false}
      numberOfLines={nl || numberOfLines || undefined}
      {...rnProps}
      style={flattenStyle(props as ITextStyleProp, style)}
    />
  );
};
export default Text;
