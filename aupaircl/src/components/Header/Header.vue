<template>
  <b-navbar toggleable="lg" type="light" variant="light" fixed="top" class="shadow">
    <b-container fluid>
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img :src="logo" alt="Logo" width="74" />
      </router-link>

      <b-navbar-toggle target="navbarScroll"></b-navbar-toggle>

      <b-collapse id="navbarScroll" is-nav>
        <b-navbar-nav class="ml-auto my-2 my-lg-0 navbar-nav-scroll d-flex align-items-center">
          <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <strong class="titleColorHeader"> {{ $t('aupairs') }} </strong>
            </template>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('home') }}</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('findFamily') }}</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('glossary') }}</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('auPairStories') }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <strong class="titleColorHeader"> {{ $t('families') }} </strong>
            </template>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('home') }}</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('glossary') }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <strong class="titleColorHeader"> {{ $t('aboutUs') }} </strong>
            </template>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('aboutUs') }}</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('howWeWork') }}</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('faq') }}</b-dropdown-item>
            <b-dropdown-item :to="{ name: '/' }">{{ $t('references') }}</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'contacto' }">{{ $t('contact') }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item class="d-flex align-items-center">
            <b-button variant="primary" shadow class="global-button" :to="{ name: 'login' }">
              {{ $t('login') }}
            </b-button>
          </b-nav-item>

          <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <strong class="titleColorHeader"> {{ $t('language') }} </strong>
            </template>
            <b-dropdown-item @click="changeLanguage('es')">{{ $t('spanish') }}</b-dropdown-item>
            <b-dropdown-item @click="changeLanguage('en')">{{ $t('english') }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logo: "https://fhweovj.stripocdn.email/content/guids/CABINET_1b64288a36c96ad48cda203d3abb3b684f230cc2a18e4f2ba8ee4884477de08c/images/marca_au_pair_click.png",
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
.dropdown-menu {
  text-align: left; /* Alineación opcional para el texto en el menú desplegable */
}

a {
  color: #965FFF;
}

</style>
