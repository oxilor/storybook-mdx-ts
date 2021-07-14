import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './index';

export default {
  title: 'Core/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const NoParameters = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
