<template>
    <div class="container my-5">
      <h1 class="text-center mb-5">Encuentra una familia de acogida</h1>
      <b-card class="p-4 mb-5 shadow rounded-lg">
        <b-form @submit.prevent="onSubmit">
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label="Provengo de *" label-for="country">
                <b-form-select v-model="form.country" :options="countries" required></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label="Soy *" label-for="gender">
                <b-form-radio-group v-model="form.gender" :options="genders" required buttons button-variant="outline-primary"></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group label="Me gustaría ser au pair en *" label-for="destination">
            <b-form-select v-model="form.destination" :options="destinations" required></b-form-select>
          </b-form-group>
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label="Fecha de comienzo (como muy pronto)" label-for="startMonth">
                <b-input-group>
                  <b-input-group-prepend is-text>Mes</b-input-group-prepend>
                  <b-form-select v-model="form.startMonth" :options="months" required></b-form-select>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label="Fecha de comienzo (como muy tarde)" label-for="startYear">
                <b-input-group>
                  <b-input-group-prepend is-text>Año</b-input-group-prepend>
                  <b-form-select v-model="form.startYear" :options="years" required></b-form-select>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label="Duración mínima de la estancia (meses)" label-for="minDuration">
                <b-form-select v-model="form.minDuration" :options="durations" required></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label="Duración máxima de la estancia (meses)" label-for="maxDuration">
                <b-form-select v-model="form.maxDuration" :options="durations" required></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button type="submit" variant="primary" >Buscar</b-button>
        </b-form>
      </b-card>
  
      <div v-if="families.length" class="mt-4">
        <h4 class="text-center mb-4">{{ families.length }} familias de {{ totalFamilies }} encajan con lo que buscas</h4>
        <b-row>
          <b-col v-for="family in families" :key="family.id" cols="12" md="6" lg="4">
            <b-card
              class="mb-4 shadow-sm rounded-lg"
              :title="family.name"
              :img-src="family.img"
              img-alt="Family Image"
              img-top
            >
              <b-card-text>
                <p><strong>Ubicación:</strong> {{ family.location }}</p>
                <p><strong>Hijos:</strong> {{ family.children }}</p>
                <p><strong>Comienzo:</strong> {{ family.start }}</p>
                <p><strong>Duración:</strong> {{ family.duration }}</p>
                <p>{{ family.description }}</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          country: '',
          gender: 'una chica au pair',
          destination: [],
          startMonth: '2024/08',
          startYear: '2024/12',
          minDuration: 12,
          maxDuration: 18,
        },
        countries: [
          { value: null, text: 'Selecciona un país' },
          { value: 'Austria', text: 'Austria' },
          { value: 'Germany', text: 'Alemania' },
          { value: 'France', text: 'Francia' },
          { value: 'Spain', text: 'España' },
          { value: 'Italy', text: 'Italia' }
        ],
        genders: [
          { text: 'una chica au pair', value: 'una chica au pair' },
          { text: 'un chico au pair', value: 'un chico au pair' }
        ],
        destinations: [
          { value: null, text: 'Selecciona un país' },
          { value: 'Albania', text: 'Albania' },
          { value: 'Alemania', text: 'Alemania' },
          { value: 'Argelia', text: 'Argelia' },
          { value: 'Argentina', text: 'Argentina' },
          { value: 'Australia', text: 'Australia' }
        ],
        months: [
          { value: '2024/08', text: 'Agosto 2024' },
          { value: '2024/09', text: 'Septiembre 2024' },
          { value: '2024/10', text: 'Octubre 2024' },
          { value: '2024/11', text: 'Noviembre 2024' },
          { value: '2024/12', text: 'Diciembre 2024' }
        ],
        years: [
          { value: '2024', text: '2024' },
          { value: '2025', text: '2025' }
        ],
        durations: Array.from({ length: 24 }, (_, i) => ({ value: i + 1, text: `${i + 1} meses` })),
        families: [],
        totalFamilies: 8477,
      };
    },
    methods: {
      onSubmit() {
        // Simulate a search result
        const searchResults = [
          {
            id: 1,
            name: 'Jerena M.',
            location: 'Hessen, Alemania',
            children: '2 hijos, 1 - 5 años',
            start: '08 / 2024 - 09 / 2024',
            duration: '6 - 12 meses',
            description: 'Liebes Au-pair, Wir sind eine 4-köpfige Familie und wohnen in Kassel. Wir suchen ab August 2024 ein Au-pair. Unsere Kinder heißen Emilia (5 Jahre)...',
            img: 'https://via.placeholder.com/400x200' // Placeholder image
          },
          {
            id: 2,
            name: 'Theresa P.',
            location: 'Bavaria, Alemania',
            children: '2 hijos, 1 - 3 años',
            start: '07 / 2024 - 12 / 2024',
            duration: '3 - 24 meses',
            description: 'Dear Aupair - we look for an Aupair that enjoys being around children, loves the outdoors, to travel and is flexible. We are a loving and very happy f...',
            img: 'https://via.placeholder.com/400x200' // Placeholder image
          }
        ];
        this.families = searchResults;
  
        // Prepare data for backend submission
        const formData = {
          country: this.form.country,
          gender: this.form.gender,
          destination: this.form.destination,
          startMonth: this.form.startMonth,
          startYear: this.form.startYear,
          minDuration: this.form.minDuration,
          maxDuration: this.form.maxDuration
        };
  
        // Make an API call to the backend with formData
        // For example:
        // axios.post('/api/search-families', formData)
        //   .then(response => {
        //     this.families = response.data;
        //   })
        //   .catch(error => {
        //     console.error('There was an error!', error);
        //   });
      }
    }
  };
  </script>
  
  <style>
  body {
    background-color: #f8f9fa;
    font-family: 'Arial', sans-serif;
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
  
  .b-form-group {
    margin-bottom: 1.5rem;
  }
  
  .b-form-select,
  .b-form-radio-group .btn {
    border-radius: 0.25rem;
  }
  
  .b-form-radio-group .btn {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  </style>
  