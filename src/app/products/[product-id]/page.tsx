import { getProductById } from '@/services/api'

import { ProductPageLayout } from '@/layouts/ProductPageLayout'

interface ProductPageProps {
  params?: {
    'product-id': string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const productId = String(params?.['product-id'] ?? '')

  const { data } = await getProductById({ productId }, { cache: 'no-cache' })

  return (
    <ProductPageLayout
      id={data?.id ?? ''}
      name={data?.name ?? ''}
      price={data?.price ?? 0}
      image={data?.image ?? ''}
      description={data?.description ?? ''}
    />
  )
}

export default ProductPage
