<template>
  <b-nav class="navbar navbar-expand-lg shadow">
    <b-container fluid>
      <b-link class="navbar-brand" :to="{ name: '/' }">
        <img :src="logo" alt="Logo" width="74" />
      </b-link>
      <b-button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </b-button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <b-navbar-nav class="ms-auto">
          <!-- Dropdowns -->
          <b-nav-item-dropdown text="Para Au Pairs" right >
            <template #button-content>
              Para Au Pairs
            </template>
            <b-dropdown-item :to="{ name: '/' }">Página principal</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">Encuentra una familia</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">Glosario</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">Historias de Au Pairs</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Para Familias" right >
            <template #button-content>
              Para Familias
            </template>
            <b-dropdown-item :to="{ name: '/' }">Página principal</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">Glosario</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Acerca de AuPairClick" right>
            <template #button-content>
              Acerca de AuPairClick
            </template>
            <b-dropdown-item :to="{ name: '/' }">Acerca de Nosotros</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">Cómo trabajamos</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">Preguntas frecuentes</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">Referencias</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :to="{ name: '/' }" class="me-3">
            Contacto
          </b-nav-item>
          <!-- Dropdown de iniciar sesión -->
          <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <b-icon icon="person" color="black" />
            </template>
            <b-dropdown-item :to="{ name: '/' }" class="d-flex align-items-center nav-item">
              <b-icon icon="person" class="mr-2" />
              Iniciar sesión
            </b-dropdown-item>
          </b-nav-item-dropdown>
      
        </b-navbar-nav>
      </div>
    </b-container>
  </b-nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logo: "",
    };
  },
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
