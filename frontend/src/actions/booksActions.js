import axios from "axios";
import { BOOKS_MORE_SOLD, BOOKS_GET_GERDER } from "../constants/booksContants";
const env = "http://localhost:5000/";

const getBookMoreSold = () => async (dispach, getState) => {
  const { singinUser: data } = getState();
  const books = await axios.get(`${env}getMasVendidos`, {
    headers: { "x-access-token": data.token },
  });
  const datas = books.data;
  console.log(data);
  dispach({ type: BOOKS_MORE_SOLD, payload: datas });
};

const getBooksForGerder = (gender) => async (dispach, getState) => {
  const { singinUser: data } = getState();
  const books = await axios.get(`${env}bookGenero/${gender.gender}`, {
    headers: { "x-access-token": data.token },
  });
  const datas = books.data;
  console.log(datas);
  dispach({ type: BOOKS_GET_GERDER, payload: datas });
};

export { getBookMoreSold, getBooksForGerder };
