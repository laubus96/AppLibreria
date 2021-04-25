import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookMoreSold } from "../../actions/booksActions";
import Button from "@material-ui/core/Button";
import "./moreSold.css";
const MoreSold = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getBookMoreSold());
    return () => {};
  }, []);
  const buyBook = () => {};
  const booksMoreSold = useSelector((state) => state.getMoreSold);
  console.log(booksMoreSold.books);

  return (
    <div className="sliderVendidos">
      <ul>
        {booksMoreSold.books.map((book) => (
          <li key={book._id}>
            <img className="imagenesSilderVendidos" src={book.url} alt=""></img>
            <div className="nomBook">
              <p>{book.name}</p>
            </div>
            <div className="precioBook">
              <p>${book.precio}</p>
            </div>
            <div>
              <Button
                type="button"
                color="secondary"
                variant="contained"
                startIcon={<></>}
                onClick={buyBook}>
                Comprar libro
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreSold;
