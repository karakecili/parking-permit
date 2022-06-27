<template>
  <div class="custom-nav">

    <b-navbar>
      <b-navbar-nav>
        <b-nav-item
          class="custom-nav-button"
          href="/"
        >
          {{ $t('pages.home') }}
        </b-nav-item>

        <b-nav-item
          class="custom-nav-button"
          href="/new"
        >
          {{ $t('pages.new') }}
        </b-nav-item>

        <b-nav-item
          class="custom-nav-button"
          @click="settingsShow = true"
        >
          {{ $t('pages.settings') }}
        </b-nav-item>
      </b-navbar-nav>

    </b-navbar>

    <b-modal
      v-model="settingsShow"
      hide-footer
    >
      <template #modal-header="{ close }">
        <h5>{{ $t('settings.settings') }}</h5>
        <b-button
          size="sm"
          variant="outline-danger"
          @click="close()"
        >
          {{ $t('settings.close') }}
        </b-button>
      </template>
      <Settings />
    </b-modal>
  </div>
</template>

<script>
import Settings from './Settings.vue'
export default {
  components: {
    Settings
  },
  data() {
    return {
      settingsShow: false,
    }
  }
}
</script>

<style>

</style>
