import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  return (
    <>
      Hello world! List of tasks
      <button onClick={() => router.push('/new')}>New task</button>
    </>
  )
}

export default Index
