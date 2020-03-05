import Vue from 'vue'
import VueRouter from 'vue-router'
import DaftarBuku from '../views/DaftarBuku.vue'
import Peminjam from '../views/Peminjam.vue'
import TambahBuku from '../views/TambahBuku.vue'
import GantiBuku from '../views/GantiBuku.vue'
import Login from '../views/Login.vue'
import Registrasi from '../views/Registrasi.vue'
import store from '../store'
import Logout from '../views/Logout'

Vue.use(VueRouter)
const ifNotAuthenticated = (to,from,next) => {
    if (!store.getters.isAuthenticated){
        next()
        return
    }
    next('/')
}
const ifAuthenticated = (to,from,next) => {
    if (store.getters.isAuthenticated) {
        next()
        return
    }
    next('/login')
}
const routes = [
 {
     path: '/daftar-buku',
     name: 'daftar-buku',
     component: DaftarBuku,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/daftar-peminjam',
     name: 'daftar-peminjam',
     component: Peminjam,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/tambah-buku',
     name: 'tambah-buku',
     component: TambahBuku,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/ganti-buku/:id',
     name: 'ganti-buku',
     component: GantiBuku,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/login',
     name: 'login',
     component: Login,
     beforeEnter: ifNotAuthenticated
 },
 {
     path: '/registrasi',
     name: 'registrasi',
     component: Registrasi
 },
 {
     path: '/logout',
     name: 'logout',
     component: Logout,
     beforeEnter: ifAuthenticated
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
