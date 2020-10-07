import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Button from './index';

export default {
  title: 'Component/Button',
  component: Button,
} as Meta;

export const BasicButton = () =>
  <Button>Button</Button>;

export const RedButton = () =>
  <Button variant="red">Red button</Button>;

export const DarkBlueButton = () =>
  <Button variant="darkBlue">Dark button</Button>;
