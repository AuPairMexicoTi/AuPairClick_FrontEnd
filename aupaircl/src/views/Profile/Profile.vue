<template>
  <div class="profile-card p-3">
    <Loading v-if="loading"/>
    <b-row>
      <b-col cols="4">
        <b-card class="mb-3">
          <b-card-img :src="profile.images[0]?.imageName" :alt="profile.images[0]?.imageLabel" top></b-card-img>
          <b-card-body>
            <b-card-title>Busco</b-card-title>
            <b-card-text>
              <p>Familia de acogida en Alemania, Estados Unidos</p>
              <p>Lengua materna: español</p>
              <p>Región preferida: new york</p>
              <p>Tipo de locación: {{ profile.locationType }}</p>
              <p>Niños de entre {{ profile.minAgeChildren }} y {{ profile.maxAgeChildren }} años</p>
            </b-card-text>
          </b-card-body>
        </b-card>

        <b-card class="mb-3">
          <b-card-title>Más información</b-card-title>
          <b-card-text>
            <ul class="list-group list-group-flush">
              <li v-for="(info, key) in profile.moreInfo" :key="key" class="list-group-item d-flex justify-content-between align-items-center">
                {{ info.label }}
                <b-icon :icon="info.value ? 'check2-circle' : 'x-circle'" :variant="info.value ? 'success' : 'danger'"></b-icon>
              </li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="8">
        <b-card class="mb-3">
          <b-card-body>
            <b-card-title class="display-4  ">Au pair {{ profile.nameHost }}</b-card-title>
            <p class="">{{ profile.gender }}, {{ profile.age }} años</p>
            <p>Vivo en {{ profile.location }}, Nacionalidad: {{ profile.nationality }}</p>
            <p>Lengua materna: {{ profile.languageOur }}</p>
            <p>Buen nivel de {{ profile.languageOther }}</p>
            <p>Nivel básico de {{ profile.languageOther }}</p>

            <div class="date-duration m-3">
              <p><strong>Fecha de inicio:</strong> {{ profile.startDate }} - {{ profile.endDate }}</p>
              <p><strong>Duración de la estancia:</strong> {{ profile.minDuration }} - {{ profile.maxDuration }} meses</p>
            </div>

            <!-- <b-button class="global-button m-3">Escribir mensaje</b-button> -->

            <b-card-text >
              <b-row>
                <b-col>
                  <p>Última actividad</p>
                </b-col>
                <b-col class="text-center">
                  <p>{{ profile.lastActivity }}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p>Número de perfil</p>
                </b-col>
                <b-col class="text-center">
                  <p>{{ profile.profileNumber }}</p>
                </b-col>
              </b-row>

              <b-card>
                <b-card-header>
                  <b-card-title>Querida familia</b-card-title>
                </b-card-header>
                <b-card-body>
                  <p>{{ profile.description }}</p>
                  <b-button variant="link">modificar</b-button>
                </b-card-body>
              </b-card>
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import utils from '../../utils/utils';
import aupairServices from '../../services/AuPair/aupair-services';
import Alerts from '../../utils/Alerts';
import Loading from '../../components/Loading/Loading.vue'
export default {
  data() {
    return {
      role:null,
      loading: false,
      profile: {
        nameHost: '',
        gender:'',
        age: '',
        images: [],
        location: 'Argentina',
        locationType: '',
        nationality: 'argentino/a',
        languageOur:'',
        languageOther:'',
        startDate: '08 / 2024',
        endDate: '04 / 2025',
        minDuration: '1 meses',
        maxDuration: '9 meses',
        minAgeChildren: '1',
        maxAgeChildren:'2',
        lastActivity: '',
        profileNumber: '13405237',
        description: 'Hola, mi nombre es Christian. Actualmente estoy buscando una buena familia de acogida.',
        moreInfo: {
          smokes: { label: 'Fumo', value: false },
          willingToWorkWithSmokerFamily: { label: 'Dispuesto a trabajar en familia fumadora', value: true },
          hasDrivingLicense: { label: 'Tengo carné de conducir', value: true },
          willingToHelpWithHousework: { label: 'Quiero ayudar con tareas del hogar', value: true },
          experienceWithChildren: { label: 'Experiencia cuidando a niños', value: true },
          willingToCareForSpecialNeedsChildren: { label: 'Disponible para cuidar de niños con necesidades especiales', value: true },
          willingToWorkInSingleParentFamily: { label: 'Disponible para trabajar en familia monoparental', value: false },
          vegetarianOrVegan: { label: 'Vegetariano o vegano', value: true }
        }
      }
    };
  },
  mounted(){
    this.role = utils.getRole().toString().toLowerCase();
    this.fetchProfileAuPair()
  },
  methods: {
    async fetchProfileAuPair() {
      this.loading=true;
      try {
        const user = utils.getUserName();
        const response = await aupairServices.getProfileAuPairByEmail(user);
        console.log(response)
        if (response && response.statusCode === 200) {
          const data = response.data;
          this.profile ={
            ...this.profile,
            nameHost:data.name || '',
            age: data.age || 0,
            gender:data.gender == "Masculino" ? 'chico' : 'chica',
            location: data.country || '',
            nationality: data.nationality || '',
            languageOur:data.languageOur || '',
            languageOther:data.languageOther || '',
            startDate: data.startDate || '',
            endDate: data.endDate || '',
            minDuration: data.minStayMonths || '',
            maxDuration:data.maxStayMonths || '',
            minAgeChildren: data.childrenAgeMin || '',
            maxAgeChildren: data.childrenAgeMax || '',
            lastActivity: data.lastLogin || '',
            profileNumber: data.profileNumber || '',
            description: data.aboutMe || '',
            locationType: data.locationType || '',
            images: data.images || []
          } 
        } else {
        }
      } catch (error) {
        
      }finally{
        this.loading=false;
      }
    }
  },
  components: {
    Loading
  },
};
</script>

<style scoped>
.profile-card {
  max-width: 1200px;
  margin: 0 auto;
}

.titleColor {
  color: #6600FF;
}

.titleColorHeader {
  color: #965FFF;
}

.global-button {
  background-color: #6600FF !important;
  color: white !important;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: background-color 0.3s ease;
}

.global-button:hover {
  background-color: #7436CC !important;
  text-decoration: none !important;
}

.date-duration {
  background-color: #dcc9ffcc;
  padding: 0.1rem;
  border-radius: 0.25rem; 
}
</style>
