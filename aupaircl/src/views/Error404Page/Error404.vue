<template>
    <b-container class="error-container">
      <img
        src="https://images.ecestaticos.com/NEeSJlJnwnejmxPaTic9945dFlU=/0x70:1279x740/600x315/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F594%2F379%2Ff8c%2F594379f8cd2d1cc77d09113d43bafb47.jpg"
        alt="Error Image"
        class="error-image"
      />
      <div class="error-text">
        <h1>Ooooooops! Pagina no encontrada</h1>
        <p>
          Debes haber elegido un lugar equivocado porque no he podido encontrar la
          pagina que estas buscando.
        </p>
        <b-button @click="back" class="r-button">Regresar</b-button>
      </div>
    </b-container>
  </template>
  
  <style>
  .error-container {
      margin-top: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
  .error-image {
    width: 270px;
    height: 250px;
    margin-right: 20px;
    border-radius: 50%;
  }
  
  .error-text {
    max-width: 400px;
    text-align: left;
  }
  </style>
  
  <script>
  export default {
    methods: {
      back() {
      
          window.location.href = "/";
      },
    },
  };
  </script>