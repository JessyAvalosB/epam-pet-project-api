import { Schema } from 'mongoose';
import { User } from '../interfaces/User';

const schema = new Schema<User> ({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export default schema;