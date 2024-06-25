<template>
  <div class="hero">
      <div class="hero-overlay">
          <div class="container d-flex flex-column justify-content-center align-items-center">
              <h1 class="display-3 mb-4">{{ $t('welcomeAuPairCl') }}</h1>
              <p class="lead mb-4">{{ $t('findAuPairOrFamily') }}</p>
              <div class="button-container">
                  <b-button :to="{name:'encontrarA'}" class="btn-mas-info">{{ $t('findAuPair') }}</b-button>
                  <b-button :to="{ name: 'encontrarF' }" class="btn-empezar ">{{ $t('findAFamily') }}</b-button>
              </div>
          </div>
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
    height: 96vh;
    width: auto;
    background: linear-gradient(rgba(102, 0, 255, 0.1), rgba(102, 0, 255, 0.1)), url('../../assets/images/7.jpg') no-repeat center top;
    background-size: cover;
    color: white;
    overflow: hidden;
    border-radius: 15px;
}

.hero-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-overlay .container {
    max-width: 600px; 
}

.hero-overlay h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    animation: fadeIn 1s;
}

.hero-overlay p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    animation: fadeIn 1.5s;
}

.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-empezar,
.btn-mas-info {
    font-size: 1.25rem;
    padding: 0.75rem 2rem;
    margin: 10px 0;
    background-color: #6600FF;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    animation: fadeIn 1.5s;
}

.btn-mas-info {
    background-color: #6600FF;
    border: none;
    color: white;
}

.btn-empezar:hover,
.btn-mas-info:hover {
    background-color: #5500CC;
}

@media (max-width: 30em) {
    .btn-empezar, .btn-mas-info {
        margin: 1rem 1rem;
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

</style>
