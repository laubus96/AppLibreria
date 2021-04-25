import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./booksSearchGener.css";
import BooksMoreSold from "./BooksMoreSold";
import BooksGerere from "./BooksGerere";
import { getBooksForGerder } from "../../actions/booksActions";
const BooksSearchGenere = () => {
  const dispatch = useDispatch();

  const [gender, setGender] = useState({ gender: "" });
  const [isGenere, setIsGenere] = useState(false);
  const OnSubmitBooksForGender = (e) => {
    e.preventDefault();
    dispatch(getBooksForGerder(gender));
    setIsGenere(true);
    console.log(gender);
  };
  const OnChangeBooksForGender = (e) => {
    e.preventDefault();
    setGender({ ...gender, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 align-self-center">
          <div className="formSearchGenere">
            <form onSubmit={OnSubmitBooksForGender}>
              <div className="inputSearchGenere">
                <input
                  type="text"
                  name="gender"
                  onChange={OnChangeBooksForGender}
                  placeholder="Buscar libro por genero"></input>
                <Button
                  className="botonSearchGenere"
                  type="submit"
                  variant="contained"
                  color="secondary">
                  Buscar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        {!isGenere ? (
          <BooksMoreSold></BooksMoreSold>
        ) : (
          <BooksGerere></BooksGerere>
        )}
      </div>
    </div>
  );
};

export default BooksSearchGenere;
