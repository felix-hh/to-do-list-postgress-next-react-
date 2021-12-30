import {NextApiRequest, NextApiResponse} from "next/types"
import connection from "src/utils/database"

// eslint-disable-next-line import/no-anonymous-default-export
export default async(req: NextApiRequest, res: NextApiResponse) => {
    let query, values, task_data
    const task_id = req.query.id

    try {
        switch (req.method) {
        case "GET":
            query = "SELECT * FROM tasks WHERE task_id=$1"
            values = [task_id ]
            task_data = await connection.query(query, values)
            
            return res.status(200).json(task_data.rows[0])

        case "PUT":
            query = "UPDATE tasks SET task_title=$1, task_description=$2 WHERE task_id=$3 RETURNING *"
            const {task_title, task_description} = req.body

            values = [task_title, task_description, task_id]
            task_data = await connection.query(query, values)

            if (task_data.rowCount === 0) {
                throw Error("Could not update the task")
            }

            return res.status(200).json(task_data)

        case "DELETE":
            query = "DELETE FROM tasks WHERE task_id=$1 RETURNING *"
            values = [task_id]
            task_data = await connection.query(query, values)

            if (task_data.rowCount === 0) {
                throw Error("Could not delete the task")
            }

            return res.status(200).json(task_data)
        }
    } catch (err) {
        return res.status(400).json(err)
    }
}
