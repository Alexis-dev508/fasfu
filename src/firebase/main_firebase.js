
firebase.initializeApp({
    apiKey: "AIzaSyBJDeYRxEIPvDI15Kcuq0ZSfeVszMvjnsA",
    authDomain: "proyecto-8voidgs.firebaseapp.com",
    projectId: "proyecto-8voidgs",
    storageBucket: "proyecto-8voidgs.appspot.com",
    messagingSenderId: "165371869769",
    appId: "1:165371869769:web:0b8261c46d72ccfb4bdd98",
    measurementId: "G-7YHKVSH59S"
});

// Initialize Firebase
var db = firebase.firestore();

function addRestaurant(){
    try {
        let resName = document.getElementById('res_name').value;
        let resOwner = document.getElementById('res_owner').value
        let resSchedule = document.getElementById('res_schedule').value;
        let resDescription = document.getElementById('res_description').value;
        let resType = document.getElementById('res_type').value;
        let resPhoto = document.getElementById('res_photo');
        
        let restaurantRef = db.collection("restaurant");
        restaurantRef.doc(resName).set({
            description: resDescription,
            menu: '',
            name: resName,
            orders: '',
            owner: resOwner,
            schedule: resSchedule,
            status: 'abierto',
            type: resType,
            value: '60' 
        }).then(()=>{
            console.log("Document written with ID: ", docRef.id);
        });   

    } catch (error) {
        console.log(error)
    }

}

