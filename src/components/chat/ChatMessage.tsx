import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import type { ChatMessageProps } from './types'

export const ChatMessage = ({ type }: ChatMessageProps) => {
  return (
    <div
      class={flex({
        align: 'start',
        mb: '6',
        pos: 'relative',
      })}
    >
      {type === 'user' ? (
        <div
          class={flex({
            bg: 'white',
            w: '8',
            h: '8',
            align: 'center',
            justify: 'center',
            boxShadow: 'sm',
            borderRadius: 'sm',
            mt: '1',
          })}
        >
          <i data-lucide="user" class={css({ color: 'gray.700', w: '4', h: '4' })} />
        </div>
      ) : (
        <div
          class={flex({
            bg: 'gray.700',
            w: '8',
            h: '8',
            align: 'center',
            justify: 'center',
            boxShadow: 'sm',
            borderRadius: 'sm',
            mt: '1',
          })}
        >
          <i data-lucide="bot" class={css({ color: 'white', w: '4', h: '4' })} />
        </div>
      )}
      <div
        class={css({
          display: 'flex',
          flex: '1',
          ml: '4',
          color: 'gray.600',
        })}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum nisi excepturi iure possimus laboriosam eos
        repellat necessitatibus explicabo eum fugit, ducimus tempore velit hic illo? Blanditiis quae aspernatur quia
        doloribus.
      </div>
    </div>
  )
}
