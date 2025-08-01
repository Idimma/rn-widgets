declare module '@expo/vector-icons' {
  import { ComponentType } from 'react';
  export const Feather: any;
  export const MaterialIcons: any;
  export const Ionicons: any;
  export const FontAwesome: any;
  export const FontAwesome5: any;
  export const AntDesign: any;
  export const MaterialCommunityIcons: any;
  export const Entypo: any;
  export const Fontisto: any;
}

declare module '@expo/vector-icons/Feather' {
  import { ComponentType } from 'react';
  const Feather: any;
  export default Feather;
}

declare module 'expo-image' {
  import { ComponentType, ReactNode } from 'react';
  export interface ImageProps {
    source: any;
    style?: any;
    onError?: (error: any) => void;
    onLoad?: () => void;
    onLoadEnd?: () => void;
    resizeMode?: string;
    contentFit?: string;
    placeholderContentFit?: string;
    transition?: number;
    placeholder?: any;
    children?: ReactNode;
  }
  export interface ImageErrorEventData {
    error: Error;
  }
  export type ImageStyle = any;
  export const Image: ComponentType<ImageProps>;
}

declare module 'expo-haptics' {
  export function impactAsync(style?: string): Promise<void>;
}

declare module 'expo-linear-gradient' {
  import { ComponentType, ReactNode } from 'react';
  export interface LinearGradientProps {
    colors: string[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    locations?: number[];
    style?: any;
    children?: ReactNode;
  }
  export const LinearGradient: ComponentType<LinearGradientProps>;
}

// Fix for TextStyle array issue
// declare module 'react-native' {
//   interface TextStyle {
//     filter?: any;
//   }
// }

// Fix for child.props issue in Tabs.tsx
declare namespace JSX {
  interface ElementChildrenAttribute {
    children: any;
    props: any;
  }
}
