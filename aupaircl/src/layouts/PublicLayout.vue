<template>
    <div>
      <b-container fluid>
        <b-row class="row">
          <Header />
        </b-row>
        <div class="main-content d-flex flex-column text-center">
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
  <style scoped>
  .main-content {
    margin-top: 65px;
  }
  @media (max-width: 30em) {
    .main-content{
      margin-top: 67px;
    }
  }
  </style>