<template>
    <div>
        <div v-if="tampil">
            <h3 class="text-center text-info">Ganti Buku</h3>
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
                <basic-editor :content="form.ringkasan" @update="updateRingkasan"/>
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
              <b-btn class="btn-info btn-md" value="submit" @click="gantiBuku"> Simpan </b-btn>
            </div>
        </div>
        <div v-if="!tampil">{{msg}}</div>
    </div>
</template>
<script>
import BasicEditor from '../components/BasicEditor.vue'
export default {
    name: 'GantiBuku',
    components:{
        BasicEditor
    },
    data(){
        return {
            form: {},
            tampil: true,
            msg: null
        }
    },
    methods: {
        gantiBuku(){
            this.$http
            .put(this.$baseAPI+'buku/'+this.$route.params.id,this.form,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then((response)=>{
                this.msg = response.data.msg
                this.tampil = false
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        updateRingkasan(text){
            this.form.ringkasan = text
        }
    },
    created(){
        this.$http
        .get(this.$baseAPI+'buku/'+this.$route.params.id,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
        .then((response)=>{
            this.form = response.data
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
</script>