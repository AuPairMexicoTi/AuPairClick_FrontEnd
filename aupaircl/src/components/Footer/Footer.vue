<template>
  <div>
    <footer class="row py-5 my-5 border-top">

      <!-- Contact Section -->
      <b-col class="mt-3" cols="12" sm="6" md="4">
        <h5>{{ $t('contactUs') }}</h5>
        <ul class="nav flex-column">
          <li class="nav-item mt-2">
            <a class="nav-link p-0 text-body-secondary" href="tel:+52123456789">
              <b-icon icon="telephone-fill" />
              {{ $t('telephone') }}
            </a>
          </li>
          <li class="nav-item mt-2">
            <a class="nav-link p-0 text-body-secondary" href="mailto:aupairmexicoti@gmail.com">
              <b-icon icon="envelope-fill" />
              {{ $t('email') }}
            </a>
          </li>
          <li class="nav-item mt-2">
            <a class="nav-link p-0 text-body-secondary" href="https://goo.gl/maps/CHubUHVXRNxSMuCh8">
              <b-icon icon="geo-fill" />
              {{ $t('address') }}
            </a>
          </li>
        </ul>
      </b-col>

      <!-- Info Countries Section -->
      <b-col class="mt-3" cols="12" sm="6" md="2">
        <h5>{{ $t('countrySub') }}</h5>
        <b-row>
          <b-col cols="6">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/estados-unidos">Estados Unidos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/australia">Australia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/inglaterra">Inglaterra</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/liechtenstein">Liechtenstein</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/italia">Italia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/francia">Francia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/alemania">Alemania</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/suiza">Suiza</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/finlandia">Finlandia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/belgica">Bélgica</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/china">China</a>
              </li>
            </ul>
          </b-col>
          <b-col cols="6">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/dinamarca">Dinamarca</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/espana">España</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/suecia">Suecia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/austria">Austria</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/noruega">Noruega</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/luxemburgo">Luxemburgo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/nueva-zelanda">Nueva Zelanda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="/pais/canada">Canadá</a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-col>

      <!-- Social Media Section -->
      <b-col class="mt-3" cols="12" sm="6" md="3">
        <h5>{{ $t('followMe') }}</h5>
        <ul class="nav flex-column">
          <li class="nav-item mt-2">
            <a href="#" class="nav-link p-0 text-body-secondary">
              <b-icon icon="facebook" />{{ $t('namePrincipal') }}
            </a>
          </li>
          <li class="nav-item mt-2">
            <a href="#" class="nav-link p-0 text-body-secondary">
              <b-icon icon="instagram" /> {{ $t('namePrincipal') }}
            </a>
          </li>
        </ul>
      </b-col>
      <!-- Navigation fast-->
      <b-col class="mt-3" cols="12" sm="6" md="2">
        <h5>{{ $t('navigationFast') }}</h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link p-0 text-body-secondary" href="/es/quienes-somos">{{ $t('aboutMe') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0 text-body-secondary" href="/es/referencias">{{ $t('reference') }}</a>
          </li>
        </ul>
      </b-col>
    </footer>
    <p class="text-center">&copy; 2024 {{ $t('copyright') }} </p>
  </div>
</template>

<script>


export default {
  name: "Footer",
  data() {
    return {
      logo: "",
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #f8f9fa;
}
</style>
