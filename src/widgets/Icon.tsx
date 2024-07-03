import * as ExpoIcons from '@expo/vector-icons';

import { flattenStyle, ITextProps } from './styles.text';
import React, { useMemo } from 'react';
import { I18nManager } from 'react-native';

const Icon = ({
                type = 'Ionicons',
                style = { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] },
                show = true,
                ...props
              }: ITextProps & { type?: string, name?: string }) => {
  const _style = flattenStyle(props, style);

  const Ionizier = useMemo(() => {
    if (!show) return null;
    const _t = type.toLowerCase();
    const {
      Entypo,
      Ionicons,
      Fontisto,
      FontAwesome,
      FontAwesome5,
      AntDesign,
      MaterialCommunityIcons,
      MaterialIcons,
      Feather
    } = ExpoIcons;
    if (_t.includes('ant')) return AntDesign;
    if (_t.includes('materialcommunityicons')) return FontAwesome5;
    if (_t.includes('fontawesome5')) return MaterialCommunityIcons;
    if (_t.includes('fontawesome')) return FontAwesome;
    if (_t.includes('feather')) return Feather;
    if (_t.includes('materialicons')) return MaterialIcons;
    if (_t.includes('entypo')) return Entypo;
    if (_t.includes('fontisto')) return Fontisto;
    return Ionicons;
  }, [type, show]);
  if (!show) return null;
  return <Ionizier {...props} style={_style} />;
};
export default Icon;
