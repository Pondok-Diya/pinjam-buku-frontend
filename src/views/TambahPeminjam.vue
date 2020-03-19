<template>
    <div>
        <b-form v-if="tampil" @submit.prevent="tambahPeminjam">
            <h3 class="text-center text-info">Tambah Buku</h3>
                <div class="form-group">
                    <label for="" class="text-info">Nomor Anggota:</label><br>
                    <input type="text" class="form-control" v-model="form.no_anggota">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Kode Buku:</label><br>
                    <input type="text" class="form-control" v-model="form.kode_buku">
                </div>
                <div class="form-group">
                  <b-btn class="btn-info btn-md" type="submit"> Tambah </b-btn>
              </div>
        </b-form>
        <div v-if="!tampil">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name:'TambahPeminjam',
    data(){
        return {
            form: {
                no_anggota: '',
                kode_buku: ''
            },
            tampil: true,
            msg: null
        }
    },
    methods: {
        tambahPeminjam(){
            this.$http
            .post(this.$baseAPI+'peminjam/tambah',this.form,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then((response) => {
                this.msg = response.data.msg
                this.tampil = false
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

}
</script>