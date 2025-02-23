# View Component

## Description

The `View` component in this project is a versatile wrapper designed for rendering UI elements in React Native applications. It enhances basic functionality with additional features and integrations, making it a powerful tool for building interactive user interfaces.

### Functionality

1. **Conditional Rendering:**
   Supports conditional rendering with props like `hide` and `show`, allowing components to be easily toggled based on application logic.

2. **Animation Support:**
   Integrates seamless animations using the `animation` prop, leveraging `react-native-animatable`'s library for effects like bounce, fade, slide, and zoom.

3. **Gradient Backgrounds:**
   Enables creation of gradient backgrounds with the `gradient` prop, utilizing `expo-linear-gradient` for smooth color transitions.

4. **Safe Area Handling:**
   Ensures compatibility with device safe areas using the `safe` prop, powered by `react-native-safe-area-context` to avoid UI elements being obscured by device notches or system bars.

5. **Scrolling Support:**
   Implements scrolling functionality via the `scroll` prop, wrapping components in a `ScrollView` when necessary for improved user experience with content-heavy views.

6. **Refresh Control:**
   Facilitates pull-to-refresh functionality in `ScrollView` components through the `fetchRequest` prop, enhancing data retrieval with loading indicators managed by `RefreshControl`.


## Available Props
| Prop Name         | Type                         | Description                                                                          |
|-------------------|------------------------------|--------------------------------------------------------------------------------------|
| `show`            | `boolean`                    | Controls the visibility of the component.                                            |
| `hide`            | `boolean`                    | Controls the visibility of the component (opposite of `show`).                       |
| `easing`          | `Easing`                     | Easing function for animations.                                                      |
| `flex`            | `number \| boolean`          | Sets `flex` property for layout.                                                     |
| `animated`        | `boolean`                    | Enables animations using `react-native-animatable`.                                  |
| `safe`            | `boolean`                    | Renders the component inside `SafeAreaView`.                                         |
| `gradient`        | `boolean`                    | Renders a gradient background using `expo-linear-gradient`.                          |
| `isLoading`       | `boolean`                    | Indicates whether content is loading for use with `ScrollView` and `RefreshControl`. |
| `wrapperStyle`    | `ViewStyle \| undefined`     | Custom styles for the wrapper `View`.                                                |
| `edges`           | `Edges`                      | Safe area edges for `SafeAreaView`.                                                  |
| `scroll`          | `boolean`                    | Enables scrolling with `ScrollView`.                                                 |
| `scrollProps`     | `ScrollViewProps`            | Props for `ScrollView` component.                                                    |
| `fetchRequest`    | `() => void \| undefined`    | Function to handle refresh on `ScrollView` pull-to-refresh.                          |
| `animation`       | `Animation \| CustomAnimation`| Animation type or custom animation object for animated views.                        |
| `duration`        | `number`                     | Duration of animations.                                                              |
| `delay`           | `number`                     | Delay before starting animations.                                                    |
| `direction`       | `Direction`                  | Direction of animations.                                                             |
| `iterationCount`  | `number \| 'infinite'`       | Number of times animation should repeat or `'infinite'`.                             |
| `iterationDelay`  | `number`                     | Delay between animation iterations.                                                  |
| `gradientColors`  | `string[]`                   | Colors for gradient background.                                                      |
| `gradientProps`   | `Omit<LinearGradientProps, 'colors'>` | Props for `LinearGradient` component except `colors`.                                |
| `infinite`        | `boolean \| number`          | Indicates infinite iterations for animations.                                        |
| `style`           | `ViewStyle \| undefined`     | Additional custom styles for the component.                                          |
| `end`             | `boolean`                 | `align-items: flex-end`                                                              |
| `justify`         | `boolean`                 | justify-content                                                                      |
| `justified`       | `boolean`                 | `justify-content: center`                                                            |
| `central`         | `boolean`                 | `justify-content: center; align-items:center`                                        |
| `row`             | `boolean`                 | Sets the flex direction to `row`.                                                    |
| `spaced`          | `boolean`                 | Sets `justify-content` to `space-between`.                                           |
| `spaceEvenly`     | `boolean`                 | Sets `justify-content` to `space-evenly`.                                            |
| `evenly`          | `boolean`                 | Sets `justify-content` to `space-evenly`.                                            |
| `outline`         | `boolean`                 |                                                                                      |
| `aligned`         | `boolean`                 |                                                                                      |
| `absolute`        | `boolean`                 | Sets `position` to `absolute` and fills the container.                               |
| `b`               | `number`                  |                                                                                      |
| `bt`              | `number`                  |                                                                                      |
| `bb`              | `number`                  |                                                                                      |
| `bl`              | `number`                  |                                                                                      |
| `radius`          | `number`                  | Sets `borderRadius`.                                                                 |
| `disabled`        | `boolean`                 |                                                                                      |
| `radiusTR`        | `number`                  | Sets `borderTopRightRadius`.                                                         |
| `radiusTL`        | `number`                  | Sets `borderTopLeftRadius`.                                                          |
| `radiusBL`        | `number`                  | Sets `borderBottomLeftRadius`.                                                       |
| `radiusBR`        | `number`                  | Sets `borderBottomEndRadius`.                                                        |
| `shadow`          | `boolean \| string`       |                                                                                      |
| `minW`            | `number`                  | Sets `minWidth`.                                                                     |
| `minH`            | `number`                  | Sets `minHeight`.                                                                    |
| `btw`             | `number`                  | Sets `borderTopWidth`.                                                               |
| `bbw`             | `number`                  | Sets `borderBottomWidth`.                                                            |
| `blw`             | `number`                  | Sets `borderLeftWidth`.                                                              |
| `brw`             | `number`                  | Sets `borderRightWidth`.                                                             |
| `hr`              | `boolean`                 |                                                                                      |
| `center`          | `boolean`                 | Sets `alignItems` and `justifyContent` to `center`.                                  |
| `maxW`            | `number`                  | Sets `maxWidth`.                                                                     |
| `top`             | `boolean \| number`       | Sets `top`.                                                                          |
| `bottom`          | `boolean \| number`       | Sets `bottom`.                                                                       |
| `right`           | `boolean \| number`       | Sets `right`.                                                                        |
| `left`            | `boolean \| number`       | Sets `left`.                                                                         |
| `zIndex`          | `number`                  | Sets `zIndex`.                                                                       |
| `wrap`            | `boolean`                 | Sets `flexWrap` to `wrap`.                                                           |
| `bs`              | `ViewStyle['borderStyle']`| Sets `borderStyle`.                                                                  |
| `fill`            | `boolean`                 |                                                                                      |
| `overflow`        | `boolean`                 |                                                                                      |
| `color`           | `ColorValue`              | Sets `backgroundColor`.                                                              |
| `bg`              | `ColorValue`              | Sets `backgroundColor`.                                                              |
| `flex`            | `boolean \| number`       | Sets `flex`.                                                                         |
| `opacity`         | `number`                  | Sets `opacity`.                                                                      |
| `pl`              | `DimensionValue`          | Sets `paddingLeft`.                                                                  |
| `p`               | `DimensionValue`          | Sets `padding`.                                                                      |
| `pt`              | `DimensionValue`          | Sets `paddingTop`.                                                                   |
| `pr`              | `DimensionValue`          | Sets `paddingRight`.                                                                 |
| `pb`              | `DimensionValue`          | Sets `paddingBottom`.                                                                |
| `m`               | `DimensionValue`          | Sets `margin`.                                                                       |
| `mr`              | `DimensionValue`          | Sets `marginRight`.                                                                  |
| `ml`              | `DimensionValue`          | Sets `marginLeft`.                                                                   |
| `mt`              | `DimensionValue`          | Sets `marginTop`.                                                                    |
| `mb`              | `DimensionValue`          | Sets `marginBottom`.                                                                 |
| `py`              | `DimensionValue`          | Sets `paddingVertical`.                                                              |
| `px`              | `DimensionValue`          | Sets `paddingHorizontal`.                                                            |
| `my`              | `DimensionValue`          | Sets `marginVertical`.                                                               |
| `mx`              | `DimensionValue`          | Sets `marginHorizontal`.                                                             |
| `dw`              | `number`                  | Sets width as a percentage of screen width.                                          |
| `dh`              | `number`                  | Sets height as a percentage of screen height.                                        |
| `w`               | `DimensionValue \| boolean`| Sets width.                                                                          |
| `h`               | `DimensionValue \| boolean`| Sets height.                                                                         |
| `lh`              | `number`                  | Sets `lineHeight`.                                                                   |
| `ls`              | `number`                  | Sets `letterSpacing`.                                                                |
| `align`           | `ViewStyle['alignItems']` | Sets `alignItems`.                                                                   |
| `transform`       | `ViewStyle['transform']`  | Sets `transform`.                                                                    |
| `br`              | `number`                  | Sets `borderRadius`.                                                                 |
| `bw`              | `number`                  | Sets `borderWidth`.                                                                  |
| `bc`              | `ColorValue`              | Sets `borderColor`.                                                                  |

