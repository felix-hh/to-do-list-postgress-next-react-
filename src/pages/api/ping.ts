import type {NextApiRequest, NextApiResponse} from "next"
import connection from "../../utils/database"
import {DateTime} from "luxon"

// eslint-disable-next-line import/no-anonymous-default-export
export default async(
    req: NextApiRequest,
    res: NextApiResponse) => {
    try {
        const ping_response = await connection.query("SELECT NOW()")
        const JSDate = ping_response.rows[0].now
        const datetime = DateTime.fromJSDate(JSDate)

        console.log(datetime)

        if (!datetime.isValid) {
            throw new Error("Could not obtain DateTime")
        }

        return res.status(200).json({message: "Ping succeeded!", datetime})
    } catch (err) {
        return res.status(400).json({message: err})
    }
}
