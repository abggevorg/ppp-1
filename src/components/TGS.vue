<template>

  <q-page class="flex flex-center unselectable">
<div class=" q-pa-md  row justify-center">

  <section class="product-details">
    <div class="image-slider">
        <div class="product-images">
            <img src="../assets/shirts/HS.png" class="active" alt="">
            <img src="../assets/shirts/HS2.jpg" alt="gs">
            <img src="../assets/shirts/HS2.jpg" alt="gs">
            <img src="../assets/shirts/HS.png" alt="gs">
        </div>
    </div>
</section>

</div>
<div class="q-pa-md row justify-center items-start q-gutter-md ">

  <section>
   <div class="details">
        <h2 class="product-brand">GS</h2>
        <p class="product-short-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <span class="product-price">$412</span>

        <p class="product-sub-heading">Sample/size</p>
        <input type="radio" name="size" value="s" checked hidden id="s-size">
        <label for="s-size" class="size-radio-btn ">
        M        </label>
        <label for="s-size" class="size-radio-btn check">
        125        </label>
        <p class="product-sub-heading">Country</p>

        <img src="../../src/assets/be.png" for="s-size" style="width: 80px;" alt="gs">

    </div>
</section>
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

.product-details{
    width: 100%;
    padding: 60px 10vw;
    display: flex;
    justify-content: space-between;
}

.image-slider{
    width: 500px;
    height: 500px;
    position: relative;
    background-image: url('../../src/assets/shirts/HS.png');
    background-size: cover;
}

.product-images{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    background: #fff;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100px;
    grid-gap: 10px;
    padding: 10px;
}

.product-images img{
    width: 100%;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
}

.product-images img.active{
    opacity: 0.5;
}
.details{
    width: 50%;
}

.details .product-brand{
    text-transform: capitalize;
    font-size: 30px;
}

.details .product-short-des{
    font-size: 25px;
    line-height: 30px;
    height: auto;
    margin: 15px 0 30px;
}

.product-price{
    font-weight: 700;
    font-size: 30px;
}

.product-actual-price{
    font-size: 30px;
    opacity: 0.5;
    text-decoration: line-through;
    margin: 0 20px;
    font-weight: 300;
}

.product-discount{
    color: #ff7d7d;
    font-size: 20px;
}

.product-sub-heading{
    font-size: 30px;
    text-transform: uppercase;
    margin: 60px 0 10px;
    font-weight: 300;
}

.size-radio-btn{
    display: inline-block;
    width: 80px;
    height: 80px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #383838;
    border-radius: 50%;
    margin: 10px;
    margin-left: 0;
    line-height: 80px;
    text-transform: uppercase;
    color: #383838;
    cursor: pointer;
}

.size-radio-btn.check{
    background: #383838;
    color: #fff;
}

.btn{
    width: 48%;
    padding: 20px;
    border-radius: 5px;
    background: none;
    border: 1px solid #383838;
    color: #383838;
    font-size: 20px;
    cursor: pointer;
    margin: 20px 0;
    text-transform: capitalize;
}

.cart-btn{
    margin-right: 2%;
    background: #383838;
    color: #fff;
}
</style>
