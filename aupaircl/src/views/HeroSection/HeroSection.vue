<template>
    <div class="hero">
      <div class="hero-overlay container">
        <h1 class="display-3 mb-4">Bienvenido a AuPairClick</h1>
        <p class="lead mb-4">Encuentra tu au pair o familia anfitriona ideal</p>
        <b-button variant="primary" href="#" class="me-3 btn-empezar">Encontrar una familia</b-button>
        <b-button variant="outline-primary" href="#" class="btn-mas-info">Encontrar un Au Pair</b-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    height: 60vh;
    width: 98vw;
    background: url('https://blog-api.culturalcare.world//app/uploads/sites/12/2019/02/buddy-header.jpg') no-repeat center center;
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

  }
  
  .hero-overlay {
    text-align: center;
  }
  
  .hero-overlay h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeIn 1s;
  }
  
  .hero-overlay p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    animation: fadeIn 1.5s;
  }

  .btn-empezar,
  .btn-mas-info {
    font-size: 1.25rem;
    padding: 0.75rem 2rem;
    animation: fadeIn 1.5s;
   
  }
  @media (max-width: 30em) {
    .btn-empezar,.btn-mas-info{
        margin: 1rem 1rem;;
    }
  }
  .btn-mas-info {
    border-color: #fff;
    color: #fff;
  }
  
  .btn-mas-info:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  </style>
  