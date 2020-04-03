import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7Es3RRgmwxz-h0ipeB0do95ZbpJQXGho",
  authDomain: "missionforward-81ad2.firebaseapp.com",
  databaseURL: "https://missionforward-81ad2.firebaseio.com",
  projectId: "missionforward-81ad2",
  storageBucket: "missionforward-81ad2.appspot.com",
  messagingSenderId: "667911052432",
  appId: "1:667911052432:web:ee9743a462a99c67ff8c15",
  measurementId: "G-VD845TM42J"
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()
	}
	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addHighschool(highschool) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}
		return this.db.doc(`highschools/${this.auth.currentUser.uid}`).set({
			highschool
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
}

export default new Firebase()
