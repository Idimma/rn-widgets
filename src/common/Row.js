import React from 'react';
import { View } from 'react-native';

export class Row extends React.Component {
  render() {
    return (
      <View
        {...this.props}
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: this.props.justify
              ? 'space-between'
              : this.props.center
                ? 'center'
                : this.props.evenly
                  ? 'space-evenly'
                  : 'flex-start',
          },
          this.props.style,
        ]}
      />
    );
  }
}
