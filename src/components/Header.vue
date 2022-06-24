<template>
  <b-navbar
    toggleable="lg"
    type="light"
  >
    <b-navbar-brand
      class="mx-auto"
    >
      <router-link
        class="navbar-brand nav-brand me-5"
        to="/"
      >
        <p>Home</p>
      </router-link>
    </b-navbar-brand>

    <b-navbar-brand
      class="mx-auto"
    >
      <router-link
        class="navbar-brand nav-brand me-5"
        to="/new"
      >
        <p>New</p>
      </router-link>
    </b-navbar-brand>

  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
