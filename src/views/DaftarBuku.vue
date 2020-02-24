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
                    <th scope="row">{{index+1}}</th>
                    <th>{{buku.judul}}</th>
                    <th>{{buku.genre}}</th>
                    <th>{{buku.penulis}}</th>
                    <th>{{buku.penerbit}}</th>
                    <th>{{buku.isbn}}</th>
                    <th><b-btn class="btn btn-info" @click="chooseBook(buku.id)">Edit</b-btn></th>
                    <th><b-btn class="btn btn-warning" @click="confirmMassage(buku.id,buku.judul)">Hapus</b-btn></th>
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
        loadData() {
            this.$http
            .get(this.$baseAPI+'buku')
            .then((response) => {
                this.bukus = response.data
            }).catch(err=>console.log(err))
        },
        chooseBook(id){
            this.$router.push('/buku/'+id)
        },
        hapusBuku(id){
            this.$http
            .delete(this.$baseAPI+"buku/hapus/"+id)
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