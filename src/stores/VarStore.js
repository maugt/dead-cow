import {EventEmitter} from 'events'
import dispatcher from "../dispatcher"

class VarStore extends EventEmitter {

  constructor(){
    super()
    this.navIsOpen = false
  }

  navIsOpen(){
    console.log("yes");
  }

  handleActions(action){

    switch (action.type) {
      case "TOGGLE_NAV":
        this.navIsOpen = !this.navIsOpen
        this.emit("change")
        console.log(this.navIsOpen)
        break;
      default:
    }
  }
}

const varStore = new VarStore()
dispatcher.register(varStore.handleActions.bind(varStore))
export default varStore
