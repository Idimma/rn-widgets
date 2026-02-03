/**
 * Type declarations for optional peer dependencies
 * These modules may or may not be installed
 */

// react-native-size-matters
declare module 'react-native-size-matters' {
  export function scale(size: number): number;
  export function verticalScale(size: number): number;
  export function moderateScale(size: number, factor?: number): number;
  export function ms(size: number, factor?: number): number;
  export function s(size: number): number;
  export function vs(size: number): number;
}

// react-native-animatable
declare module 'react-native-animatable' {
  import { ComponentType } from 'react';
  import { ViewProps, TextProps, ImageProps } from 'react-native';

  export interface AnimatableProps {
    animation?: string;
    duration?: number;
    delay?: number;
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    easing?: string;
    iterationCount?: number | 'infinite';
    iterationDelay?: number;
    useNativeDriver?: boolean;
  }

  export const View: ComponentType<ViewProps & AnimatableProps>;
  export const Text: ComponentType<TextProps & AnimatableProps>;
  export const Image: ComponentType<ImageProps & AnimatableProps>;
}

// react-native-safe-area-context
declare module 'react-native-safe-area-context' {
  import { ComponentType, ReactNode } from 'react';
  import { ViewProps, ViewStyle } from 'react-native';

  export interface SafeAreaProviderProps {
    children?: ReactNode;
    style?: ViewStyle;
  }

  export interface SafeAreaViewProps extends ViewProps {
    edges?: ('top' | 'right' | 'bottom' | 'left')[];
  }

  export const SafeAreaProvider: ComponentType<SafeAreaProviderProps>;
  export const SafeAreaView: ComponentType<SafeAreaViewProps>;
  export function useSafeAreaInsets(): { top: number; right: number; bottom: number; left: number };
}

// expo-haptics
declare module 'expo-haptics' {
  export enum ImpactFeedbackStyle {
    Light = 'light',
    Medium = 'medium',
    Heavy = 'heavy',
  }

  export enum NotificationFeedbackType {
    Success = 'success',
    Warning = 'warning',
    Error = 'error',
  }

  export function impactAsync(style?: ImpactFeedbackStyle): Promise<void>;
  export function notificationAsync(type?: NotificationFeedbackType): Promise<void>;
  export function selectionAsync(): Promise<void>;
}

// expo-linear-gradient
declare module 'expo-linear-gradient' {
  import { ComponentType } from 'react';
  import { ViewProps } from 'react-native';

  export interface LinearGradientProps extends ViewProps {
    colors: string[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    locations?: number[];
  }

  export const LinearGradient: ComponentType<LinearGradientProps>;
}

// expo-image
declare module 'expo-image' {
  import { ComponentType } from 'react';
  import { ViewStyle, ImageSourcePropType } from 'react-native';

  export interface ImageProps {
    source?: ImageSourcePropType | string;
    style?: ViewStyle;
    contentFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    placeholder?: ImageSourcePropType | string;
    onLoad?: () => void;
    onLoadStart?: () => void;
    onError?: (error: any) => void;
    [key: string]: any;
  }

  export const Image: ComponentType<ImageProps>;
}

// react-native-haptic-feedback
declare module 'react-native-haptic-feedback' {
  export type HapticFeedbackTypes =
    | 'selection'
    | 'impactLight'
    | 'impactMedium'
    | 'impactHeavy'
    | 'notificationSuccess'
    | 'notificationWarning'
    | 'notificationError';

  export interface HapticOptions {
    enableVibrateFallback?: boolean;
    ignoreAndroidSystemSettings?: boolean;
  }

  const HapticFeedback: {
    trigger(type: HapticFeedbackTypes, options?: HapticOptions): void;
  };

  export default HapticFeedback;
}

// react-native-linear-gradient
declare module 'react-native-linear-gradient' {
  import { ComponentType } from 'react';
  import { ViewProps } from 'react-native';

  export interface LinearGradientProps extends ViewProps {
    colors: string[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    locations?: number[];
  }

  const LinearGradient: ComponentType<LinearGradientProps>;
  export default LinearGradient;
}

// react-native-fast-image
declare module 'react-native-fast-image' {
  import { ComponentType } from 'react';
  import { ViewStyle, ImageSourcePropType } from 'react-native';

  export interface FastImageProps {
    source?: ImageSourcePropType | { uri: string; priority?: 'low' | 'normal' | 'high' };
    style?: ViewStyle;
    resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
    onLoad?: () => void;
    onLoadStart?: () => void;
    onError?: (error: any) => void;
    [key: string]: any;
  }

  interface FastImageStatic extends ComponentType<FastImageProps> {
    resizeMode: {
      contain: 'contain';
      cover: 'cover';
      stretch: 'stretch';
      center: 'center';
    };
    priority: {
      low: 'low';
      normal: 'normal';
      high: 'high';
    };
  }

  const FastImage: FastImageStatic;
  export default FastImage;
}

// react-native-lightbox-v2
declare module 'react-native-lightbox-v2' {
  import { ComponentType, ReactNode } from 'react';
  import { ViewStyle } from 'react-native';

  export interface LightboxProps {
    children?: ReactNode;
    style?: ViewStyle;
    activeProps?: any;
    renderContent?: () => ReactNode;
    renderHeader?: (close: () => void) => ReactNode;
    onOpen?: () => void;
    onClose?: () => void;
    [key: string]: any;
  }

  const Lightbox: ComponentType<LightboxProps>;
  export default Lightbox;
}

// @expo/vector-icons
declare module '@expo/vector-icons' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  export const Feather: ComponentType<IconProps>;
  export const MaterialIcons: ComponentType<IconProps>;
  export const MaterialCommunityIcons: ComponentType<IconProps>;
  export const FontAwesome: ComponentType<IconProps>;
  export const FontAwesome5: ComponentType<IconProps>;
  export const Ionicons: ComponentType<IconProps>;
  export const AntDesign: ComponentType<IconProps>;
  export const Entypo: ComponentType<IconProps>;
  export const EvilIcons: ComponentType<IconProps>;
  export const Foundation: ComponentType<IconProps>;
  export const Octicons: ComponentType<IconProps>;
  export const SimpleLineIcons: ComponentType<IconProps>;
  export const Zocial: ComponentType<IconProps>;
}

// react-native-vector-icons
declare module 'react-native-vector-icons/Feather' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/MaterialIcons' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/FontAwesome' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/FontAwesome5' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/Ionicons' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/AntDesign' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/Entypo' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/EvilIcons' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/Foundation' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/Octicons' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/SimpleLineIcons' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

declare module 'react-native-vector-icons/Zocial' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

// react-native-raw-bottom-sheet
declare module 'react-native-raw-bottom-sheet' {
  import { ComponentType, RefObject, ReactNode } from 'react';
  import { ViewStyle } from 'react-native';

  export interface RBSheetProps {
    ref?: RefObject<any>;
    height?: number;
    minClosingHeight?: number;
    openDuration?: number;
    closeDuration?: number;
    closeOnDragDown?: boolean;
    closeOnPressMask?: boolean;
    closeOnPressBack?: boolean;
    dragFromTopOnly?: boolean;
    customStyles?: {
      wrapper?: ViewStyle;
      container?: ViewStyle;
      draggableIcon?: ViewStyle;
    };
    keyboardAvoidingViewEnabled?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    children?: ReactNode;
  }

  const RBSheet: ComponentType<RBSheetProps>;
  export default RBSheet;
}
