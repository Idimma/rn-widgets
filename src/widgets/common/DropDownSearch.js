import React, { Component } from 'react';
import {
  FlatList,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../components/Text';


export default class SearchableDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      listItems: [],
      focus: false,
    };
  }

  renderFlatList = () => {
    if (this.state.focus) {
      const flatListPorps = { ...this.props.listProps };
      const oldSupport = [
        {
          key: 'keyboardShouldPersistTaps',
          val: 'always',
        },
        // {key: 'nestedScrollEnabled', val: false},
        {
          key: 'style',
          val: { ...this.props.itemsContainerStyle },
        },
        {
          key: 'data',
          val: this.props.items,
        },
        {
          key: 'keyExtractor',
          val: (item, index) => index.toString(),
        },
        {
          key: 'renderItem',
          val: ({ item, index }) => this.renderItems(item, index),
        },
      ];
      oldSupport.forEach((kv) => {
        if (!Object.keys(flatListPorps).includes(kv.key)) {
          flatListPorps[kv.key] = kv.val;
        } else {
          if (kv.key === 'style') {
            flatListPorps.style = kv.val;
          }
        }
      });
      return <FlatList {...flatListPorps} />;
    }
  };

  searchedItems = (searchedText = '') => {
    const onTextChange =
      this.props.onTextChange ||
      this.props.textInputProps.onTextChange ||
      this.props.onChangeText ||
      this.props.textInputProps.onChangeText;
    if (onTextChange && typeof onTextChange === 'function') {
      setTimeout(() => onTextChange(searchedText), 0);
    }
    this.setState({ focus: searchedText.length > 3 });
  };

  renderItems = (item) => {
    const { indexName } = this.props;
    return (
      <TouchableOpacity
        style={{ ...this.props.itemStyle }}
        onPress={() => {
          this.setState({ item: item, focus: false });
          this.props.onItemSelect(item);
          Keyboard.dismiss();
        }}
      >
        <Text gray style={{ ...this.props.itemTextStyle }}>
          {item[indexName || 'name']}
        </Text>
      </TouchableOpacity>
    );
  };

  renderListType = () => {
    return this.renderFlatList();
  };

  renderTextInput = () => {
    const { indexName } = this.props;
    const textInputProps = { ...this.props.textInputProps };
    const oldSupport = [
      {
        key: 'ref',
        val: (e) => (this.input = e),
      },
      {
        key: 'onTextChange',
        val: (text) => {
          this.searchedItems(text);
        },
      },
      {
        key: 'underlineColorAndroid',
        val: this.props.underlineColorAndroid,
      },
      {
        key: 'onFocus',
        val: () => {},
      },
      {
        key: 'onBlur',
        val: () => {
          this.props.onBlur && this.props.onBlur();
        },
      },
      {
        key: 'value',
        val: this.state.item[indexName || 'name'],
      },
      {
        key: 'style',
        val: { ...this.props.textInputStyle },
      },
      {
        key: 'placeholderTextColor',
        val: this.props.placeholderTextColor,
      },
      {
        key: 'placeholder',
        val: this.props.placeholder,
      },
    ];
    oldSupport.forEach((kv) => {
      if (!Object.keys(textInputProps).includes(kv.key)) {
        if (kv.key === 'onTextChange' || kv.key === 'onChangeText') {
          textInputProps.onChangeText = kv.val;
        } else {
          textInputProps[kv.key] = kv.val;
        }
      } else {
        if (kv.key === 'onTextChange' || kv.key === 'onChangeText') {
          textInputProps.onChangeText = kv.val;
        }
      }
    });
    return <TextInput {...textInputProps} />;
  };

  render = () => {
    return (
      <View
        keyboardShouldPersist="always"
        style={{ ...this.props.containerStyle }}
      >
        {this.renderSelectedItems()}
        {this.renderTextInput()}
        {this.renderListType()}
      </View>
    );
  };

  renderSelectedItems() {
    let items = this.props.selectedItems;
    if (
      items !== undefined &&
      items.length > 0 &&
      this.props.chip &&
      this.props.multi
    ) {
      return (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: 10,
            marginTop: 5,
          }}
        >
          {items.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: item.name.length * 8 + 60,
                  justifyContent: 'center',
                  flex: 0,
                  backgroundColor: '#eee',
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 5,
                  padding: 8,
                  borderRadius: 15,
                }}
              >
                <Text style={{ color: '#555' }}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() =>
                    setTimeout(() => {
                      this.props.onRemoveItem(item, index);
                    }, 0)
                  }
                  style={{
                    backgroundColor: '#f16d6b',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    marginLeft: 10,
                  }}
                >
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      );
    }
  }
}
