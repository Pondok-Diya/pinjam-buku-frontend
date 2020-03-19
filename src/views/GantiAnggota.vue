<template>
    <div>
        <div v-if="tampil">
            <h3 class="text-center text-info">Ganti Anggota</h3>
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
              <b-btn class="btn-info btn-md" value="submit" @click="gantiAnggota"> Simpan </b-btn>
            </div>
        </div>
        <div v-if="!tampil">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: 'GantiAnggota',
    data(){
        return {
            form: {},
            tampil: true,
            msg: null
        }
    },
    methods: {
        gantiAnggota(){
            this.$http
            .put(this.$baseAPI+'anggota/'+this.$route.params.id,this.form,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
            .then((response)=>{
                this.msg = response.data.msg
                this.tampil = false
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    created(){
        this.$http
        .get(this.$baseAPI+'anggota/'+this.$route.params.id,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
        .then((response)=>{
            this.form = response.data
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
</script>