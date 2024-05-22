<template>
    <div>
      <b-container fluid>
        <b-row class="row">
          <Header />
        </b-row>
        <div class="d-flex flex-column text-center">
          <b-col class="col">
            <div class="">
              <router-view />
            </div>
          </b-col>
          <b-col class="col-12">
            <b-container fluid>
              <Footer/>
            </b-container>
          </b-col>
        </div>
      </b-container>
    </div>
  </template>
  
  <script>
  import Footer from '../components/Footer/Footer.vue';
  import Header from '../components/Header/Header.vue';
  export default {
    data() {
      return {
      }
    }, components: {
      Footer, Header
    }
  }
  </script>