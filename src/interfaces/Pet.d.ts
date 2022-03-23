import express from 'express';
import {Document} from 'mongoose'

export interface PetTypes extends Document {
    petname: string;
    age: number;
    type: number;
    breed: number;
    favorite: boolean;
    user: string;
}