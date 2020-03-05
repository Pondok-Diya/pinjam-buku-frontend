<template>
    <div id="nav">
      <router-link to="/daftar-buku" v-if="this.$store.getters.isAuthenticated">Buku|</router-link>
      <router-link to="/daftar-peminjam" v-if="this.$store.getters.isAuthenticated">Peminjam|</router-link>
      <router-link to="/registrasi" v-if="!this.$store.getters.isAuthenticated">Registrasi|</router-link>
      <router-link to="/tambah-buku" v-if="this.$store.getters.isAuthenticated">Tambah Buku|</router-link>
      <router-link to="/login" v-if="!this.$store.getters.isAuthenticated">Login</router-link>
      <router-link to="/logout" v-if="this.$store.getters.isAuthenticated">Logout</router-link>
      </div>
</template>

<script>
export default {
    name: 'Navigations'
}
</script>