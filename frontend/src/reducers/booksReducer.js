import { BOOKS_MORE_SOLD, BOOKS_GET_GERDER } from "../constants/booksContants";

function getBooksMoreSoldReducer(state = { books: [] }, action) {
  switch (action.type) {
    case BOOKS_MORE_SOLD:
      return { books: action.payload };
    default:
      return state;
  }
}
function getBooksForGerderReducer(state = { books: [] }, action) {
  switch (action.type) {
    case BOOKS_GET_GERDER:
      return { books: action.payload };
    default:
      return state;
  }
}
export { getBooksMoreSoldReducer, getBooksForGerderReducer };
