<template>
    <div>
        <h3>Daftar Buku</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Judul Buku</th>
                    <th scope="col">Genre Buku</th>
                    <th scope="col">Penulis</th>
                    <th scope="col">Penerbit</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">#</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody v-for="(buku,index) in bukus" :key="index">
                <tr>
                    <th scope="row">{{index+1}}</th>
                    <th>{{buku.judul}}</th>
                    <th>{{buku.genre}}</th>
                    <th>{{buku.penulis}}</th>
                    <th>{{buku.penerbit}}</th>
                    <th>{{buku.isbn}}</th>
                    <th><b-btn class="btn btn-info" @click="addbook(buku.id)">Ganti</b-btn></th>
                    <th><b-btn class="btn btn-warning">Hapus</b-btn></th>
                </tr>
            </tbody>

        </table>
    </div>
</template>
<script>
export default {
    name: 'DaftarBuku',
    data(){
        return {
            bukus : []
        }
    },
    methods: {
        loaddata() {
            this.$http
            .get(this.$baseAPI+'daftar-buku')
            .then((response) => {
                this.bukus = response.data
            }).catch(err=>console.log(err))
        },
        addbook(id){
            this.$router.push('/ganti-buku/'+id)
        }
    },
    mounted(){
        this.loaddata()
    }
}
</script>