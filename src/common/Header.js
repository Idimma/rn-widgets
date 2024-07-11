// eslint-disable
import { AntDesign, Feather } from '@expo/vector-icons';

import { DEFAULT_TEXT } from '../utils/Colors';
import Icon from '../components/Icon';
import React from 'react';
import { default as Text } from '../components/Text';
import { default as Touch } from '../components/Touch';
import { default as View } from '../components/View';
import { navigate } from '../utils/helper';
import { useNavigation } from '@react-navigation/native';
import { I18nManager } from 'react-native';

const Header = ({
  title,
  menu,
  back,
  wrapperStyles,
  renderLeftIcon,
  settings,
  leftOnPress,
  renderRightIcon,
  color,
  showProfile,
}) => {
  const navigation = useNavigation();
  const gotoProfile = () => navigate('ProfileScreen');
  const renderLeft = () => {
    if (renderLeftIcon) return renderLeftIcon();
    if (back)
      return (
        <Touch
          center
          onPress={
            leftOnPress
              ? leftOnPress
              : navigation.canGoBack()
                ? navigation.goBack
                : null
          }
        >
          <AntDesign
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={24}
            color={color}
          />
        </Touch>
      );
    if (menu)
      return (
        <Touch center onPress={navigation.openDrawer}>
          <Feather name="menu" size={24} color={color} />
        </Touch>
      );
  };
  const renderRight = () => {
    if (renderRightIcon) return renderRightIcon();
    if (settings)
      return (
        <Touch center onPress={() => navigate('Account')}>
          <Icon name="clog" />
        </Touch>
      );
    if (showProfile)
      return (
        <Touch center onPress={gotoProfile}>
          <Feather name="user" size={24} color={color} />
        </Touch>
      );
  };

  return (
    <View row aligned h={60} style={wrapperStyles}>
      <View flex>{renderLeft()}</View>
      <View flex={4} center>
        <Text color={color} bold fs={18}>
          {title}
        </Text>
      </View>
      <View flex>{renderRight()}</View>
    </View>
  );
};

Header.defaultProps = {
  color: DEFAULT_TEXT,
};

export default Header;
