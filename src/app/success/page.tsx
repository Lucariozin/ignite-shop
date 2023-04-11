import { getProductsBySessionId } from '@/services/http/api'

interface SuccessPageProps {
  searchParams?: {
    session_id: string
  }
}

const SuccessPage = async ({ searchParams }: SuccessPageProps) => {
  const sessionId = searchParams?.session_id ?? ''

  const { data } = await getProductsBySessionId({ sessionId }, { cache: 'no-cache' })

  console.log('DATA', data)

  return (
    <div>
      <h1>Success</h1>
    </div>
  )
}

export default SuccessPage
