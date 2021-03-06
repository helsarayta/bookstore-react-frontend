import React from "react";
import { useState } from "react";

function ManajemenBuku({ bookList, store, update, remove }) {
  const [inputBook, setInputBook] = useState();
  const [form, setForm] = useState();

  function deleteBook(book) {
    remove(book);
  }

  function submitChange(event) {
    event.preventDefault();
    update(inputBook);
    setForm("");
  }

  function showEdit(book) {
    setInputBook(book);
    setForm("edit");
  }

  function showCreate(event) {
    setForm("create");
  }
  function handleJudul(event) {
    setInputBook({ ...inputBook, judul: event.target.value });
  }
  function handlePengarang(event) {
    setInputBook({ ...inputBook, pengarang: event.target.value });
  }
  function handleHarga(event) {
    setInputBook({ ...inputBook, harga: event.target.value });
  }
  function handleStok(event) {
    setInputBook({ ...inputBook, stok: event.target.value });
  }
  function submitAdd(event) {
    event.preventDefault();
    store(inputBook);
  }

  //data
  //eventHandling
  return (
    <div className="container mt-3">
      <h1 className="text-center">Book Management</h1>

      {/* Ini Form Buat Tambah BUKU */}
      {form === "create" && (
        <div id="formTambah">
          <h5>Add Book</h5>
          <hr />
          <form action="" className="form-row" onSubmit={submitAdd}>
            <div className="col-3">
              <input
                type="text"
                name="judul"
                className="form-control mx-2 mt-3"
                placeholder="Title"
                onChange={handleJudul}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="pengarang"
                className="form-control mx-2 mt-2"
                placeholder="Author"
                onChange={handlePengarang}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="harga"
                className="form-control mx-2 mt-2"
                placeholder="Price"
                onChange={handleHarga}
              />
            </div>
            <div className="col-3">
              <input
                type="number"
                name="stok"
                className="form-control mx-2 mt-2"
                placeholder="Stock"
                onChange={handleStok}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                name="judul"
                className="btn btn-primary ml-5 mt-3"
                value="Save"
              />
            </div>
          </form>
        </div>
      )}

      {form === "edit" && (
        <div id="formUbah" onSubmit={submitChange}>
          <h5>Update Book</h5>
          <hr />
          <form action="" className="form-row">
            <div className="col-3">
              <input
                type="text"
                name="judul"
                className="form-control mx-2 mt-2"
                placeholder="Title"
                onChange={handleJudul}
                value={inputBook.judul}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="pengarang"
                className="form-control mx-2 mt-2"
                placeholder="Author"
                onChange={handlePengarang}
                value={inputBook.pengarang}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="harga"
                className="form-control mx-2 mt-2"
                placeholder="Price"
                onChange={handleHarga}
                value={inputBook.harga}
              />
            </div>
            <div className="col-3">
              <input
                type="number"
                name="stok"
                className="form-control mx-2 mt-2"
                placeholder="Stock"
                onChange={handleStok}
                value={inputBook.stok}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-warning ml-5 mt-3"
                value="Update"
              />
            </div>
          </form>
        </div>
      )}

      <div id="daftarBuku">
        <h2 className="mt-3">Book List</h2>
        <hr />
        <button className="btn btn-primary m-2" onClick={showCreate}>
          Add Book
        </button>
        <table className="table table-bordered">
          {/* Ini MENU di Tabel */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Ini Isi Tabel. map untuk looping */}
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stok}</td>
                <td>
                  <button
                    className="btn btn-info me-3"
                    onClick={() => showEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBook(book)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManajemenBuku;
