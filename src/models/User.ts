import { model } from 'mongoose';
import { User } from '../interfaces/User';
import UserSchema from '../schemas/User';

export default model<User>('User', UserSchema)