# Colors

## Available Colors

This document outlines the available color properties that can be applied to the Text component. Each color has a corresponding prop name and a default value.

| Prop Name          | Default Value        |
|--------------------|----------------------|
| `primary`          | `#3B82F6`            |
| `secondary`        | `#233C8B`            |
| `primaryText`      | `#07222C`            |
| `secondaryText`    | `#030E12`            |
| `plain`            | `#ffffff`            |
| `background`       | `#F2F5F7`            |
| `inputBackground`  | `#F9F9FA`            |
| `error`            | `#F15223`            |
| `success`          | `#2D9E64`            |
| `warning`          | `#FFAA1B`            |
| `danger`           | `#EF4444`            |
| `borderColor`      | `rgba(173,172,170, 0.6)` |
| `grey`             | `rgba(3, 14, 18, 0.4)`   |
| `info`             | `#0ea5e9`            |
| `light`            | `#d1d5db`            |
| `dark`             | `#111827`            |
| `black`            | `#000000`            |
| `amethyst`         | `#9966CC`            |
| `apricot`          | `#FBCEB1`            |
| `aqua`             | `#00FFFF`            |
| `azure`            | `#007FFF`            |
| `babyBlue`         | `#89CFF0`            |
| `banana`           | `#FFE135`            |
| `basil`            | `#5B7734`            |
| `beige`            | `#F5F5DC`            |
| `bittersweet`      | `#FE6F5E`            |
| `blue`             | `#1D3557`            |
| `blush`            | `#DE5D83`            |
| `brick`            | `#CB4154`            |
| `bronze`           | `#CD7F32`            |
| `brown`            | `#8D6E63`            |
| `carmine`          | `#960018`            |
| `chartreuse`       | `#7FFF00`            |
| `chocolate`        | `#D2691E`            |
| `cinnamon`         | `#D2691E`            |
| `cobalt`           | `#0047AB`            |
| `coffee`           | `#6F4E37`            |
| `coral`            | `#FF7F50`            |
| `cream`            | `#FFFDD0`            |
| `crimson`          | `#DC143C`            |
| `cyan`             | `#00FFFF`            |
| `denim`            | `#1560BD`            |
| `emerald`          | `#50C878`            |
| `flax`             | `#EEDC82`            |
| `forestGreen`      | `#228B22`            |
| `frostbite`        | `#E936A7`            |
| `fuchsia`          | `#FF00FF`            |
| `ginger`           | `#B06500`            |
| `glacierBlue`      | `#68A0B0`            |
| `gold`             | `#FFD700`            |
| `gray`             | `#9E9E9E`            |
| `green`            | `#2D9E64`            |
| `harlequin`        | `#3FFF00`            |
| `honey`            | `#FFB300`            |
| `indigo`           | `#4B0082`            |
| `iris`             | `#5A4FCF`            |
| `ivory`            | `#FFFFF0`            |
| `jade`             | `#00A86B`            |
| `jungleGreen`      | `#29AB87`            |
| `khaki`            | `#F0E68C`            |
| `lavender`         | `#E6E6FA`            |
| `lemon`            | `#FFF700`            |
| `lightBlack`       | `#333333`            |
| `lilac`            | `#C8A2C8`            |
| `lime`             | `#00FF00`            |
| `magenta`          | `#FF00FF`            |
| `maize`            | `#FBEC5D`            |
| `maroon`           | `#800000`            |
| `mint`             | `#98FF98`            |
| `mulberry`         | `#C54B8C`            |
| `navy`             | `#000080`            |
| `neonGreen`        | `#39FF14`            |
| `ochre`            | `#CC7722`            |
| `offWhite`         | `#F8F8F8`            |
| `olive`            | `#808000`            |
| `orange`           | `#E76F51`            |
| `orchid`           | `#DA70D6`            |
| `papaya`           | `#FFEFD5`            |
| `peach`            | `#FFE5B4`            |
| `pear`             | `#D1E231`            |
| `periwinkle`       | `#CCCCFF`            |
| `pineGreen`        | `#01796F`            |
| `pink`             | `#F2A1B3`            |
| `plum`             | `#DDA0DD`            |
| `purple`           | `#6A0572`            |
| `raspberry`        | `#E30B5C`            |
| `red`              | `#E63946`            |
| `rose`             | `#FF007F`            |
| `ruby`             | `#E0115F`            |
| `saffron`          | `#F4C430`            |
| `salmon`           | `#FA8072`            |
| `sapphire`         | `#0F52BA`            |
| `scarlet`          | `#FF2400`            |
| `seaGreen`         | `#2E8B57`            |
| `sepia`            | `#704214`            |
| `sienna`           | `#A0522D`            |
| `silver`           | `#C0C0C0`            |
| `slateBlue`        | `#6A5ACD`            |
| `tan`              | `#D2B48C`            |
| `tangerine`        | `#F28500`            |
| `teal`             | `#008080`            |
| `thistle`          | `#D8BFD8`            |
| `tomato`           | `#FF6347`            |
| `turquoise`        | `#40E0D0`            |
| `ultramarine`      | `#3F00FF`            |
| `vermilion`        | `#E34234`            |
| `violet`           | `#EE82EE`            |
| `white`            | `#FFFFFF`            |
| `wine`             | `#722F37`            |
| `xanadu`           | `#738678`            |
| `yaleBlue`         | `#0F4D92`            |
| `yellow`           | `#F4A261`            |
| `zinnia`           | `#FFFFFF`            |


## Usage

```js
import { View } from '@idimma/rn-widget';

<View
  flex={1}
  black
  p={10}
  m={5}
>
  {/* Your content here */}
</View>
```

```js
import { Text } from '@idimma/rn-widget';

<Text
  blue
  fs={16}
  fw="bold"
  center //Align text to center
>
  Hello, World!
</Text>
```


# Custom Color Props
| Prop Name    | Default Value  |
|--------------|----------------|
| `cl_custom1` | `User Defined` |
| `cl_anyname` | `User Defined`       |


## Custom Color Usage

```js
import { View } from '@idimma/rn-widget';

<View
  flex={1}
  cl_custom1
  p={10}
  m={5}

>
  {/* Your content here */}
</View>
```

```js
import { Text } from '@idimma/rn-widget';

<Text
  cl_anyname
  fs={16}
  fw="bold"
  center //Align text to center
>
  Hello, World!
</Text>
```
