import * as React from 'react';
//@ts-ignore
import { multiply, View, Text, Image, WidgetProvider } from '@idimma/rn-widget';

export default function App() {

  return (
    <View flex safe>
      <View flex scroll>
        <View gap={10} px={25} py={20}>
          <Text h1>Simple Text H1</Text>
          <Text h2>Simple Text H2</Text>
          <Text h3>Simple Text H3</Text>
          <Text h4>Simple Text H4</Text>
          <Text h5>Simple Text H5</Text>
          <Text h6>Simple Text H6</Text>
          <Text article>Simple Text Article</Text>
          <Text >Simple Text Normal</Text>
        </View>


        <View animated mb={10} gap={10} fadeIn delay={0.8}>
          <Image random w={300} radius={10} shadow h={200} cover />
          <Image random w={300} radius={10} shadow h={200} cover />
          <Image random w={300} radius={10} shadow h={200} cover />
        </View>

      </View>
    </View>
  );
}
