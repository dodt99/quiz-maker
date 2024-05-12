import axios from "axios";

export const api = axios.create({
  baseURL: "https://opentdb.com",
  timeout: 3000,
});

// interceptors
