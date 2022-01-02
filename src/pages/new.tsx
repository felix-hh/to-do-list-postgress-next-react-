import CreateTask from '../components/CreateTask'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

// eslint-disable-next-line import/no-anonymous-default-export
const NewTask = () => {
  const router = useRouter()
  const redirectToLandingPage = () => {
    router.push('/')
  }
  return (
    <Layout>
      <h1>Create a task</h1>
      <CreateTask actionAfterSubmit={redirectToLandingPage}></CreateTask>
    </Layout>
  )
}
export default NewTask
