import axios from "axios"
import { DBCONNECTOR_USERNAME, DBCONNECTOR_PASSWORD } from "react-native-dotenv"
const dbconnector = axios.create({
  baseURL: "https://test-33024.botics.co/api/v1",
  auth: { username: DBCONNECTOR_USERNAME, password: DBCONNECTOR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
