import { default as Icon } from './Icon';
import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
import { StyleSheet } from 'react-native';
import { default as Text } from './Text';
import { default as View } from './View';
import { moderateVerticalScale } from 'react-native-size-matters';
import { IS_IOS, THEME_COLORS } from './styles.helper';

const pickerStyle = {
  inputAndroid: {
    height: moderateVerticalScale(45),
    paddingHorizontal: moderateVerticalScale(10),
    fontSize: 16,
    // fontFamily: 'medium',
    color: '#848484',
  },
  inputIOS: {
    height: moderateVerticalScale(45),
    paddingHorizontal: moderateVerticalScale(10),
    fontSize: 16,
    // fontFamily: 'medium',
    color: '#848484',
  },
  placeholder: {
    fontSize: 16,
    // letterSpacing: -1,
    // fontFamily: 'medium',
    color: '#848484',
  },
  viewContainer: {
    height: moderateVerticalScale(45),
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  iconContainer: {
    top: 8,
  },
};

const SelectInput = ({
  width,
  placeholder,
  error,
  value,
  onValueChange,
  items,
  inputContainer,
  style,
  ...otherProps
}) => {
  return (
    <>
      <View
        w={width}
        style={[
          styles.inputContainer,
          error && styles.inputContainerError,
          inputContainer,
        ]}
      >
        <RNPickerSelect
          onValueChange={onValueChange}
          value={value}
          placeholder={{ label: placeholder, value: value }}
          style={{ ...pickerStyle, ...style }}
          items={items.filter((s) => s.value !== placeholder)}
          Icon={() =>
            IS_IOS ? (
              <Icon
                fs={18}
                m={10}
                color={THEME_COLORS.gray}
                name="chevron-down-outline"
              />
            ) : null
          }
          {...otherProps}
        />
      </View>
      {error ? (
        <View mb={5}>
          <Text danger pl={7} mt={5} fs={12}>
            {error}
          </Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // borderRadius: scale(8),
    // borderWidth: 1,
  },
  inputContainerError: {
    borderColor: THEME_COLORS.danger,
  },
});

export default SelectInput;
