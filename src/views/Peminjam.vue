<template>
    <div>
        <h3>Daftar Peminjam</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Nama peminjam</th>
                    <th scope="col">Buku yang dipinjam</th>
                    <th scope="col">Waktu peminjaman</th>
                    <th scope="col">Batas waktu pengembalian</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody v-for="(pinjam,index) in peminjam" :key="index">
                <tr>
                    <td scope="row">{{index+1}}</td>
                    <td>{{pinjam.nama}}</td>
                    <td>{{pinjam.judul}}</td>
                    <td>{{pinjam.created_at}}</td>
                    <td>{{pinjam.waktu_pengembalian}}</td>
                    <td><b-btn class="btn btn-warning" @click="pengembalian(pinjam.id)">Pengembalian</b-btn></td>
                </tr>
            </tbody>
        </table>
        <b-btn class="btn btn-success" @click="tambahPeminjam">Tambah Peminjam</b-btn>
    </div>
</template>
<script>
export default {
    name: 'Peminjam',
    data(){
        return {
            peminjam : null
        }
    },
    methods: {
        loaddata() {
            this.$http
            .get(this.$baseAPI+'peminjam',{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then((response) => {
                this.peminjam = response.data
            }).catch((err) => {
                console.log(err)
            })
        },
        tambahPeminjam(){
            this.$router.push('/tambah-peminjam')
        },
        pengembalian(id){
            this.$router.push('/pengembalian/'+id)
        }
    },
    mounted(){
        this.loaddata()
    }
}
</script>