import Layout from '../components/Layout'
import { Title } from '@mantine/core'
import TasksList from '../components/TasksList'
import { GetServerSideProps } from 'next'
import TaskData from '../interfaces/TaskData'
import { rootURL } from '../utils/constants'

interface IndexProps {
  tasks: TaskData[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch(rootURL + '/api/tasks')
  const tasks = await result.json()
  const output = { props: { tasks } }
  return output
}

const Index = ({ tasks: data }: IndexProps) => {
  return (
    <Layout>
      <Title>List of tasks</Title>
      <TasksList data={data}></TasksList>
    </Layout>
  )
}

export default Index
