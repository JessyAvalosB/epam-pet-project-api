import { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { PetTypes } from '../interfaces/Pet';

const PetSchema: Schema = new Schema<PetTypes>({
    petname: { type: 'string', required: true },
    age: { type: 'number', required: true },
    type: { type: 'number', required: true },
    breed: { type: 'number', required: true },
    user: { type: 'string', required: true },
    favorite: {type: 'boolean', required: false, default: false}
});

PetSchema.plugin(paginate);

export default PetSchema;