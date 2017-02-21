import React, {Component} from 'react'
import firebase from 'firebase'
import UUID from 'uuid'

export default class DailySpecials extends Component {

    constructor() {
        super()
        this.state = {
            specials: []
        }
    }

    componentWillMount() {
        this.firebaseRef = firebase.database().ref("menu/specials")

        this.firebaseRef.on('value', function(dataSnapshot) {
            var specials = []
            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                specials.push(item);
            });
            this.setState({specials: specials});
        }.bind(this));
    }

    renderSpecials() {
        let sp = []
        this.state.specials.map(x => {
            sp.push(
                <div key={UUID.v4()} className={"special " + x.color}>
                    <div className="banner">
                        <p className="title">{x.title}</p>
                        <p className="price">{x.price}</p>
                    </div>
                    <p className="description">{x.description}</p>
                </div>
            )

            return x;
        })
        return sp
    }

    render() {

        return (
            <div className='daily-specials'>
                <div className="container">
                    <h2>Daily Specials</h2>
                    <div className="specials">
                        {this.renderSpecials()}
                    </div>
                </div>
            </div>
        )
    }
}
