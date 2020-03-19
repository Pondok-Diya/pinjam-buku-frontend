<template>
    <div>
        <b-form v-if="tampil">
            <h3 class="text-center text-info">Pengembalian</h3>
                <div class="form-group">
                    <label for="" class="text-info">Nomor Anggota:</label><br>
                    <input type="text" class="form-control" v-model="form.no_anggota">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Kode Buku:</label><br>
                    <input type="text" class="form-control" v-model="form.kode_buku">
                </div>
                <div class="form-group">
                <b-btn class="btn-info btn-md" @click="pengembalian"> Pengembalian </b-btn>
                </div>
        </b-form>
        <div v-if="!tampil">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: 'Pengembalian',
    data(){
        return {
            form: {
                no_anggota: '',
                kode_buku: ''
            },
            tampil: true,
            data: {},
            msg: null
        }
    },
    methods: {
        pengembalian(){
            if (parseInt(this.form.no_anggota) === this.data.no_anggota && this.form.kode_buku === this.data.kode_buku) {
                this.$http
                .delete(this.$baseAPI+'peminjam/hapus/'+this.$route.params.id,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
                .then((res) => {
                    this.msg = res.data.msg
                    this.tampil = false
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                console.log('salah')
            }
        }
    },
    created(){
        this.$http
        .get(this.$baseAPI+'peminjam/'+this.$route.params.id,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
        .then((res) => {
            this.data = res.data
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
</script>