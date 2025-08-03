# Idimma React Native Widgets

A comprehensive library of customizable React Native components designed to accelerate your mobile app development. This library provides a collection of pre-styled, flexible UI components with consistent theming and simplified prop interfaces.

[![NPM Total Downloads](https://img.shields.io/npm/dt/@idimma/rn-widget.svg?style=flat-square&label=Total+Downloads)](https://www.npmjs.com/package/@idimma/rn-widget)
[![npm Latest Package](https://img.shields.io/npm/v/@idimma/rn-widget/latest.svg)](https://www.npmjs.com/package/@idimma/rn-widget)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/idimma/rn-widgets/blob/main/LICENSE)
[![Follow on Twitter](https://img.shields.io/twitter/follow/idimmanuel.svg?label=follow+idimmanuel)](https://x.com/idimmanuel)
[![Github Stars](https://img.shields.io/github/stars/idimma/rn-widgets)](https://github.com/idimma/rn-widgets/stargazers)

## Features

- 🎨 **Consistent styling** across all components
- 🔄 **Flexible props** for quick customization
- 📱 **Cross-platform** support for iOS and Android
- 🧩 **Modular design** - use only what you need
- 🔌 **Optional Expo integration** with vector icons, haptics, and more
- 🌗 **Theme support** with light and dark mode
- 📏 **Responsive layouts** with simplified dimension handling

## Installation

```sh
npm install @idimma/rn-widget
```

### Dependencies

This library has the following peer dependencies:

**Required:**
```sh
npm install react-native-safe-area-context
```

**Optional (for enhanced functionality):**
```sh
# For Expo projects
expo install @expo/vector-icons expo-haptics expo-image expo-linear-gradient

# For gesture support
npm install react-native-gesture-handler react-native-reanimated
```

## Usage

### Basic Components

```js
import { View, Text, Image, Button } from '@idimma/rn-widget';

// Flexible View component with simplified props
<View
  flex={1}
  bg="#F2F5F7"
  p={10}
  m={5}
  br={8}
  bw={1}
  bc="#CCCCCC"
  row
  center
>
  {/* Your content here */}
</View>

// Text component with built-in styling
<Text
  color="#2BAEDF"  // You can use any color as prop: black, red, pink, etc.
  fs={16}
  fw="bold"
  center  // Align text to center
>
  Hello, World!
</Text>

// Image component with simplified props
<Image
  source={require('./path/to/image.png')}
  resizeMode="cover"
  w={200}
  h={200}
  radius={10}
/>

// Button component with built-in styling
<Button
  title="Press Me"
  primary  // Use theme colors directly as props
  onPress={() => console.log('Button pressed')}
  rounded
  m={10}
/>
```

### Form Components

```js
import { TextField } from '@idimma/rn-widget';

// Text input with built-in validation and styling
<TextField
  label="Email Address"
  placeholder="Enter your email"
  email  // Enables email keyboard and validation
  error={emailError}  // Display error message
  onChangeText={setEmail}
/>
```

### Navigation Components

```js
import { Tabs } from '@idimma/rn-widget';

// Tab navigation with custom styling
<Tabs selectedTab={0}>
  <View label="Tab 1">
    <Text>Content for Tab 1</Text>
  </View>
  <View label="Tab 2">
    <Text>Content for Tab 2</Text>
  </View>
</Tabs>
```

## Components and Props

### View Component

| Prop       | Type                | Description                                              |
|------------|---------------------|----------------------------------------------------------|
| `flex`     | `boolean` \| `number`| Flex grow factor                                         |
| `bg`       | `string`            | Background color                                         |
| `p`        | `number`            | Padding for all sides                                    |
| `m`        | `number`            | Margin for all sides                                     |
| `br`       | `number`            | Border radius                                            |
| `bw`       | `number`            | Border width                                             |
| `bc`       | `string`            | Border color                                             |
| `row`      | `boolean`           | Set flexDirection to row                                 |
| `column`   | `boolean`           | Set flexDirection to column                              |
| `center`   | `boolean`           | Center content horizontally and vertically               |

#### [Complete View Props Documentation](./docs/View.md)

### Text Component

| Prop      | Type                | Description                                       |
|-----------|---------------------|---------------------------------------------------|
| `color`   | `string`            | Text color [See list of colors](./docs/Colors.md) |
| `fs`      | `number`            | Font size                                         |
| `fw`      | `'normal'` \| `'bold'` \| `number` | Font weight                        |
| `align`   | `'auto'` \| `'left'` \| `'right'` \| `'center'` | Text alignment        |
| `ff`      | `string`            | Font family (regular, bold, medium, light)        |

#### [Complete Text Props Documentation](./docs/Text.md)

### Image Component

| Prop           | Type                | Description                                              |
|----------------|---------------------|----------------------------------------------------------|
| `source`       | `ImageSourcePropType`| Source of the image (usually requires a path or URL)     |
| `resizeMode`   | `'cover'` \| `'contain'` \| `'stretch'` | Resize mode for the image            |
| `w`            | `number`            | Width of the image                                       |
| `h`            | `number`            | Height of the image                                      |
| `radius`       | `number`            | Border radius for the image                              |

#### [Complete Image Props Documentation](./docs/Image.md)

### Button Component

| Prop           | Type                | Description                                              |
|----------------|---------------------|----------------------------------------------------------|
| `title`        | `string`            | Button text                                              |
| `onPress`      | `function`          | Function to call when button is pressed                  |
| `primary`      | `boolean`           | Use primary theme color                                  |
| `secondary`    | `boolean`           | Use secondary theme color                                |
| `disabled`     | `boolean`           | Disable the button                                       |
| `loading`      | `boolean`           | Show loading indicator                                   |
| `rounded`      | `boolean`           | Apply rounded corners                                    |

### TextField Component

| Prop              | Type                | Description                                           |
|-------------------|---------------------|-------------------------------------------------------|
| `label`           | `string`            | Input label                                           |
| `placeholder`     | `string`            | Placeholder text                                      |
| `value`           | `string`            | Input value                                           |
| `onChangeText`    | `function`          | Function to call when text changes                    |
| `error`           | `string`            | Error message to display                              |
| `email`           | `boolean`           | Enable email keyboard and validation                  |
| `phone`           | `boolean`           | Enable phone keyboard and validation                  |
| `numbers`         | `boolean`           | Enable numeric keyboard                               |
| `secureTextEntry` | `boolean`           | Hide text input (for passwords)                       |

### Tabs Component

| Prop              | Type                | Description                                           |
|-------------------|---------------------|-------------------------------------------------------|
| `selectedTab`     | `number`            | Index of the initially selected tab                   |
| `children`        | `ReactElement[]`    | Tab content elements with label prop                  |

## Recent Updates

### Version 0.1.7
- Fixed GitHub Actions workflow by switching from Yarn to npm
- Resolved CI pipeline issues with missing Yarn binary
- Updated cache configuration to use package-lock.json

### Version 0.1.6
- Fixed TypeScript compilation errors
- Improved build configuration
- Added comprehensive type declarations
- Enhanced component documentation
- Updated Expo package compatibility

See the [CHANGELOG](CHANGELOG.md) for a complete list of changes.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
