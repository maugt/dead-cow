import React, {Component} from 'react'
import Cover from '../components/Cover'
import GoogleMap from '../components/GoogleMap'
import MenuFavorites from '../components/MenuFavorites'
import About from '../components/About'

export default class Home extends Component {

    render() {

        return (
            <div className="home">
                <Cover children={this.props.children}/>
                <GoogleMap/>
                <About/>
            </div>
        )
    }
}
