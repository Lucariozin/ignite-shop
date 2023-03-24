type Return<T = any> = {
  data: T | null
  status: 'success' | 'failed'
}

export type Product = {
  id: string
  name: string
  price: number
  image: string
  description?: string
}

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_APPLICATION_URL}/api`

export const getProducts = async (): Promise<Return<Product[]>> => {
  const url = `${baseUrl}/products`

  try {
    const response = await fetch(url)
    const data = (await response.json()).data as Product[]

    return {
      data,
      status: 'success',
    }
  } catch {
    return {
      data: null,
      status: 'failed',
    }
  }
}
