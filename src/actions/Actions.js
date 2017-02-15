import dispatcher from "../dispatcher"

export function toggleNav() {
    dispatcher.dispatch({type: "TOGGLE_NAV"})
}

export function setLoggedInStatus(status) {
    dispatcher.dispatch({type: "SET_LOGGED_IN_STATUS", isLoggedIn: status})
}
