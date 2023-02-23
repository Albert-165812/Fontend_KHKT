import { useEffect } from "react";
import io from "socket.io-client";
import { HandleSocket } from "./HandleSocket";
import axios from "axios";
let config = {
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "application/json",
  },
};
let ids = [];

const Socketio = () => {
  const get_data = async () => {
    let Response = await axios.get("/data", config);
    let data = await Response.data;
    await ids.push(data["list_id"]);
    return data["list_id"];
  };
  useEffect(() => {
    const socket = io("/");
    socket.on("connect", () => {
      console.log("Connected to the server");
      get_data()
        .then((msg) => {
          console.log("Get data from socket: ");
          socket.emit("server_client_local", {
            task: "Alert_page_curr",
            place: "none",
            content: "HOME",
          });
        })
        .catch((err) => {
          console.warn(err);
        });
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
    socket.on("message_client_web", (msg) => {
      console.log(msg);
      HandleSocket(msg, socket, ids);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
};

export default Socketio;
