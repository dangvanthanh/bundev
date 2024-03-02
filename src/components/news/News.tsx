import { css } from '@/styled-system/css'
import { NewItem } from './NewItem'
import { type NewItemProps } from './types'

export const News = ({ news }: { news: NewItemProps[] }) => {
  return (
    <div
      class={css({
        bg: 'white',
        borderRadius: 'sm',
        p: 2,
      })}
    >
      {news.map((item) => (
        <NewItem item={item} />
      ))}
    </div>
  )
}
