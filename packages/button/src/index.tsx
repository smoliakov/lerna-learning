import * as React from 'react';

import * as Styled from './styled';

interface Props {
  children: React.ReactNode;
  variant: 'small' | 'large';
}

const Button: React.FC<Props> = (props: Props) => {
  const { variant, children } = props;

  return (
    <Styled.Button type="submit" variant={variant}>
      {children}
    </Styled.Button>
  );
};

export default Button;
