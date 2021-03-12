<template>
  <b-card>
    <div>
      <h2>Register</h2>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address :"
          label-for="input-1"
        >
          <b-form-input
            id="inline-form-input-name"
            v-model="form.email"
            type="email"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <label-cols-md >
          <b-form-group
            id="input-group-2"
            label="Username :"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>
          
        </label-cols-md>
         <b-form-group
          id="input-group-1"
          label="Phone Number :"
          label-for="input-1"
        >
          <b-form-input
            id="inline-form-input-name"
            v-model="form.email"
            type="Phone"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Phone number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form @submit.stop.prevent>
              <label for="text-password">Password :</label>
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
