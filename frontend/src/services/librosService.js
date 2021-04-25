import axios from "axios";
const env = "http://localhost:5000/";
const token = JSON.parse(localStorage.getItem("token"));

export const getLiBrosRomanticos = () => {};

export const getLibrosEducativos = () => {};

export const getLibrosAventura = () => {};

export const createLibro = () => {};

export const getBooksSold = async () => {
  const books = await axios.get(`${env}getMasVendidos`, {
    headers: { "x-access-token": token },
  });
  const data = books.data;
  console.log(data);

  return data;
};
