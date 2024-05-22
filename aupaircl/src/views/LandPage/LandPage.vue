<template>
  <div>
    <HeroSection />
    <FeaturesSection />
  </div>
</template>

<script>
import HeroSection from '../HeroSection/HeroSection.vue';
import FeaturesSection from '../FeatureSection/FeatureSection.vue';

export default {
  components: {
    HeroSection,
    FeaturesSection
  }
}
</script>

<style scoped>
</style>
