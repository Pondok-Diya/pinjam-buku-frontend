<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Navigasi" right>
          <b-dropdown-item href="http://localhost:8080/daftar-buku">Daftar Buku</b-dropdown-item>
          <b-dropdown-item href="http://localhost:8080/tambah-buku">Tambah Buku</b-dropdown-item>
          <b-dropdown-item href="http://localhost:8080/daftar-anggota">Daftra Anggota</b-dropdown-item>
          <b-dropdown-item href="http://localhost:8080/tambah-anggota">Tambah Anggota</b-dropdown-item>
          <b-dropdown-item href="http://localhost:8080/daftar-peminjam">Peminjam</b-dropdown-item>
          <b-dropdown-item href="http://localhost:8080/tambah-peminjam">Tambah Peminjam</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>

</style>