import {NextApiRequest, NextApiResponse} from 'next/types'
import connection from '../../../utils/database'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try{
    const tasks = await connection.query('SELECT * FROM tasks')
    return res.status(200).json(tasks.rows)
    }
    catch(err){
        return res.status(400).json(err)
    }
}