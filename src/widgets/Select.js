import React, { useRef, useState } from 'react';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import RBSheet from 'react-native-raw-bottom-sheet';
import { StyleSheet } from 'react-native';
import { default as Text } from './Text';
import Touch from './Touch';
import View from './View';
import { scale } from 'react-native-size-matters';
import { DHR, THEME_COLORS } from './styles.helper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  option: {
    paddingHorizontal: scale(14),
    paddingVertical: scale(4),
    borderRadius: scale(4),
    backgroundColor: THEME_COLORS.gray,
    marginRight: scale(14),
    marginTop: scale(14),
    borderWidth: 1,
    borderColor: 'gray',
  },
  selected: {
    borderColor: THEME_COLORS.orange,
    backgroundColor: 'white',
  },
});

const DefaultOption = ({ label, value, onPress }) => {
  const isSelected = label === value;
  return (
    <Touch
      style={StyleSheet.flatten([styles.option, isSelected && styles.selected])}
      onPress={() => onPress(label)}
    >
      <Text orange={isSelected}>{label}</Text>
    </Touch>
  );
};

const customStyle = { container: { backgroundColor: 'transparent' } };
const Select = ({
  style,
  value,
  items,
  renderContentHeader,
  optionTitle,
  renderTouchable,
  onChange,
  renderOption,
  ...otherProps
}) => {
  const sheetRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState(value);

  React.useEffect(() => {
    if (selectedValue !== value) {
      onChange && onChange(selectedValue);
      sheetRef?.current?.close();
    }
  }, [selectedValue]);

  return (
    <View style={style}>
      {renderTouchable &&
        renderTouchable({
          onPress: () => sheetRef.current.open(),
          value: selectedValue,
        })}
      {!renderTouchable && (
        <Touch
          row
          flex
          spaced
          h={'100%'}
          aligned
          onPress={() => sheetRef.current.open()}
        >
          <Text flex gray>
            {value}
          </Text>
          <Icon name="chevron-down" size={scale(17)} color={'gray'} />
        </Touch>
      )}
      <RBSheet
        customStyles={customStyle}
        closeOnDragDown={false}
        ref={sheetRef}
        {...otherProps}
      >
        {renderContentHeader && renderContentHeader()}
        <View flex>
          <View scroll>
            {optionTitle && <Text>{optionTitle}</Text>}
            <View p={20} style={styles.content}>
              {renderOption
                ? renderOption({
                    items,
                    onPress: setSelectedValue,
                    value: selectedValue,
                  })
                : items.map((option, i) => (
                    <DefaultOption
                      key={option}
                      label={option}
                      value={selectedValue}
                      onPress={setSelectedValue}
                    />
                  ))}
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

Select.propTypes = {
  value: PropTypes.any.isRequired,
  items: PropTypes.array.isRequired,
  renderContentHeader: PropTypes.func,
  renderOption: PropTypes.func,
  optionTitle: PropTypes.any,
};

Select.defaultProps = {
  renderContentHeader: null,
  renderTouchable: null,
  renderOption: null,
  height: DHR(30),
  optionTitle: null,
};

DefaultOption.propTypes = {
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Select;
