import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase'

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
    firebase.initializeApp(firebaseConfig);
		//app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()
    this.database = firebase.database();
	}

  async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

  async anonymous_register(){
    return this.auth.signInAnonymously().catch(function(error) {
      var errorMessage = error.message;
      alert(errorMessage);
    });
  }

	addHighschool(highschool) {
		if(!this.auth.currentUser) {
			alert('Not authorized')
      return
		}
		return this.db.doc(`highschools/${this.auth.currentUser.uid}`).set({
			highschool
		})
	}

  addCollegeAlumData(school, name, major, minor, email, grad, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9) {
    this.db.collection(school).add({
      university: school,
      name: name,
      major: major,
      minor: minor,
      email: email,
      grad: grad,
      q0: q0,
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      q6: q6,
      q7: q7,
      q8: q8,
      q9: q9
    })
	}

  writeUserData(school, name, major, minor, email, grad, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9) {
    var schools = this.database.ref("/" + school).push()
    schools.set({
      university: school,
      name: name,
      major: major,
      minor: minor,
      email: email,
      grad: grad,
      q0: q0,
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      q6: q6,
      q7: q7,
      q8: q8,
      q9: q9
    });
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
