import { useState } from "react";
import booksData from "../../../Utils/books.js";

export default function Product() {
  const [books, setBooks] = useState(booksData);

  const handleAddBook = () => {
    const dummyTitles = ["Kisah dari Antah Berantah", "Petualangan di Negeri Awan", "Misteri Hujan"];
    const dummyAuthors = ["Penulis Acak", "Pengarang Imajinatif", "Novelis Misterius"];
    
    const randomTitle = dummyTitles[Math.floor(Math.random() * dummyTitles.length)];
    const randomAuthor = dummyAuthors[Math.floor(Math.random() * dummyAuthors.length)];

    const newBook = {
        id: books.length + 1,
        title: randomTitle,
        author: randomAuthor,
        year: 2025,
        description: "Deskripsi untuk buku yang baru ditambahkan.",
        image: "https://picsum.photos/200/300?random=" + books.length,
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    alert("Buku baru (" + randomTitle + ") berhasil ditambahkan!");
};

  return (
    <>
      <section id="Book" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Take a look at our Book of books that might interest you
            </p>
            <p>
              <button
                onClick={handleAddBook}
                className="btn btn-primary my-2 m-2"
              >
                Tambah Buku Baru
              </button>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">
                      {book.author} ({book.year})
                    </p>
                    <p className="card-text flex-grow-1">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
