import { css } from '@/styled-system/css'

export const PredictiveText = () => {
  return (
    <div class={css({ p: 2 })}>
      <p class={css({ textStyle: 'sm' })}>
        Press <strong>Tab</strong> to autocomplete with suggestion.
        <br />
        Press <strong>Shift</strong> to change the suggestion
      </p>
      <div
        id="suggestion"
        class={css({
          textStyle: 'sm',
          my: 4,
          px: 2,
          py: 1,
          bg: 'violet.500',
          color: 'white',
          display: 'inline-block',
          rounded: 'sm',
        })}
      >
        ...
      </div>
      <textarea
        hx-get="/predictive-text-suggestions"
        hx-trigger="keyup changed delay:300ms"
        hx-target="#suggestion"
        class={css({
          w: 'full',
          p: 2,
          borderWidth: '1px',
          borderColor: 'gray.200',
          minH: 28,
        })}
        placeholder="Start typing"
      />
    </div>
  )
}
