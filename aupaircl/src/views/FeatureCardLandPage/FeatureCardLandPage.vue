<template>
  <b-container fluid class="my-4 mt-5 px-0">
    <b-row data-aos="fade-right"  data-aos-duration="1500">
      <b-col>
        <b-card no-body class="shadow custom-card">
          <b-row no-gutters>
            <b-col md="7" class="d-flex align-items-center text-start order-2 order-md-1">
              <b-card-body class="p-3 p-md-5">
                <h3 class="card-title">{{$t('customSearch')}}</h3>
                <p class="card-text">{{ $t('easySearch') }}</p>
                <b-button class="b-button1">{{ $t('moreInformation') }}</b-button>
              </b-card-body>
            </b-col>
            <b-col md="5" class="order-1 order-md-2">
              <b-img :src="imgCard1" alt="experiencia" class="img-fluid w-100" rounded></b-img>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="mt-5" data-aos="fade-left"  data-aos-duration="1500">
      <b-col>
        <b-card no-body class="shadow custom-card2">
          <b-row no-gutters>
            <b-col md="5">
              <b-img :src="imgCard2" alt="vivencia" class="img-fluid w-100" rounded></b-img>
            </b-col>
            <b-col md="7" class="d-flex align-items-center text-end order-2 order-md-2">
              <b-card-body class="p-3 p-md-5">
                <h3 class="card2-title">{{ $t('decideYourself') }}</h3>
                <p class="card2-text">{{ $t('selecctionBig') }}</p>
                <b-button class="b-button2">{{ $t('moreInformation') }}</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
export default {
  name: "CustomCard",
  data() {
    return {
      imgCard1: img2,
      imgCard2: img3
    };
  },
};
</script>

<style scoped>
.custom-card, .custom-card2 {
  border: none;
  border-radius: 15px;
  overflow: hidden;
}

.card-title, .card2-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card-title {
  color: #FF4300;
}

.card2-title {
  color: #FEC831;
}

.card-text, .card2-text {
  font-size: 1rem;
  color: #666;
}

.b-button1, .b-button2 {
  font-weight: bold;
  border: none;
}

.b-button1 {
  background-color: #FF4300;
}

.b-button1:hover {
  background-color: #E64A19;
}

.b-button2 {
  background-color: #FEC831;
}

.b-button2:hover {
  background-color: #FEC831;
}

@media (min-width: 768px) {
  .card-title, .card2-title {
    font-size: 2.5rem;
  }

  .card-text, .card2-text {
    font-size: 1.5rem;
  }
}

.b-card-body {
  padding: 2rem;
}
</style>
