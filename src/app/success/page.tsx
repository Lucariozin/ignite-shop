import { getProductsBySessionId } from '@/services/http/api'

import { SuccessPageLayout } from '@/layouts/SuccessPageLayout'

interface SuccessPageProps {
  searchParams?: {
    session_id: string
  }
}

const SuccessPage = async ({ searchParams }: SuccessPageProps) => {
  const sessionId = searchParams?.session_id ?? ''

  const { data } = await getProductsBySessionId({ sessionId }, { cache: 'no-cache' })

  return <SuccessPageLayout products={data?.products ?? []} userName={data?.userName ?? ''} />
}

export default SuccessPage