# Available Animations

This table lists the animations that can be used with the `animation` prop in the `View` component.

| Animation Name         | Description                                              |
|------------------------|----------------------------------------------------------|
| `bounce`               | Bounce animation effect.                                 |
| `flash`                | Flash animation effect.                                  |
| `jello`                | Jello animation effect.                                  |
| `pulse`                | Pulse animation effect.                                  |
| `rotate`               | Rotate animation effect.                                 |
| `rubberBand`           | Rubber band animation effect.                            |
| `shake`                | Shake animation effect.                                  |
| `swing`                | Swing animation effect.                                  |
| `tada`                 | Tada animation effect.                                   |
| `wobble`               | Wobble animation effect.                                 |
| `bounceIn`             | Bounce in animation effect.                              |
| `bounceInDown`         | Bounce in from top animation effect.                     |
| `bounceInUp`           | Bounce in from bottom animation effect.                  |
| `bounceInLeft`         | Bounce in from left animation effect.                    |
| `bounceInRight`        | Bounce in from right animation effect.                   |
| `bounceOut`            | Bounce out animation effect.                             |
| `bounceOutDown`        | Bounce out to top animation effect.                      |
| `bounceOutUp`          | Bounce out to bottom animation effect.                   |
| `bounceOutLeft`        | Bounce out to left animation effect.                     |
| `bounceOutRight`       | Bounce out to right animation effect.                    |
| `fadeIn`               | Fade in animation effect.                                |
| `fadeInDown`           | Fade in from top animation effect.                       |
| `fadeInDownBig`        | Fade in from top with scale animation effect.            |
| `fadeInUp`             | Fade in from bottom animation effect.                    |
| `fadeInUpBig`          | Fade in from bottom with scale animation effect.         |
| `fadeInLeft`           | Fade in from left animation effect.                      |
| `fadeInLeftBig`        | Fade in from left with scale animation effect.           |
| `fadeInRight`          | Fade in from right animation effect.                     |
| `fadeInRightBig`       | Fade in from right with scale animation effect.          |
| `fadeOut`              | Fade out animation effect.                               |
| `fadeOutDown`          | Fade out to top animation effect.                        |
| `fadeOutDownBig`       | Fade out to top with scale animation effect.             |
| `fadeOutUp`            | Fade out to bottom animation effect.                     |
| `fadeOutUpBig`         | Fade out to bottom with scale animation effect.          |
| `fadeOutLeft`          | Fade out to left animation effect.                       |
| `fadeOutLeftBig`       | Fade out to left with scale animation effect.            |
| `fadeOutRight`         | Fade out to right animation effect.                      |
| `fadeOutRightBig`      | Fade out to right with scale animation effect.           |
| `flipInX`              | Flip in horizontally animation effect.                   |
| `flipInY`              | Flip in vertically animation effect.                     |
| `flipOutX`             | Flip out horizontally animation effect.                  |
| `flipOutY`             | Flip out vertically animation effect.                    |
| `lightSpeedIn`         | Light speed in animation effect.                         |
| `lightSpeedOut`        | Light speed out animation effect.                        |
| `slideInDown`          | Slide in from top animation effect.                      |
| `slideInUp`            | Slide in from bottom animation effect.                   |
| `slideInLeft`          | Slide in from left animation effect.                     |
| `slideInRight`         | Slide in from right animation effect.                    |
| `slideOutDown`         | Slide out to top animation effect.                       |
| `slideOutUp`           | Slide out to bottom animation effect.                    |
| `slideOutLeft`         | Slide out to left animation effect.                      |
| `slideOutRight`        | Slide out to right animation effect.                     |
| `zoomIn`               | Zoom in animation effect.                                |
| `zoomInDown`           | Zoom in from top animation effect.                       |
| `zoomInUp`             | Zoom in from bottom animation effect.                    |
| `zoomInLeft`           | Zoom in from left animation effect.                      |
| `zoomInRight`          | Zoom in from right animation effect.                     |
| `zoomOut`              | Zoom out animation effect.                               |
| `zoomOutDown`          | Zoom out to top animation effect.                        |
| `zoomOutUp`            | Zoom out to bottom animation effect.                     |
| `zoomOutLeft`          | Zoom out to left animation effect.                       |
| `zoomOutRight`         | Zoom out to right animation effect.                      |


