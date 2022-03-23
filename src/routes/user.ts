import { Router } from 'express';
import { APIError } from '../classes/APIError';
import { HttpStatusCode } from '../interfaces/HttpStatusCode';
import User from '../models/User';
import http from 'http';

const router = Router();

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await User.findOne({ email: email, password: password }, { password: 0, __v: 0 });
        if (data === null)
            throw new APIError(
                'USER NOT FOUND',
                HttpStatusCode.NOT_FOUND,
                true,
                'User not found, probably invalid password or invalid email address, please try again.'
            );

        res.status(200).send({ response: 'Login Success!', data });
    } catch (error: any) {
        let response = '';
        if (error.httpCode === HttpStatusCode.NOT_FOUND)
            response = 'Invalid email address or password, please try again.';
        res.status(error.httpCode).send({ response });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const data = await User.create(req.body).catch(err => {
            let httpCode;
            switch (err.name) {
                case 'MongoServerError':
                    httpCode = err.code;
                    break;
                case 'ValidationError':
                    httpCode = HttpStatusCode.BAD_REQUEST;
                    break;
                default:
                    break;
            }
            throw new APIError(
                err.name,
                httpCode,
                true,
                err.message,
            )
        });
        console.log(data)
        res.status(200).send({ response: 'User created successfully and login successful!', data });
    } catch (error: any) {
        console.log(error)
        let response = ''

        if (error.httpCode === 11000)
            response = 'Create user failed, email address is already in use!';

        if (error.httpCode === HttpStatusCode.BAD_REQUEST)
            response = 'Create user failed, email, password and username are required!';

        res.status(HttpStatusCode.BAD_REQUEST).send({
            response
        });
    }
});

export default router;