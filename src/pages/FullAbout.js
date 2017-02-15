import React, {Component} from 'react'
// import {browserHistory} from 'react-router'
import MobileToggleSwitch from '../components/MobileToggleSwitch'

export default class FullAbout extends Component {

    render() {
        return (
            <div className="about">
                <div className="background-image">
                    <div className="wrapper">
                        <div className="container">
                            <MobileToggleSwitch/>
                            <div className="page-front-matter">
                                <h1>About</h1>
                                <h3>Decidedly Local; Aggressively Seasonal!</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-about">
                    <div className="container">
                        <div className="page-content">
                            <p>Driven by the Farm-to-Table philosophies of our chefs, Shannon and JP, our Mission is to serve the Santa Cruz Tannery Arts Center with a family and artist-friendly food and beverage community gathering place. We create local, organic, sustainable menus that are vegan first, with dairy for flavor enhancement, and a reduced emphasis on animal proteins. We offer casual preparations with fine-dining attention to detail and quality. Our plates are inspired by the mediterranean climate and produce of California. We aim to have a welcoming venue with a great tasting food and beverage draw, while catering to popular dietary restrictions with locally and sustainably-sourced, healthy preparations.
                            </p>

                            <p>The The Dead Cow supports the Tannery community with product offerings that enhance the lives of both residents and tenants, with nourishing meals, restorative beverages, and retail necessities. Our morning food and beverage program provides high quality coffee and blended juice drinks, breakfast foods for dining on premises or to-go, and a comfortable environment with wifi and power for our working/studying patrons. Grab-and-go sandwiches and salads are available first thing in the morning and during our midday service for patrons on the run. Our lunch menu of soups, salads, and sandwiches is perfect for enjoying with friends while relaxing in the sun on our patio, or for the working crowd looking for a quick alternative to fast food. Evenings feature a variety of hot food items, activities and entertainment for the community, and a mellow beer and wine program. Retail items such as toiletries and sundries are available as a convenience to residents and tenants who would otherwise have to travel by car for such purchases.
                            </p>

                            <p>The Dead Cow leverages the successes of the previous establishments, while avoiding their missteps with responsiveness to customer demand and careful attention to inventory control and cost accounting.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
