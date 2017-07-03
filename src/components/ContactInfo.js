import React, {Component} from 'react'

export default class ContactInfo extends Component {

  render() {
    return (
      <ul>
        {/* <li><a href="/specials"><span>Daily </span>Specials</a></li> */}
        <li>
          <a href="tel:+18318547458">831.854.7458</a>
        </li>
        <li>
          <a href="mailto:info@thedeadcow.com">info@thedeadcow.com</a>
        </li>
        <li>
          1060 River St. Suite 112
          <br/>
          Santa Cruz, CA 95060</li>

      </ul>
    )
  }
}
