import type { Todo } from '@/db/schema'
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'

export const TodoItem = ({ content, completed, id }: Todo) => {
  return (
    <article class={flex({ flexDirection: 'row', py: 1.5, px: 1 })}>
      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          flex: '1 1 0%',
          columnGap: 2,
          rowGap: 2,
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? 'gray.400' : 'violet.800',
        })}
      >
        <input
          id={`${id}`}
          type="checkbox"
          checked={completed}
          class={css({
            appearance: 'none',
            position: 'relative',
            w: 4,
            h: 4,
            outline: 'none',
            border: 0,
            cursor: 'pointer',
            display: 'grid',
            alignItems: 'center',
            mt: 1,
            overflow: 'hidden',
            _before: {
              content: '""',
              position: 'absolute',
              height: '2px',
              top: 'auto',
              background: 'violet.700',
              width: '2',
              right: '60%',
              transformOrigin: 'right bottom',
            },
            _after: {
              content: '""',
              position: 'absolute',
              height: '2px',
              top: 'auto',
              background: 'violet.700',
              width: '2',
              left: '40%',
              transformOrigin: 'left bottom',
            },
            _checked: {
              _before: {
                animation: 'checkBefore .4s ease forwards',
              },
              _after: {
                animation: 'checkAfter .4s ease forwards',
              },
            },
          })}
          hx-post={`/todos/toggle/${id}`}
          hx-swap="outerHTML"
          hx-target="closest article"
        />
        <label
          for={`${id}`}
          class={css({
            flex: '1 1 0%',
            cursor: 'pointer',
            pos: 'relative',
            _after: {
              content: '""',
              position: 'absolute',
              height: '4px',
              width: '4px',
              top: '12px',
              left: '-18px',
              borderRadius: '50%',
              animation: 'firework .5s ease forwards .1s',
            },
          })}
          safe
        >
          {content}
        </label>
      </div>

      <button
        type="button"
        class={css({ color: 'violet.500', fontWeight: '500', cursor: 'pointer' })}
        hx-delete={`/todos/${id}`}
        hx-swap="outerHTML"
        hx-target="closest article"
      >
        &times;
      </button>
    </article>
  )
}
