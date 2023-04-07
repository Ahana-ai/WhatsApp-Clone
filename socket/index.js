import { Server } from 'socket.io';

const io = new Server(8000, {
    cors: {
        origin: "http://localhost:5173"
    }
});

// To build the connection we need info from frontend to be sent here.
io.on("connection", (socket) => {
    console.log("User connected!");
});