import * as elements from 'typed-html';
import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';
import { Todo } from '../db/schema';

export const TodoItem = ({ content, completed, id }: Todo) => {
  return (
    <article class={flex({ flexDirection: 'row', py: 1.5 })}>
      <div
        class={css({
          display: 'flex',
          flex: '1 1 0%',
          columnGap: 1,
          rowGap: 2,
        })}
      >
        <div class={css({ w: 6, h: 6, pos: 'relative' })}>
          <input
            type="checkbox"
            checked={completed}
            class={css({
              bg: 'white',
              w: 4,
              h: 4,
              mt: 1,
              border: '1px',
              borderColor: 'violet.500',
              borderStyle: 'solid',
              borderRadius: 'sm',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 2px #a78bfa',
            })}
            hx-post={`/todos/toggle/${id}`}
            hx-swap="outerHTML"
            hx-target="closest article"
          />
        </div>
        <div
          class={css({
            flex: '1 1 0%',
          })}
        >
          {content}
        </div>
      </div>

      <button
        type="button"
        class={css({ color: 'gray.500', cursor: 'pointer' })}
        hx-delete={`/todos/${id}`}
        hx-swap="outerHTML"
        hx-target="closest article"
      >
        &times;
      </button>
    </article>
  );
};
