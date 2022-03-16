import { Router } from "express";
import Pet from "../models/Pet";

const router = Router();

router.post('/add', async (req, res) => {
    const data = await Pet.create(req.body);
    const response = data ?
        'Pet added successfully' :
        'Something went wrong with the pet creation process. Try again.';
    res.status(200).send({response, data});
});

export default router;