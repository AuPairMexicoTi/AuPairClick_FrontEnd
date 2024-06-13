<template>
    <b-container fluid class="my-4 px-0" data-aos="fade-up">
      <b-card no-body class="custom-card">
        <b-card-body class="text-center">
          <h3 class="card-title">Los programas au pair por países</h3>
          <b-row class="mt-3">
            <b-col md="2" v-for="(country, index) in countries" :key="index" class="d-flex align-items-stretch">
              <b-card class="country-card text-white">
                <b-img :src="country.image" alt="Imagen" class="img-fluid rounded"></b-img>
                <div class="country-overlay">
                  <h5 class="country-name">{{ country.name }}</h5>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-container>
  </template>
  
  <script>
  
  export default {
    name: "CountryPrograms",
    data() {
      return {  
        countries: [
          { name: "USA", image: "https://okdiario.com/img/2022/08/20/austin-655x368.jpg" },
          { name: "Francia", image: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg" },
          { name: "España", image: "https://www.losviajesdegrimes.com/wp-content/uploads/2020/06/viajar-por-Espa%C3%B1a.jpg" },
          { name: "Inglaterra", image: "https://vagaspelomundo.com.br/wp-content/uploads/2022/10/como-morar-na-inglaterra.jpg" },
          { name: "China", image: "https://miro.medium.com/v2/resize:fit:10670/1*0DLP1bcAkc7LFq-PO--8kg.jpeg" },
          { name: "Más Países", image: "https://www.shutterstock.com/image-photo/world-travel-collage-destination-photos-600nw-2400796071.jpg" }
        ]
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
    color: #4F04E1; /* Adjust the color to match the one in the image */
  }
  
  .country-card {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    padding: 0;
    border: none;
    background: none;
  }
  
  .country-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    /* background: rgba(0, 0, 0, 0.5); */
    color: white;
    text-align: center;
  }
  
  .country-name {
    margin: 0;
  }
  
  .img-fluid {
    border-radius: 15px;
    max-height: 100px;
  }
  </style>
  