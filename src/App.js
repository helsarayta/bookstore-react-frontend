import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./components/navbar";
import ManajemenBuku from "./components/ManajemenBuku";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        console.log(response);
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteData(book) {
    // console.log(inputBook);
    // alert("Data Berhasil Dihapus!");

    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then((res) => {
        retrieveData();
        alert("Data Berhasil Dihapus!");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  
  function storeData(inputBook) {
    // console.log(inputBook);
    // alert("Data Berhasil Ditambahkan!");
    axios
      .post("http://localhost:4000/book/add", inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert("Data Berhasil Ditambahkan !");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  function updateData(inputBook) {
    // console.log(inputBook);
    // alert("Data Berhasil Diperbaharui!");

    axios
      .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
      .then((res) => {
        retrieveData();
        alert("Data Berhasil Diperbarui!");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books} />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku
              bookList={books}
              store={storeData}
              update={updateData}
              remove={deleteData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
