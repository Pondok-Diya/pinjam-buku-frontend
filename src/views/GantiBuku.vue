<template>
    <b-container>
        <b-form v-if="tampil">
            <h3 class="text-center text-info">Ganti Buku</h3>
                <div class="form-group">
                    <label for="" class="text-info">Judul Buku:</label><br>
                    <input type="text" class="form-control" v-model="form.judul">
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
                    <label for="" class="text-info">Penerbit:</label><br>
                    <input type="text" class="form-control" v-model="form.penerbit">
                </div>
                <div class="form-group">
                    <label for="" class="text-info">ISBN:</label><br>
                    <input type="text" class="form-control" v-model="form.isbn">
                </div>
                <div class="form-group">
                  <b-btn class="btn-info btn-md" value="submit" @click="gantibuku"> Ganti </b-btn>
              </div>
        </b-form>
        <div v-if="!tampil">{{msg}}</div>
    </b-container>
</template>
<script>
export default {
    name: 'GantiBuku',
    data(){
        return {
            form: {},
            tampil: true,
            msg: null
        }
    },
    methods: {
        gantibuku(){
            this.$http
            .put(this.$baseAPI+'ganti-buku/'+this.$route.params.id,this.form)
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
        .get(this.$baseAPI+'ganti-buku/'+this.$route.params.id)
        .then((response)=>{
            console.log(this.form)
            this.form = response.data
            console.log(this.form)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
</script>