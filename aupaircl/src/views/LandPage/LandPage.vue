<template>
  <div>
    <!-- Hero Section -->
    
    <div class="container hero">
      <div class="hero-overlay">
        <h1 class="display-3 mb-4">Bienvenido a AuPairClick</h1>
        <p class="lead mb-4">Encuentra tu au pair o familia anfitriona ideal</p>
        <b-button variant="primary" href="#" class="me-3 btn-empezar">Encontrar una familia</b-button>
        <b-button variant="outline-primary" href="#" class="btn-mas-info">Encontrar un Au Pair</b-button>
      </div>
    </div>

    <!-- Features Section -->
    <b-container class="mt-5">
      <b-row>
        <b-col md="4" class="text-center">
          <b-icon icon="people" variant="primary" font-scale="3"></b-icon>
          <h4>Encuentra Au Pairs</h4>
          <p>Conecta con au pairs de todo el mundo y vive una experiencia intercultural única.</p>
        </b-col>
        <b-col md="4" class="text-center">
          <b-icon icon="house-door" variant="primary" font-scale="3"></b-icon>
          <h4>Familias Anfitrionas</h4>
          <p>Busca familias anfitrionas que te den la bienvenida y te ofrezcan un hogar en el extranjero.</p>
        </b-col>
        <b-col md="4" class="text-center">
          <b-icon icon="globe" variant="primary" font-scale="3"></b-icon>
          <h4>21 Países</h4>
          <p>Descubre programas de au pair en 21 países diferentes y encuentra el destino perfecto para ti.</p>
        </b-col>
      </b-row>
    </b-container>
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
  width: 100vw;
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
}

.hero-overlay p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.btn-empezar,
.btn-mas-info {
  font-size: 1.25rem;
  padding: 0.75rem 2rem;
}

.btn-mas-info {
  border-color: #fff;
  color: #fff;
}

.btn-mas-info:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

</style>
