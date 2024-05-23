<template>
    <div class="mt-3">
      <section class="features-section-g">
        <b-container>
          <strong style="font-size: 36px;" data-aos="fade-up">{{ $t('howFuction') }}</strong>
          <b-row class="py-5 my-5 justify-content-center" data-aos="fade-up">
            <b-col xs="6" sm="4" md="2" class="mt-3 text-center">
              <div>
                <p class="numbers"><strong>1</strong></p>
                <div class="morad mt-3">
                  <strong>{{ $t('createProfile') }}</strong>
                </div>
              </div>
            </b-col>
            <b-col xs="6" sm="4" md="2" class="mt-3 text-center">
              <div>
                <p class="numbers"><strong>2</strong></p>
                <div class="morad mt-3">
                  <strong>{{ $t('search') }}</strong>
                </div>
              </div>
            </b-col>
            <b-col xs="6" sm="4" md="2" class="mt-3 text-center">
              <div>
                <p class="numbers"><strong>3</strong></p>
                <div class="morad mt-3">
                  <strong>{{ $t('itContact') }}</strong>
                </div>
              </div>
            </b-col>
            <b-col xs="6" sm="4" md="2" class="mt-3 text-center">
              <div>
                <p class="numbers"><strong>4</strong></p>
                <div class="morad mt-3">
                  <strong>{{ $t('messagesExchange') }}</strong>
                </div>
              </div>
            </b-col>
            <b-col xs="6" sm="4" md="2" class="mt-3 text-center">
              <div>
                <p class="numbers"><strong>5</strong></p>
                <div class="morad mt-3">
                  <strong>{{ $t('signature') }}</strong>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .numbers {
    height: 35px;
    width: 35px;
    color: #fff;
    font-size: 25px;
    background-color: #EF0082;
    border-radius: 50%;
    box-shadow: 1px 2px 1px 1px #5D5854;
    display: inline-block;
  }
  
  .morad {
    color: #980079 !important;
  }
  </style>
  