import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    statusCode: number;
    message: string;
  }

export type RegisterModel = {
    username: string;
    email: string;
    password: string;
}

const register = (
    req: NextApiRequest,
    res: NextApiResponse<Data>) => {

    if(req.method === 'POST') {
        res.json({statusCode: 200, message: 'Ok'});
    }
}

export default register;