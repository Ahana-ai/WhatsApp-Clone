import { Server } from 'socket.io';

const io = new Server(8000, {
    cors: {
        origin: "http://localhost:5173"
    }
});

// Array of active users
let activeUsers = [];

// Function to check how many users are active/online
const addUser = (userData, socketId) => {
    !activeUsers.some(user => user.sub == userData.sub) && activeUsers.push({ ...userData, socketId })
};

const getUser = (userId) => {
    return activeUsers.find(user => user.sub === userId);
}

// To build the connection we need info from frontend to be sent here.
io.on("connection", (socket) => {
    console.log("User connected!");

    // Adding users or Adding backend
    // userData comes from frontend (from conversations.jsx) using socket and if it is equal to "addUsers", the callback will be called
    socket.on("addUsers", userData => {
        addUser(userData, socket.id);

        console.log('activeUsers:', activeUsers); // check if activeUsers is being populated correctly

        // Func to send which users which users are online from the array to frontend (conversations.jsx)
        io.emit("getUsers", activeUsers);
    });

    // Func to send messages to specific users
    socket.on("sendMessage", data => {
        // Get the user to whom the msg will be sent
        const user = getUser(data.receiverId);

        console.log('user:', user); // check if the correct user is being found

        io.to(user.socketId).emit("getMessage", data);
    })

});