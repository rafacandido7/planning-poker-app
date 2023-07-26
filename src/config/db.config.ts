import firebase from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDXAmGV427dwXF2ihJJ-fLSZNTouHTNdDg',
  authDomain: 'planning-poker-app-131dd.firebaseapp.com',
  projectId: 'planning-poker-app-131dd',
  storageBucket: 'planning-poker-app-131dd.appspot.com',
  messagingSenderId: '630246716984',
  appId: '1:630246716984:web:7249946987a1757e3018cd',
  measurementId: 'G-PRFRMXRLSP'
}

const app = firebase.initializeApp(firebaseConfig)

export const analytics = getAnalytics(app)

export const db = getDatabase()
