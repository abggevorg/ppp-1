<template>
  <div class="">

      <q-drawer
       class="q-my-xl"

       side="right" behavior="desktop"
        v-model="drawer"
        show-if-above

        :mini="miniState"
        :width="200"
        :breakpoint="500"

      >
        <div class="fit gs-scrollarea ">
          <q-list padding>
            <q-item clickable v-ripple >
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>

        <div class="q-mini-drawer-show " >
          <q-btn
            dense
            round
            unelevated

            text-color="red"
            icon="chevron_left"
            @click="miniState = !miniState"
          />
        </div>
 </div>
      </q-drawer>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true)
    }
  }
}
</script>
<style >
.q-drawer__content{

margin-top: 11rem;

}
</style>
