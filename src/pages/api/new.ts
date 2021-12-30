import type { NextApiRequest, NextApiResponse } from 'next'
import connection from 'src/utils/database'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { task_title, task_description } = body

  if (method === 'POST') {
    const query =
      'INSERT INTO tasks (task_title, task_description) VALUES ($1, $2) RETURNING *'
    const values = [task_title, task_description]
    const result = await connection.query(query, values)

    return res.status(200).json(result)
  } else {
    res.status(400).json({ message: 'Invalid method' })
  }
}
