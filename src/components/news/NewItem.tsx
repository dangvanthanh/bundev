import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { NewItemProps } from './types'

export const NewItem = ({ item }: { item: NewItemProps }) => {
  return (
    <div>
      <a
        href={item.url}
        class={flex({ h: 'full', direction: 'column', py: 1.5 })}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3
          class={css({
            color: 'violet.800',
            lineClamp: 1,
          })}
          safe
        >
          {item.name} - {item.description}
        </h3>
      </a>
    </div>
  )
}
