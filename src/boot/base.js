import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

export default boot(({ app }) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCOLRpO4dh0U-wng8NIv2hf-bpmv0D26pY',
    authDomain: 'ppp-963.firebaseapp.com',
    projectId: 'ppp-963',
    storageBucket: 'ppp-963.appspot.com',
    messagingSenderId: '488998696652',
    appId: '1:488998696652:web:4663f802686b1bd6797469',
    measurementId: 'G-8F1NWCBKVE'
  }

  // Initialize Firebase
  const apps = initializeApp(firebaseConfig)
  // services
  const analytics = getAnalytics(apps)
  const auth = getAuth(apps)
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$base = apps
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file
  app.config.globalProperties.$analytics = analytics

  app.config.globalProperties.$auth = auth
  // app.use()
})
