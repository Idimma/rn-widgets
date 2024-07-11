# Idimma React Native Widgets

react native components

## Installation

```sh
npm install @idimma/rn-widget
```

## Usage

```js
import { View } from '@idimma/rn-widget';

<View
  flex={1}
  bg="#F2F5F7"
  p={10}
  m={5}
  br={8}
  bw={1}
  bc="#CCCCCC"
>
  {/* Your content here */}
</View>
```

```js
import { Text } from '@idimma/rn-widget';

<Text
  color="#2BAEDF"
  //You can use any color as prop black, red, pink ...etc
  fs={16}
  fw="bold"
  center //Align Text to center
>
  Hello, World!
</Text>
```

```js
import { Image } from '@idimma/rn-widget';

<Image
  source={require('./path/to/image.png')}
  resizeMode="cover" //or
  w={200}
  h={200}
  radius={10}
/>;
```

## Components and Props

### View Component

| Prop       | Type                | Description                                              |
|------------|---------------------|----------------------------------------------------------|
| \`flex\`   | \`boolean\` \| \`number\`| Flex grow factor                                         |
| \`bg\`     | \`string\`             | Background color                                         |
| \`p\`      | \`number\`             | Padding for all sides                                    |
| \`m\`      | \`number\`             | Margin for all sides                                     |
| \`radius\` | \`number\`            | Border radius                                            |
| \`bw\`     | \`number\`             | Border width                                             |
| \`bc\`     | \`string\`             | Border color                                             |

#### [Other View Props](./docs/View.md)

### Text Component

| Prop      | Type                | Description                                       |
|-----------|---------------------|---------------------------------------------------|
| \`color\` | \`string\`             | Text color      [See list of colors](./docs/Colors.md) |
| \`fs\`     | \`number\`             | Font size                                         |
| \`fw\`    | \`'normal'\` \| \`'bold'\` \| \`number\` | Font weight                                       |
| \`align\` | \`'auto'\` \| \`'left'\` \| \`'right'\` \| \`'center'\` | Text alignment                                    |

#### [Other Text Props](./docs/Text.md)


### Image Component

| Prop           | Type                | Description                                              |
|----------------|---------------------|----------------------------------------------------------|
| \`source\`       | \`ImageSourcePropType\`| Source of the image (usually requires a path or URL)     |
| \`resizeMode\`   | \`'cover'\` \| \`'contain'\` \| \`'stretch'\` | Resize mode for the image    |
| \`style\`        | \`ImageStyle\`         | Custom styles for the image (e.g., width, height)        |
#### [Other Image Props](./docs/Image.md)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
