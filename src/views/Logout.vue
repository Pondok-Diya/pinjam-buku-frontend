<template>
  <div>
    <loading />
  </div>
</template>

<script>
import Loading from '../components/loading'
export default {
    name: 'Logout',
    components: {
        Loading
    },
    methods: {
        logoutTokenRefresh(){
            return this.$http.get(this.$baseAPI+'logout/refresh-token',{headers:{'Authorization':`Bearer ${this.$store.getters.getRefreshToken}`}})
        },
        async logoutToken(){
            let res = await this.logoutTokenRefresh()
            if (res.status == 200) {
                return this.$http.get(this.$baseAPI+'logout',{headers:{'Authorization':`Bearer ${this.$store.getters.getToken}`}})
            }
        }
    },
    async created() {
        let res = await this.logoutToken()
        if (res.status == 200) {
            this.$store.dispatch('logout')            
            this.$router.push('/login')
        }
        
        /*this.$http
        .get(this.$baseAPI+'logout/refresh-token',{headers: {'Authorization':`Bearer ${this.$store.getters.getRefreshToken}`}})
        .then((res) => {
            console.log(res.data.msg)
            console.log(res.status)
            if (res.status == 200) {
                this.deleteRefreshToken = true
                this.$http
                .get(this.$baseAPI+'logout',{headers: {'Authorization': `Bearer ${this.$store.getters.getToken}` }})
                .then((res) => {
                    console.log(res.data.msg)
                    if (res.status == 200) {
                        this.deleteToken = true
                        if (this.deleteToken && this.deleteRefreshToken) {
                            
                            this.$store.dispatch('logout')
                            this.$router.push('/login')
                        
                    }
                    }
                    
                })
                .catch((err) => {
                    console.log(err)
                })
                    }
                    
                })
        .catch((err) => {
            console.log(err)
        })*/
        
    }
}
</script>