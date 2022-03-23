import { PaginateModel, Document, model } from 'mongoose';
import { PetTypes } from '../interfaces/Pet';
import  PetSchema  from '../schemas/Pet';

interface PetModel extends Document, PetTypes{ }

const Pet = model<PetTypes, PaginateModel<PetTypes>>('Pets', PetSchema);

export default Pet;