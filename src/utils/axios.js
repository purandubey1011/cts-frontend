import axios from "axios";

const instance = axios.create({

  // baseURL: "http://localhost:3030",
  // baseURL: "https://cts-roadmap-sunny-hwm6.onrender.com/",
  // baseURL: "https://cts-roadmap-copy.onrender.com/",
  // baseURL: "https://cts-roadmap.onrender.com",
  // baseURL: "https://cts-roadmap-two.onrender.com/",
  baseURL: "http://62.72.58.26:3030",

  
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': 'true',
},
});

export default instance;
