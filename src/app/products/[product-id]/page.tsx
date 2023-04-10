import { getProductById } from '@/services/http/api'

import { delay } from '@/utils/delay'

import { ProductPageLayout } from '@/layouts/ProductPageLayout'

interface ProductPageProps {
  params?: {
    'product-id': string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const productId = String(params?.['product-id'] ?? '')

  const [{ data }] = await Promise.all([getProductById({ productId }, { cache: 'no-cache' }), delay()])

  return (
    <ProductPageLayout
      id={data?.id ?? ''}
      name={data?.name ?? ''}
      price={data?.price ?? 0}
      priceId={data?.priceId ?? ''}
      image={data?.image ?? ''}
      description={data?.description ?? ''}
    />
  )
}

export default ProductPage
