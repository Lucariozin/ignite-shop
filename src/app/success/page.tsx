interface SuccessPageProps {
  searchParams?: {
    session_id: string
  }
}

const SuccessPage = async ({ searchParams }: SuccessPageProps) => {
  const sessionId = searchParams?.session_id ?? ''

  console.log('Session ID', sessionId)

  return (
    <div>
      <h1>Success</h1>
    </div>
  )
}

export default SuccessPage
