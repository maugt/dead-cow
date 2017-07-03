import React, {Component} from 'react'
import firebase from 'firebase'
import UUID from 'uuid'
import VarStore from '../stores/VarStore'

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

    this.firebaseRef.on('value', function(dataSnapshot) {
      var specials = []
      dataSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        specials.push(item);
      });
      this.setState({specials: specials});
    }.bind(this));
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
      this.state.specials.map(x => {
        if (x.title) {

          sp.push(
            <div key={UUID.v4()} className={"special " + x.color}>
              <div className="banner">
                <p className="title">{x.title}</p>
                <p className="price">{x.price}</p>
              </div>
              <p className="description">{x.description}</p>
            </div>
          )
        }
        return x;
      })
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
