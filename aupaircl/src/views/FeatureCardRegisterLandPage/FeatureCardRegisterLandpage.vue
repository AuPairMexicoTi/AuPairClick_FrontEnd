<template>
    <b-container fluid class="my-4 px-0 mt-5 ps-5 pe-5" data-aos="fade-up">
      <b-row >
        <b-col md="6" class="mb-4" v-for="(card, index) in cards" :key="index">
          <b-card class="custom-card text-center">
            <h3 class="card-title">{{ card.title }}</h3>
            <b-icon icon="globe" style="color: #00ECBB;" font-scale="2"></b-icon>
            <p class="card-text mt-3">{{ card.text }}</p>
            <b-button class="btnBlue" >{{ card.buttonText }}</b-button>
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
        cards: [
          {
            title: "Para Au Pairs",
            text: "Vive con una familia en el país de tus sueños y ayúdalos con el cuidado de los niños. Aprende otro idioma, conoce otro país y diviértete mucho viajando.",
            buttonText: "Regístrate"
          },
          {
            title: "Para Familias",
            text: "Vive con una familia en el país de tus sueños y ayúdalos con el cuidado de los niños. Aprende otro idioma, conoce otro país y diviértete mucho viajando.",
            buttonText: "Regístrate"
          }
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
  