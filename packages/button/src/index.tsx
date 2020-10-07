import * as React from 'react';

import * as Styled from './styled';

export interface ButtonProps {
  size?: 'small' | 'large';
  variant?: 'gray' | 'green' | 'darkGray' | 'darkBlue' | 'red';
  htmlType?: 'reset' | 'submit' | 'button';
}

type Props = React.PropsWithChildren<ButtonProps>;

const Button: React.FC<Props> = (props: Props) => {
  const {
    size,
    htmlType,
    variant,
    children,
  } = props;

  return (
    <Styled.Button variant={variant} type={htmlType} size={size}>
      {children}
    </Styled.Button>
  );
};

Button.defaultProps = {
  htmlType: 'button',
};

export default Button;
