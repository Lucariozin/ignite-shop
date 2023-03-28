import { CaretLeft, CaretRight } from 'phosphor-react'

import { ShadowColumn, NavigationButton } from './CarouselNavigationButton.styles'

interface CarouselNavigationButtonProps {
  direction: 'left' | 'right'
  title?: string
  onClick?: () => void
  isVisible?: boolean
}

export const CarouselNavigationButton = ({
  direction = 'left',
  title = '',
  isVisible = false,
  onClick = () => {},
}: CarouselNavigationButtonProps) => {
  return (
    <ShadowColumn direction={direction} visibility={isVisible ? 'visible' : 'hidden'}>
      <NavigationButton direction={direction} title={title} onClick={onClick}>
        {direction === 'left' ? <CaretLeft size={52} /> : <CaretRight size={52} />}
      </NavigationButton>
    </ShadowColumn>
  )
}
