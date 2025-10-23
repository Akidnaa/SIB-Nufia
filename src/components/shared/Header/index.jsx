import { Link } from "react-router";

export default function Header() {
    return (
        <>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
             <a href="/" className="d-inline-flex align-items-center text-decoration-none">
                <i className="fa-solid fa-book" style={{ color: '#ff5900ff' }}></i>
                <span className="ms-2 fs-5">Nexus</span>
             </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
             <li><Link to="/" className="nav-link px-2">Home</Link></li>
             <li><Link to="/Collection" className="nav-link px-2">Collection</Link></li>
             <li><Link to="/Teams" className="nav-link px-2">Team</Link></li>
             <li><Link to="/Contacts" className="nav-link px-2">Contact</Link></li>
            </ul>

            <div className="col-md-3 text-end">
             <Link to="/Login">
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
             </Link>
             <Link to="/Register">
                <button type="button" className="btn btn-danger">Register</button>
             </Link>
            </div>
        </header>

        </>
    )
}