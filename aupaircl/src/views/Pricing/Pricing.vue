<template>
    <b-container class="pricing-table mt-5">
      <b-row>
        <b-col cols="12" md="4" v-for="(plan, index) in plans" :key="index">
          <b-card class="text-center" style="border-radius: 15px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <b-card-header class="bg-white">
              <h4 class="text-warning">{{ plan.title }}</h4>
              <h2 class="text-dark">${{ plan.price }}<span class="text-muted">/mo</span></h2>
            </b-card-header>
            <b-card-body class="bg-white">
              <ul class="list-unstyled">
                <li v-for="(feature, i) in plan.features" :key="i">
                  <b-icon icon="check-circle" class="text-warning"></b-icon> {{ feature }}
                </li>
              </ul>
            </b-card-body>
            <b-card-footer class="bg-white">
              <b-button  class="btnColor rounded-pill">Purchase</b-button>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    name: 'PricingTable',
    data() {
      return {
        plans: [
          {
            title: 'Standard',
            price: 49,
            features: ['Use on one site', 'Lifetime updates', 'Technical support']
          },
          {
            title: 'Multisite',
            price: 149,
            features: ['Unlimited sites', 'Client use allowed', 'Lifetime updates', 'Technical support']
          },
          {
            title: 'Extended',
            price: 499,
            features: ['Use on one site', 'Paying users allowed', 'Client use allowed', 'Lifetime updates', 'Technical support']
          }
        ]
      }
    }
  }
  </script>
  
  <style>
  .pricing-table {
    padding: 20px;
  }
  
  .text-warning {
    color: #ff9f1c !important;
  }
  
  .text-dark {
    color: #000 !important;
  }
  
  .text-muted {
    color: #777 !important;
  }
  
  .list-unstyled li {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;
  }
  
  .rounded-pill {
    border-radius: 50px;
    padding: 10px 30px;
  }
  </style>
  