import 'dotenv/config';
import './dbConnection';

import http from 'http';
import https from 'https'
import { Server, Socket } from 'socket.io';

import app from "./app";
import Pet from './models/Pet';

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.URL_CLIENT,
        methods: ["GET", "POST"]
    }
});

io.on('connection', socket => {
    console.log('User connected');

    socket.on('getPets', (data) => {
        sendAllPets(data, socket);
    });

    socket.on('getFavorites', (data) => {
        sendFavorites(data, socket)
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const sendFavorites = async ({ user }: { user: string }, socket: Socket) => {
    const favorites = await Pet.find({ user, favorite: true }, { __v: 0 });
    socket.emit('favorites', favorites);

}

const sendAllPets = async ({ user, page }: { user: string, page: number }, socket: Socket) => {
    const options: any = {
        page,
        limit: 10
    }
    const pets = await Pet.paginate({ user }, options);
    socket.emit('pets', pets);
}

server.listen(app.get('PORT'), () => {
    console.log(`Server listening on http://localhost:${app.get('PORT')}`);
});