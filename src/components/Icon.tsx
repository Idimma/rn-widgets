import React, { useMemo } from 'react';
import { Text, View, I18nManager, ViewStyle } from 'react-native';
import { flattenStyle, ITextProps } from '../helper/styles.text';
import { tryRequire, warnMissingDependency } from '../helper/platform';

// Try Expo icons first, then react-native-vector-icons
const ExpoIcons = tryRequire<typeof import('@expo/vector-icons')>('@expo/vector-icons');

// Icon library mappings for react-native-vector-icons
const RNVI_MAPPINGS: Record<string, string> = {
  ionicons: 'Ionicons',
  ant: 'AntDesign',
  fontawesome: 'FontAwesome',
  fontawesome5: 'FontAwesome5',
  feather: 'Feather',
  materialicons: 'MaterialIcons',
  materialcommunityicons: 'MaterialCommunityIcons',
  entypo: 'Entypo',
  fontisto: 'Fontisto',
};

interface IconProps extends ITextProps {
  type?: string;
  name?: string;
  size?: number;
  color?: string;
  /** Custom icon component for projects using other icon libraries */
  IconComponent?: React.ComponentType<any>;
  /** Fallback content when no icon library is available */
  fallback?: React.ReactNode;
}

/**
 * Get the appropriate icon component from @expo/vector-icons
 */
function getExpoIconComponent(type: string, icons: any) {
  const _t = type.toLowerCase();
  if (_t.includes('ant')) return icons.AntDesign;
  if (_t.includes('materialcommunityicons')) return icons.MaterialCommunityIcons;
  if (_t.includes('fontawesome5')) return icons.FontAwesome5;
  if (_t.includes('fontawesome')) return icons.FontAwesome;
  if (_t.includes('feather')) return icons.Feather;
  if (_t.includes('materialicons')) return icons.MaterialIcons;
  if (_t.includes('entypo')) return icons.Entypo;
  if (_t.includes('fontisto')) return icons.Fontisto;
  return icons.Ionicons;
}

/**
 * Get the react-native-vector-icons module name for a given type
 */
function getRNVIModuleName(type: string): string {
  const _t = type.toLowerCase();
  for (const [key, value] of Object.entries(RNVI_MAPPINGS)) {
    if (_t.includes(key)) return value;
  }
  return 'Ionicons';
}

/**
 * Icon component that works with Expo and bare React Native
 *
 * Supports:
 * - @expo/vector-icons (Expo projects)
 * - react-native-vector-icons (bare RN projects)
 * - Custom IconComponent prop for other icon libraries
 * - Fallback placeholder when no icon library is available
 *
 * @example
 * // With Expo
 * <Icon name="home" type="Ionicons" size={24} color="blue" />
 *
 * // With custom icon component
 * import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 * <Icon name="home" IconComponent={MaterialIcons} size={24} />
 */
const Icon = ({
  type = 'Ionicons',
  style,
  show = true,
  name,
  size = 24,
  color,
  IconComponent: CustomIcon,
  fallback,
  ...props
}: IconProps) => {
  const defaultStyle = { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] };
  const _style = flattenStyle(props, style || defaultStyle);

  // Memoize icon component selection
  const ResolvedIcon = useMemo(() => {
    // Priority 1: Custom icon component passed via props
    if (CustomIcon) {
      return CustomIcon;
    }

    // Priority 2: @expo/vector-icons (Expo projects)
    if (ExpoIcons.available && ExpoIcons.module) {
      return getExpoIconComponent(type, ExpoIcons.module);
    }

    // Priority 3: react-native-vector-icons (bare RN)
    const rnviModuleName = getRNVIModuleName(type);
    const RNVIModule = tryRequire<any>(`react-native-vector-icons/${rnviModuleName}`);

    if (RNVIModule.available && RNVIModule.module) {
      return RNVIModule.module.default || RNVIModule.module;
    }

    return null;
  }, [type, CustomIcon]);

  if (!show) return null;

  // Render with resolved icon component
  if (ResolvedIcon) {
    return <ResolvedIcon name={name} size={size} color={color} style={_style} {...props} />;
  }

  // No icon library available - show warning and fallback
  warnMissingDependency(
    '@expo/vector-icons',
    'Icon component',
    ['react-native-vector-icons (for bare RN)', 'Pass IconComponent prop']
  );

  // Custom fallback
  if (fallback) return <>{fallback}</>;

  // Default fallback: placeholder box
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          borderRadius: 4,
        },
        _style as ViewStyle,
      ]}
    >
      <Text style={{ fontSize: size * 0.5, color: '#999' }}>?</Text>
    </View>
  );
};

export default Icon;
