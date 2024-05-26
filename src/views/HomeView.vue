<script setup>
import dataservice from "../services/dataservice.js";
import { ref } from "vue";

const persons = ref([]);
const personsAll = ref([]);
const actPage = ref(1);
const lastPage = ref();
const searchString = ref("")

dataservice
  .getAllPersonForRecords()
  .then((resp) => {
    personsAll.value = resp.data
  })
  .catch((err) => {
    console.log(err)
  })

dataservice
  .getAllPerson(1)
  .then((resp) => {
    persons.value = resp.data;
    lastPage.value = Math.ceil(resp.headers['x-total-count'] / 5)
    console.log(lastPage.value);
  })
  .catch((err) => {
    console.log(err);
  });

const lep = (hova, search) => {
  actPage.value = hova;
  dataservice
    .getAllPerson(hova, search)
    .then((resp) => {
      persons.value = resp.data;
      console.log(persons.value);
    })
    .catch((err) => {
      console.log(err);
    });
};


const keres = (search) => {
  actPage.value = 1
  dataservice
    .getAllPerson(1, search)
    .then((resp) => {
      persons.value = resp.data;
      lastPage.value = Math.ceil(resp.headers['x-total-count'] / 5)
      console.log(persons.value);
    })
    .catch((err) => {
      console.log(err);
    });
}

</script>

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
            <router-link class="nav-link text-warning" to="/">Írók</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/elerhetoseg">Elérhetőség</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="input-group input-group-lg my-3" style="width: 40%; margin:auto;">
    <span class="input-group-text">Filter</span>
    <input type="text" v-model="searchString" @keyup="keres(searchString)" placeholder="on" class="form-control">
  </div>

  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" v-if="actPage != 1">
        <a @click="lep(1)" class="page-link" href="#">First</a>
      </li>
      <li class="page-item" v-if="actPage > 1">
        <a @click="lep(actPage - 1, searchString)" class="page-link" href="#">Previous</a>
      </li>
      <li class="page-item" v-if="actPage > 1">
        <a @click="lep(actPage - 1, searchString)" class="page-link" href="#">{{
          actPage - 1
          }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">{{ actPage }}</a>
      </li>
      <li class="page-item" v-if="actPage < lastPage">
        <a @click="lep(actPage + 1, searchString)" class="page-link" href="#">{{
          actPage + 1
          }}</a>
      </li>
      <li class="page-item" v-if="actPage < lastPage">
        <a @click="lep(actPage + 1, searchString)" class="page-link" href="#">Next</a>
      </li>
      <li class="page-item" v-if="actPage != lastPage">
        <a @click="lep(lastPage)" class="page-link" href="#">Last</a>
      </li>
    </ul>
  </nav>

  <div class="row" style="width: 80%; margin: auto;">
  <div class="container text-center col-md-4 my-4" v-for="person in persons">
      <div class="col-md-10 my-4">
        <div class="card text-center">
          <div class="card-header bg-info fw-bold">
            {{ person.szemely }}
          </div>
          <div class="card-body bg-warning">
            <p class="card-text fw-bold">{{ person.orszag.orszag }}</p>
          </div>
          <div class="card-footer bg-info fw-bold">
            {{ person.ev }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="bg-primary fixed-bottom">
    <p class="text-center text-white fs-3">Number of total records: {{ personsAll.length }}</p>
  </footer>
</template>
