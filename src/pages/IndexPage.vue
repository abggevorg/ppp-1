<template>
   <q-page class="flex flex-center ">
      <login></login>
   </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Login from 'components/CompLogin.vue'
export default defineComponent({
  name: 'IndexPage',
  components: {
    Login
  }

})
</script>
