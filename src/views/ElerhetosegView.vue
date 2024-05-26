<template>
  <nav class="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Nobeldíjas írók
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- <a class="nav-link" href="index.html">Írók</a> -->
            <router-link class="nav-link" to="/">Írók</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="elerhetoseg.html">Elérhetőség</a> -->
            <router-link class="nav-link text-warning" to="/elerhetoseg">Elérhetőség</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <h1 class="text-center">Elérhetőség</h1>
</template>