<template>
    <div>
        <b-row>
            <b-col cols="5">
                <b-card>
                    <h3>Detail Buku</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Kode</td>
                                <td>{{detail.kode}}</td>
                            </tr>
                            <tr>
                                <td>Judul</td>
                                <td>{{detail.judul}}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>{{detail.genre}}</td>
                            </tr>
                            <tr>
                                <td>Penulis</td>
                                <td>{{detail.penulis}}</td>
                            </tr>
                            <tr>
                                <td>Penerbit</td>
                                <td>{{detail.penerbit}}</td>
                            </tr>
                            <tr>
                                <td>ISBN</td>
                                <td>{{detail.isbn}}</td>
                            </tr>
                            <tr>
                                <td>Ditambahkan</td>
                                <td>{{detail.created_at}}</td>
                            </tr>
                            <tr>
                                <td>Update Terakhir</td>
                                <td>{{detail.update_at}}</td>
                            </tr>
                        </tbody>
                    </table>
                </b-card>
            </b-col>
            <b-col cols="7">
                <b-card>
                    <h3>Ringkasan</h3>
                    <div v-html="detail.ringkasan"></div>
                </b-card>
            </b-col>
        </b-row>
    </div>    
</template>

<script>
export default {
    name: 'Detail',
    data(){
        return {
            detail: {}
        }
    },
    created(){
        this.$http
        .get(this.$baseAPI+'buku/'+this.$route.params.id,{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
        .then((response)=>{
            this.detail = response.data
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
</script>