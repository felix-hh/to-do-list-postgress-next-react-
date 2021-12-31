import { NextApiRequest, NextApiResponse } from 'next/types'
import connection from '../../../utils/database'
import TaskData from 'src/interfaces/taskData'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  req: NextApiRequest,
  res: NextApiResponse<TaskData[]>
) => {
  try {
    const tasks = await connection.query(
      'SELECT * FROM tasks ORDER BY task_creation_time DESC'
    )
    return res.status(200).json(tasks.rows)
  } catch (err) {
    return res.status(400).json([])
  }
}
