# Text Component Props

## Props Table

| Prop               | Type                            | Description                                                                                                             | Default     |
|--------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------|-------------|
| `show`             | `boolean`                       | If set to `false`, the text component will not render.                                                                  | `true`      |
| `hide`             | `boolean`                       | If set to `true`, the text component will not render.                                                                   | `false`     |
| `nl`               | `number`                        | Sets the `numberOfLines` prop of the `RNText` component. Limits the number of lines the text can span.                  | `undefined` |
| `numberOfLines`    | `number`                        | Sets the `numberOfLines` prop of the `RNText` component. This will be overridden by `nl` if `nl` is provided.           | `undefined` |
| `style`            | `TextStyle`                     | Custom styles to apply to the text component. The styles are processed by the `flattenStyle` function.                  | `undefined` |
| `info`             | `boolean`                       | Applies the "info" style to the text.                                                                                   | `undefined` |
| `white`            | `boolean`                       | Applies the "white" style to the text.                                                                                  | `undefined` |
| `primary`          | `boolean`                       | Applies the "primary" style to the text.                                                                                | `undefined` |
| `warning`          | `boolean`                       | Applies the "warning" style to the text.                                                                                | `undefined` |
| `danger`           | `boolean`                       | Applies the "danger" style to the text.                                                                                 | `undefined` |
| `orange`           | `boolean`                       | Applies the "orange" style to the text.                                                                                 | `undefined` |
| `black`            | `boolean`                       | Applies the "black" style to the text.                                                                                  | `undefined` |
| `transparent`      | `boolean`                       | Applies the "transparent" style to the text.                                                                            | `undefined` |
| `red`              | `boolean`                       | Applies the "red" style to the text.                                                                                    | `undefined` |
| `success`          | `boolean`                       | Applies the "success" style to the text.                                                                                | `undefined` |
| `gray`             | `boolean`                       | Applies the "gray" style to the text.                                                                                   | `undefined` |
| `grey`             | `boolean`                       | Applies the "grey" style to the text.                                                                                   | `undefined` |
| `bold`             | `boolean`                       | Applies the "bold" style to the text.                                                                                   | `undefined` |
| `medium`           | `boolean`                       | Applies the "medium" style to the text.                                                                                 | `undefined` |
| `light`            | `boolean`                       | Applies the "light" style to the text.                                                                                  | `undefined` |
| `thin`             | `boolean`                       | Applies the "thin" style to the text.                                                                                   | `undefined` |
| `heavy`            | `boolean`                       | Applies the "heavy" style to the text.                                                                                  | `undefined` |
| `italic`           | `boolean`                       | Applies the "italic" style to the text.                                                                                 | `undefined` |
| `title`            | `boolean`                       | Applies the "title" style to the text.                                                                                  | `undefined` |
| `center`           | `boolean`                       | Centers the text horizontally.                                                                                          | `undefined` |
| `selfEnd`          | `boolean`                       | Aligns the text to the end of its container.                                                                            | `undefined` |
| `capitalize`       | `boolean`                       | Capitalizes the text.                                                                                                   | `undefined` |
| `lowercase`        | `boolean`                       | Converts the text to lowercase.                                                                                         | `undefined` |
| `uppercase`        | `boolean`                       | Converts the text to uppercase.                                                                                         | `undefined` |
| `ifp`              | `boolean`                       | Custom flag for internal use.                                                                                           | `undefined` |
| `color`            | `ColorValue`                    | Sets the text color.                                                                                                    | `undefined` |
| `bg`               | `ColorValue`                    | Sets the background color.                                                                                              | `undefined` |
| `flex`             | `boolean \| number`             | Sets the flex property.                                                                                                 | `undefined` |
| `fs`               | `number`                        | Sets the font size.                                                                                                     | `undefined` |
| `fw`               | `TextStyle['fontWeight']`       | Sets the font weight.                                                                                                   | `undefined` |
| `opacity`          | `number`                        | Sets the opacity.                                                                                                       | `undefined` |
| `pl`               | `DimensionValue`                | Sets the padding-left.                                                                                                  | `undefined` |
| `p`                | `DimensionValue`                | Sets the padding.                                                                                                       | `undefined` |
| `pt`               | `DimensionValue`                | Sets the padding-top.                                                                                                   | `undefined` |
| `pr`               | `DimensionValue`                | Sets the padding-right.                                                                                                 | `undefined` |
| `pb`               | `DimensionValue`                | Sets the padding-bottom.                                                                                                | `undefined` |
| `m`                | `DimensionValue`                | Sets the margin.                                                                                                        | `undefined` |
| `mr`               | `DimensionValue`                | Sets the margin-right.                                                                                                  | `undefined` |
| `ml`               | `DimensionValue`                | Sets the margin-left.                                                                                                   | `undefined` |
| `mt`               | `DimensionValue`                | Sets the margin-top.                                                                                                    | `undefined` |
| `mb`               | `DimensionValue`                | Sets the margin-bottom.                                                                                                 | `undefined` |
| `py`               | `DimensionValue`                | Sets the vertical padding.                                                                                              | `undefined` |
| `px`               | `DimensionValue`                | Sets the horizontal padding.                                                                                            | `undefined` |
| `my`               | `DimensionValue`                | Sets the vertical margin.                                                                                               | `undefined` |
| `mx`               | `DimensionValue`                | Sets the horizontal margin.                                                                                             | `undefined` |
| `dw`               | `number`                        | Sets the width as a percentage of the device width.                                                                     | `undefined` |
| `dh`               | `number`                        | Sets the height as a percentage of the device height.                                                                   | `undefined` |
| `w`                | `DimensionValue \| boolean`     | Sets the width.                                                                                                         | `undefined` |
| `h`                | `DimensionValue \| boolean`     | Sets the height.                                                                                                        | `undefined` |
| `lh`               | `number`                        | Sets the line height.                                                                                                   | `undefined` |
| `ls`               | `number`                        | Sets the letter spacing.                                                                                                | `undefined` |
| `align`            | `TextStyle['textAlign']`        | Sets the text alignment.                                                                                                | `undefined` |
| `transform`        | `TextStyle['textTransform']`    | Sets the text transformation.                                                                                           | `undefined` |
| `br`               | `number`                        | Sets the border radius.                                                                                                 | `undefined` |
| `bw`               | `number`                        | Sets the border width.                                                                                                  | `undefined` |
| `bc`               | `ColorValue`                    | Sets the border color.                                                                                                  | `undefined` |
| `shadowColor`      | `ColorValue`                    | Sets the shadow color.                                                                                                  | `undefined` |
| `shadowOffset`     | `{ width: number; height: number }` | Sets the shadow offset.                                                                                                | `undefined` |
| `shadowOpacity`    | `number`                        | Sets the shadow opacity.                                                                                                | `undefined` |
| `shadowRadius`     | `number`                        | Sets the shadow radius.                                                                                                 | `undefined` |
| `td`               | `TextStyle['textDecorationLine']`| Sets the text decoration line.                                                                                          | `undefined` |
| `tds`              | `TextStyle['textDecorationStyle']`| Sets the text decoration style.                                                                                        | `undefined` |
| `tdc`              | `ColorValue`                    | Sets the text decoration color.                                                                                         | `undefined` |
| `writingDirection` | `'auto' \| 'ltr' \| 'rtl'`      | Sets the writing direction.                                                                                             | `undefined` |
| `ff`               | `'medium' \| 'regular' \| 'bold' \| 'light' \| 'italic' \| 'heavy'` | Sets the font family.                                                           | `undefined` |
| `textShadowColor`  | `ColorValue`                    | Sets the text shadow color.                                                                                             | `undefined` |
| `textShadowOffset` | `{ width: number; height: number }` | Sets the text shadow offset.                                                                                           | `undefined` |
| `textShadowRadius` | `number`                        | Sets the text shadow radius.                                                                                            | `undefined` |
| `tav`              | `TextStyle['textAlignVertical']`| Sets the vertical text alignment.                                                                                       | `undefined` |
| `fontVariant`      | `TextStyle['fontVariant']`      | Sets the font variant.                                                                                                  | `undefined` |
