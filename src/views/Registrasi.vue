<template>
  <div>  
      <b-row class="justify-content-center align-items-center login-row">
        <b-col md=6 sm=12>            
          <b-card>
            <b-form v-if="tampil">
              <h3 class="text-center text-info">Registrasi</h3>
              <div class="form-group">
                  <label for="email" class="text-info">Email:</label><br>
                  <input type="email" name="email" id="email" class="form-control" v-model="form.email">
              </div>
              <div class="form-group">
                  <label for="email" class="text-info">Nama:</label><br>
                  <input type="email" name="email" id="email" class="form-control" v-model="form.nama">
              </div>
              <div class="form-group">
                  <label for="name" class="text-info">Username:</label><br>
                  <input type="text" name="pengguna" id="pengguna" class="form-control" v-model="form.username">
              </div>
              <div class="form-group">
                  <label for="password" class="text-info">Password:</label><br>
                  <input type="password" name="password" id="password" class="form-control" v-model="form.password">
              </div>
              <div class="form-group">
                  <label for="password2" class="text-info">Ulangi Password:</label><br>
                  <input type="password" name="password" id="password" class="form-control" v-model="konfirmasi">
              </div>
              <div class="form-group">                  
                <b-btn class="btn-info btn-md" value="submit" @click="registrasi"> Kirim </b-btn>
              </div>
              <div id="login-link" class="text-right">
                  Sudah memiliki akun?
                  <router-link class="text-info" to="/login">Silahkan Login</router-link>
              </div>
            </b-form>
            <div v-if="!tampil">{{msg}}</div>
          </b-card>              
        </b-col>
      </b-row>            
  </div>  
  </template>
<script>
export default {
  name: 'Registrasi',
  components: {  },
  data() {
    return {
      form : {
        email: '',
        nama: '',
        username: '',
        password: ''
      },
      konfirmasi: '',
      tampil: true,
      msg: null
    };
  },
  methods: {
    registrasi(){
      if (this.form.password === this.konfirmasi){ 
        this.$http
        .post(this.$baseAPI+'registrasi',this.form)
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
};
</script>
<style>
  .login-page {
    height: 100%;
  }
  .login-row {
    margin-top: 120px;
  }
  .ctn-footer {
    position: absolute;
    bottom: 15px;        
  }
</style>
