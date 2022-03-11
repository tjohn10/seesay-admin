<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-card class="card">
          <form class="form">
            <v-text-field
              v-model="company"
              :error-messages="nameErrors"
              label="Firstname"
              required
            ></v-text-field>
            <v-text-field
              v-model="address"
              :error-messages="nameErrors"
              label="Lastname"
              required
            ></v-text-field>
            <v-text-field
              v-model="phone"
              :counter="11"
              label="Mobile Number"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
            ></v-text-field>
            <v-btn
              class="mr-4"
              @click="submit"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </form>

        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, maxLength, email} from 'vuelidate/lib/validators'
import Forms from "../forms";
import axios from "axios";

export default {
  name: "add",
  components: {Forms},
  layout: 'dashboard',
  mixins: [validationMixin],

  validations: {
    name: {required},
    email: {required, email},
    phone: {required, maxLength: maxLength(11)},
    select: {required},
    checkbox: {
      checked(val) {
        return val
      },
    },
  },

  data: () => ({
    company: '',
    address: '',
    email: '',
    phone: '',
  }),

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    async submit() {
      await axios.post('https://seesay-backend.herokuapp.com/api/workspaces/create', {
        company: this.company,
        address: this.address,
        phone: this.phone,
        email: this.email,

      }).then(res => {
        alert(res.message)
      })
    },
    clear() {
      this.$v.$reset()
      this.firstname = ''
      this.lastname= ''
      this.phone=''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>

<style scoped>
.card{
  width: 100%;
}
.form{
  margin: 10%;
}
</style>
