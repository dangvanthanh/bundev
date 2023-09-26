import * as elements from 'typed-html';
import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';

export const TodoForm = () => {
  return (
    <form
      class={flex({
        flexDirection: 'row',
        mb: '3'
      })}
      hx-post="/todos"
      hx-swap="afterend"
      _="on submit target.reset()"
    >
      <div
        class={flex({
          w: 'full',
          direction: 'row',
          gap: 1,
          borderWidth: '1px',
          borderColor: 'gray.200',
          rounded: 'sm',
          overflow: 'hidden'
        })}
      >
        <input
          type="text"
          name="content"
          placeholder="Create new task"
          class={css({
            px: 3,
            py: 1.5,
            flex: '1 1 0%',
          })}
        />
        <button type="submit" class={css({
            bg: 'gray.700',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 1.5,
            px: 3,
            color: 'white',
        })}>Add</button>
      </div>
    </form>
  );
};
