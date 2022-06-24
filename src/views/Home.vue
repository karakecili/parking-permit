<template>
  <div class="Home">
    <b-table
      hover
      :items="getCars"
      :fields="fields"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      fields: [
        "plate",
        "country",
        "name",
        "startDate",
        "endDate",
      ],
    };
  },
  computed: {
    ...mapGetters(["getCars"]),
  },
};
</script>
