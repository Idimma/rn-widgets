import * as React from 'react';
//@ts-ignore
import { Pressable, View, Text, Image, WidgetProvider } from '@idimma/rn-widget';

export default function App() {
  return (
    <View flex safe>
      <View flex scroll gap={20} px={20}>
        <View gap={10}>
          <Text red h1>Simple Text H1</Text>
          <Text orange h2>Simple Text H2</Text>
          <Text yellow h3>Simple Text H3</Text>
          <Text green h4>Simple Text H4</Text>
          <Text blue h5>Simple Text H5</Text>
          <Text indigo h6>Simple Text H6</Text>
          <Text violet article>Simple Text Article</Text>
          <Text primary>Simple Text Normal</Text>
        </View>

        <View animated row wrap mb={10}  gap={10} fadeIn delay={0.8}>
          <View flex>
            <Image random w={'100%'} radius={10} shadow h={250} cover />
          </View>
          <View flex gap={7} h={250}>
            <Image random radius={5} shadow flex cover />
            <View row gap={5}>
              <Image random flex radius={3} shadow h={100} cover />
              <Image random flex radius={3} shadow h={100} cover />
            </View>
          </View>
        </View>


        <View row aligned >
          <Pressable center px={20} py={10} radius={20} orange>
            <Text white fs={16} fw={'700'} >Hello</Text>
          </Pressable>

        </View>

      </View>
    </View>
  );
}
