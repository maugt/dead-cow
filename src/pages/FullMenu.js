import React, {Component} from 'react'
import firebase from 'firebase'
import * as Actions from '../actions/Actions'
import VarStore from '../stores/VarStore'
import MobileToggleSwitch from '../components/MobileToggleSwitch'
import UUID from 'uuid'
import data from '../menu.json'
import C from '../constants/FirebaseConfig.json'

firebase.initializeApp(C)

export default class FullMenu extends Component {

    toggleNav() {
        Actions.toggleNav();
    }

    componentWillMount() {

        VarStore.on("change", this.updateNav.bind(this))
        this.updateNav();
        this.firebaseRef = firebase.database().ref("menu")
        this.resetFirebase()

        this.firebaseRef.child('items').on('value', function(dataSnapshot) {
            var items = []
            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                items.push(item);
            });
            this.setState({items: items});
        }.bind(this));

        this.firebaseRef.child('sections').on('value', function(dataSnapshot) {
            var sections = [];
            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                sections.push(item);
            });
            this.setState({sections: sections});
        }.bind(this));

        this.firebaseRef.child('subSections').on('value', function(dataSnapshot) {
            var subSections = [];
            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                subSections.push(item);
            });
            this.setState({subSections: subSections});
        }.bind(this));

        this.firebaseRef.child('notes').on('value', function(dataSnapshot) {
            var notes = [];
            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                notes.push(item);
            });
            this.setState({notes: notes});
        }.bind(this));
    }

    resetFirebase() {

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
    }

    componentWillUnmount() {
        this.firebaseRef.off()
    }

    updateNav() {
        this.setState({navIsOpen: VarStore.navIsOpen})
    }

    getStyles() {
        if (!this.state.navIsOpen) {
            return " collapsed"
        } else {
            return ""
        }
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

    renderMenuItem(item) {

        return (
            <div key={UUID.v4()} className="menu-item">
                <div className="menu-item-banner">
                    <h4 className="menu-item-title">{item.title}</h4>
                    <div className="fill"></div>
                    <div className="menu-item-price">
                        {this.renderMenuItemPrices(item)}
                    </div>
                </div>
                <p className="menu-item-desc">{item.description}</p>
                {this.renderMenuItemAddOns(item)}
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
            data.sections.map(section => {
                sec.push(
                    <div key={UUID.v4()} className="menu-section">
                        <div className="container">
                            <h2 className="menu-section-title">{section.title}</h2>
                        </div>
                        <div className="container">
                            {this.renderMenuItems(section.slug, false)}
                        </div>
                        {this.renderMenuSubSections(section.slug)}
                    </div>
                )
                return section
            })
            return sec;
        }
    }

    render() {
        return (
            <div className="menu">
                <div className="background-image">
                    <div className="wrapper">
                        <div className="container">
                            <MobileToggleSwitch/>
                            <div className="page-front-matter">
                                <h1>Menu</h1>
                                <p>Our menu selections vary daily, so come in to see what today's specials are</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-menu">
                    {this.renderMenu()}
                </div>
            </div>
        )
    }

}
