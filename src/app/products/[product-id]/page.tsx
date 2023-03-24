import { ProductPageLayout } from '@/layouts/ProductPageLayout'

interface ProductPageProps {
  params?: {
    'product-id': string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const productId = String(params?.['product-id'] ?? '')

  const response = await fetch(`http://localhost:3000/api/products/${productId}`)

  const data = (await response.json()).data

  console.log(data)

  return <ProductPageLayout productId={productId} />
}

export default ProductPage
