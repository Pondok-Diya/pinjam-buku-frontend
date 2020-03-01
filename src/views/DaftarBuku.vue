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
                    <th colspan="2">Opsi</th>
                </tr>
            </thead>
            <tbody v-for="(buku,index) in bukus" :key="index">
                <tr>
                    <td scope="row">{{index+1}}</td>
                    <td>{{buku.judul}}</td>
                    <td>{{buku.genre}}</td>
                    <td>{{buku.penulis}}</td>
                    <td>{{buku.penerbit}}</td>
                    <td>{{buku.isbn}}</td>
                    <td><b-btn class="btn btn-info" @click="changeBook(buku.id)">Edit</b-btn></td>
                    <td><b-btn class="btn btn-warning" @click="confirmMassage(buku.id,buku.judul)">Hapus</b-btn></td>
                </tr>
            </tbody>
        </table>
        <b-btn class="btn btn-success" @click="tambahBuku">Tambah Buku</b-btn>
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
        refresh() {
            this.$http
            .get(this.$baseAPI+'token/refresh',{headers: {'Authorization':`Bearer ${this.$store.getters.getRefreshToken}`}})
            .then((res) => {
                this.$store.dispatch('saveToken',res.data.access_token)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        loadData() {
            console.log(this.$store.getters.getToken)
            this.$http
            .get(this.$baseAPI+'buku',{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then((res) => {
                if (res.data.msg === "Token has expired") {
                    this.refresh()
                    this.loadData()
                } else {
                    this.bukus = res.data
                } 
            })
            .catch((err) => {
                console.log(err)
            })
        },
        changeBook(id){
            this.$router.push('/buku/'+id)
        },
        hapusBuku(id){
            this.$http
            .delete(this.$baseAPI+"buku/hapus/"+id,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then(()=>{
                this.loadData()
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        confirmMassage(id,judul){
            this.$bvModal.msgBoxConfirm("Apakah Anda yakin ingin menghapus semua data terkait buku "+judul+"?",{
                title: "Perhatian!!!",
                size: "sm",
                okVariant: "danger",
                okTitle: "Ya",
                cancelTitle: "Tidak",
                footerClass: "p-2",
                hideHeaderClose: false,
                centred: true
            })
            .then((value)=>{
                if (value) {
                    this.hapusBuku(id)
                } else {
                    console.log(value)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        tambahBuku(){
            this.$router.push('/tambah-buku')
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>