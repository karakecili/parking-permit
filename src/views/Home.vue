<template>
  <div class="m-2">
    <b-row class="my-2">
      <b-col sm="2">
        <label for="filterInput">{{ $t("search.search") }}:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="filterInput" v-model="filter" :placeholder="$t('search.placeholder')" />
      </b-col>
    </b-row>

    <br />

    <b-table
      hover
      striped
      bordered
      class="table-light"
      :items="filter == '' ? getCars : getCarsFiltered(filter.toLocaleUpperCase())"
      :fields="fields"
      label-sort-asc=""
      label-sort-desc=""
      label-sort-clear=""
    >
      <template #cell(Details)="row">
        <b-button
          variant="warning"
          size="sm"
          class="m-1 text-white"
          :title="$t('home.uItem')"
          @click="openUpdate(row.item)"
        >
          <b-icon-eye-fill />
        </b-button>

        <b-button
          variant="danger"
          size="sm"
          class="m-1"
          :title="$t('home.dItem')"
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
      filter: "",
    };
  },
  computed: {
    fields() {
      return [
        { key: "plate", label: this.$t("home.plate"), sortable: true },
        {
          key: "country",
          label: this.$t("home.country"),
          sortable: true,
          formatter: (value) => {
            return this.$store.getters.getCountries.find((x) => x.code == value).name;
          },
        },
        {
          key: "startDate",
          label: this.$t("home.sDate"),
          sortable: true,
          formatter: (value) => {
            return value !== "" ? new Date(value).toLocaleDateString() : "";
          },
        },
        {
          key: "endDate",
          label: this.$t("home.eDate"),
          sortable: true,
          formatter: (value) => {
            return value !== "" ? new Date(value).toLocaleDateString() : "";
          },
        },
        { key: "name", label: this.$t("home.owner"), sortable: true },
        { key: "Details", label: this.$t("home.details") },
      ];
    },
    ...mapGetters(["getCars", "getCarsFiltered"]),
  },
  created() {
    this.$store.dispatch("initApp");
  },
  methods: {
    openUpdate(item) {
      this.$router.push({ path: "/new/" + item.key });
    },
    removeItem(item) {
      this.$store.dispatch("removeCarData", item.key);
    },
  },
};
</script>
