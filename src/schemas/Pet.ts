import { Schema } from 'mongoose';
import { PetTypes } from '../interfaces/Pet';
const PetSchema = new Schema<PetTypes>({
    petname: { type: 'string', required: true },
    age: { type: 'number', required: true },
    type: { type: 'number', required: true },
    breed: { type: 'number', required: true },
    user: { type: 'string', required: true },
    favorite: {type: 'boolean', required: false, default: false}
});

export default PetSchema;