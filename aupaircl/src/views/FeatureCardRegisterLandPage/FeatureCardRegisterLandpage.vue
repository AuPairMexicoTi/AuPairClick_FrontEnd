<template>
    <b-container fluid class="my-4 px-0 mt-5 ps-5 pe-5" data-aos="fade-up"  data-aos-duration="1500">
      <b-row >
        <b-col md="6" class="mb-4" >
          <b-card class="custom-card text-center">
            <h3 class="card-title">{{ $t('forAuPair')}}</h3>
            <b-icon icon="globe" style="color: #00ECBB;" font-scale="2"></b-icon>
            <p class="card-text mt-3">{{ $t('infoAuPair') }}</p>
            <b-button class="btnBlue" >{{ $t('btnRegister') }}</b-button>
          </b-card>
        </b-col>
        <b-col md="6" class="mb-4" >
          <b-card class="custom-card text-center">
            <h3 class="card-title">{{ $t('forFamily') }}</h3>
            <b-icon icon="globe" style="color: #00ECBB;" font-scale="2"></b-icon>
            <p class="card-text mt-3">{{ $t('infoFamily') }}</p>
            <b-button class="btnBlue" >{{ $t('btnRegister') }}</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    name: "CustomCard",
    data() {
      return {
      };
    }
  };
  </script>
  
  <style scoped>
  .custom-card {
    border: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #00ECBB; 
}
  
  .card-text {
    font-size: 1rem;
    color: #666;
  }
  
  
  .b-icon {
    margin-top: 1rem;
  }
  </style>
  