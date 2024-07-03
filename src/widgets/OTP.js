import { Icon, Spinner, Text, TouchableOpacity, View } from './index';

import PropTypes from 'prop-types';
import React from 'react';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { StyleSheet } from 'react-native';
import { headerTopPad } from '../utils/size';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
  innerContainer: {
    width: '100%',
    padding: scale(14),
  },
});

const Otp = ({ onChange, email, isLoading, onOtpClose, resendCode, title }) => {
  const [code, setCode] = React.useState('');
  const pinInput = React.createRef();
  const [seconds, setSeconds] = React.useState(60);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('');
    }
  }, [seconds]);

  React.useEffect(() => {
    if (onChange) {
      onChange(code);
    }
  }, [code]);

  return (
    <View flex white>
      <TouchableOpacity onPress={onOtpClose} mt={headerTopPad} py={10} ml={30}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View px={30}>
        <Text bold fs={35} mt={30}>
          Complete
          {'\n'}
          {title}
        </Text>
        <Text light nl={1} mt={20}>
          An OTP has been sent to you <Text bold>{email}</Text>
        </Text>
        <View my={40} central>
          <SmoothPinCodeInput
            ref={pinInput}
            placeholder="-"
            cellStyle={{
              borderWidth: 1,
              borderRadius: 24,
              width: 71,
              height: 50,
              borderColor: '#F8C6CD',
              backgroundColor: '#F8C6CD',
            }}
            cellStyleFocused={{
              borderColor: '#000100',
              backgroundColor: 'white',
            }}
            textStyle={{ fontSize: 16, color: '#8A868F' }}
            textStyleFocused={{ color: '#000100' }}
            value={code}
            autoFocus
            onTextChange={setCode}
          />
        </View>

        {isLoading ? (
          <View central>
            <Spinner />
          </View>
        ) : (
          <View>
            {seconds > 0 ? (
              <Text center primary>
                Resend Code in {seconds}s
              </Text>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSeconds(60);
                  setCode('');
                  resendCode();
                }}
                central
              >
                <Text primary>Resend Code</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

Otp.propTypes = {
  email: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onOtpClose: PropTypes.func.isRequired,
  resendCode: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Otp.defaultProps = {
  email: '',
  title: 'Sign Up',
  onOtpClose: () => null,
  resendCode: () => null,
  onChange: () => {},
  isLoading: false,
};
export default Otp;
