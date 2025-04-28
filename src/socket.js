import io from "socket.io-client";
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
// const sockets = io("/");
const sockets = io("https://server-socket-videocall.vercel.app", {
  transports: ["websocket", "polling"],
});

sockets.on("connect", () => {
  console.log("Conectado al servidor");
});

sockets.on("disconnect", () => {
  console.log("Desconectado del servidor");
});

export default sockets;

// import io from 'socket.io-client';

// // Conectar al servidor
// const socket = io('https://client-videocall.vercel.app', {
//   transports: ['websocket', 'polling'], // Asegúrate de que se incluyan ambos transportes
// });

// socket.on('connect', () => {
//   console.log('Conectado al servidor');
// });

// socket.on('disconnect', () => {
//   console.log('Desconectado del servidor');
// });
