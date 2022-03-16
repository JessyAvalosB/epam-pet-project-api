import { model } from 'mongoose';
import { UserTypes } from '../interfaces/User';
import UserSchema from '../schemas/User';

const User = model<UserTypes>('User', UserSchema);

export default User;