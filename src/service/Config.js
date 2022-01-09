import firebaseApp from "../../firebaseApp";
export default class Config {

    constructor() {
        this.auth = firebaseApp.auth();
        this.db = firebaseApp.firestore();
        this.storageRef = firebaseApp.storage();
    }
    
}