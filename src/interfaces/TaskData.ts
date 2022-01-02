import { DateTime } from 'luxon'

export default interface TaskData {
  type: 'TaskData'
  task_id: number
  task_title: string
  task_description?: string
  task_creation_time: Date
}
