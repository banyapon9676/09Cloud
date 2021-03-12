<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Username :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form @submit.stop.prevent>
        <label for="text-password">Password</label>
        <b-form-input
          type="password"
          v-model="form.password"
          id="input-password"
          aria-describedby="password-help-block"
        ></b-form-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </b-form-text>
      </b-form>
      <b-form-group id="input-group-2" label="Phone Number :" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="form.phone"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { db } from "@/plugins/firebaseConfig.js";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        phone: ""
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      db.collection("user").add(this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
       this.form.password = "";
      this.form.phone = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>