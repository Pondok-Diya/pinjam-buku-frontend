import Vue from 'vue'
import VueRouter from 'vue-router'
//buku
import DaftarBuku from '../views/DaftarBuku.vue'
import TambahBuku from '../views/TambahBuku.vue'
import GantiBuku from '../views/GantiBuku.vue'
import Detail from '../views/Detail'
//anggota
import DaftarAnggota from '../views/Anggota.vue'
import TambahAnggota from '../views/TambahAnggota.vue'
import GantiAnggota from '../views/GantiAnggota.vue'
//peminjam
import Peminjam from '../views/Peminjam.vue'
import TambahPeminjam from '../views/TambahPeminjam.vue'
import Pengembalian from '../views/Pengembalian.vue'
//user
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
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    beforeEnter: ifAuthenticated
 },
 {
     path: '/daftar-anggota',
     name: 'daftar-anggota',
     component: DaftarAnggota,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/tambah-anggota',
     name: 'tambah-anggota',
     component: TambahAnggota,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/ganti-anggota/:id',
     name: 'ganti-anggota',
     component: GantiAnggota,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/daftar-peminjam',
     name: 'daftar-peminjam',
     component: Peminjam,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/tambah-peminjam',
     name: 'tambah-peminjam',
     component: TambahPeminjam,
     beforeEnter: ifAuthenticated
 },
 {
     path: '/pengembalian/:id',
     name: 'pengembalian',
     component: Pengembalian,
     beforeEnter: ifAuthenticated
 },
 {
    path: '/registrasi',
    name: 'registrasi',
    component: Registrasi,
    beforeEnter: ifNotAuthenticated
 },
 {
     path: '/login',
     name: 'login',
     component: Login,
     beforeEnter: ifNotAuthenticated
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