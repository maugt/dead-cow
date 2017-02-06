import dispatcher from "../dispatcher"

export function toggleNav(){
  dispatcher.dispatch({
    type: "TOGGLE_NAV"
  })
}
