<template>
    <div>
        <h3>Daftar Anggota</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nomor Anggota</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Hp</th>
                    <th scope="col">NIK</th>
                    <th colspan="2">Opsi</th>
                </tr>
            </thead>
            <tbody v-for="(anggota,index) in anggotas" :key="index">
                <tr>
                    <td scope="row">{{anggota.id}}</td>
                    <td>{{anggota.nama}}</td>
                    <td>{{anggota.alamat}}</td>
                    <td>{{anggota.hp}}</td>
                    <td>{{anggota.nik}}</td>
                    <td><b-btn class="btn btn-info" @click="gantiAnggota(anggota.id)">Edit</b-btn></td>
                    <td><b-btn class="btn btn-warning" @click="confirmMassage(anggota.id,anggota.nama)">Hapus</b-btn></td>
                </tr>
            </tbody>
        </table>
        <b-btn class="btn btn-success" @click="tambahAnggota">Tambah Anggota Baru</b-btn>
    </div>
</template>
<script>
export default {
    name: 'DaftarAnggota',
    data(){
        return {
            anggotas: []
        }
    
    },
    methods: {
       loadData(){
           this.$http
           .get(this.$baseAPI+'anggota',{headers: {'Authorization':`Bearer ${this.$store.getters.getToken}`}})
           .then((res) => {
               this.anggotas = res.data
           })
           .catch((err) => {
               console.log(err)
           })
       },
       tambahAnggota(){
           this.$router.push('/tambah-anggota')
       },
       gantiAnggota(id){
           this.$router.push('ganti-anggota/'+id)
       },
       confirmMassage(id,nama){
            this.$bvModal.msgBoxConfirm("Apakah Anda yakin ingin menghapus semua data terkait anggota bernama "+nama+"?",{
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
                    this.hapusAnggota(id)
                } else {
                    console.log(value)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        hapusAnggota(id){
            this.$http
            .delete(this.baseAPI+'anggota/hapus/'+id,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then(() => {
                this.loadData()
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>