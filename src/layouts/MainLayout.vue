<template>
  <q-layout view="lhh lpR fff ">
   <q-header reveal  class="bg-white text-black " >
      <q-toolbar>
        <q-toolbar-title class="unselectable">
          <i class="qq unselectable">
            <img class="round">
          </i>
          <p @click="toggleRightDrawer">PPPorts </p>
        </q-toolbar-title>

       <q-btn v-if="gs == '' "  class="q-pa-sm btn-connect"  glossy  @click="getwallet">connect</q-btn>
   <p class="walletinfo" > {{gs}} </p>
      </q-toolbar>

  <div class="astrodivider">
    <div class="astrodividermask"> </div>
    <span>
      <i><p class="logo" @click="toggleRightDrawer">&#8762;</p></i>
    </span>
  </div>

  </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  <q-footer  class="qq text-white" css="overflow-x: hidden;">

          <div class="row justify-center">
            <btn @click="toggleRightDrawer">PPPorts.com &#169; 2022</btn>
  <span class="line-1"></span>
  <span class="line-2"></span>
  <span class="line-3"></span>
  <span class="line-4"></span>
  <span class="line-5"></span>
  <span class="line-6"></span>
          </div>

    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

// import DrawerD from 'src/components/SiteDrawer.vue'

import Web3 from 'web3'
export default defineComponent({
  name: 'MainLayout',

  components: {

    // DrawerD
  },

  setup () {
    const gs = ref('')
    const rightDrawerOpen = ref(false)
    function sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    const getWeb3 = async => {
      document.getElementsByClassName('walletinfo').textContent = 'aaa'

      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum)
        try {
          window.ethereum.request({ method: 'eth_requestAccounts' })
          resolve(web3)
        } catch (error) {
          reject(error)
        }
      })
    }
    return {

      rightDrawerOpen,
      getWeb3,
      sleep,
      gs,
      async getwallet () {
        console.stdlog = console.log.bind(console)
        console.logs = []
        console.log = function () {
          console.logs.push(Array.from(arguments))
          console.stdlog.apply(console, arguments)
        }
        await getWeb3().then((r) => {
          r.eth.getAccounts(console.log)
          console.log('connecting to your wallet')
          const waller = console.logs
          console.log(waller)
          // gs.value = waller.slice(0, 5) + '...' + waller.slice(38, 42)
        }
        )
      },
      async toggleRightDrawer () {
        console.stdlog = console.log.bind(console)
        console.logs = []
        console.log = function () {
          console.logs.push(Array.from(arguments))
          console.stdlog.apply(console, arguments)
        }

        rightDrawerOpen.value = !rightDrawerOpen.value

        // eslint-disable-next-line no-return-assign
      }
    }
  }
})
</script>
<style lang="sass">

</style>
<style >
.qq{
  background-color: #ffc800!important;
  opacity: 0.876;

}
.q-header {

opacity: 0.8;
margin: 1rem;
}

.astrodivider {

  position:relative;

box-shadow: -35px 0 92px 0px rgba(255,200,0,0.75) ;
-webkit-box-shadow: -35px 0 92px 0px rgba(255,200,0,0.75) ;
-moz-box-shadow: -35px 0 92px 0px rgba(255,200,0,0.75) ;
}
.astrodividermask {
    overflow:hidden; height:6.66px;
}

.astrodividermask:after {
      content:'gs';
       display:block; margin:-25px auto 0;
       width:100%; height:25px;
        border-radius:125px / 12px;
       box-shadow:0 0 8px rgba(255,200,0,0.75) ;
}
.astrodivider span {
    width:50px; height:50px;
    position:absolute;
    bottom:100%; margin-bottom:-25px;
    left:50%; margin-left:-25px;
    border-radius:100%;
    box-shadow:0 2px 4px rgb(214, 169, 4);
    background:#fff;
}
.astrodivider i {

    position:absolute;
    top:4px; bottom:4px;
    left:4px; right:4px;
    border-radius:60%;
    border:1px dashed rgb(214, 169, 4);
    text-align:center;
    line-height:40px;
    font-style:normal;
     color:#ce962ddc;
}

.tri {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;

  border-bottom: 15px solid black;
}
.blocka {
  position: relative;
  margin: 300px auto 0;
  width: 500px;
  height: 250px;
  background: linear-gradient(0deg, #000, #272727);
}

.blocka:before, .blocka:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094,
    #0000ff, #00ff00,#ffff00, #ff0000);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.logo{
  font-size: 26px;
}

.blocka:after {
  filter: blur(50px);
}
</style>
