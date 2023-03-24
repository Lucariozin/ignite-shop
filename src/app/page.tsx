import { getProducts } from '@/services/api'

import { HomeLayout } from '@/layouts/HomeLayout'

const Home = async () => {
  const { data } = await getProducts()

  return <HomeLayout products={data ?? []} />
}

export default Home
