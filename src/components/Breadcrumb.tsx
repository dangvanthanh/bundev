import { css } from '@styled-system/css';

export const Breadcrumb = ({ text }: { text: string }) => {
  return (
    <div class={css({ maxW: 'md', mx: 'auto', pt: 12 })}>
      <ul class={css({ display: 'inline-flex', alignItems: 'center', gap: 2 })}>
        <li>
          <a href="/">
            <i data-lucide="home" class={css({ w: 5, h: 5, color: 'gray.400' })} />
          </a>
        </li>
        <li>
          <i data-lucide="chevron-right" class={css({ w: 5, h: 5, color: 'gray.400' })} />
        </li>
        <li class={css({ fontSize: 'sm', color: 'gray.500' })}>{text}</li>
      </ul>
    </div>
  );
};
