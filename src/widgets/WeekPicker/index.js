import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ListView,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import PropTypes from 'prop-types';
import ClickViewItem from './ClickViewItem';

const propTypes = {
  type: PropTypes.string,
  coordinate: PropTypes.object,
  displayData: PropTypes.array,
  onSelectedChanged: PropTypes.func,
  style: PropTypes.object,
};

const defaultProps = {
  type: 'ALL',
  displayData: [],
  coordinate: {
    row: 20,
    column: 7,
  },
  itemStyle: { width: 60, height: 120 },
  onSelectedChanged: () => {},
};

class WeekPicker extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    const data = [];
    const { row, column } = props.coordinate;
    for (let i = 0; i < row * column; i++) {
      data.push({ index: i });
    }
    this.state = {
      defaultState: [],
      type: 0,
      dataSource: data,
      selectedItem: {},
    };
    this._renderRow = this._renderRow.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  clearData() {
    this.setState({ defaultState: [] });
  }

  filterClickData(x, y, rangeData, type) {
    // return Array
    const flag = false; // 标记是否包含已选择的区块
    const range = rangeData;
    //* ******判断是否为第一次点击 */

    if (
      (type === 'ROW' && y !== range.start.y) ||
      (type === 'COLUMN' && x !== range.start.x)
    ) {
      return [this.getCurrentClickItem(x, y)];
    }

    // if (type === 'ROW') {
    //   if (y !== range.start.y) {
    //     return [this.getCurrentClickItem(x, y)];
    //   }
    // }
    //
    // if (type === 'COLUMN') {
    //   if (x !== range.start.x) {
    //     return [this.getCurrentClickItem(x, y)];
    //   }
    // }

    // if (type === 'ALL') {
    if (x < range.start.x) {
      range.start.x = x;
    } else {
      range.end.x = x + 1;
    }

    if (y < range.start.y) {
      range.start.y = y;
    } else {
      range.end.y = y + 1;
    }
    // }

    if (type === 'CALENDAR') {
    }

    return [range];
  }

  filterData(aRange, bRanges) {
    const aStartX = aRange.start.x;
    const aStartY = aRange.start.y;

    const aEndX = aRange.end.x;
    const aEndY = aRange.end.y;

    for (let i = 0; i < bRanges.length; i++) {
      const bStartX = bRanges[i].start.x;
      const bStartY = bRanges[i].start.y;

      const bEndX = bRanges[i].end.x;
      const bEndY = bRanges[i].end.y;

      if (
        !(
          aEndX <= bStartX ||
          aStartX >= bEndX ||
          aEndY <= bStartY ||
          aStartY >= bEndY
        )
      ) {
        return false;
      }
    }
    return true;
  }

  getCurrentClickItem(x, y) {
    return {
      start: {
        x,
        y,
      },
      end: {
        x: x + 1,
        y: y + 1,
      },
    };
  }

  onSelectedChanged(result) {
    const returnData = this.props.onSelectedChanged(result[0]);
    this.setState({
      defaultState: result,
      selectedItem: returnData,
    });
  }

  onPress(rowID) {
    const index = parseInt(rowID);
    const { column } = this.props.coordinate;
    const y = parseInt(index / column);
    const x = index % column;
    let result;
    const range = this.state.defaultState[0];
    if (!range) {
      result = [this.getCurrentClickItem(x, y)];
    } else {
      result = this.filterClickData(x, y, range, this.props.type);
    }
    const mergeProps = this.filterData(result[0], this.props.displayData);
    if (!mergeProps) {
      this.onSelectedChanged([this.getCurrentClickItem(x, y)]);
      return;
    }
    const mergeState = this.filterData(result[0], this.state.defaultState);
    if (!mergeState) {
    }
    this.onSelectedChanged(result);
  }

  _renderRow({ item, index, rowID }) {
    // rowData = {}, sectionID, rowID
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.onPress.bind(this, rowID)}
      >
        <View
          style={{
            height: this.props.itemStyle.height,
            width: this.props.itemStyle.width,
          }}
        >
          <View style={styles.rowView}>
            <View style={styles.textView}>
              <Text>{rowID}</Text>
            </View>
            <View
              style={[styles.lineView, { height: this.props.itemStyle.height }]}
            />
          </View>
          <View style={styles.line2View} />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { row, column } = this.props.coordinate;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View
          style={[
            styles.lineStyle,
            {
              height: row * this.props.itemStyle.height,
            },
          ]}
        />
        <View>
          <View
            style={[
              styles.line2Style,
              { width: column * this.props.itemStyle.width },
            ]}
          />
          <View
            style={[
              styles.container,
              {
                width: column * this.props.itemStyle.width,
                height: row * this.props.itemStyle.height,
              },
            ]}
          >
            <FlatList
              ref={(o) => {
                this.listView = o;
              }}
              data={this.state.dataSource}
              contentContainerStyle={styles.listStyle}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={false}
              iosalwaysBounceHorizontal={false}
              initialListSize={row * column}
              renderItem={this._renderRow}
            />

            {this.props.displayData.map((data, index) => (
              <ClickViewItem
                key={`clickItem${index}`}
                style={{
                  left: data.start.x * this.props.itemStyle.width,
                  top: data.start.y * this.props.itemStyle.height,
                  height:
                    (data.end.y - data.start.y) * this.props.itemStyle.height,
                  width:
                    (data.end.x - data.start.x) * this.props.itemStyle.width,
                  backgroundColor: '#ffe66f',
                }}
                disabled
                title={data.title}
                subTitle={data.subTitle}
              />
            ))}
            {this.state.defaultState.map((data, index) => (
              <ClickViewItem
                key={`click2Item${index}`}
                style={{
                  left: data.start.x * this.props.itemStyle.width,
                  top: data.start.y * this.props.itemStyle.height,
                  height:
                    (data.end.y - data.start.y) * this.props.itemStyle.height,
                  width:
                    (data.end.x - data.start.x) * this.props.itemStyle.width,
                }}
                disabled={false}
                clearData={this.clearData}
                title={this.state.selectedItem && this.state.selectedItem.title}
                subTitle={
                  this.state.selectedItem && this.state.selectedItem.subTitle
                }
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineStyle: {
    width: 1,
    backgroundColor: '#000000',
  },
  line2Style: {
    height: 1,
    backgroundColor: '#000000',
  },
  listStyle: {
    flexDirection: 'row', // 改变ListView的主轴方向
    flexWrap: 'wrap', // 换行
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineView: {
    width: 1,
    backgroundColor: '#000000',
  },
  line2View: {
    height: 1,
    backgroundColor: '#000000',
  },
});

export default WeekPicker;
