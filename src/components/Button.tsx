import * as elements from 'typed-html';
import { css } from '../../styled-system/css';

export const Button = ({ color, ...rest }: { color: string }) => {
  return (
    <button type="button" class={css({ cursor: 'pointer', color })} {...rest}>
      ai
    </button>
  );
};
