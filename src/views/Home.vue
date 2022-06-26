<template>
  <div class="m-2">
    <b-table
      hover
      striped
      bordered
      class="table-light"
      :items="getCars"
      :fields="fields"
    >
      <template #cell(Details)="row">
        <b-button
          variant="warning"
          size="sm"
          class="m-1 text-white"
          @click="openUpdate(row.item)"
        >
          <b-icon-eye-fill />
        </b-button>

        <b-button
          variant="danger"
          size="sm"
          class="m-1"
          @click="removeItem(row.item)"
        >
          <b-icon-trash-fill />
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      fields: [
        "plate",
        { key: 'country', label: 'Country',
          formatter: (value) => {
            return this.$store.getters.getCountries.find(x => x.code == value).name
          }
        },
        { key: 'startDate', label: 'Start Date',
          formatter: (value) => {
            return value !== "" ? new Date(value).toLocaleDateString() : ""
          }
        },
        { key: 'endDate', label: 'End Date',
          formatter: (value) => {
            return value !== "" ? new Date(value).toLocaleDateString() : ""
          }
        },
        { key: 'name', label: 'Owner', },
        { key: 'Details', label: 'Details', },
      ],
    };
  },
  computed: {
    ...mapGetters(["getCars"]),
  },
  created() {
      this.$store.dispatch("initApp");
  },
  methods: {
    openUpdate(item) {
      this.$router.push({path: '/new/' + item.key});
    },
    removeItem(item) {
      this.$store.dispatch("removeCarData", item.key)
    }
  },
};
</script>
