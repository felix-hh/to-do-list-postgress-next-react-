import CreateTask from '../components/CreateTask'
import Layout from '../components/Layout'

// eslint-disable-next-line import/no-anonymous-default-export
const NewTask = () => {
  return (
    <Layout>
      <h1>Create a task</h1>
      <CreateTask></CreateTask>
    </Layout>
  )
}
export default NewTask
