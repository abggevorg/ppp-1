<template>
  <q-page class="flex flex-center unselectable">

 <div class="q-pa-md row justify-center items-start q-gutter-md ">
   <q-card class="my-card" >
     <q-card-section class="q-ma-lg minw" >
     {{info}}
    <q-card-section class="hidden">
      <q-input color="primary" filled v-model="login" label="PORT">
       <template v-slot:>
         <q-icon name="port"   />
       </template>
     </q-input>
    </q-card-section>
  <q-input v-model="ph" placeholder="Port name" :hint="this.errport" :dense="dense" />
    <q-card-section   >
      <div class="q-gutter-lg ">
      <q-radio v-model="type" size="lg" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Open" label="Open" />
      <q-radio v-model="type"  size="lg" color="red" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Private" label="Private" />
    </div>
    </q-card-section>
    <q-card-section v-if="type == 'Private'">
        <q-form @submit="logIn">
               <q-input color="black" filled v-model="password" suggested="new-password" :type="isPwd ? 'password' : 'text'" label="Password">
       <template v-slot:prepend>
         <q-icon name="vpn_key" />
       </template>
        <template v-slot:append>
         <q-icon
           :name="isPwd ? 'visibility_off' : 'visibility'"
           class="cursor-pointer"
           @click="isPwd = !isPwd"
         />
       </template>
     </q-input>
           </q-form>

       </q-card-section>
     </q-card-section>

     <q-separator />

     <q-card-actions  v-touch-swipe.mouse.right.left="handleSwipe" :class="'float-'+submitfloat">
       <div class="q-ma-sm " v-if="submitfloat == 'right'">

       <q-btn label="Submit" @click="logIn" type="submit" color="primary" text-color="white"/>
       <q-btn label="Reset" @click="clear" type="reset" color="primary" flat class="q-ml-sm" />
     </div>
     <div class="q-ma-sm " v-else >
      <q-btn label="Reset" @click="clear" type="reset" color="primary" flat class="q-ml-sm" />
       <q-btn label="Submit" @click="logIn" type="submit" color="primary" text-color="white"/>
     </div>
     </q-card-actions>
   </q-card>

   <q-card class="my-card fixed-bottom-right q-mb-xl q-mx-md">
     <q-card-section horizontal >
       <q-img
         class="col"
         src="https://cdn.quasar.dev/img/parallax2.jpg"
       />

       <q-card-actions  :vertical="$q.screen.gt.sm" class="justify-around ">
        <a style="text-decoration: none;" href="https://www.instagram.com/aynieo">  <q-btn flat round  color="red" icon="favorite" >    </q-btn></a>

         <q-btn flat round v-on:click="gg" color="accent" icon="share" />
    <!-- vraag -->
        <div class="q-gutter-sm">
    <q-btn title="Need some help?" flat round color="primary" icon="help"  @click="inception = true" />
    <!-- dit kan ergens anders ook geplaatst worden -->
   <q-dialog v-model="inception">
     <q-card>
       <q-card-section class="q-mx-lg">
       <h6 >Old school chat without registration</h6>
       </q-card-section>
       <q-card-section class="q-mt-lg absolute-center">

       </q-card-section>

       <q-card-actions  class="text-primary">
         <q-btn color=""  flat label="Close" v-close-popup />
       </q-card-actions>
     </q-card>
   </q-dialog>
 </div>
<!-- ^ vraag -->

       </q-card-actions>
     </q-card-section>
   </q-card>
 </div>
<!--
<div class="row">
   <div class="">
     <h3>Draggable 1</h3>
     <draggable class="" :list="list1" group="people" >
      <q-card class="col"

         v-for="(element, index) in list1"
         :key="element.name"
  >
     <q-img
     style=" top: -100px; "
       src="https://cdn.quasar.dev/img/parallax2.jpg"
       basic
     >
       <div class="absolute-bottom text-subtitle2 text-center">
               {{ element.name }} {{ index }}
       </div>
     </q-img>
   </q-card>
     </draggable>
   </div>
 start van card
   <div class="col-3">
     <h3>Draggable 2</h3>
     <draggable class="list-group" draggable="false" :list="list2" group="people">

  <q-card class="my-card list-group-item" style="  position: fixed;top: 50px;
 width: 400px;
 height: 200px;
 border: 3px solid #73AD21;"

         v-for="(element, index) in list2"
         :key="element.name"
  >
     <q-img
       src="https://cdn.quasar.dev/img/parallax2.jpg"
       basic
     >
       <div class="absolute-bottom text-subtitle2 text-center">
               {{ element.name }} {{ index }}
       </div>
     </q-img>
   </q-card>

     </draggable>
   </div>
end van card
 </div>-->
 </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// import { auth } from 'boot/base'
export default defineComponent({
  name: 'CompLogin',

  setup () {
    const $q = useQuasar()
    const auth = $q.$auth
    const provider = new GoogleAuthProvider()
    const type = ref('Open')
    const errport = ref('')
    const info = ref('Choose your port')
    const submitfloat = ref('left')
    const inception = ref(false)
    const GSM = () => {
      return !$q.screen.gt.sm
    }
    const gg = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          // The signed-in user info.
          const user = result.user
          console.log(token + user)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          console.log(error)

          // ...
        })
    }

    return {
      type,
      errport,
      info,
      submitfloat,
      inception,
      GSM,
      gg,
      handleSwipe ({ evt, ...newInfo }) {
        submitfloat.value = newInfo.direction

        // native Javascript event
        // console.log(evt)
      }
    }
  }
})
</script>
<style scoped>
.minw {
  min-width: 336px;
}
.my-card{
  background-image: url("src/assets/improve.svg");

}
</style>
