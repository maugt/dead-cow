import React, {Component} from 'react'
import MobileToggleSwitch from '../components/MobileToggleSwitch'

export default class FullAbout extends Component {

  render() {
    document.title = "Dead Cow - About"
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
              <h2>Mission</h2>
              <p>Driven by the Farm-to-Table philosophies of Chef Shannon Madison, our Mission is to serve the Santa Cruz Tannery Arts Center as a family and artist-friendly food and beverage community gathering place. We create local, organic, sustainable menus that are vegan first, using dairy for flavor enhancement, with a reduced emphasis on animal proteins. We offer casual preparations but employ fine-dining attention to detail and quality. Our plates are inspired by the mediterranean climate and produce of California. We strive to provide a welcoming venue with a great tasting food and beverage draw, while catering to popular dietary restrictions with locally and sustainably-sourced, healthy preparations.
              </p>

              <p>The The Dead Cow supports the Tannery community with product offerings that enhance the lives of both residents and tenants, with nourishing meals, restorative beverages, and retail necessities. Our morning food and beverage program provides high quality coffee and blended juice drinks, breakfast foods for dining on premises or to-go, and a comfortable environment with wifi and power for our working/studying patrons. Grab-and-go sandwiches and salads are available first thing in the morning and during our midday service for patrons on the run. Our lunch menu of soups, salads, and sandwiches is perfect for enjoying with friends while relaxing in the sun on our patio, or for the working crowd looking for a quick alternative to fast food. Evenings feature a variety of hot food items, activities and amusements for the community, and a mellow beer and wine program. Retail items such as toiletries and sundries are available as a convenience to residents and tenants who would otherwise have to travel by car for such purchases.
              </p>

              <h2>About the Chef</h2>

              <p>Owner and Executive Chef Shannon Madison has over 25 years of industry business management experience, with tenure growing industry icons that include Apple Computer and Google, Inc. Shannon earned her Grand Diploma in Culinary Arts from the distinguished French Culinary Institute (now known as the International Culinary Center) and received training under Top Chef Master and James Beard Award nominee Chris Cosentino at
                <a href="http://cockscombsf.com">
                  Cockscomb
                </a>
                in San Francisco, California, and from Chef Sam Nuckols of
                <a href="http://liholihoyachtclub.com">
                  Liholiho Yacht Club
                </a>
                and
                <a href="http://www.petitcrenn.com">
                  Petit Crenn
                </a>. Shannon was drawn to Santa Cruz to work with Chef Zachary Mazi at the experimental kitchen, Lionfish, in Santa Cruz, California, but found her true passion serving pop-up meals for the artist community at the Tannery during the Thursday Art Markets.</p>
              <p>In addition to her direct culinary experience, Shannon serves on the board of directors for the American Institute of Wine & Food, a non-profit founded by Julia Child, Robert Mondavi, and Richard Graff. During her tenure, Shannon has worked closely with and continues to receive guidance from such culinary luminaries as Jacques Pépin, Daniel Boulud, Dorothy Hamilton, José Andrés and a host of others.
              </p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
