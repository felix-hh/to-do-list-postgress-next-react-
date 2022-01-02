import {
  Container,
  Space,
  Title,
  Text,
  Card,
  Button,
  Group,
  TextInput,
  Badge,
  Textarea,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { rootURL } from '../../utils/constants'
import TaskData from '../../interfaces/TaskData'
import { DateTime } from 'luxon'

const buildApiPathFromTaskId = (id: string) => rootURL + '/api/tasks/' + id

const loadTask = async (id: string) =>
  await fetch(buildApiPathFromTaskId(id), { method: 'GET' })

const updateTask = async (id: string, title: string, description: string) =>
  await fetch(buildApiPathFromTaskId(id), {
    method: 'PUT',
    body: JSON.stringify({ task_title: title, task_description: description }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

const deleteTask = async (id: string) =>
  await fetch(buildApiPathFromTaskId(id), { method: 'DELETE' })

const TaskDetails = () => {
  const router = useRouter()
  const id = router.query.id
  const [task, setTask] = useState<TaskData | undefined>(undefined)
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [displayedDescription, setDisplayedDescription] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      if (typeof id !== 'string') {
        return
      }
      let response = await loadTask(id)
      let taskData = await response.json()
      setTask(taskData)
      setDisplayedTitle(taskData.task_title)
      setDisplayedDescription(taskData.task_description)
    }
    loadData()
  }, [id])

  const handleDeleteClick = (id: any) => {
    if (typeof id !== 'string') {
      return
    }
    deleteTask(id)
    router.push('/')
  }
  const handleUpdateSubmitClick = (id: any) => {
    if (typeof id !== 'string') {
      return
    }
    updateTask(id, displayedTitle, displayedDescription)
    if (task !== undefined) {
      setTask({
        ...task,
        task_title: displayedTitle,
        task_description: displayedDescription,
      })
    }
    router.push('/tasks/' + id.toString())
    setIsEditMode(false)
  }

  return (
    <Layout>
      {!isEditMode ? (
        <Container>
          <Title>{displayedTitle}</Title>
          <Space />
          <Text>
            {task && (
              <Badge>
                {DateTime.fromISO(
                  task.task_creation_time.toString()
                ).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
              </Badge>
            )}
          </Text>
          <Space />
          <Text>{displayedDescription}</Text>
          <Space />
          <Group>
            <Button variant="light" onClick={() => handleDeleteClick(id)}>
              Delete
            </Button>
            <Space />
            <Button variant="filled" onClick={() => setIsEditMode(true)}>
              Update
            </Button>
          </Group>
        </Container>
      ) : (
        <Container>
          <TextInput
            size="xl"
            value={displayedTitle}
            placeholder="Set title"
            onChange={(e) => setDisplayedTitle(e.target.value)}
          />

          <Space />
          <Textarea
            size="md"
            value={displayedDescription}
            onChange={(e) => setDisplayedDescription(e.target.value)}
            placeholder="Set description"
          />

          <Space />
          <Group>
            <Button
              variant="light"
              onClick={() => {
                setIsEditMode(false)
                setDisplayedTitle(task ? task.task_title : '')
                setDisplayedDescription(
                  task?.task_description ? task.task_description : ''
                )
              }}
            >
              Cancel
            </Button>
            <Space />
            <Button
              variant="filled"
              onClick={() => handleUpdateSubmitClick(id)}
            >
              Confirm
            </Button>
          </Group>
        </Container>
      )}
    </Layout>
  )
}

export default TaskDetails
