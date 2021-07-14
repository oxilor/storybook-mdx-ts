import React, { forwardRef } from 'react';

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => (
    <button type='button' {...rest} ref={ref}>
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
