<template>
    <b-container class="my-5">
      <b-row>
        <b-col class="d-flex flex-column justify-content-center" md="6" data-aos="fade-right">
          <div class="text-right">
            <h2 class="titleColor">¿Quieres hablar</h2>
          </div>
          <div>
            <h2 class="titleColor">con nosotros?</h2>
          </div>
          <div class="col-10 offset-1 col-md-8 offset-md-2">
            <h4 class="titleColor">Nos encantaría ayudarte, te dejamos nuestros medios de contacto.</h4>
          </div>
        </b-col>
        <b-col md="6" data-aos="fade-left">
          <img :src="imgSrc" alt="Contact Us" class="img-fluid">
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import img from "../../assets/images/contact.svg";
  
  export default {
    data() {
      return {
        imgSrc: img,
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a un servidor.
        console.log(this.form);
        alert('Mensaje enviado');
        // Resetea el formulario
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  }
  </script>
  
  <style scoped>
  h2 {
    font-family: "Right Grotesk", sans-serif;
    font-size: 86px;
    font-weight: 600;
    line-height: 86px;
    letter-spacing: -5px;
  }
  
  h4 {
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -3px;
    }
  }
  </style>
  