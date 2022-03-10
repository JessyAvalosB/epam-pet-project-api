import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.post('/signin', (req, res) => {
    console.log(req.body);
    res.status(200).send({ response: 'Login successful' })
});

router.post('/signup', async (req, res) => {
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(200).send({ response: 'Signup successful' })
});

export default router;