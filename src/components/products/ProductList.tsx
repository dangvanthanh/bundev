import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import { ProductStatus, STATUS } from './ProductStatus';

export const ProductList = () => {
  const products = [
    { name: 'UX Audit', assignee: 'Thanh Dang', status: STATUS.IN_PROGRESS, rating: 2 },
    { name: 'Brand Strategy', assignee: 'Hai Huynh', status: STATUS.DONE, rating: 4 },
    { name: 'A/B Testing', assignee: 'Thanh Dang', status: STATUS.REJECTED, rating: 5 },
    { name: 'Design System', assignee: 'Hoa Long', status: STATUS.ON_HOLD, rating: 3 },
    { name: 'UI Library', assignee: 'Thanh Tung', status: STATUS.IN_PROGRESS, rating: 2 },
  ];

  const table = css({
    w: 'full',
    borderCollapse: 'collapse',
    rounded: 'sm',
    overflow: 'hidden',
  });

  const tableTh = css({
    p: 2,
    textAlign: 'left',
    borderWidth: '1px',
    borderColor: 'gray.200',
    fontSize: 'sm',
    color: 'gray.400',
    fontWeight: '600',
  });

  const tableTd = css({
    p: 2,
    textAlign: 'left',
    borderWidth: '1px',
    borderColor: 'gray.200',
    fontSize: 'sm',
    color: 'violet.800',
  });

  const fillStar = (n: number, rating: number) => {
    return n <= rating ? 'currentColor' : 'none';
  };

  return (
    <div
      class={css({
        bg: 'white',
        borderRadius: 'sm',
        p: 2,
      })}
    >
      <table class={table}>
        <thead class={css({ bg: 'gray.100' })}>
          <tr>
            <th class={tableTh}>Name</th>
            <th class={tableTh}>Assignee</th>
            <th class={tableTh}>Status</th>
            <th class={tableTh}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td class={tableTd}>{product.name}</td>
              <td class={tableTd}>{product.assignee}</td>
              <td class={tableTd}>
                <ProductStatus status={product.status} />
              </td>
              <td class={tableTd}>
                <div class={flex({ align: 'center' })}>
                  {Array.from(Array(5).keys()).map((n) => (
                    <svg
                      class={css({ w: 3, h: 3 })}
                      fill={fillStar(n, product.rating)}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <title>star</title>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
