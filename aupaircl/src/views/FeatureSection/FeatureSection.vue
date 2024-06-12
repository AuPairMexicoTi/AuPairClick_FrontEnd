<template>
    <div class="mt-3">
  
      <FeatureCardLandPage/>
      <FeatureCardRegister/> 

    </div>
  </template>
  
  <script>
import FeatureCardLandPage from "../FeatureCardLandPage/FeatureCardLandPage.vue";
  import FeatureCardRegister from '../FeatureCardRegisterLandPage/FeatureCardRegisterLandPage.vue';
  export default {
    components: {
      FeatureCardRegister,
      FeatureCardLandPage
    }
  }
  </script>
  
  <style scoped>
  h4 {
    margin-top: 1rem;
    font-weight: semibold;
  }
  
  p {
    color: #6c757d;
  }
  
  .listicon p {
    margin-bottom: 0;
  }
  </style>
  