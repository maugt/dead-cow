import React, { Component } from 'react'

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
					<a href="https://www.google.com/maps/dir//1060+River+St+%23112,+Santa+Cruz,+CA+95060/@36.9867018,-122.0647113,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808e4037ab7bf8ab:0xdb9dc8e0e174b70b!2m2!1d-122.029606!2d36.986707">
						1060 River St. Suite 112
          <br />
						Santa Cruz, CA 95060
					</a>
				</li>

			</ul>
		)
	}
}
