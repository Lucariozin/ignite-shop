'use client'

import { useServerInsertedHTML } from 'next/navigation'

import { getCssText } from '@/styles/stitches.config'

export const StyleSheet = () => {
  useServerInsertedHTML(() => <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />)

  return null
}
