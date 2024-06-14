<template>
    <b-container fluid class="my-4 mt-5 px-0">
      <b-row data-aos="fade-right">
        <b-col>
          <b-card no-body class="shadow custom-card">
            <b-row no-gutters>
              <b-col md="7" class="d-flex align-items-center text-start">
                <b-card-body class="p-5" >
                  <h3 class="card-title">{{$t('customSearch')}}</h3>
                  <p class="card-text">{{ $t('easySearch') }}</p>
                  <b-button class="b-button1">{{ $t('moreInformation') }}</b-button>
                </b-card-body>
              </b-col>
              <b-col md="4">
                <b-img :src="imgCard1" alt="experiencia" class="img-fluid" rounded></b-img>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-5" data-aos="fade-left">
        <b-col>
          <b-card no-body class="shadow custom-card2">
            <b-row no-gutters>
              <b-col md="4">
                <b-img :src="imgCard2" alt="vivencia" class="img-fluid" rounded></b-img>
              </b-col>
              <b-col md="7" class="d-flex align-items-center text-end">
                <b-card-body class="p-5" >
                  <h3 class="card2-title">{{ $t('decideYourself') }}</h3>
                  <p class="card2-text">{{ $t( 'selecctionBig') }}</p>
                  <b-button class="b-button2">{{ $t('moreInformation') }}</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import img2 from "../../assets/images/2.jpg";
  import img3 from "../../assets/images/3.jpg";
  export default {
    name: "CustomCard",
    data() {
      return {
        imgCard1: img2,
        imgCard2:img3
      };
    },
  };
  </script>
  
  <style scoped>
  .custom-card {
    border: none;
    border-radius: 15px;
    overflow: hidden;
  }
  
  .card-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #FF4300;
  }
  
  .card-text {
    font-size: 1.5rem;
    color: #666;
  }
  
  .b-button1 {
    background-color: #FF4300;
    border: none;
    font-weight: bold;
  }
  
  .b-button1:hover {
    background-color: #E64A19;
  }
  .custom-card2 {
    border: none;
    border-radius: 15px;
    overflow: hidden;
  }
  
  .card2-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #FEC831;
  }
  
  .card2-text {
    font-size: 1.5rem;
    color: #666;
  }
  
  .b-button2 {
    background-color: #FEC831;
    border: none;
    font-weight: bold;
  }
  
  .b-button2:hover {
    background-color: #FEC831;
  }
  .b-card-body {
    padding: 2rem;
  }
  </style>
  