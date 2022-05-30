import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

/*====================================================*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD-zk29gs_S6LZEq0Be00aG2SSoaXL_Rg",
    authDomain: "onesharp.firebaseapp.com",
    projectId: "onesharp",
    storageBucket: "onesharp.appspot.com",
    messagingSenderId: "654692502994",
    appId: "1:654692502994:web:e6cb65e32ea41ede270c0b",
    measurementId: "G-SDQ9ZRXMR9"
  };

  /*====================================================*/

function criaConta(){
const nome = document.getElementById('nNome').value
const sobreNome = document.getElementById('sNome').value
const email = document.getElementById('nMail').value
const senha = document.getElementById('nSenha').value
const confSenha = document.getElementById('dnSenha').value

if(nome == "" || sobreNome == "" || email == "" || senha == "" || confSenha == ""){
    alert('Falta dados')
} else if(senha != confSenha){
    alert('As senhas não pode ser diferente.')
} else{
    alert('passou')
}


}