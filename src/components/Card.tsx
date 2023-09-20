import * as elements from 'typed-html';
import { css } from '../../styled-system/css';
import { Button } from './Button';

export const Card = () => {
  return (
    <div
      class={css({
        width: 312,
        height: 280,
        background: '#fff',
        borderRadius: 'md',
        display: 'flex',
        flexDirection: 'column',
        shadow: 'md',
      })}
    >
      <h1
        class={css({
          color: 'primary',
          fontSize: 'md',
          fontWeight: 'bold',
          margin: 'auto',
        })}
      >
        Having fun with <span class={css({ color: 'blue.600' })}>panda</span> +{' '}
        <span class={css({ color: 'green.600' })}>htmx</span> +{' '}
        <Button hx-post="/clicked" hx-swap="outerHTML" bg="yellow.600" />
      </h1>
    </div>
  );
};
