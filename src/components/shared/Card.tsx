import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { type CardProps } from './types'

export const Card = ({ card }: { card: CardProps }) => {
  return (
    <div
      class={css({
        bg: 'white',
        rounded: 'md',
        p: 2,
      })}
    >
      <a href={card.url} class={flex({ h: 'full', direction: 'column' })}>
        <img src={card.image} alt="" />
        <h3
          class={css({
            mt: 5,
            color: 'gray.400',
          })}
          safe
        >
          {card.text}
        </h3>
      </a>
    </div>
  )
}
