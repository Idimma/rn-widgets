# @idimma/rn-widget

A comprehensive library of customizable React Native components designed to accelerate your mobile app development. Works seamlessly with **both Expo and bare React Native projects**.

[![NPM Total Downloads](https://img.shields.io/npm/dt/@idimma/rn-widget.svg?style=flat-square&label=Total+Downloads)](https://www.npmjs.com/package/@idimma/rn-widget)
[![npm Latest Package](https://img.shields.io/npm/v/@idimma/rn-widget/latest.svg)](https://www.npmjs.com/package/@idimma/rn-widget)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/idimma/rn-widgets/blob/main/LICENSE)
[![Follow on Twitter](https://img.shields.io/twitter/follow/idimmanuel.svg?label=follow+idimmanuel)](https://x.com/idimmanuel)
[![Github Stars](https://img.shields.io/github/stars/idimma/rn-widgets)](https://github.com/idimma/rn-widgets/stargazers)

## Features

- **Works everywhere** - Expo, bare React Native, or hybrid projects
- **Zero required dependencies** - All peer dependencies are optional
- **Graceful degradation** - Components work with reduced features when optional deps are missing
- **Shorthand props** - Rapid styling with intuitive prop names (`p`, `m`, `br`, `bg`, etc.)
- **Theme support** - Built-in light/dark mode with customizable colors
- **TypeScript** - Full type definitions included

## Installation

```sh
npm install @idimma/rn-widget
# or
yarn add @idimma/rn-widget
```

That's it! The library works out of the box with no additional dependencies required.

## Quick Start

### 1. Wrap your app with WidgetProvider

```tsx
import { WidgetProvider } from '@idimma/rn-widget';

export default function App() {
  return (
    <WidgetProvider>
      <YourApp />
    </WidgetProvider>
  );
}
```

### 2. Start using components

```tsx
import { View, Text, Button, Touch } from '@idimma/rn-widget';

function MyScreen() {
  return (
    <View flex p={16} bg="#fff">
      <Text fs={24} fw="bold" mb={16}>
        Welcome!
      </Text>
      <Button
        title="Get Started"
        primary
        onPress={() => console.log('pressed')}
      />
    </View>
  );
}
```

## Optional Dependencies

All dependencies are **optional**. Install only what you need for enhanced functionality:

### For Expo Projects

```sh
# Icons
expo install @expo/vector-icons

# Haptic feedback
expo install expo-haptics

# Optimized images
expo install expo-image

# Gradient backgrounds
expo install expo-linear-gradient

# Safe area support
expo install react-native-safe-area-context

# Responsive scaling
npm install react-native-size-matters
```

### For Bare React Native Projects

```sh
# Icons
npm install react-native-vector-icons
npx pod-install # iOS only

# Haptic feedback
npm install react-native-haptic-feedback
npx pod-install # iOS only

# Optimized images
npm install react-native-fast-image
npx pod-install # iOS only

# Gradient backgrounds
npm install react-native-linear-gradient
npx pod-install # iOS only

# Safe area support
npm install react-native-safe-area-context
npx pod-install # iOS only

# Animations
npm install react-native-animatable

# Responsive scaling
npm install react-native-size-matters
```

### Feature Availability

| Feature | Expo Dependency | Bare RN Dependency | Fallback |
|---------|-----------------|-------------------|----------|
| Icons | `@expo/vector-icons` | `react-native-vector-icons` | Placeholder view |
| Haptics | `expo-haptics` | `react-native-haptic-feedback` | No-op (silent) |
| Images | `expo-image` | `react-native-fast-image` | Standard RN Image |
| Gradients | `expo-linear-gradient` | `react-native-linear-gradient` | Solid color |
| Safe Area | `react-native-safe-area-context` | `react-native-safe-area-context` | Plain View |
| Animations | `react-native-animatable` | `react-native-animatable` | Static View |
| Scaling | `react-native-size-matters` | `react-native-size-matters` | Identity (no scaling) |

## Components

### View

Flexible container with shorthand styling props.

```tsx
import { View } from '@idimma/rn-widget';

// Basic usage
<View flex p={16} bg="#f5f5f5">
  {children}
</View>

// With gradient (requires gradient dependency)
<View gradient gradientColors={['#ff0000', '#0000ff']}>
  {children}
</View>

// With animation (requires react-native-animatable)
<View animated animation="fadeIn" duration={500}>
  {children}
</View>

// Safe area view (requires react-native-safe-area-context)
<View safe edges={['top', 'bottom']}>
  {children}
</View>

// Scrollable view
<View scroll>
  {children}
</View>
```

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `flex` | `boolean \| number` | Flex grow (true = 1) |
| `row` | `boolean` | flexDirection: 'row' |
| `column` | `boolean` | flexDirection: 'column' |
| `center` | `boolean` | Center content (align + justify) |
| `aligned` | `boolean` | alignItems: 'center' |
| `justified` | `boolean` | justifyContent: 'center' |
| `spaced` | `boolean` | justifyContent: 'space-between' |
| `evenly` | `boolean` | justifyContent: 'space-evenly' |
| `wrap` | `boolean` | flexWrap: 'wrap' |
| `p` | `number` | padding |
| `pt`, `pb`, `pl`, `pr` | `number` | padding (top/bottom/left/right) |
| `px`, `py` | `number` | padding (horizontal/vertical) |
| `m` | `number` | margin |
| `mt`, `mb`, `ml`, `mr` | `number` | margin (top/bottom/left/right) |
| `mx`, `my` | `number` | margin (horizontal/vertical) |
| `bg` | `string` | backgroundColor |
| `br` | `number` | borderRadius |
| `bw` | `number` | borderWidth |
| `bc` | `string` | borderColor |
| `w` | `number \| string` | width |
| `h` | `number \| string` | height |
| `shadow` | `boolean \| string` | Apply shadow ('sm', 'md', 'lg') |
| `gradient` | `boolean` | Enable gradient background |
| `gradientColors` | `string[]` | Gradient colors array |
| `animated` | `boolean` | Enable animation |
| `animation` | `string` | Animation name (fadeIn, bounce, etc.) |
| `safe` | `boolean` | Use SafeAreaView |
| `scroll` | `boolean` | Make scrollable |
| `hide` | `boolean` | Hide component |
| `show` | `boolean` | Show component (false to hide) |

### Text

Styled text component with shorthand props.

```tsx
import { Text } from '@idimma/rn-widget';

// Basic usage
<Text fs={16} fw="bold" color="#333">
  Hello World
</Text>

// Using theme colors as boolean props
<Text primary fs={14}>Primary colored text</Text>
<Text danger>Error message</Text>
<Text success>Success message</Text>

// Headings
<Text h1>Heading 1</Text>
<Text h2>Heading 2</Text>
<Text h3>Heading 3</Text>

// Text transforms
<Text uppercase>uppercase text</Text>
<Text capitalize>capitalize text</Text>

// With styling shortcuts
<Text center mb={10} p={5}>
  Centered text with margin and padding
</Text>
```

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `fs` | `number` | fontSize |
| `fw` | `string` | fontWeight |
| `ff` | `string` | fontFamily ('regular', 'bold', 'medium', 'light') |
| `color` | `string` | text color |
| `center` | `boolean` | textAlign: 'center' |
| `uppercase` | `boolean` | textTransform: 'uppercase' |
| `lowercase` | `boolean` | textTransform: 'lowercase' |
| `capitalize` | `boolean` | textTransform: 'capitalize' |
| `h1` - `h6` | `boolean` | Heading styles |
| `article` | `boolean` | Article text style |
| `nl` | `number` | numberOfLines |
| `primary`, `danger`, `success`, etc. | `boolean` | Theme color shortcuts |

### Touch

Pressable component with optional haptic feedback.

```tsx
import { Touch } from '@idimma/rn-widget';

// Basic usage
<Touch onPress={() => console.log('pressed')}>
  <Text>Press me</Text>
</Touch>

// With haptic feedback (requires haptics dependency)
<Touch useHaptic onPress={handlePress}>
  <Text>Press with haptic</Text>
</Touch>

// With loading state
<Touch isLoading={loading} onPress={handleSubmit}>
  <Text>Submit</Text>
</Touch>

// With gradient background (requires gradient dependency)
<Touch gradient onPress={handlePress}>
  <Text white>Gradient Button</Text>
</Touch>
```

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `onPress` | `function` | Press handler |
| `useHaptic` | `boolean` | Enable haptic feedback |
| `hapticType` | `'light' \| 'medium' \| 'heavy' \| 'selection'` | Haptic intensity |
| `isLoading` | `boolean` | Show loading indicator |
| `loadingColor` | `string` | Loading indicator color |
| `gradient` | `boolean` | Wrap with gradient |
| `disabled` | `boolean` | Disable touch |
| All View props | - | Inherits View styling props |

### Button

Styled button component.

```tsx
import { Button } from '@idimma/rn-widget';

<Button
  title="Submit"
  primary
  onPress={handleSubmit}
/>

<Button
  title="Delete"
  danger
  outline
  onPress={handleDelete}
/>

<Button
  title="Loading..."
  isLoading
  disabled
/>
```

### TextField

Advanced text input with validation support.

```tsx
import { TextField } from '@idimma/rn-widget';

// Basic input
<TextField
  label="Username"
  placeholder="Enter username"
  value={username}
  onChangeText={setUsername}
/>

// Email input
<TextField
  label="Email"
  email
  value={email}
  onChangeText={setEmail}
  error={emailError}
/>

// Password input
<TextField
  label="Password"
  secureTextEntry
  value={password}
  onChangeText={setPassword}
/>

// Phone input
<TextField
  label="Phone"
  phone
  value={phone}
  onChangeText={setPhone}
/>

// Select/dropdown mode
<TextField
  label="Country"
  select
  data={['USA', 'Canada', 'UK', 'Australia']}
  value={country}
  onChangeText={setCountry}
/>

// Multiline textarea
<TextField
  label="Description"
  multiline
  value={description}
  onChangeText={setDescription}
/>
```

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Input label |
| `placeholder` | `string` | Placeholder text |
| `value` | `string` | Input value |
| `onChangeText` | `function` | Change handler |
| `error` | `string` | Error message |
| `email` | `boolean` | Email keyboard + validation |
| `phone` | `boolean` | Phone keyboard |
| `numbers` | `boolean` | Numeric keyboard |
| `decimal` | `boolean` | Decimal keyboard |
| `secureTextEntry` | `boolean` | Password input |
| `multiline` | `boolean` | Textarea mode |
| `select` | `boolean` | Dropdown select mode |
| `data` | `string[]` | Options for select mode |
| `disabled` | `boolean` | Disable input |
| `renderLeftComponent` | `function` | Custom left component |
| `renderRightComponent` | `function` | Custom right component |

### Image

Smart image component with multiple backend support.

```tsx
import { Image } from '@idimma/rn-widget';

// Basic usage
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  w={200}
  h={200}
  cover
/>

// Local image
<Image
  source={require('./assets/logo.png')}
  contain
/>

// With lightbox (requires react-native-lightbox-v2)
<Image
  source={{ uri: imageUrl }}
  lightbox
  w="100%"
  h={300}
/>

// With fallback
<Image
  source={{ uri: imageUrl }}
  fallback={require('./assets/placeholder.png')}
  cover
/>
```

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `source` | `ImageSourcePropType` | Image source |
| `cover` | `boolean` | resizeMode: 'cover' |
| `contain` | `boolean` | resizeMode: 'contain' |
| `stretch` | `boolean` | resizeMode: 'stretch' |
| `center` | `boolean` | resizeMode: 'center' |
| `w` | `number \| string` | width |
| `h` | `number \| string` | height |
| `borderRadius` | `number` | Border radius |
| `lightbox` | `boolean` | Enable lightbox view |
| `fallback` | `ImageSourcePropType` | Fallback image on error |
| `showLoader` | `boolean` | Show loading indicator |
| `loadingColor` | `string` | Loading indicator color |

### Icon

Universal icon component supporting multiple icon libraries.

```tsx
import { Icon } from '@idimma/rn-widget';

// Feather icons (default)
<Icon name="home" size={24} color="#333" />

// Material Icons
<Icon type="materialicons" name="settings" size={24} />

// FontAwesome
<Icon type="fontawesome" name="heart" size={24} color="red" />

// With fallback when icons not available
<Icon
  name="star"
  size={24}
  fallback={<Text>*</Text>}
/>

// Custom icon component
<Icon
  IconComponent={MyCustomIcon}
  name="custom-icon"
  size={24}
/>
```

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Icon name |
| `size` | `number` | Icon size (default: 24) |
| `color` | `string` | Icon color |
| `type` | `string` | Icon library type |
| `fallback` | `ReactNode` | Fallback when icons unavailable |
| `IconComponent` | `ComponentType` | Custom icon component |

**Supported icon types:**
- `feather` (default)
- `materialicons`
- `materialcommunityicons`
- `fontawesome`
- `fontawesome5`
- `ionicons`
- `antdesign`
- `entypo`
- `evilicons`
- `foundation`
- `octicons`
- `simplelineicons`
- `zocial`

### Spinner

Loading indicator component.

```tsx
import { Spinner } from '@idimma/rn-widget';

<Spinner />
<Spinner size="large" color="#007AFF" />
```

### Empty

Empty state component.

```tsx
import { Empty } from '@idimma/rn-widget';

<Empty
  title="No Results"
  message="Try adjusting your search"
  icon="search"
/>
```

### KeyboardAvoidingView

Keyboard-aware scrollable container.

```tsx
import { KeyboardAvoidingView } from '@idimma/rn-widget';

<KeyboardAvoidingView>
  <TextField label="Name" />
  <TextField label="Email" />
  <Button title="Submit" />
</KeyboardAvoidingView>
```

## Theming

### Custom Theme Colors

```tsx
import { WidgetProvider } from '@idimma/rn-widget';

const customLightTheme = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  danger: '#FF3B30',
  warning: '#FF9500',
  info: '#5AC8FA',
  primaryText: '#000000',
  secondaryText: '#666666',
};

const customDarkTheme = {
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  success: '#30D158',
  danger: '#FF453A',
  warning: '#FF9F0A',
  info: '#64D2FF',
  primaryText: '#FFFFFF',
  secondaryText: '#ABABAB',
};

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <WidgetProvider
      theme={theme}
      lightTheme={customLightTheme}
      darkTheme={customDarkTheme}
    >
      <YourApp />
    </WidgetProvider>
  );
}
```

### Custom Font Family

```tsx
<WidgetProvider
  fontFamily={{
    default: 'Roboto-Regular',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    light: 'Roboto-Light',
    italic: 'Roboto-Italic',
  }}
>
  <YourApp />
</WidgetProvider>
```

### Disable SafeAreaProvider

If you already have a SafeAreaProvider in your app:

```tsx
<WidgetProvider disableSafeArea>
  <YourApp />
</WidgetProvider>
```

## Utility Exports

```tsx
import {
  // Platform utilities
  tryRequire,
  isExpo,
  warnMissingDependency,

  // Dimension utilities
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  IS_IOS,
  IS_ANDROID,
  isIphoneX,
  getStatusBarHeight,
  getHeaderHeight,
  DHR, // Design Height Ratio
  DWR, // Design Width Ratio

  // Theme
  THEME_COLORS,
  lightTheme,
  darkTheme,
  fontFamily,
  shadow,
} from '@idimma/rn-widget';
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type {
  IViewProps,
  IViewStyleProp,
  ITextProps,
  ITextStyleProp,
  TextFieldType,
  ThemeColorsType,
  FontFamily,
} from '@idimma/rn-widget';
```

## Migration from v0.1.x

Version 0.2.0 makes all dependencies optional. If upgrading:

1. **No breaking changes** - Existing code continues to work
2. **New warnings** - You'll see DEV warnings for missing optional deps
3. **Install what you need** - Only install dependencies for features you use

## Recent Updates

### Version 0.2.0
- All dependencies are now optional with graceful fallbacks
- Works with both Expo and bare React Native projects
- Added support for react-native-vector-icons as alternative to @expo/vector-icons
- Added support for react-native-haptic-feedback as alternative to expo-haptics
- Added support for react-native-fast-image as alternative to expo-image
- Added support for react-native-linear-gradient as alternative to expo-linear-gradient
- Removed lodash dependency (replaced with native JS)
- Fixed Icon component bug (swapped MaterialCommunityIcons/FontAwesome5)
- Fixed TextField hooks violation
- Fixed silent error suppression in Touch component
- Added comprehensive TypeScript type declarations
- Improved tree-shaking support

### Version 0.1.7
- Fixed GitHub Actions workflow
- Resolved CI pipeline issues

See the [CHANGELOG](CHANGELOG.md) for a complete list of changes.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
