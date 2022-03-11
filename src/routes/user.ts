import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const data = await User.findOne({ email: email, password: password }, { password: 0, __v: 0 });
    const response = data ? 'Login successful' : 'Login failed, credentials are invalid.';
    res.status(200).send({ response, data });
});

router.post('/signup', async (req, res) => {
    const data = await User.create(req.body);
    const response = data ? 'Signup successful' : 'Signup failed, try again.';
    res.status(200).send({ response, data });
});

export default router;