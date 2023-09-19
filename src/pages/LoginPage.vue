<template>
  <q-page>

  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card rainbow">

      <q-card-section >
        <q-card-section>

          <q-input color="black" filled v-model="login" label="Login">
          <template v-slot:prepend>
            <q-icon name="face"   />
          </template>
          </q-input>

        </q-card-section>
        <q-card-section>
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

      <q-card-actions>
        <div class="q-ma-sm">
        <q-btn label="Submit" @click="logIn" type="submit" color="primary" text-color="white"/>
        <q-btn label="Reset" @click="clear" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
      </q-card-actions>
    </q-card>

    <q-card class="my-card fixed-bottom-right q-mb-xl q-mx-md">
      <q-card-section horizontal >
        <q-img
          class="col"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />

        <q-card-actions vertical class="justify-around ">
  <q-btn flat round to="/index" color="red" icon="favorite" />
          <q-btn flat round to="/index" color="accent" icon="share" />
<!-- vraag -->
         <div class="q-gutter-sm">
     <q-btn title="Need some help?" flat round color="primary" icon="help"  @click="inception = true" />
     <!-- dit kan ergens anders ook geplaatst worden -->
    <q-dialog v-model="inception">
      <q-card>
        <q-card-section class="q-mx-lg">
        <h5>ngas</h5>
        </q-card-section>
        <q-card-section class="q-mt-lg absolute-center">
          gg
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
import { mapActions } from 'vuex'
// import draggable from 'vuedraggable'

export default {

  name: 'App',
  components: {
    // draggable
  },
  data () {
    return {
      login: '',
      password: '',
      dense: false,
      isPwd: true,
      inception: false,
      list1: [
        { name: '1', id: 1 },
        { name: '2', id: 2 },
        { name: '3', id: 3 },
        { name: '4', id: 4 }
      ],
      list2: [
        { name: '1', id: 5 },
        { name: '2', id: 6 },
        { name: '3', id: 7 }
      ]
    }
  },
  created () {

  },
  methods: {
    ...mapActions('userStore', ['logInUser']),

    logIn () {
      this.logInUser({ login: this.login.replace(/\s/g, ''), password: this.password.replace(/\s/g, '') })
    },
    clear () {
      this.login = ''
      this.password = ''
    },
    changecolor () {
      document.body.style.setProperty('--q-color-primary', '#0273d4')
    }
  }
}
</script>
<style lang="stylus" scoped>
.my-card {
  margin-top : 7.776rem;
}
</style>
