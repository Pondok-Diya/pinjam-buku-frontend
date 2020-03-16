<template>
    <b-container>
        <div v-if="tampil">
            <h3 class="text-center text-info">Tambah Buku</h3>
                <div class="form-group">
                    <label for="" class="text-info">Judul Buku:</label><br>
                    <input type="text" class="form-control" v-model="form.judul">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Kode Buku:</label><br>
                    <input type="text" class="form-control" v-model="form.kode">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Genre:</label><br>
                    <input type="text" class="form-control" v-model="form.genre">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Penulis:</label><br>
                    <input type="text" class="form-control" v-model="form.penulis">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Ringkasan:</label><br>
                    <basic-editor @update="updateRingkasan"/>
                </div>
                <div class="form-group">
                    <label for="" class="text-info">Penerbit:</label><br>
                    <input type="text" class="form-control" v-model="form.penerbit">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">ISBN:</label><br>
                    <input type="text" class="form-control" v-model="form.isbn">
                </div>
                <div class="form-group">
                  <b-btn class="btn-info btn-md" @click="addbook"> Tambah </b-btn>
              </div>
        </div>
        <div v-if="!tampil">{{msg}}</div>
    </b-container>
</template>
<script>
import BasicEditor from '../components/BasicEditor.vue'
export default {
    name: 'TambahBuku',
    components: {
        BasicEditor
    },
    data(){
        return {
            form: {
                judul: '',
                kode: '',
                genre: '',
                penulis: '',
                ringkasan: '',
                penerbit: '',
                isbn: ''
            },
            tampil: true,
            msg: null
        }
    },
    methods: {
        addbook(){
            this.$http
            .post(this.$baseAPI+'buku/tambah',this.form,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then((response) => {
                this.msg = response.data.msg
                this.tampil = false
            })
            .catch((err) => {
                console.log(err)
            })
        },
        updateRingkasan(text){
            this.form.ringkasan = text
        }
    }
}
</script>