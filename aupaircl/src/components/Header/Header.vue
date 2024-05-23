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
              {{ $t('families') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="auPairDropdown">
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('home') }}</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('findFamily') }}</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('glossary') }}</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('auPairStories') }}</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="familiesDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              {{ $t('families') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="familiesDropdown">
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('home') }}</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('glossary') }}</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              {{ $t('aboutUs') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('aboutUs') }}</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('howWeWork') }}</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('faq') }}</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '/' }">{{ $t('references') }}</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-3" :to="{ name: '/' }">{{ $t('contact') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-3" :to="{ name: '/' }">{{ $t('login') }}</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              {{ $t('language') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
              <li><a class="dropdown-item" href="#" @click="changeLanguage('es')">{{ $t('spanish') }}</a></li>
              <li><a class="dropdown-item" href="#" @click="changeLanguage('en')">{{ $t('english') }}</a></li>
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
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('language', lang);
    }
  }
};
</script>

<style scoped>
.header-fixed {
  z-index: 3;
}
</style>
