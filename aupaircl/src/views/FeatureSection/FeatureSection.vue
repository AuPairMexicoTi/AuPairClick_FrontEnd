<template>
    <div class="mt-3">
  
      <FeatureCardLandPage/>
      <FeatureCardRegister/> 
      <FeatureCountries/>
      <FeatureTestimonios/>
      <FeatureContact/>
      <Pricing/>
    </div>
  </template>
  
  <script>
import FeatureCardLandPage from "../FeatureCardLandPage/FeatureCardLandPage.vue";
  import FeatureCardRegister from '../FeatureCardRegisterLandPage/FeatureCardRegisterLandpage.vue';
  import FeatureCountries from "../FeatureCountries/FeatureCountries.vue";
  import FeatureTestimonios from "../FeatureTestimonios/FeatureTestimonios.vue";
  import FeatureContact from "../FeatureContact/FeatureContact.vue";
  import Pricing from "../Pricing/Pricing.vue";
  export default {
    components: {
      FeatureCardRegister,
      FeatureCardLandPage,
      FeatureCountries,
      FeatureTestimonios,
      FeatureContact,
      Pricing
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
  