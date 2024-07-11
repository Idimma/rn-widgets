import { StyleSheet, TextInput as RNTextInput, TextStyle } from 'react-native';
import React, { useRef, useState } from 'react';

import Feather from '@expo/vector-icons/Feather';
// @ts-ignore
import Select from './Select';
import Text from './Text';
import Touch from './Touch';
import View from './View';
import { scale } from 'react-native-size-matters';
import { TextFieldType } from '../helper/@types';
import { THEME_COLORS } from '../helper';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#E7EAEF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 1,
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 13,
    fontFamily: 'regular',
    color: '#67748E',
    paddingHorizontal: 15,
    //2998877654
  },
  disabled: {
    color: THEME_COLORS.gray,
    backgroundColor: '#84848420',
  },
  inputContainerActive: {
    borderColor: THEME_COLORS.primary,
  },
  rightContainerActive: {
    borderColor: THEME_COLORS.primary,
  },
  inputContainerError: {
    borderColor: THEME_COLORS.danger,
  },
  rightContainerError: {
    borderColor: THEME_COLORS.danger,
  },
  rightContainer: {
    paddingHorizontal: 10,
    borderLeftWidth: 0,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: 'rgba(17, 17, 17, 0.05)',
  },
  leftContainer: { marginLeft: 10 },
  textarea: {
    minHeight: scale(150),
    textAlignVertical: 'top',
    paddingTop: 10,
    fontSize: 16,
    borderRadius: 8,
  },
});

const TextField = ({
                     renderLeftComponent,
                     onChangeText = () => null,
                     onChange = () => null,
                     email = false,
                     numbers = false,
                     phone = false,
                     disabled = false,
                     decimal = false,
                     refs = () => null,
                     inputStyle,
                     wrapperStyle = {},
                     dark = false,
                     select = false,
                     hide = false,
                     show = true,

                     optionTitle,
                     value: _value = '',
                     data = [],
                     error,
                     errorStyle = {},
                     label = '',
                     mb = 14,
                     initialValue = '',
                     labelColor = '#252525',
                     renderRightComponent,
                     hideError = false,
                     secureTextEntry = false,
                     multiline = false,

                     ...otherProps
                   }: TextFieldType) => {
  let keyboardType = 'default';
  if (email) keyboardType = 'email-address';
  if (numbers) keyboardType = 'numeric';
  if (decimal) keyboardType = 'decimal-pad';
  if (phone) keyboardType = 'phone-pad';

  if (hide || show === false) return null;
  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState(_value || initialValue);
  const [isSecureVisible, setSecureVisible] = useState(secureTextEntry);

  const inputRef = useRef(null);
  refs && refs(inputRef && inputRef.current);

  // @ts-ignore
  return (
    <View mb={mb}>
      {label ? (
        <Text fs={14} color={'#1E293B'} regular ml={1} mb={6}>
          {label}
        </Text>
      ) : null}
      <View
        // @ts-ignore eslint-disable-next-line
        style={StyleSheet.flatten([
          styles.inputContainer,
          isFocused && styles.inputContainerActive,
          error && styles.inputContainerError,
          wrapperStyle && wrapperStyle,
        ])}
      >
        {renderLeftComponent && (
          <View row aligned style={styles.leftContainer}>
            {renderLeftComponent() as React.ReactNode}
          </View>
        )}
        {select ? (
          //@ts-ignore
          <Select
            style={[
              styles.input,
              disabled && styles.disabled,
              inputStyle && inputStyle,
            ]}
            height={200}
            optionTitle={optionTitle || 'Select Your Gender'}
            items={data}
            onChange={(v: any) => {
              onChangeText && onChangeText(v);
              onChange && onChange(v);
              setValue(v);
            }}
            value={_value || value}
            {...otherProps}
          />
        ) : (
          <RNTextInput
            defaultValue={initialValue}
            value={_value || value}
            style={[
              styles.input,
              {
                // textAlign: rtl ? 'right' : 'left',
                // writingDirection: rtl ? 'rtl' : 'ltr',
              },

              multiline && styles.textarea,
              disabled && styles.disabled,
              inputStyle && inputStyle,
            ]}
            autoCapitalize="none"
            keyboardType={keyboardType as any}
            onFocus={() => setFocused(true)}
            onEndEditing={() => setFocused(false)}
            ref={(ref) => {
              //@ts-ignore
              inputRef.current = ref;
            }}
            onChangeText={(v) => {
              onChangeText && onChangeText(v);
              onChange && onChange(v);
              setValue(v);
            }}
            //@ts-ignore
            disabled={disabled as any}
            placeholderTextColor={'#374955'}
            editable={!disabled}
            underlineColorAndroid="transparent"
            secureTextEntry={isSecureVisible}
            multiline={multiline}
            {...otherProps}
          />
        )}
        {renderRightComponent && (
          <View
            row
            aligned
            // @ts-ignore eslint-disable-next-line
            style={StyleSheet.flatten([
              styles.rightContainer,
              isFocused && styles.rightContainerActive,
              error && styles.rightContainerError,
            ])}
          >
            {secureTextEntry && (
              <Touch mr={8} onPress={() => setSecureVisible(!isSecureVisible)}>
                <Feather
                  color={'gray'}
                  size={scale(12)}
                  name={isSecureVisible ? 'eye' : 'eye-off'}
                />
              </Touch>
            )}
            {renderRightComponent() as React.ReactNode}
          </View>
        )}

        {!renderRightComponent && secureTextEntry && (
          <View style={styles.rightContainer}>
            <Touch onPress={() => setSecureVisible(!isSecureVisible)}>
              <Feather
                name={isSecureVisible ? 'eye-off' : 'eye'}
                color={'gray'}
                size={scale(12)}
              />
            </Touch>
          </View>
        )}
      </View>
      <View hide={!(!hideError && error)} p={1}>
        <Text danger mt={5} fs={10} style={[errorStyle] as TextStyle}>
          {error}
        </Text>
      </View>
    </View>
  );
};
export default TextField;
