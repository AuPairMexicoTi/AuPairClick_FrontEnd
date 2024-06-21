<template>
  <div class="container my-5" data-aos="fade-up" data-aos-duration="1500">
    <h1 class="text-center titleColor mb-5">Encuentra una familia de acogida</h1>
    <b-card class="p-2 mb-5 shadow custom-card">
      <b-form @submit.prevent="onSubmit">
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group label="Provengo de *" label-for="country">
              <b-form-select v-model="form.country" :options="countries" required></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label="Soy *" label-for="gender">
              <b-form-radio-group v-model="form.gender" :options="genders" required></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-form-group label="Me gustaría ser au pair en *" label-for="destination">
          <div class="destination-scroll">
            <b-form-checkbox-group v-model="form.destination" :options="destinations" name="destination" stacked></b-form-checkbox-group>
          </div>
        </b-form-group>
        </b-row>

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
        <b-button type="submit" class="global-button">Buscar</b-button>
      </b-form>
    </b-card>

    <div v-if="families.length" class="mt-4">
      <h4 class="text-center mb-4">{{ families.length }} familias de {{ totalFamilies }} encajan con lo que buscas</h4>
      <b-row>
        <b-col v-for="family in families" :key="family.id" cols="12" md="6" lg="4">
          <b-card class="mb-4 shadow-sm rounded-lg" :title="family.nameHost" :img-src="family.image" img-alt="Family Image" img-top>
            <b-card-text>
              <p><strong>Ubicación:</strong> {{ family.location }}</p>
              <p><strong>Hijos:</strong> {{ family.numberOfChildren }}</p>
              <p><strong>Comienzo:</strong> {{ family.searchFrom }} - {{ family.searchTo }}</p>
              <p><strong>Duración:</strong> {{ family.minStayMonths }} - {{ family.maxStayMonths }} meses</p>
              <p>{{ family.description }}</p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import familyServices from '../../services/Family/family.services';

export default {
  data() {
    return {
      form: {
        country: '',
        gender: 'una chica au pair',
        destination: [], 
        startMonth: '',
        startYear: '',
        minDuration: 12,
        maxDuration: 18,
      },
      countries: [
        { value: null, text: 'Selecciona un país' },
        { value: 'Austria', text: 'Austria' },
        { value: 'Germany', text: 'Alemania' },
        { value: 'France', text: 'Francia' },
        { value: 'Spain', text: 'España' },
        { value: 'Italy', text: 'Italia' },
        { value: 'Mexico', text: 'Mexico' }

      ],
      genders: [
        { text: 'una chica au pair', value: 'Femenino' },
        { text: 'un chico au pair', value: 'Masculino' }
      ],
      destinations: [
        { value: 'Albania', text: 'Albania' },
        { value: 'Alemania', text: 'Alemania' },
        { value: 'Argelia', text: 'Argelia' },
        { value: 'Argentina', text: 'Argentina' },
        { value: 'Australia', text: 'Australia' },
        { value: 'Francia', text: 'Francia' },

      ],
      
      months: [],
      years: [],
      durations: Array.from({ length: 24 }, (_, i) => ({ value: i + 1, text: `${i + 1} meses` })),
      families: [],
      totalFamilies: 8477,
    };
  },
  created() {
    this.setDates();
  },
  methods: {
    setDates() {
      const now = new Date();
      const twoMonthsLater = new Date(now.getFullYear(), now.getMonth() + 2, 1);
      const oneYearLater = new Date(now.getFullYear() + 1, now.getMonth(), 1);

      this.form.startMonth = `${twoMonthsLater.getFullYear()}/${String(twoMonthsLater.getMonth() + 1).padStart(2, '0')}`;
      this.form.startYear = `${oneYearLater.getFullYear()}/${String(oneYearLater.getMonth() + 1).padStart(2, '0')}`;

      this.months = this.generateMonths(now, oneYearLater);
      this.years = this.generateYears(now, oneYearLater);
    },
    generateMonths(start, end) {
      const months = [];
      let date = new Date(start);
      date.setMonth(date.getMonth()); 
      while (date <= end) {
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        months.push({ value: `${year}/${String(month).padStart(2, '0')}`, text: `${year}/${String(month).padStart(2, '0')}` });
        date.setMonth(date.getMonth() + 1);
      }
      return months;
    },
    generateYears(start, end) {
      const years = [];
      let date = new Date(start);
      date.setMonth(date.getMonth() + 2); 
      while (date <= end) {
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        years.push({ value: `${year}/${String(month).padStart(2, '0')}`, text: `${year}/${String(month).padStart(2, '0')}` });
        date.setMonth(date.getMonth() + 1);
      }
      return years;
    },
    async onSubmit() {
      if (this.form.destination.length > 3) {
        alert("Puedes seleccionar un máximo de 3 destinos.");
        return;
      }
      try {
        const [startYear, startMonth] = this.form.startMonth.split('/').map(Number);
      const [endYear, endMonth] = this.form.startYear.split('/').map(Number);

      const startDate = new Date(startYear, startMonth - 1);
      const endDate = new Date(endYear, endMonth - 1);

        const formData = {
          auPairCountry: this.form.country,
          gender: this.form.gender,
          preferredCountryIds: this.form.destination,
          startDate: startDate,
          endDate: endDate,
          minDuration: this.form.minDuration,
          maxDuration: this.form.maxDuration
        };
        const response = await familyServices.findHostFamily(formData);
        this.families = response.data;
      } catch (error) {
        console.log("Algo sucedió al buscar ", error);
      }
    }
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
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

.custom-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
}

.destination-scroll {
  max-height: 75px;
  overflow-y: auto;
  border: 1px solid #ced4da;
  width: 300px;
}




</style>
