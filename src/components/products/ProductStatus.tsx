import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'

export enum STATUS {
  IN_PROGRESS = 'In progress',
  DONE = 'Done',
  REJECTED = 'Rejected',
  ON_HOLD = 'On hold',
}

export const ProductStatus = ({ status }: { status: string }) => {
  const getBg = (s: string) =>
    s === STATUS.DONE ? 'green.50' : s === STATUS.REJECTED ? 'red.50' : s === STATUS.ON_HOLD ? 'gray.50' : 'blue.50'

  const getColor = (s: string) =>
    s === STATUS.DONE ? 'green.500' : s === STATUS.REJECTED ? 'red.500' : s === STATUS.ON_HOLD ? 'gray.500' : 'blue.500'

  return (
    <span
      class={flex({
        align: 'center',
        fontSize: 'xs',
        gap: 1.5,
        bg: getBg(status),
        px: 1.5,
        py: 0.5,
        rounded: 'xl',
        color: getColor(status),
      })}
    >
      <span class={css({ w: 1.5, h: 1.5, rounded: 'full', bg: getColor(status) })} />
      <span safe>{status}</span>
    </span>
  )
}
