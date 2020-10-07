import styled, { StyledComponent } from '@emotion/styled';

// @ts-ignore
import { COLORS } from '../../colors';

const fontSize = (size?: 'small' | 'large'): string => {
  const map = {
    small: '12px',
    large: '16px',
  };

  return size ? map[size] : '14px';
};

const backgroundColor = (color: string): string => {
  const map: { [index: string]: string } = {
    gray: COLORS.LIGHT_GRAY,
    green: COLORS.GREEN,
    darkGray: COLORS.DARK_GRAY,
    darkBlue: COLORS.DARK_BLUE,
    red: COLORS.RED,
  };

  return map[color] || COLORS.GREEN;
};

interface Props {
  size?: 'small' | 'large';
}

export const Button: StyledComponent<Props, any, any> = styled.button`
  color: white;
  border: none;
  line-height: 16px;
  padding: 16px 28px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  font-size: ${({ size }) => fontSize(size)};
  background-color: ${({ variant }) => backgroundColor(variant)};
`;
