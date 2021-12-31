import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  return (
    <>
      <h1>Hello world!</h1>
      <div>List of tasks</div>
      <div>
        <button onClick={() => router.push('/new')}>New task</button>
      </div>
    </>
  )
}

export default Index
