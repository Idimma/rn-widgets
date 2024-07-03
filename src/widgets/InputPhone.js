import { DANGER, GRAY_TEXT, PRIMARY } from '../utils/Colors';
import React, { useRef, useState } from 'react';

import PhoneInput from 'react-native-phone-number-input';
import { PhoneNumberUtil } from 'google-libphonenumber';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Qext as Text } from './Text';
import { Qiew as View } from './View';
import { noAction } from '../utils/Constants';
import { scale } from 'react-native-size-matters';

const phoneUtil = PhoneNumberUtil.getInstance();
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#ffffff12',
  },
  input: {
    height: 45,
    flex: 1,
    paddingHorizontal: scale(15),
    color: '#fff',
  },
  disabled: {
    color: GRAY_TEXT,
    backgroundColor: '#848484',
  },
  inputContainerActive: {
    borderColor: PRIMARY,
  },
  inputContainerError: {
    borderColor: DANGER,
  },
  error: {
    // marginBottom: verticalScale(4),
  },
  rightContainer: {
    marginRight: scale(15),
  },
  textarea: {
    minHeight: scale(200),
  },
});

const Input = ({
  initialValue,
  value: _value,
  label,
  phone_code = '+234',
  country_code = 'NG',
  error,
  labelColor,
  renderRightComponent,
  hideError,
  onChangeText,
  onChange,
  secureTextEntry,
  multiline,
  disabled,
  mb,
  refs,
  inputStyle,
  wrapperStyle,
  dark,
  ...otherProps
}) => {
  const [isFocused, setFocused] = useState(false);
  const [_country_code, setCountryCode] = useState(country_code);
  const [_phone_code, setPhoneCode] = useState(phone_code.replace('+', ''));
  const [value, setValue] = useState(_value || initialValue);
  const inputRef = useRef(null);
  refs && refs(inputRef && inputRef.current);
  const bg = dark ? '#fff0F0' : '#ffffff12';
  const text_color = dark ? '#8A868F' : '#ffffff';

  return (
    <View mb={mb}>
      {label ? (
        <Text fs={15} bold mb={4}>
          {label}
        </Text>
      ) : null}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: bg, padding: 0, height: 50 },
          isFocused && styles.inputContainerActive,
          error && styles.inputContainerError,
          wrapperStyle && wrapperStyle,
        ]}
      >
        <PhoneInput
          ref={inputRef}
          defaultValue={value}
          defaultCode={_country_code}
          layout={'first'}
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeCountry={({ cca2, callingCode }) => {
            setCountryCode(cca2);
            setPhoneCode(callingCode[0] || '');
          }}
          onChangeFormattedText={(phone) =>
            onChangeText(value, `+${_phone_code}`, _country_code, phone)
          }
          disableArrowIcon
          codeTextStyle={{
            margin: 0,
            width: 0,
            color: '#8A868F',
            display: 'none',
          }}
          countryPickerButtonStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            width: undefined,
          }}
          containerStyle={{
            paddingLeft: 10,
            backgroundColor: 'transparent',
            flex: 1,
            alignItems: 'center',
          }}
          textInputStyle={{
            backgroundColor: 'transparent',
            height: '100%',
            color: '#8A868F',
            marginLeft: 0,
            paddingLeft: 0,
          }}
          textContainerStyle={{
            backgroundColor: 'transparent',
            marginLeft: -20,
            flex: 1,
          }}
        />
      </View>
      {!hideError && error && (
        <Text danger pl={7} mt={5} fs={12} style={otherProps.errorStyle}>
          {error}
        </Text>
      )}
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  error: PropTypes.any,
  initialValue: PropTypes.string,
  renderRightComponent: PropTypes.func,
  hideError: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  multiline: PropTypes.bool,
};

Input.defaultProps = {
  value: null,
  error: null,
  errorStyle: {},
  onChangeCountry: noAction,
  label: '',
  mb: 14,
  labelColor: 'white',
  initialValue: '',
  renderRightComponent: null,
  hideError: false,
  secureTextEntry: false,
  multiline: false,
};

export default Input;
