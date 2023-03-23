import { ProductPageLayout } from '@/layouts/ProductPageLayout'

interface ProductPageProps {
  params?: {
    id: string
  }
}

const ProductPage = ({ params }: ProductPageProps) => {
  const productId = String(params?.id ?? '')

  return <ProductPageLayout productId={productId} />
}

export default ProductPage
