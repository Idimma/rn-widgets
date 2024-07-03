import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Text from './Text';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  tabHeader: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selectedTab: {
    borderBottomWidth: 3,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabContent: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(14),
  },
});

const Tabs: React.FC<{
  selectedTab: number;
  children: React.ReactElement[];
}> = ({ children, selectedTab = 0 }) => {
  const [currentTab, setCurrentTab] = useState(selectedTab);

  const renderTabHeader = () =>
    React.Children.map(children, (child, index) => (
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => setCurrentTab(index)}
      >
        <View style={styles.tabContent}>
          <Text ff={currentTab === index ? 'medium' : 'regular'} color="white">
            {child.props.label}
          </Text>
          {currentTab === index && <View style={styles.selectedTab} />}
        </View>
      </TouchableOpacity>
    ));

  return (
    <>
      <View>
        <ScrollView
          contentContainerStyle={styles.tabHeader}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {renderTabHeader()}
        </ScrollView>
      </View>
      {children[currentTab]}
    </>
  );
};

export default Tabs;
