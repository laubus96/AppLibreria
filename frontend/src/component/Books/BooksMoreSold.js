import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookMoreSold } from "../../actions/booksActions";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@material-ui/core/Button";
import "./booksSearchGener.css";
const BooksMoreSold = () => {
  const dispach = useDispatch();
  useEffect(() => {
    dispach(getBookMoreSold());
    return () => {};
  }, []);
  const buyBook = () => {};
  const booksMoreSold = useSelector((state) => state.getMoreSold);
  console.log(booksMoreSold.books);
  return (
    <Fragment>
      {booksMoreSold.books.map((book) => (
        <div className="col-md-3 p-2">
          <div className="card card-body  ">
            <img className="" src={book.url} alt=""></img>
            <div className="nomBook">
              <p>{book.name}</p>
            </div>
            <div className="precioBooks">
              <p>${book.precio}</p>
            </div>
            <div className="buttonn">
              <Button
                type="button"
                color="secondary"
                variant="contained"
                startIcon={<></>}
                onClick={buyBook}>
                Comprar libro
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default BooksMoreSold;
