<template>
  <div  data-aos="fade-up" class="auth-wrapper">
    <div class="auth-container" :class="{ 'right-panel-active': isRegistering }">
      <!-- Formulario de Registro -->
      <div class="form-container sign-up-container">
        <b-card class="auth-card">
          <h2 class="title">Crear Cuenta</h2>
          <b-form @submit.prevent="onRegisterSubmit">
            <b-form-group label-for="register-first-name">
              <b-form-input
                id="register-first-name"
                v-model="register.firstName"
                type="text"
                required
                placeholder="Nombre"
              ></b-form-input>
            </b-form-group>
            <b-form-group label-for="register-last-name">
              <b-form-input
                id="register-last-name"
                v-model="register.lastName"
                type="text"
                required
                placeholder="Apellido"
              ></b-form-input>
            </b-form-group>
            <b-form-group  label-for="register-email">
              <b-form-input
                id="register-email"
                v-model="register.email"
                type="email"
                required
                placeholder="Correo Electrónico"
              ></b-form-input>
            </b-form-group>
            <b-form-group label-for="register-password">
              <b-form-input
                id="register-password"
                v-model="register.password"
                type="password"
                required
                placeholder="Contraseña"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" class="btnColor w-100">Registrarse</b-button>
          </b-form>
        </b-card>
      </div>

      <!-- Formulario de Login -->
      <div class="form-container sign-in-container">
        <b-card class="auth-card">
          <h2 class="title">Iniciar Sesión</h2>
          <b-form @submit.prevent="onLoginSubmit">
            <b-form-group label-for="login-email">
              <b-form-input
                id="login-email"
                v-model="login.email"
                type="email"
                required
                placeholder="Correo Electrónico"
              ></b-form-input>
            </b-form-group>
            <b-form-group  label-for="login-password">
              <b-form-input
                id="login-password"
                v-model="login.password"
                type="password"
                required
                placeholder="Contraseña"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" class="btnColor w-100">Iniciar Sesión</b-button>
          </b-form>
        </b-card>
      </div>

      <!-- Panel Izquierdo -->
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 class="overlay-title">{{ !isRegistering ? '¡Hola, Amigo!':'¡Bienvenido de Nuevo!' }}</h1>
            <p class="overlay-text">{{ !isRegistering ?  'Introduce tus datos personales y comienza tu viaje con nosotros':'Para mantenerse conectado con nosotros, por favor inicie sesión con su información personal' }}</p>
            <b-button variant="light" @click="toggleForm">{{ isRegistering ? 'Iniciar Sesión' : 'Registrarse' }}</b-button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="overlay-title">{{ isRegistering ?  '¡Hola, Amigo!':'¡Bienvenido de Nuevo!' }}</h1>
            <p class="overlay-text">{{ isRegistering ? 'Introduce tus datos personales y comienza tu viaje con nosotros ': 'Para mantenerse conectado con nosotros, por favor inicie sesión con su información personal' }}</p>
            <b-button variant="light" @click="toggleForm">{{ isRegistering ? 'Iniciar Sesión' : 'Registrarse' }}</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRegistering: false,
      login: {
        email: '',
        password: '',
      },
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    toggleForm() {
      this.isRegistering = !this.isRegistering;
    },
    onLoginSubmit() {
      // Implementar lógica de autenticación aquí
      console.log('Login:', this.login);
    },
    onRegisterSubmit() {
      // Implementar lógica de registro aquí
      console.log('Register:', this.register);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.auth-wrapper {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-family: 'Montserrat', sans-serif;
}

.auth-container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 900px;
  max-width: 100%;
  min-height: 550px;
  transition: all 0.6s ease-in-out;
}

.auth-card {
  background: none;
  border: none;
}

h1, h2 {
  font-weight: bold;
  margin: 0;
}

h2 {
  margin-bottom: 1rem;
  color: #00aa99;
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

b-button {
  border-radius: 20px;
  border: 1px solid #fff;
  background: #00aa99;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

b-button:hover {
  background: #008f86;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  transition: all 0.6s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-in-container {
  left: 0;
  z-index: 2;
}

.sign-up-container {
  left: 50%;
  opacity: 0;
  z-index: 1;
}

.right-panel-active .sign-in-container {
  transform: translateX(-100%);
}

.right-panel-active .sign-up-container {
  transform: translateX(0);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #00aa99;
  background: -webkit-linear-gradient(to right, #00aa99, #00aa99);
  background: linear-gradient(to right, #00aa99, #00aa99);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.right-panel-active .overlay-right {
  transform: translateX(5%);
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-title {
  font-size: 2rem;
  color: #ffffff;
}

.overlay-text {
  font-size: 1rem;
  font-weight: 300;
  margin: 20px 0;
  color: #ffffff;
  text-align: center;
}

.title {
  font-size: 2rem;
  color: #00aa99;
  text-align: center;
}
</style>
