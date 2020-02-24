import Vue from 'vue'
import VueRouter from 'vue-router'
import DaftarBuku from '../views/DaftarBuku.vue'
import Peminjam from '../views/Peminjam.vue'
import TambahBuku from '../views/TambahBuku.vue'
import GantiBuku from '../views/GantiBuku.vue'
import Login from '../views/Login.vue'
import Registrasi from '../views/Registrasi.vue'

Vue.use(VueRouter)

const routes = [
 {
     path: '/daftar-buku',
     name: 'daftar-buku',
     component: DaftarBuku
 },
 {
     path: '/daftar-peminjam',
     name: 'daftar-peminjam',
     component: Peminjam
 },
 {
     path: '/tambah-buku',
     name: 'tambah-buku',
     component: TambahBuku
 },
 {
     path: '/ganti-buku/:id',
     name: 'ganti-buku',
     component: GantiBuku
 },
 {
     path: '/login',
     name: 'login',
     component: Login
 },
 {
     path: '/registrasi',
     name: 'registrasi',
     component: Registrasi
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
