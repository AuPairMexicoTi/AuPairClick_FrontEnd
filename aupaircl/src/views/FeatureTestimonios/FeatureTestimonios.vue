<template>
  <b-container fluid class="my-4 px-0">
    <b-row>
      <!-- Testimonios Carousel -->
      <b-col md="6">
        <b-card no-body class="custom-card h-100">
          <b-card-body class="d-flex flex-column">
            <h3 class="card-title">{{ $t('testimoniosTitle') }}</h3>
            <b-carousel
              id="testimonials-carousel"
              v-model="slide"
              :interval="4000"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
              style="text-shadow: 0px 0px 2px #666"
            >
              <b-carousel-slide
                v-for="(testimonial, index) in testimonials"
                :key="index"
                :text="testimonial.text"
              >
                <template #img>
                  <b-img :src="testimonial.image" alt="Testimonio" class="testimonial-img rounded-circle"></b-img>
                </template>
              </b-carousel-slide>
            </b-carousel>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Blog Card -->
      <b-col md="6">
        <b-card no-body class="custom-card h-100">
          <b-card-body class="d-flex flex-column">
            <h3 class="card-title text-danger">{{ $t('blog') }}</h3>
            <p class="card-text">
              <strong>{{ $t('tips') }}</strong>
            </p>
            <p class="card-text">
              {{ $t('tipsSubtitle') }}
            </p>
            <b-button class="mt-auto align-self-center btnDanger">{{ $t('seeMore') }}</b-button>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import testimonial1 from "../../assets/images/2.jpg";
import testimonial2 from "../../assets/images/2.jpg";
import testimonial3 from "../../assets/images/2.jpg";

export default {
  name: "TestimonialsAndBlog",
  data() {
    return {
      slide: 0,
      testimonials: [
        {
          text: "¡Nos vemos el verano que viene! Ainhoa se fue como au pair de verano cerca de Toulouse (Francia) y en sus propias palabras, pasó el mejor verano de su vida rodeada de gente increíble.",
          image: testimonial1,
          name: "Ainhoa"
        },
        {
          text: "Me fui durante dos meses a un pequeño pueblo al sur de Francia, muy cerca de Burdeos y de Toulouse y fue la mejor experiencia de toda mi vida!",
          image: testimonial2,
          name: "Maria"
        },
        {
          text: "Allí he tenido la gran suerte de conocer a gente maravillosa, conocer lugares preciosos y mejorar de una manera increíble mi francés en una familia encantadora y perfecta para mí.",
          image: testimonial3,
          name: "Lucia"
        }
      ]
    };
  },
  methods: {
    onSlideStart() {
      console.log("Sliding started");
    },
    onSlideEnd() {
      console.log("Sliding ended");
    }
  }
};
</script>

<style scoped>
.custom-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF5722;
}

.card-text {
  font-size: 1rem;
  color: #666;
  font-family: Arial, sans-serif; /* Ajustar el tipo de letra para que coincida */
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-text {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
  font-family: Arial, sans-serif; /* Ajustar el tipo de letra para que coincida */
}

.testimonial-img {
  width: 100px;
  height: 100px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
