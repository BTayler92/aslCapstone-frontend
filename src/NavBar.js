import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        ASL 2 Go
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/abc"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    ABC's
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/numbers"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Numbers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/numset"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Number Sets
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/signs"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Signs
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    to="/signs"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Select Support Type Below
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            to="/request"
                                            className="nav-link active"
                                        >
                                            Make a Request
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/requestcheck"
                                            className="nav-link active"
                                        >
                                            Request Checker
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact"
                                            className="nav-link active"
                                        >
                                            Contact Me
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search Everything!"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
