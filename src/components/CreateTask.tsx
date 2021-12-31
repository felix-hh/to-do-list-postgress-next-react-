import { TextInput, Textarea, Text, Button } from '@mantine/core'
import { useState } from 'react'
import { rootURL } from '../utils/constants'

const handleSubmit = async (title: string, desc: string) => {
  await fetch(rootURL + '/api/new', {
    method: 'POST',
    body: JSON.stringify({ task_title: title, task_description: desc }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  return (
    <>
      <Text>Task title</Text>
      <TextInput
        placeholder="Enter a title for your task"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.currentTarget.value)}
      ></TextInput>
      <Text>Task description</Text>
      <Textarea
        placeholder="Enter a description for your task"
        value={taskDescription}
        onChange={(event) => setTaskDescription(event.currentTarget.value)}
      ></Textarea>
      <div></div>
      <Button onClick={() => handleSubmit(taskTitle, taskDescription)}>
        {' '}
        Submit
      </Button>
    </>
  )
}

export default CreateTask
