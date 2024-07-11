import React from 'react';
import { default as Text } from './Text';
import { default as Touch } from './Touch';
import { THEME_COLORS } from '../helper';

const Button = ({
  onPress,
  gradient = false,
  fs = 16,
  children,
  style,
  c,
  wrapperStyle = { borderRadius: 50, borderWidth: 2, borderColor: THEME_COLORS.primary },
  title,
  ...props
}: any) => {
  const btnSty = [style];
  if (c)
    btnSty.push({
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    });
  if (gradient)
    return (
      <Touch
        center
        bw={3}
        onPress={onPress}
        primary
        h={64}
        radius={40}
        mb={20}
        gradient
        outline
        {...props}
      >
        {title ? (
          <Text fs={14} lh={20} white medium>
            {title}
          </Text>
        ) : (
          children
        )}
      </Touch>
    );
  return (
    <Touch
      onPress={onPress}
      radius={8}
      center
      py={17}
      style={btnSty}
      {...props}
    >
      {title ? (
        <Text fs={fs} lh={20} fw={600} white>
          {title}
        </Text>
      ) : (
        children
      )}
    </Touch>
  );
};

export default Button;
