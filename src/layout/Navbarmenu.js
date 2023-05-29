import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbarmenu() {
  return (
    <div style={{marginBottom:'50px'}}>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/">Main</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Store">Store</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/OurStory">OurStory</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Blog">Blog</Link>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-center">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/Cart">Carts</Link>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}
