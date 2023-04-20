import React, { useState } from 'react'

import { Link } from 'react-router-dom'
export default function Navbar(props) {
    var [search, setsearch] = useState("")
    function getSearch(e) {
        setsearch(e.target.value)
    }
    function postSearch(e) {
        e.preventDefault()
        props.changeSearch(search)
        setsearch("")
    }
    return (
        <nav className="navbar navbar-expand-lg background sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/" onClick={() =>props.changeSearch("")}>NewsApp</Link>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list text-light fs-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light active" aria-current="page" to="/" onClick={() =>props.changeSearch("")}>All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Politics">Politics</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Other Category
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/Sports" onClick={() =>props.changeSearch("")}>Sports</Link></li>
                                <li><Link className="dropdown-item" to="/Science" onClick={() =>props.changeSearch("")}>Science</Link></li>
                                <li><Link className="dropdown-item" to="/Technology" onClick={() =>props.changeSearch("")}>Technology</Link></li>
                                <li><Link className="dropdown-item" to="/Education" onClick={() =>props.changeSearch("")}>Education</Link></li>
                                <li><Link className="dropdown-item" to="/Entertainment" onClick={() =>props.changeSearch("")}>Entertainment</Link></li>
                                <li><Link className="dropdown-item" to="/Covid-19" onClick={() =>props.changeSearch("")}>Covid-19</Link></li>
                                <li><Link className="dropdown-item" to="/World" onClick={() =>props.changeSearch("")}>World</Link></li>
                                <li><Link className="dropdown-item" to="/Cricket" onClick={() =>props.changeSearch("")}>Cricket</Link></li>
                                <li><Link className="dropdown-item" to="/ICC-WCT20" onClick={() =>props.changeSearch("")}>ICC WCT20</Link></li>
                                <li><Link className="dropdown-item" to="/Jokes" onClick={() =>props.changeSearch("")}>Jokes</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Language
                            </Link>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => props.changeLanguage('hi')}>Hindi</button></li>
                                <li><button className="dropdown-item" onClick={() => props.changeLanguage('en')}>English</button></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Articles Size
                            </Link>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() =>props.changeSize(8)}>8</button></li>
                                <li><button className="dropdown-item" onClick={() =>props.changeSize(12)}>12</button></li>
                                <li><button className="dropdown-item" onClick={() =>props.changeSize(16)}>16</button></li>
                                <li><button className="dropdown-item" onClick={() =>props.changeSize(20)}>20</button></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={postSearch}>
                        <input className="form-control me-2" type="search" name='search' onChange={getSearch} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
