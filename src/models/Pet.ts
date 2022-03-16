import { model } from 'mongoose';
import { PetTypes } from '../interfaces/Pet';
import PetSchema from '../schemas/Pet';

const Pet = model<PetTypes>('Pets', PetSchema);

export default Pet;