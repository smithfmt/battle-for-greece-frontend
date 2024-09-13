import axios from "axios"
import { LobbyType } from "../frontend-types";

const create = async (lobby:LobbyType) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/lobby`, lobby);
    return res;
  } catch (err:any) {
    return err.response;
  };  
};

const join = async (lobbyName:string) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/join`, { lobbyName });
    return res;
  } catch (err:any) {
    return err.response;
  };  
};

const start = async (lobbyName:string, botNumber:number) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/start`, { lobbyName, botNumber });
    return res;
  } catch (err:any) {
    return err.response;
  };  
};

const leave = async (type:string, name:string|false, player:string) => {
  try {
      const res = await axios.put(`${process.env.REACT_APP_API_ADDRESS}/leave/${type}`, { name, player });
      return {response: res};
  } catch (err:any) {
      return {error: err.response};
  };    
};

export default {
  create,
  join,
  start,
  leave,
};