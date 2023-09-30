import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import { Button } from './Button';
import { ChatMessage } from './ChatMessage';

export const Chat = () => {
  return (
    <div
      class={flex({
        direction: 'column',
        flex: '1 1 0%',
        h: 'screen',
      })}
    >
      <div
        class={css({
          maxH: 'calc(100vh - 100px)',
          overflow: 'auto',
        })}
      >
        <div
          class={css({
            w: 'full',
            maxW: '2xl',
            mx: 'auto',
            p: '4',
          })}
        >
          {Array.from({ length: 10 }, (_) => (
            <div>
              <ChatMessage type="user" />
              <ChatMessage type="bot" />
            </div>
          ))}
        </div>
      </div>
      <div
        class={css({
          position: 'fixed',
          w: 'full',
          insetX: '0',
          bottom: '0',
        })}
      >
        <div
          class={css({
            w: 'full',
            maxW: '2xl',
            mx: 'auto',
            px: '4',
          })}
        >
          <div
            class={css({
              bg: 'white',
              borderTopStyle: 'solid',
              borderTopColor: 'gray.100',
              borderTopWidth: '1px',
              p: '4',
              roundedTop: 'xl',
              ml: '10',
            })}
          >
            <div
              class={css({
                display: 'flex',
                w: 'full',
                px: '3',
                py: '4',
                gap: '2',
                border: '1px solid',
                borderColor: 'gray.100',
                borderRadius: 'lg',
              })}
            >
              <div
                class={css({
                  flex: '1',
                })}
              >
                <textarea
                  class={css({
                    w: 'full',
                    px: '4',
                    py: '1',
                    border: '0',
                    borderRadius: 'md',
                    resize: 'none',
                    '&:focus': {
                      outline: 'none',
                    },
                  })}
                  rows="1"
                  placeholder="Send a message"
                />
              </div>
              <Button hx-post="/clicked" hx-swap="outerHTML" bg="green.600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
