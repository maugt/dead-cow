import React, {Component} from 'react'

export default class SocialLinks extends Component {

  render() {

    if (this.props.text) {
      return (
        <div className="social">
          <ul>
            <li>
              <a href="https://www.facebook.com/deadcowsc" rel="noopener noreferrer" target="blank">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/deadcowsc" rel="noopener noreferrer" target="blank">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/deadcowsc" rel="noopener noreferrer" target="blank">Instagram</a>
            </li>
            <li>
              <a href="https://www.yelp.com/biz/the-dead-cow-santa-cruz">Yelp</a>
            </li>
          </ul>
        </div>
      )
    }

    return (
      <div className="social">
        <ul>
          <li>
            <a href="https://www.facebook.com/deadcowsc" rel="noopener noreferrer" target="blank"><img src="/assets/social/facebook.png" alt="facebook"/></a>
          </li>
          <li>
            <a href="https://twitter.com/deadcowsc" rel="noopener noreferrer" target="blank"><img src="/assets/social/twitter.png" alt="twitter"/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/deadcowsc" rel="noopener noreferrer" target="blank"><img src="/assets/social/instagram.png" alt="instagram"/></a>
          </li>
          <li>
            <a href="https://www.yelp.com/biz/the-dead-cow-santa-cruz"><img src="/assets/social/yelp.png" alt="yelp"/></a>
          </li>
        </ul>

      </div>
    )

  }
}
