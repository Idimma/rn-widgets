import {
  Keyboard,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { IKeyboardAvoidingView } from '../helper/@types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const KeyboardAvoidingView = ({
  children,
  style,
  ...props
}: IKeyboardAvoidingView) => (
  <RNKeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 10}
    style={[styles.container, style]}
  >
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        style={styles.container}
        {...props}
      >
        {children}
      </ScrollView>
    </TouchableWithoutFeedback>
  </RNKeyboardAvoidingView>
);

export default KeyboardAvoidingView;
