import React, {Component} from 'react'
import firebase from 'firebase'
import UUID from 'uuid'
import VarStore from '../stores/VarStore'
import data from '../menu.json'

export default class DailySpecials extends Component {

  constructor() {
    super()
    this.state = {
      specials: [],
      isEditing: false
    }
  }

  onFieldChange(event) {
    const target = event.target
    const name = target.name
    const key = target.id

    this.setState((prevState) => {
      let specials = prevState.specials
      let special = specials[key]
      special[name] = target.value
      specials[key] = special
      return {specials: specials}
    })

  }

  componentWillMount() {
    this.firebaseRef = firebase.database().ref("menu/specials")
    this.firebaseRef.set(data.specials)

    this.firebaseRef.on('value', function(dataSnapshot) {
      this.setState({specials: dataSnapshot.val()});
    }.bind(this));

  }

  renderSpecialItem(x) {
    let item = []
    if (x.category) {
      item.push(
        <p className="special-item-category">{x.category}</p>
      )
    }
    item.push(
      <p className="special-item-description">{x.description}</p>

    )
    if (x.price) {
      item.push(
        <p className="special-item-price">{x.price}</p>
      )
    }
    return item
  }

  renderSpecials() {
    let sp = []
    if (this.state.isEditing) {
      this.state.specials.map(x => {
        sp.push(
          <div key={x.key} className="special">
            <input type="text" id={x.sortIndex} name="title" value={x.title} onChange={this.onFieldChange.bind(this)}/>
            <input type="text" id={x.sortIndex} name="price" value={x.price} onChange={this.onFieldChange.bind(this)}/>
            <input type="text" id={x.sortIndex} name="description" value={x.description} onChange={this.onFieldChange.bind(this)}/>
          </div>
        )

        return x;
      })
    } else {
      let specials = this.state.specials
      let sec = []

      if (specials.burritos || specials.paninis || specials.fritattas) {

        sp.push(
          <h3 className="breakfast" key={UUID.v4()}>Breakfast</h3>
        )

      }

      if (specials.burritos || specials.paninis) {
        sec = [];
        sec.push(
          <h4 key={UUID.v4()}>
            Burritos & Paninis</h4>
        )

        for (let e of specials.burritos) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }

        for (let e of specials.paninis) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }
        sp.push(
          <div key={UUID.v4()} className="burritos-paninis special-section">
            {sec}
          </div>
        )
      }

      if (specials.fritattas) {
        sec = [];
        sec.push(
          <h4 key={UUID.v4()}>Fritattas</h4>
        )

        for (let e of specials.fritattas) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }
        sp.push(
          <div key={UUID.v4()} className="fritattas special-section">
            {sec}
          </div>
        )
      }

      if (specials.soups || specials.sandwiches || specials.salads) {
        sp.push(
          <h3 className="lunch" key={UUID.v4()}>Lunch</h3>
        )
      }

      if (specials.soups) {
        sec = [];
        sec.push(
          <h4 key={UUID.v4()}>Soups</h4>
        )

        for (let e of specials.soups) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }

        sp.push(
          <div key={UUID.v4()} className="soups special-section">
            {sec}
          </div>
        )
      }

      if (specials.sandwiches) {
        sec = []
        sec.push(
          <h4 key={UUID.v4()}>Sandwiches</h4>
        )
        for (let e of specials.sandwiches) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }
        sp.push(
          <div key={UUID.v4()} className="sandwiches special-section">
            {sec}
          </div>
        )
      }

      if (specials.salads) {
        sec = [];
        sec.push(
          <h4 key={UUID.v4()}>Salads</h4>
        )

        for (let e of specials.salads) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }
        sp.push(
          <div key={UUID.v4()} className="salads special-section">
            {sec}
          </div>
        )
      }

      if (specials.bar || specials.proteins || specials.starches || specials.sides) {
        sp.push(
          <h3 className="dinner" key={UUID.v4()}>Dinner</h3>
        )
      }

      if (specials.proteins) {
        sec = []
        sec.push(
          <h4 key={UUID.v4()}>Proteins</h4>
        )
        for (let e of specials.proteins) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }
        sp.push(
          <div key={UUID.v4()} className="proteins special-section">
            {sec}
          </div>
        )
      }

      if (specials.bar) {
        sec = [];
        sec.push(
          <h4 key={UUID.v4()}>Bar Snacks & Appetizers</h4>
        )
        for (let e of specials.bar) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }
        sp.push(
          <div key={UUID.v4()} className="bar special-section">
            {sec}
          </div>
        )
      }

      if (specials.starches) {
        sec = []
        sec.push(
          <h4 key={UUID.v4()}>Starches</h4>
        )
        for (let e of specials.starches) {
          sec.push(

            <div key={UUID.v4()} className=" special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }
        sp.push(
          <div key={UUID.v4()} className="starches special-section">
            {sec}
          </div>
        )
      }

      if (specials.sides) {
        sec = []
        sec.push(
          <h4 key={UUID.v4()}>Vegitable Sides</h4>
        )
        for (let e of specials.sides) {
          sec.push(

            <div key={UUID.v4()} className="special-item">
              {this.renderSpecialItem(e)}
            </div>
          )
        }
        sp.push(
          <div key={UUID.v4()} className="sides special-section">
            {sec}
          </div>
        )
      }

      return sp
    }

    if (sp.length > 0) {
      return sp
    } else {
      return (
        <div className="pink">
          <h3>Come on in to see what we're serving up today!</h3>
        </div>
      )
    }

  }

  save() {
    this.setState({isEditing: false})
    this.firebaseRef.set(this.state.specials)
  }

  edit() {
    this.setState({isEditing: true})
  }

  showEditButton() {
    if (VarStore.isLoggedIn) {
      if (this.state.isEditing) {
        return <input value="Save" className="button" type="submit" onClick={this.save.bind(this)}/>
      } else {
        return <input value="Edit" className="button" type="submit" onClick={this.edit.bind(this)}/>
      }
    } else {
      return null;
    }
  }

  render() {

    return (
      <div id="daily-specials" className='daily-specials'>
        <div className="container">
          <h2>Daily Specials</h2>
          <div className="specials">
            {this.renderSpecials()}
          </div>
          {this.showEditButton()}
        </div>
      </div>
    )
  }

}
