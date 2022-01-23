import axios from "axios"
const newdbconnector = axios.create({
  baseURL: "https://techtest-33094.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
