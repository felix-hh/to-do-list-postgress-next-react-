import { TextInput, Textarea, Text, Button, Space } from '@mantine/core'
import { FC, useState } from 'react'
import { rootURL } from '../utils/constants'

const handleSubmit = async (
  title: string,
  desc: string,
  actionAfterSubmit: () => void
) => {
  await fetch(rootURL + '/api/new', {
    method: 'POST',
    body: JSON.stringify({ task_title: title, task_description: desc }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  actionAfterSubmit()
}

interface CreateTaskProps {
  actionAfterSubmit: () => void
}

const CreateTask = ({ actionAfterSubmit }: CreateTaskProps) => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  return (
    <>
      <Text>Task title</Text>
      <Space />
      <TextInput
        placeholder="Enter a title for your task"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.currentTarget.value)}
      ></TextInput>
      <Space />

      <Text>Task description</Text>
      <Space />

      <Textarea
        placeholder="Enter a description for your task"
        value={taskDescription}
        onChange={(event) => setTaskDescription(event.currentTarget.value)}
      ></Textarea>
      <Space />
      <Button
        onClick={() =>
          handleSubmit(taskTitle, taskDescription, actionAfterSubmit)
        }
      >
        {' '}
        Submit
      </Button>
    </>
  )
}

export default CreateTask
