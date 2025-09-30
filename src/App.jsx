import './App.css'

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
        {/* Logo */}
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex align-items-center text-decoration-none">
            <i className="fa-solid fa-book" style={{ color: '#ff5900ff' }}></i>
            <span className="ms-2 fs-5">Nexus</span>
          </a>
        </div>

        {/* Navigation */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#Home" className="nav-link px-2">Home</a></li>
          <li><a href="#Collection" className="nav-link px-2">Collection</a></li>
          <li><a href="#Team" className="nav-link px-2">Team</a></li>
          <li><a href="#Contact" className="nav-link px-2">Contact</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-danger">Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container my-4">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-4 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="fw-bold lh-1 text-body-emphasis fs-2">
              IKIGAI: The thing that makes life worth living
            </h1>
            <p className="lead">
              Easy and approved way for developing good habits and getting rid of bad habits
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-3">
              <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 fw-bold">
                Buy Now!
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Detail
              </button>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://picsum.photos/720/600"
              alt="Hero"
              width="720"
            />
          </div>
        </div>
      </div>

      {/*Product List */}
      <section id="Collection"class="py-5 text-center container ">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Best Seller</h1>
            <p class="lead text-body-secondary">
              Take a look at our collection of books that might interest you
            </p>
            <p>
              <a href="#" class="btn btn-primary my-2 m-2">Views</a>
              <a href="#" class="btn btn-secondary my-2">Other Books</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">

            <div className="col">
              <div className="card shadow-sm">
                <img src="https://m.media-amazon.com/images/I/41ppnxE9o7L._UY399_FMwebp_.jpg?aicid=books-design-system-web" className="card-img-top" alt="Product" />
                <div className="card-body">
                  <p className="card-text">
                    Cold Iron Task (The Unorthodox Chronicles Book 3)
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="https://m.media-amazon.com/images/I/51GZVpGKCCL._UY399_FMwebp_.jpg?aicid=books-design-system-web" className="card-img-top" alt="Product" />
                <div className="card-body">
                  <p className="card-text">
                    The Wisdom of Crowds (The Age of Madness Book 3)
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="https://m.media-amazon.com/images/I/511w8hrB0yL._UY399_FMwebp_.jpg?aicid=books-design-system-web" className="card-img-top" alt="Product" />
                <div className="card-body">
                  <p className="card-text">
                    Somewhere Beyond the Sea (Cerulean Chronicles Book 2)
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="https://m.media-amazon.com/images/I/51XEqpFQKwL._UY399_FMwebp_.jpg?aicid=books-design-system-web" className="card-img-top" alt="Product" />
                <div className="card-body">
                  <p className="card-text">
                    The Narrow Road Between Desires (Kingkiller Chronicle)
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="https://m.media-amazon.com/images/I/51TtGx26RlL._UY399_FMwebp_.jpg?aicid=books-design-system-web" className="card-img-top" alt="Product" />
                <div className="card-body">
                  <p className="card-text">
                    False Value (Rivers of London Book 8)
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="https://m.media-amazon.com/images/I/51CJO1oypeL._UY399_FMwebp_.jpg?aicid=books-design-system-web" className="card-img-top" alt="Product" />
                <div className="card-body">
                  <p className="card-text">
                    Lies Sleeping (Rivers of London Book 7)
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Team Section */}
      <section id="Team" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Team</h2>
          <p className="text-body-secondary">Meet the people behind Bookstore</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm text-center">
              <img src="src/assets/img/Guy.jpg" className="card-img-top rounded-circle p-2" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">Guy</h5>
                <p className="card-text text-body-secondary">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm text-center">
              <img src="src/assets/img/Girl.jpeg" className="card-img-top rounded-circle p-3" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">Lady</h5>
                <p className="card-text text-body-secondary">Lead Designer</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm text-center">
              <img src="src/assets/img/BlackGuy.jpg" className="card-img-top rounded-circle p-3" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">Black Guy</h5>
                <p className="card-text text-body-secondary">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-body-secondary">We’d love to hear from you</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form className="p-4 border rounded-3 shadow-sm bg-light">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" rows="4" placeholder="Write your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h5>Address</h5>
              <p>123 Book Street, Jakarta, Indonesia</p>
              <h5>Email</h5>
              <p>support@bookstore.com</p>
              <h5>Phone</h5>
              <p>+62 812-3456-7890</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <p className="col-md-4 mb-0">&copy; 2025 Dika</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">Features</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">FAQs</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">About</a>
          </li>
        </ul>
      </footer>
    </div>


    </div>
  )
}

export default App
