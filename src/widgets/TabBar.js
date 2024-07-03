import { GRAY_TEXT, INACTIVE, PRIMARY, WHITE } from 'utils/Colors';
import { SafeAreaView, StyleSheet } from 'react-native';

import Logo from '../../assets/svgs/icon';
import ActiveLogo from '../../assets/svgs/active_icon';
import PropTypes from 'prop-types';
import React from 'react';
import Scanner from '../../assets/svgs/scanner';
import ActiveScanner from '../../assets/svgs/active_scanner';
import ActiveAccount from '../../assets/svgs/active_account';
import Account from '../../assets/svgs/account';
import { Text, TouchableOpacity, View } from './index';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
    borderTopWidth: 1,
    borderTopColor: GRAY_TEXT,
    shadowColor: '#00000010',
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.3,
  },
});

const TabBar = ({ state, descriptors, navigation }) => (
  <SafeAreaView style={styles.container}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      const onLongPress = () =>
        navigation.emit({ type: 'tabLongPress', target: route.key });
      const color = isFocused ? PRIMARY : INACTIVE;

      const icons = {
        'Check-In': isFocused ? <ActiveScanner /> : <Scanner />,
        'Activities': isFocused ? <ActiveLogo /> : <Logo />,
        'Account': isFocused ? <ActiveAccount /> : <Account />,
      };

      return (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          key={route.key}
          py={9}
          flex
          aligned
        >
          {icons[route.name]}
          <View h={8} />
          <Text color={color} fs={11} fw={'500'} uppercase>
            {route.name}
          </Text>
        </TouchableOpacity>
      );
    })}
  </SafeAreaView>
);

TabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired,
};

export default TabBar;
