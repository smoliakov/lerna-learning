import styled, { StyledComponent } from '@emotion/styled';

const fontSize = (variant: 'small' | 'large') => {
  const map = {
    small: '12px',
    large: '16px',
  };

  return map[variant] || '14px';
};

interface Props {
  variant: 'small' | 'large';
}

export const Button: StyledComponent<Props, any, any> = styled.button`
  border: none;
  background-color: lightseagreen;
  color: white;
  font-size: ${({ variant }) => fontSize(variant)};
`;
