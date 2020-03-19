<template>
    <div>
        <div v-if="tampil">
            <h3 class="text-center text-info">Tambah Anggota Baru</h3>
                <div class="form-group">
                    <label for="" class="text-info">Nama:</label><br>
                    <input type="text" class="form-control" v-model="form.nama">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Alamat:</label><br>
                    <input type="text" class="form-control" v-model="form.alamat">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Hp:</label><br>
                    <input type="text" class="form-control" v-model="form.hp">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">NIK:</label><br>
                    <input type="text" class="form-control" v-model="form.nik">
                </div>
                <div class="form-group">
                <b-btn class="btn-info btn-md" @click="addAnggota"> Tambah </b-btn>
            </div>
        </div>
        <div v-if="!tampil">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: 'TambahAnggota',
    data(){
        return {
            form: {
                nama: '',
                alamat: '',
                hp: '',
                nik: ''
            },
            tampil: true,
            msg: null

        }
    },
    methods: {
        addAnggota(){
            this.$http
            .post(this.$baseAPI+'/anggota/tambah',this.form,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then((res) => {
                this.msg = res.data.msg
                this.tampil = false 
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>