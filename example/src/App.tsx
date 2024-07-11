import * as React from 'react';
//@ts-ignore
import { multiply, View, Text, Image, WidgetProvider } from '@idimma/rn-widget';

export default function App() {

  return (
    <View flex center>
      <View animated mb={10} gap={10} fadeIn delay={0.8}>
        <Image random w={300} radius={10} shadow h={200} cover />
        <Image random w={300} radius={10} shadow h={200} cover />
        <Image random w={300} radius={10} shadow h={200} cover />
      </View>
      <Text h4>Simple Text</Text>

    </View>
  );
}
