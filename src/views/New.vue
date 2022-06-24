<template>
  <div>
    <b-form
      v-if="show"
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-group label="Plate:">
        <b-form-input
          v-model="form.plate"
          placeholder="Plate"
          required
        />
      </b-form-group>

      <b-form-group label="Country:">
        <b-form-select
          v-model="form.country"
          :options="countrys"
          class="mb-2 form-control"
        />
      </b-form-group>

      <b-form-group label="Your Name:">
        <b-form-input
          v-model="form.name"
          placeholder="Enter name"
        />
      </b-form-group>

      <b-form-group label="Start Date:">
        <b-form-datepicker
          v-model="form.startDate"
          class="mb-2"
        />
      </b-form-group>

      <b-form-group label="End Date:">
        <b-form-datepicker
          v-model="form.endDate"
          class="mb-2"
        />
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
      >Submit</b-button>
      <b-button
        type="reset"
        variant="danger"
      >Reset</b-button>
    </b-form>
    <b-card
      class="mt-3"
      header="Form Data Result"
    >
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        plate: "",
        country: null,
        name: "",
        startDate: "",
        endDate: "",
      },
      countrys: [
        { text: "Select One", value: null },
        " Germany",
        "Switzerland",
        "Austria",
        "France",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("setCarData", { ...this.form }).then(() => {
        this.onReset();
      });
    },
    onReset() {
      // Reset our form values
      this.form.plate = "";
      this.form.country = null;
      this.form.name = "";
      this.form.startDate = "";
      this.form.endDate = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>
