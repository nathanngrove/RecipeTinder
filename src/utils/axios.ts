import axios, { AxiosInstance } from "axios";

export let api: AxiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/",
  params: { apiKey: process.env.API_KEY }
});

module.exports = { api };