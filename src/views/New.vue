<template>
  <div class="m-4">
    <b-form
      v-if="show"
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-group
        label="Plate:"
        description="Please add a dash(-) between numbers and letters"
        class="mb-2"
      >
        <b-form-input
          v-model="form.plate"
          placeholder="Plate"
          :state="$v.form.plate.$dirty ? !$v.form.plate.$anyError : null"
          @blur="$v.form.plate.$touch()"
        />
        <div v-if="$v.form.plate.$dirty">
          <b-form-invalid-feedback
            v-if="!$v.form.plate.required"
            :state="$v.form.plate.required"
          >
            Plate is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-else-if="!$v.form.plate.isMatch"
            :state="$v.form.plate.isMatch"
          >
            Plate is not available in selected country
          </b-form-invalid-feedback>
        </div>
      </b-form-group>

      <b-form-group
        label="Country:"
        class="mb-2"
      >
        <b-form-select
          v-model="form.country"
          class="form-control"
          :state="$v.form.country.$dirty ? !$v.form.startDate.$anyError : null"
          @blur="$v.form.country.$touch()"
        >
          <option
            selected
            disabled
            value=""
          >Select One</option>
          <option
            v-for="country in getCountries"
            :key="country.code"
            :value="country.code"
          >{{ country.name }}
          </option>
        </b-form-select>
        <div v-if="$v.form.country.$dirty">
          <b-form-invalid-feedback
            v-if="!$v.form.country.isNull"
            :state="$v.form.country.isNull"
          >
            Country is required
          </b-form-invalid-feedback>
        </div>
      </b-form-group>

      <b-form-group
        label="Start Date:"
        class="mb-2"
      >
        <b-form-datepicker
          v-model="form.startDate"
          :state="$v.form.startDate.$dirty ? !$v.form.startDate.$anyError : null"
          @blur="$v.form.startDate.$touch()"
        />
        <div v-if="$v.form.startDate.$dirty">
          <b-form-invalid-feedback
            v-if="!$v.form.startDate.required"
            :state="$v.form.startDate.required"
          >
            Please choose Start Date
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-else-if="!$v.form.startDate.dateMax"
            :state="$v.form.startDate.dateMax"
          >
            Start Date should be before End Date
          </b-form-invalid-feedback>
        </div>
      </b-form-group>

      <b-form-group
        label="End Date:"
        class="mb-2"
      >
        <b-form-datepicker
          v-model="form.endDate"
          :state="$v.form.endDate.$dirty ? !$v.form.endDate.$anyError : null"
          @blur="$v.form.endDate.$touch()"
        />
        <div v-if="$v.form.endDate.$dirty">
          <b-form-invalid-feedback
            v-if="!$v.form.endDate.required"
            :state="$v.form.endDate.required"
          >
            Please choose End Date
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-else-if="!$v.form.endDate.dateMin"
            :state="$v.form.endDate.dateMin"
          >
            Start Date should be before End Date
          </b-form-invalid-feedback>
        </div>
      </b-form-group>

      <b-form-group
        label="Owner:"
        class="mb-4"
      >
        <b-form-input
          v-model="form.name"
          placeholder="Enter name"
        />
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="m-2"
      >Submit</b-button>
      <b-button
        v-show="!isEdit"
        type="reset"
        variant="danger"
        class="m-2"
      >Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { required, requiredIf } from "vuelidate/lib/validators"
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        plate: "",
        country: "",
        name: "",
        startDate: "",
        endDate: "",
      },
      updateKey: "",
      show: true,
    };
  },
  computed: {
    ...mapGetters(["getCountries"]),
    isEdit() {
      return this.$route.params.id ? true : false
    }
  },
  beforeMount() {
    if(this.$route.params.id) {
      axios.get("car-list/" + this.$route.params.id + ".json")
        .then((response) => {
          this.form = response.data
        })
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$v.form.$touch()

      if (!this.$v.form.$anyError) {
        this.form.plate = this.form.plate.toUpperCase()
        if(this.isEdit) {
          axios.put("car-list/" + this.$route.params.id + ".json", this.form)
          .then(() => {
            this.$router.push({path: '/'});
          })
        }
        else {
          axios.post("car-list.json", this.form)
          .then(() => {
            this.$router.push({path: '/'});
          })
        }

      }
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
      this.$v.form.$reset()
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  validations() {
    return {
      form: {
        plate: {
          required,
          isMatch(val, { country }) {
            return country == "" ? true : this.$store.getters.getCountries.find(x => x.code == country).rgx.test(val.toUpperCase())
          }
        },
        country: {
          isNull(val) {
            return val !== ""
          }
        },
        name: {

        },
        startDate: {
          required: requiredIf(function({endDate}) {
            return endDate != "";
          }),
          dateMax(val, { endDate }) {
              return endDate != "" && val > endDate ? false : true
          },
        },
        endDate: {
          required: requiredIf(function({startDate}) {
            return startDate != "";
          }),
          dateMin(val, { startDate }) {
              return startDate != "" && val < startDate ? false : true
          },
        },
      }
    }
  },
};
</script>
