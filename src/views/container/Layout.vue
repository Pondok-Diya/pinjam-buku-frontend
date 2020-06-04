<template>
    <div>
        <Header/>
        <div id='page'>
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name: 'Layout',
    components: {
        Header,
        Footer
    }
}
</script>