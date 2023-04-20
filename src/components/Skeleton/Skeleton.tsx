import { CSSProperties } from '@stitches/react'

import { styled, keyframes } from '@/styles/stitches.config'

interface SkeletonProps extends CSSProperties {
  css?: CSSProperties | any
}

export const Skeleton = ({ css, ...props }: SkeletonProps) => {
  const Flashing = keyframes({
    '0%': {
      backgroundColor: '$gray700',
    },
    '50%': {
      backgroundColor: '$gray800',
    },
    '100%': {
      backgroundColor: '$gray700',
    },
  })

  const Container = styled('span', {
    display: 'block',
    borderRadius: '4px',

    animation: `${Flashing} 1.2s infinite linear`,

    ...props,
  })

  return <Container css={css} />
}
