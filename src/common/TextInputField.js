import React, { useState } from 'react';
import { Picker, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../index';
import DatePicker from 'react-native-datepicker';
import { Ionicons } from '@expo/vector-icons';
import SearchableDropdown from './DropDownSearch';
import { DANGER } from '../utils/Colors';
import { useAppState } from '../store';

const TextInputField = ({
  errorText,
  label,
  data,
  disabled,
  value,
  multiline,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  borderError,
  style,
  type,
  ...props
}) => {
  const { rtl } = useAppState();

  function renderView() {
    if (type === 'search') {
      return (
        <SearchableDropdown
          onTextChange={(text) => {
            if (text.length === 1) props.onFocus();
          }}
          onItemSelect={(item) => onChangeText(item.name, item)}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: errorText ? DANGER : '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          items={data}
          defaultIndex={0}
          placeholder={placeholder || 'Enter School name'}
          underlineColorAndroid="transparent"
        />
      );
    }

    if (type === 'select' && data) {
      return (
        <View relative r={5} color={'#dadada'} bw={1} bc={'#E8F0F2'}>
          <Picker
            selectedValue={value}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) =>
              onChangeText(itemValue, itemIndex)
            }
            style={[
              styles.inputStyle,
              { width: '98%' },
              borderError ? styles.borderErrorStyle : '',
              style,
            ]}
          >
            {data.map(({ name },i) => (
              <Picker.Item key={i} label={name} value={name} />
            ))}
          </Picker>
          <Ionicons
            name="chevron-down"
            style={{ position: 'absolute', zIndex: 2, right: 10, top: '25%' }}
            size={20}
          />
        </View>
      );
    }

    if (type === 'date') {
      const [date, setDate] = useState(value || new Date(1990, 0, 1));
      return (
        <DatePicker
          style={{ width: '100%' }}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate={props.min || '1950-01-01'}
          maxDate={props.max || '2005-01-01'}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
            dateInput: [
              styles.inputStyle,
              {
                alignItems: 'flex-start',
                justifyContent: 'center',
              },
              borderError ? styles.borderErrorStyle : '',
              style,
            ],
            dateText: { textAlign: 'left' },
          }}
          onDateChange={(date) => {
            setDate(date);
            onChangeText(date);
          }}
        />
      );
    }
    return (
      <TextInput
        keyboardType={type || keyboardType || 'default'}
        value={value}
        autoCapitalize="none"
        disabled={disabled}
        enabled={!disabled}
        editable={!disabled}
        multiline={multiline}
        placeholder={placeholder}
        autoCorrect={false}
        placeholderTextColor={'rgba(0,0,0,0.25)'}
        onChangeText={onChangeText}
        style={[
          styles.inputStyle,
          borderError ? styles.borderErrorStyle : '',
          style,
          {
            textAlign: rtl ? 'right' : 'left',
            writingDirection: rtl ? 'rtl' : 'ltr',
          },
        ]}
        {...props}
        maxFontSizeMultiplier={0}
        secureTextEntry={secureTextEntry}
      />
    );
  }

  return (
    <View mt={10}>
      {label && (
        <Text fs={13} w={'100%'} gray={disabled} medium mb={5}>
          {label}
        </Text>
      )}
      {renderView()}
      {errorText && (
        <Text danger fs={10} mt={3} pb={4} mb={4}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#323232',
    paddingRight: 8,
    paddingLeft: 8,
    fontSize: 14,
    lineHeight: 19,
    borderRadius: 5,
    height: 45,
    fontFamily: 'Medium',
    width: '100%',
    backgroundColor: '#dadada',
    borderWidth: 1,
    borderColor: '#E8F0F2',
  },
  borderErrorStyle: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default TextInputField;
