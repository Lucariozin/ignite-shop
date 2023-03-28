import { getProducts } from '@/services/api'

import { HomeLayout } from '@/layouts/HomeLayout'

export const revalidate = 7200 // 2 hours

const Home = async () => {
  const { data } = await getProducts()

  return <HomeLayout products={data ?? []} />
}

export default Home
