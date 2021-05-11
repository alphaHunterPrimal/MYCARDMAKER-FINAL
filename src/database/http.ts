import express from "express";
import { routes } from './routes';
import { createServer} from "http";
import {Server, Socket} from "socket.io";
import path from "path";

const app = express();
const http = createServer(app); 
const io = new Server(http);

io.on("connection", (socket:Socket) => {
    console.log('Se conectou', socket.id);
})

app.use(express.json());
app.use(routes);
export{http, io}