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
                    <th scope="col">Batas waktu Peminjaman</th>
                </tr>
            </thead>
            <tbody v-for="(pinjam,index) in peminjam" :key="index">
                <tr>
                    <th scope="row">{{index+1}}</th>
                    <th>{{pinjam.nama}}</th>
                    <th>{{pinjam.buku_dipinjam}}</th>
                    <th>{{pinjam.waktu_pinjam}}</th>
                    <th>{{pinjam.waktu_pengembalian}}</th>
                </tr>
            </tbody>
        </table>
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
            }).catch(err=>console.log(err))
        }
    },
    mounted(){
        this.loaddata()
    }
}
</script>