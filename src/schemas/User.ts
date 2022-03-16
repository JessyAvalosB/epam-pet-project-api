import { Schema } from 'mongoose';
import { UserTypes } from '../interfaces/User';

const UserSchema = new Schema<UserTypes> ({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export default UserSchema;