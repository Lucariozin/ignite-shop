import { CSSProperties } from '@stitches/react'

import { styled, keyframes } from '@/styles/stitches.config'

interface SkeletonProps extends CSSProperties {}

export const Skeleton = (props: SkeletonProps) => {
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

  const Container = styled('div', {
    borderRadius: '4px',

    animation: `${Flashing} 1.2s infinite linear`,

    ...props,
  })

  return <Container />
}
