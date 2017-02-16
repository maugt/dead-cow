import {EventEmitter} from 'events'
import dispatcher from "../dispatcher"

class VarStore extends EventEmitter {

    constructor() {
        super()
        this.navIsOpen = false
        this.isLoggedIn = false
    }

    handleActions(action) {
        switch (action.type) {
            case "TOGGLE_NAV":
                this.navIsOpen = !this.navIsOpen
                this.emit("change");
                console.log(this.navIsOpen);
                break;
            case "SET_LOGGED_IN_STATUS":
                this.isLoggedIn = action.isLoggedIn
                // console.log("set logged in status", this.isLoggedIn);
                this.emit("change");
                break
            default:
        }
    }
}

const varStore = new VarStore()
dispatcher.register(varStore.handleActions.bind(varStore))
export default varStore
