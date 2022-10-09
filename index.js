import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

const books = [
  {
    id : "1",
    img : "https://m.media-amazon.com/images/I/81HAu7GTkhL._AC_UL480_FMwebp_QL65_.jpg",
    title : "The Art Of Saying NO",
    author : "Damon zahariades"
  },
  {
    id : "2",
    img : "https://m.media-amazon.com/images/I/71gfBC95RIL._AC_UL480_FMwebp_QL65_.jpg",
    title : "Do It Today",
    author : "Darius foroux"
  },
  {
    id : "3",
    img : "https://m.media-amazon.com/images/I/81JByBEqw+S._AC_UY327_FMwebp_QL65_.jpg",
    title : "The power of positive attitude",
    author : "Roger fritz"
  },
  {
    id : "4",
    img : "https://m.media-amazon.com/images/I/81V-0E86iyL._AC_UL480_FMwebp_QL65_.jpg",
    title : "50 Greatest Short Stories",
    author : "Terry O'brien"
  },
  {
    id : "5",
    img : "https://m.media-amazon.com/images/I/91BM3gRz7vL._AC_UL480_FMwebp_QL65_.jpg",
    title : "The Monk Who Sold His Ferrari",
    author : "Robin sharma"
  },
  {
  id : "6",
  img : "https://m.media-amazon.com/images/I/81ZLwAwD-ML._AC_UY327_FMwebp_QL65_.jpg",
  title : "Rich dad and poor dad",
  author : "Robert t.kiyosaki"
},
{
id : "7",
img : "https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY327_FMwebp_QL65_.jpg",
title : "You can",
author : "Matthew adamzs"
},
{
id : "8",
img : "https://m.media-amazon.com/images/I/71+n2VSAiXS._AC_UY327_FMwebp_QL65_.jpg",
title : "The time machine",
author : "H.G wells"
},
{
id : "9",
img : "https://m.media-amazon.com/images/I/91xafByFlLL._AC_UY327_FMwebp_QL65_.jpg://m.media-amazon.com/images/I/91BM3gRz7vL._AC_UL480_FMwebp_QL65_.jpg",
title : "Karma",
author : "Sadhguru"
},
{
id : "10",
img : "https://m.media-amazon.com/images/I/81m9fP+LIPL._AC_UL480_FMwebp_QL65_.jpg",
title : "Harry Potter and the Philosopher's Stone",
author : "J.K rowling"
},
];

function BookList() {
  return(
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} key={book.id} ></Book>;
      })}

    </section>
  );
}
const Book = (props) => {
  const {img, title, author}=props.book;
  const clickHandler = () => {
    console.log("Hello you clicked me!");
  };
  return(
    <article className='book'>
      <img src={img} alt=''/>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={clickHandler}>Click here</button>
    </article>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);