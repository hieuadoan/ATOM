import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* Container wrapper */}
            <div className="container-fluid">
                {/* Navbar brand */}
                <a className="navbar-brand" href="/">
                    ATOM
                </a>

                {/* Toggle button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars text-light"></i>
                </button>

                {/* Collapsible wrapper */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left links */}
                    <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <a className="nav-link active" aria-current="page" href="/">
                                <div>
                                    <i className="fas fa-home fa-lg mb-1"></i>
                                </div>
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <a className="nav-link" href="/simulations">
                                <div>
                                    <i className="fas fa-flask fa-lg mb-1"></i>
                                </div>
                                Simulations
                            </a>
                        </li>
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <a className="nav-link" href="/mlmodels">
                                <div>
                                    <i className="fas fa-robot fa-lg mb-1"></i>
                                </div>
                                ML Models
                            </a>
                        </li>
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <a className="nav-link" href="/datasets">
                                <div>
                                    <i className="fas fa-database fa-lg mb-1"></i>
                                </div>
                                Datasets
                            </a>
                        </li>
                    </ul>
                    {/* Left links */}

                    {/* Right links */}
                    {/*<ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <a className="nav-link" href="#!">
                                <div>
                                    <i className="fas fa-bell fa-lg mb-1"></i>
                                    <span className="badge rounded-pill badge-notification bg-info">3</span>
                                </div>
                                Notifications
                            </a>
                        </li>
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <a className="nav-link" href="#!">
                                <div>
                                    <i className="fas fa-globe-americas fa-lg mb-1"></i>
                                </div>
                                Updates
                            </a>
                        </li>
                    </ul>
					*/}
                    {/* Right links */}

                    {/* Search form */}
                    <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                            Search
                        </button>
                    </form>
                </div>
                {/* Collapsible wrapper */}
            </div>
            {/* Container wrapper */}
        </nav>
    );
}

export default Navbar;
