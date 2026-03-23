import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Text from './Text';
import Touch from './Touch';
import View from './View';
import Icon from './Icon';
import { DHR, THEME_COLORS } from '../helper';
import { useRnWidgetContext } from '../context';
import { ThemeColorsType } from '../helper/@types';
import { tryRequire } from '../helper/platform';

// Optional: react-native-size-matters for responsive scaling
const SizeMatters = tryRequire<{ scale: (size: number) => number }>('react-native-size-matters');
const scale = SizeMatters.available && SizeMatters.module
  ? SizeMatters.module.scale
  : (size: number) => size;

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
});

interface DefaultOptionProps {
  label: string;
  value: any;
  onPress: (label: string) => void;
}

const DefaultOption = ({ label, value, onPress }: DefaultOptionProps) => {
  const colors = useRnWidgetContext('colors') as ThemeColorsType;
  const isSelected = label === value;
  return (
    <Touch
      style={StyleSheet.flatten([
        styles.option,
        isSelected && { borderColor: colors.orange, backgroundColor: 'white' },
      ])}
      onPress={() => onPress(label)}
    >
      <Text orange={isSelected}>{label}</Text>
    </Touch>
  );
};

interface RenderTouchableParams {
  onPress: () => void;
  value: any;
}

interface RenderOptionParams {
  items: any[];
  onPress: (value: any) => void;
  value: any;
}

interface SelectProps {
  style?: ViewStyle;
  value: any;
  items: any[];
  renderContentHeader?: () => ReactNode;
  optionTitle?: ReactNode;
  renderTouchable?: (params: RenderTouchableParams) => ReactNode;
  onChange?: (value: any) => void;
  renderOption?: (params: RenderOptionParams) => ReactNode;
  height?: number;
}

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
  height = DHR(30),
  ...otherProps
}: SelectProps) => {
  const sheetRef = useRef<any>(null);
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    if (selectedValue !== value) {
      onChange?.(selectedValue);
      sheetRef?.current?.close();
    }
  }, [selectedValue, value, onChange]);

  return (
    <View style={style}>
      {renderTouchable &&
        renderTouchable({
          onPress: () => sheetRef.current?.open(),
          value: selectedValue,
        })}
      {!renderTouchable && (
        <Touch
          row
          flex
          spaced
          h={'100%'}
          aligned
          onPress={() => sheetRef.current?.open()}
        >
          <Text flex gray>
            {value}
          </Text>
          <Icon
            type="materialcommunityicons"
            name="chevron-down"
            size={scale(17)}
            color={'gray'}
          />
        </Touch>
      )}
      <RBSheet
        customStyles={customStyle}
        closeOnDragDown={false}
        ref={sheetRef}
        height={height}
        {...otherProps}
      >
        {renderContentHeader?.()}
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
                : items.map((option) => (
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

export default Select;
