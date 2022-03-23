import { Router } from "express";
import Pet from "../models/Pet";

const router = Router();

router.post('/add', async (req, res) => {
    const data = await Pet.create(req.body);
    const response = data ?
        'Pet added successfully' :
        'Something went wrong with the pet creation process. Try again.';
    res.status(200).send({ response, data });
});

router.put(`/edit`, async (req, res) => {
    const { id, petname, age, breed } = req.body;
    const pet = await Pet.findByIdAndUpdate(id, { petname, age, breed }, {
        new: true,
    });
    res.status(200).send({ response: 'OK', pet });
});

router.delete('/delete', async (req, res) => {
    const { id } = req.query;
    await Pet.findByIdAndDelete(id);
    res.status(200).send({
        response: 'Pet deleted successfully.'
    });
});

router.post('/favorites/add', async (req, res) => {
    const { id, favorite } = req.body;
    const petUpdated = await Pet.findByIdAndUpdate(id, { favorite }, { new: true });
    res.status(200).send({ petUpdated });
});

export default router;