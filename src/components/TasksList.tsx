import { DateTime } from 'luxon'
import {
  Badge,
  Button,
  Card,
  Group,
  useMantineTheme,
  Text,
  Col,
  Grid,
} from '@mantine/core'
import TaskData from '../interfaces/TaskData'
import { useRouter } from 'next/router'
import { rootURL } from '../utils/constants'

interface TaskPreviewProps {
  id: number
  title: string
  description?: string
  creationTime: Date
}

export const TaskPreview = ({
  id,
  title,
  description,
  creationTime,
}: TaskPreviewProps) => {
  const theme = useMantineTheme()
  const { push } = useRouter()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

  const datetime = DateTime.fromISO(creationTime.toString())
  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" padding="lg">
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{title}</Text>
          <Badge color="pink" variant="light">
            {datetime.toRelative()}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {description}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => push(rootURL + 'tasks/' + id.toString())}
        >
          Details
        </Button>
      </Card>
    </div>
  )
}

interface TasksListProps {
  data: TaskData[]
}
const TasksList = ({ data }: TasksListProps) => {
  console.log(data)
  return (
    <Grid align="stretch" justify="flex-start">
      {data.map(
        ({
          task_id: id,
          task_title: title,
          task_description: description,
          task_creation_time: creationTime,
        }) => (
          <Col span={4} key={id}>
            <TaskPreview
              id={id}
              title={title}
              description={description}
              creationTime={creationTime}
            />
          </Col>
        )
      )}
    </Grid>
  )
}

export default TasksList
