import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import Button from "@material-ui/core/Button";
import "./booksSearchGener.css";

const BooksGerere = () => {
  const dispach = useDispatch();
  const books = useSelector((state) => state.getForGerder);

  const buyBook = () => {};

  console.log(books.books);
  return (
    <Fragment>
      {books.books.map((book) => (
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

export default BooksGerere;
