import { useEffect, useState } from "react";
import "./App.css";
import { AttributeForm } from "./components/AttributeForm";


function App() {

    const booksIni = [
      {   id: Date.now()-6,  name: 'Лев Толстой «Война и мир»' },
      {   id: Date.now()-5,  name: 'Джордж Оруэлл «1984»'     },
      {   id: Date.now()-4,  name: 'Джеймс Джойс «Улисс»' },
      {   id: Date.now()-3,  name: 'Владимир Набоков «Лолита»'     },
      {   id: Date.now()-2,  name: 'Уильям Фолкнер «Звук и ярость»' },
      {   id: Date.now()-1,  name: 'Ральф Эллисон «Человек-невидимка»' },
  ];


  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || booksIni);
  const [addedBook, setAddedBook] = useState({});


  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books, books.length]);

 
  function onAddBook(event) {
    event.preventDefault();

    if (addedBook.name.trim()) {
      setBooks([...books, addedBook]);
      setAddedBook({
        name: '',
      });
    }
  }

  function onInputBook(event) {
    setAddedBook({
      id: Date.now(),
      name: event.target.value,
    });
  }

  return (
    <>
      <div>
        <AttributeForm title='Атрибут' />
      </div>
      <form>
        <p>Книги</p>
        <input  type="text" value={addedBook.name} onChange={onInputBook}></input>
        <button onClick={onAddBook}>Добавить книгу</button>
      </form>
      <ul>
        {books?.length > 0 && books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </>
  )
}

export default App
