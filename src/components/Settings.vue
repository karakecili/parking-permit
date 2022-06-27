<template>
  <div class="m-4">

    <b-container fluid>
      <b-row class="mb-1">
        <b-col
          cols="2"
        >{{ $t('settings.locales.language') }}</b-col>
        <b-col
          class="locale"
        >
          <input
            id="rd_en"
            v-model="Lang"
            type="radio"
            name="Lang"
            class="locale-Img"
            value="en"
            @change="setLanguage"
          >
          <label for="rd_en"><flag iso="gb" /></label>
          <input
            id="rd_de"
            v-model="Lang"
            type="radio"
            name="Lang"
            class="locale-Img"
            value="de"
            @change="setLanguage"
          >
          <label for="rd_de"><flag iso="de" /></label>
          <input
            id="rd_tr"
            v-model="Lang"
            type="radio"
            name="Lang"
            class="locale-Img"
            value="tr"
            @change="setLanguage"
          >
          <label for="rd_tr"><flag iso="tr" /></label>
        </b-col>
      </b-row>
      <b-row class="mb-1 mt-4">
        <b-button
          variant="danger"
          :title="$t('settings.clearData.noReturn')"
          @click="deleteAll"
        >
          {{ $t('settings.clearData.deleteAll') }}
        </b-button>
      </b-row>
    </b-container></div>
</template>

<script>
export default {
  data() {
    return {
      Lang: "en"
    }
  },
  created() {
    this.Lang = this.$store.state.Lang
  },
  methods: {
    setLanguage() {
      this.$store.commit("SetLocale", this.Lang)
    },
    deleteAll() {
      this.$store.dispatch("removeCarDataAll")
    }
  }
}
</script>

<style>

</style>
