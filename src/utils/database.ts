import {Pool} from 'pg'

const connection = new Pool({
        user: 'demo_to_do_list_user',
        password: '1234',
        database: 'demo_to_do_list',
        port: 5432
    })

export default connection