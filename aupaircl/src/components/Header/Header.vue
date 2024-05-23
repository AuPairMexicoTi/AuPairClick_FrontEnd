<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light shadow bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: '/' }">
        <img :src="logo" alt="Logo" width="74" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
          <!-- Dropdowns -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="auPairDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Para Au Pairs
            </a>
            <ul class="dropdown-menu" aria-labelledby="auPairDropdown">
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Página principal</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Encuentra una familia</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Glosario</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Historias de Au Pairs</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="familiesDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Para Familias
            </a>
            <ul class="dropdown-menu" aria-labelledby="familiesDropdown">
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Página principal</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Glosario</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Acerca de AuPairClick
            </a>
            <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Acerca de Nosotros</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Cómo trabajamos</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Preguntas frecuentes</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">Referencias</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-3" :to="{ name: '/' }">Contacto</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-3" :to="{ name: '/' }">Entrar</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Idioma
            </a>
            <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
              <li><router-link class="dropdown-item">Español</router-link></li>
              <li><router-link class="dropdown-item">Ingles</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logo: "https://www.amaap.com.mx/assets/images/agencias/image001.png",
    };
  },
};
</script>

<style scoped>
.header-fixed {
  z-index: 3;
}
</style>
