## Image Component

The `Image` component in this project is designed for displaying images in React Native applications with enhanced functionality and versatility.

### Functionality

1. **Source Handling:**
   Manages image sources dynamically, supporting random image generation (`random`) and fallback images (`fallback`) in case of loading errors.

2. **Loading Indicators:**
   Displays an `ActivityIndicator` while images are being fetched, providing visual feedback to users.

3. **Resize Options:**
   Supports various resizing modes (`contain`, `stretch`, `center`, `cover`) to control how images are fitted within their containers, ensuring optimal display across different screen sizes.

4. **Error Handling:**
   Implements error handling with an `onHandleError` callback, allowing customization of actions taken upon image loading failures.

5. **Lightbox Integration:**
   Optionally wraps images in a `Lightbox` component (`lightbox` prop), enabling zoom-in functionality for a closer view of images.

The `Image` component encapsulates these functionalities, making it a robust tool for managing and displaying images with added features and performance optimizations in React Native applications.

## Available Props
### Image Component Prop Table

| Prop                   | Type                           | Description                                                                                                                                                                |
|------------------------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `resizeMode`           | `string`                       | Determines how the image should be resized to fit its container. Possible values: `cover`, `contain`, `stretch`, `center`.                                                |
| `defaultSource`        | `ImageSourcePropType`          | A fallback source to be displayed while the image is loading or in case of an error. Typically requires an object with a `uri` key for remote images.                   |
| `loadingIndicatorSource`| `React.ReactElement`           | Custom loading indicator component to be displayed while the image is loading.                                                                                              |
| `contain`              | `boolean`                      | If true, the image fits within the container dimensions while preserving aspect ratio.                                                                                    |
| `stretch`              | `boolean`                      | If true, the image stretches to fill the container dimensions, potentially distorting its aspect ratio.                                                                    |
| `showLoader`           | `boolean`                      | Determines if an `ActivityIndicator` should be displayed while the image is loading.                                                                                       |
| `cover`                | `boolean`                      | If true, the image covers the container dimensions, potentially clipping parts of the image to fit.                                                                        |
| `center`               | `boolean`                      | If true, centers the image within the container dimensions.                                                                                                                |
| `loadingColor`         | `string`                       | Specifies the color of the `ActivityIndicator` while the image is loading. Default is `THEME_COLORS.primary`.                                                             |
| `source`               | `object` (required)            | The source of the image. Can be a URI (including local paths), or an object with a `uri` key for remote images.                                                           |
| `show`                 | `boolean`                      | Controls the visibility of the image component. If `false`, the component will not render.                                                                                 |
| `random`               | `boolean`                      | If true, generates a random image source (`https://loremflickr.com/640/480/people`) when `source` is not defined.                                                         |
| `hide`                 | `boolean`                      | If true, hides the image component.                                                                                                                                         |
| `fallback`             | `any`                          | Fallback content or source to be used when the main `source` fails to load.                                                                                                |
| `onHandleError`        | `(error: any, setUrl: (source: any) => void) => void` | Callback function invoked when there's an error loading the image, allowing for custom error handling and source updating.                                        |
| `lightbox`             | `boolean`                      | If true, wraps the image in a `Lightbox` component for zooming and fullscreen viewing capabilities.                                                                        |
| `lightboxProps`        | `object`                       | Props to be passed to the `Lightbox` component if `lightbox` is enabled.                                                                                                   |
| `borderRadius`         | `number`                       | Specifies the border radius of the image component.                                                                                                                        |
| `h`                    | `DimensionValue` or `boolean`  | Height of the image component. Can be a number for pixels or a string for percentage (`'50%'`). If `true`, sets height to `'100%'`.                                      |
| `w`                    | `DimensionValue` or `boolean`  | Width of the image component. Can be a number for pixels or a string for percentage (`'50%'`). If `true`, sets width to `'100%'`.                                        |
| `p`                    | `DimensionValue`               | Padding for the image component. Accepts a number for pixels or a string for percentage (`'5%'`).                                                                          |
| `m`                    | `DimensionValue`               | Margin for the image component. Accepts a number for pixels or a string for percentage (`'5%'`).                                                                           |



## Other Props
| Prop Name         | Type                         | Description                                                                          |
|-------------------|------------------------------|--------------------------------------------------------------------------------------|
| `show`            | `boolean`                    | Controls the visibility of the component.                                            |
| `hide`            | `boolean`                    | Controls the visibility of the component (opposite of `show`).                       |
| `flex`            | `number \| boolean`          | Sets `flex` property for layout.                                                     |
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
| `maxW`            | `number`                  | Sets `maxWidth`.                                                                     |
| `top`             | `boolean \| number`       | Sets `top`.                                                                          |
| `bottom`          | `boolean \| number`       | Sets `bottom`.                                                                       |
| `right`           | `boolean \| number`       | Sets `right`.                                                                        |
| `left`            | `boolean \| number`       | Sets `left`.                                                                         |
| `zIndex`          | `number`                  | Sets `zIndex`.                                                                       |
| `wrap`            | `boolean`                 | Sets `flexWrap` to `wrap`.                                                           |
| `bs`              | `ViewStyle['borderStyle']`| Sets `borderStyle`.                                                                  |
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
| `br`              | `number`                  | Sets `borderRadius`.                                                                 |
| `bw`              | `number`                  | Sets `borderWidth`.                                                                  |
| `bc`              | `ColorValue`              | Sets `borderColor`.                                                                  |



