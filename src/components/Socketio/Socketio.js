import { useEffect } from "react";
import io from "socket.io-client";
import { HandleSocket } from "./HandleSocket";
const Socketio = () => {
  useEffect(() => {
    const socket = io("/");
    socket.on("connect", () => {
      console.log("Connected to the server");
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
    socket.on("message_client_web", (msg) => {
      console.log(msg)
      HandleSocket(msg,socket)
    });
    return () => {
      socket.disconnect();
    };
  }, []);
};

export default Socketio;
