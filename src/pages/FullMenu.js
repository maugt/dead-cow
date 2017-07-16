import React, {Component} from 'react'
import firebase from 'firebase'
import MobileToggleSwitch from '../components/MobileToggleSwitch'
import UUID from 'uuid'
import data from '../menu.json'
import C from '../constants/credentials/FirebaseConfig.json'

firebase.initializeApp(C)

export default class FullMenu extends Component {

  constructor() {
    super();
    this.state = {
      sections: [],
      subSections: [],
      items: [],
      notes: []
    }
  }

  componentWillMount() {
    this.firebaseRef = firebase.database().ref('menu');

    this.firebaseRef.child('items').on('value', function(dataSnapshot) {
      // console.log("items have a value!")
      console.log(dataSnapshot.val())
      this.setState({items: dataSnapshot.val()});
    }.bind(this));

    this.firebaseRef.child('sections').on('value', function(dataSnapshot) {
      // dataSnapshot.forEach(function(childSnapshot) {
      //   var item = childSnapshot.val();
      //   item['.key'] = childSnapshot.key;
      //   sections.push(item);
      // });
      this.setState({sections: dataSnapshot.val()});
    }.bind(this));

    this.firebaseRef.child('subSections').on('value', function(dataSnapshot) {
      // dataSnapshot.forEach(function(childSnapshot) {
      //   var item = childSnapshot.val();
      //   item['.key'] = childSnapshot.key;
      //   subSections.push(item);
      // });
      this.setState({subSections: dataSnapshot.val()});
    }.bind(this));

    this.firebaseRef.child('notes').on('value', function(dataSnapshot) {
      var notes = [];
      // dataSnapshot.forEach(function(childSnapshot) {
      //   var item = childSnapshot.val();
      //   item['.key'] = childSnapshot.key;
      //   notes.push(item);
      // });
      this.setState({notes: dataSnapshot.val()});
    }.bind(this));
  }

  resetFirebase() {
    console.log("database: reseeded")
    this.firebaseRef.set({})
    let sortIndex = 0;
    for (let e of data.sections) {
      e.sortIndex = sortIndex
      this.firebaseRef.child('sections').push(e)
      sortIndex++
    }
    sortIndex = 0;
    for (let e of data.subSections) {
      e.sortIndex = sortIndex
      this.firebaseRef.child('subSections').push(e)
      sortIndex++
    }
    sortIndex = 0;
    for (let e of data.items) {
      e.sortIndex = sortIndex
      this.firebaseRef.child('items').push(e)
      sortIndex++
    }
    sortIndex = 0;
    for (let e of data.notes) {
      let f = {
        sortIndex: sortIndex,
        note: e
      }
      this.firebaseRef.child('notes').push(f)
      sortIndex++
    }
    sortIndex = 0;
    for (let e of data.specials) {
      e.sortIndex = sortIndex
      this.firebaseRef.child('specials').push(e)
      sortIndex++
    }
  }

  componentWillUnmount() {
    this.firebaseRef.off()
  }

  renderMenuItemPrices(item) {
    let prices = []
    for (let i of item.price) {
      prices.push(
        <p key={UUID.v4()}>{i}</p>
      )
    }
    return prices
  }

  renderMenuItemAddOns(item) {
    let addOns = []
    if (item.addons) {
      for (let i of item.addons) {
        addOns.push(
          <div key={UUID.v4()} className="menu-item-add-on">
            <p className="menu-item-add-on-title">{i.title}</p>

            <p className="menu-item-add-on-price">{i.price}</p>
          </div>

        )
      }
      return (
        <div className="menu-item-add-ons">
          {addOns}
        </div>
      )
    }
  }

  renderSectionNotes(section) {
    let menuNotes = this.state.notes
    if (section) {
      for (let i of menuNotes) {
        if (i.section.indexOf(section) > -1) {
          return (
            <div className="container">
              <div className="menu-section-note">
                <h3>{i.note}</h3>
              </div>
            </div>
          )
        }
      }
    }
  }

  renderMenuItem(item) {

    return (
      <div key={UUID.v4()} className="menu-item">
        <div className="menu-item-banner">
          <h4 className="menu-item-title">{item.title}</h4>
        </div>
        <p className="menu-item-desc">{item.description}</p>
      </div>
    )
  }

  renderMenuItems(section, isSub) {
    if (data.items) {
      let items = this.state.items
      let toReturn = []
      items.map(item => {
        if (isSub) {
          if (section && item.subCategory && item.subCategory.indexOf(section) > -1) {
            toReturn.push(this.renderMenuItem(item))
          }
        } else {
          if (section && item.category && !item.subCategory && item.category.indexOf(section) > -1) {
            toReturn.push(this.renderMenuItem(item))
          }
        }
        return item
      })

      return toReturn
    }
  }

  renderSubSectionBanner(sub) {
    if (sub.title) {
      return (
        <div className="container menu-subsection-banner">
          <h3 className="menu-subsection-title">{sub.title}</h3>
        </div>
      )
    }
  }

  renderMenuSubSections(section) {
    let subSec = []
    if (this.state.subSections) {
      this.state.subSections.map(sub => {
        if (sub.childOf.indexOf(section) > -1) {
          subSec.push(
            <div key={UUID.v4()} className="menu-subsection">
              {this.renderSubSectionBanner(sub)}
              <div className="container">
                {this.renderMenuItems(sub.slug, true)}

              </div>
            </div>
          )
        }
        return sub
      })
    }
    return subSec;
  }

  renderMenu() {
    let sec = [];
    if (this.state.sections) {
      this.state.sections.map(section => {
        sec.push(
          <div key={UUID.v4()} className="menu-section">
            <div className="container">
              <h2 className="menu-section-title">{section.title}</h2>
            </div>
            <div className="container">
              {this.renderMenuItems(section.slug, false)}
            </div>
            {this.renderMenuSubSections(section.slug)}
            {this.renderSectionNotes(section.slug)}
          </div>
        )
        return section
      })
      return sec;
    }
  }

  render() {
    document.title = "Dead Cow - Menu"
    console.log(this.state)
    return (
      <div className="menu">
        <div className="background-image">
          <div className="wrapper">
            <div className="container">
              <MobileToggleSwitch/>
              <div className="page-front-matter">
                <h1>Menu</h1>
                <h3>Our menu selections vary daily, so come in to see what's being served up today!</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="full-menu">
          <div className="page-content">
            {this.renderMenu()}
          </div>
        </div>
      </div>
    )
  }

}
