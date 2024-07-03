import React, { ReactElement, ReactNode } from 'react';
import {
  ColorValue,
  TextStyle,
  ViewStyle,
  TextInputProps,
  ScrollViewProps,
} from 'react-native';

export interface TextFieldType extends TextInputProps {
  renderLeftComponent?: () => void | null | undefined | ReactNode;
  onChangeText?: (e?: any) => void;
  onChange?: (e?: any) => void;
  email?: boolean;
  numbers?: boolean;
  phone?: boolean;
  disabled?: boolean;
  decimal?: boolean;
  refs?: (ref?: any) => void;
  inputStyle?: TextStyle;
  wrapperStyle?: ViewStyle | null;
  dark?: boolean;
  select?: boolean;
  hide?: boolean;
  show?: boolean;
  optionTitle?: string | undefined | React.ReactElement;
  data?: any[];
  error?: string;
  errorStyle?: TextStyle | null;
  label?: '' | string | ReactElement;
  mb?: 14 | number;
  initialValue?: '' | string;
  labelColor?: ColorValue;
  renderRightComponent?: () => void | null | undefined| ReactNode;
  hideError?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
}

export interface IKeyboardAvoidingView extends ScrollViewProps {
  style?: ViewStyle;
  children: React.ReactElement | React.ReactElement[] | null;
}
