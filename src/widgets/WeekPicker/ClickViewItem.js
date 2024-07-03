import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ClickViewItem extends Component {
  render() {
    const { style, clearData, disabled, title, subTitle } = this.props;
    const deepStyle = JSON.parse(JSON.stringify(style));
    delete deepStyle.backgroundColor;
    return (
      <TouchableOpacity
        style={[styles.container, deepStyle]}
        activeOpacity={1}
        onPress={clearData}
        disabled={disabled}
      >
        <View
          style={[
            styles.view,
            { backgroundColor: style.backgroundColor || '#00ffff' },
          ]}
        >
          <Text style={{ fontSize: 14 }}>{title}</Text>
          <Text style={{ fontSize: 12 }}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 4,
    padding: 4,
  },
  view: {
    flex: 1,
    backgroundColor: '#00ffff',
    padding: 2,
  },
});

export default ClickViewItem;
