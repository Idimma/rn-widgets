import { StyleSheet, TextInput as RNTextInput, TextInputProps, ViewStyle } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';

import Icon from './Icon';
import Select from './Select';
import Text from './Text';
import Touch from './Touch';
import View from './View';
import { TextFieldType } from '../helper/@types';
import { THEME_COLORS } from '../helper';
import { tryRequire } from '../helper/platform';

// Optional: react-native-size-matters for responsive scaling
const SizeMatters = tryRequire<typeof import('react-native-size-matters')>('react-native-size-matters');
const scale = SizeMatters.available && SizeMatters.module
  ? SizeMatters.module.scale
  : (size: number) => size; // Fallback: no scaling

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

/**
 * TextField component with optional select mode
 *
 * @example
 * <TextField
 *   label="Email"
 *   email
 *   value={email}
 *   onChangeText={setEmail}
 *   error={emailError}
 * />
 *
 * @example
 * <TextField
 *   label="Password"
 *   secureTextEntry
 *   value={password}
 *   onChangeText={setPassword}
 * />
 */
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
  // All hooks MUST be called before any conditional returns (Rules of Hooks)
  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState(_value || initialValue);
  const [isSecureVisible, setSecureVisible] = useState(secureTextEntry);
  const inputRef = useRef<RNTextInput>(null);

  // Sync external value changes
  useEffect(() => {
    if (_value !== undefined && _value !== value) {
      setValue(_value);
    }
  }, [_value]);

  // Pass ref to parent via refs callback
  useEffect(() => {
    if (refs && inputRef.current) {
      refs(inputRef.current);
    }
  }, [refs]);

  // Conditional return AFTER all hooks
  if (hide || show === false) return null;

  // Determine keyboard type
  let keyboardType: TextInputProps['keyboardType'] = 'default';
  if (email) keyboardType = 'email-address';
  if (numbers) keyboardType = 'numeric';
  if (decimal) keyboardType = 'decimal-pad';
  if (phone) keyboardType = 'phone-pad';

  const handleChangeText = (v: string) => {
    onChangeText?.(v);
    onChange?.(v);
    setValue(v);
  };

  const toggleSecureVisibility = () => {
    setSecureVisible(!isSecureVisible);
  };

  // Eye icon for password visibility toggle
  const EyeIcon = () => (
    <Touch onPress={toggleSecureVisibility}>
      <Icon
        type="Feather"
        name={isSecureVisible ? 'eye-off' : 'eye'}
        color="gray"
        size={scale(16)}
        fallback={
          <Text fs={12} color="gray">
            {isSecureVisible ? 'Show' : 'Hide'}
          </Text>
        }
      />
    </Touch>
  );

  // Select component style (ViewStyle compatible)
  const selectStyle: ViewStyle = {
    height: 40,
    flex: 1,
    paddingHorizontal: 15,
    ...(disabled ? { backgroundColor: '#84848420' } : {}),
  };

  return (
    <View mb={mb}>
      {label ? (
        <Text fs={14} color={'#1E293B'} regular ml={1} mb={6}>
          {label}
        </Text>
      ) : null}

      <View
        style={StyleSheet.flatten([
          styles.inputContainer,
          isFocused && styles.inputContainerActive,
          error && styles.inputContainerError,
          wrapperStyle,
        ])}
      >
        {/* Left component */}
        {renderLeftComponent && (
          <View row aligned style={styles.leftContainer}>
            {renderLeftComponent() as React.ReactNode}
          </View>
        )}

        {/* Select mode or TextInput */}
        {select ? (
          <Select
            style={selectStyle}
            height={200}
            optionTitle={optionTitle || 'Select an option'}
            items={data}
            onChange={handleChangeText}
            value={_value || value}
          />
        ) : (
          <RNTextInput
            defaultValue={initialValue}
            value={_value || value}
            style={[
              styles.input,
              multiline && styles.textarea,
              disabled && styles.disabled,
              inputStyle,
            ]}
            autoCapitalize="none"
            keyboardType={keyboardType}
            onFocus={() => setFocused(true)}
            onEndEditing={() => setFocused(false)}
            onBlur={() => setFocused(false)}
            ref={inputRef}
            onChangeText={handleChangeText}
            placeholderTextColor={'#374955'}
            editable={!disabled}
            underlineColorAndroid="transparent"
            secureTextEntry={isSecureVisible}
            multiline={multiline}
            {...otherProps}
          />
        )}

        {/* Right component with optional secure text toggle */}
        {renderRightComponent && (
          <View
            row
            aligned
            style={StyleSheet.flatten([
              styles.rightContainer,
              isFocused && styles.rightContainerActive,
              error && styles.rightContainerError,
            ])}
          >
            {secureTextEntry && (
              <View mr={8}>
                <EyeIcon />
              </View>
            )}
            {renderRightComponent() as React.ReactNode}
          </View>
        )}

        {/* Secure text toggle when no right component */}
        {!renderRightComponent && secureTextEntry && (
          <View style={styles.rightContainer}>
            <EyeIcon />
          </View>
        )}
      </View>

      {/* Error message */}
      {!hideError && error && (
        <View p={1}>
          <Text danger mt={5} fs={10} style={errorStyle || undefined}>
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TextField;
