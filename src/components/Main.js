import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import harbourvestLogo from '../images/harbourvest-logo.jpg'
import beachView from '../images/beach-view-rhode-island.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={beachView} alt="" />
          </span>
          <p>
            Christina Marie Quinn is something special.
          </p>
          <p>
            Talking with her is the best. She is funny, quicjk witted, and smart.
            She has a deep understanding of her interests and is adept at exploring new ideas.
            She is critical yet understanding. She is reflective and wise.
          </p>
          <p>
            There is no better friend. She is compassionate while maintaining high expectations for herself and the people she cares about.
            She is exciting and comforting. She is interesting and interested. She is peace and strength.
          </p>
          <p>
            Elegant, graceful, and every adjective above, she is a rad person to party with.
            Whether hosted or attended with her is a better time. 
            As a host she is diligent, meticulous, considerate, and creative.
            Attending parties with her is just more fun.
          </p>
          <p>
            She has great taste in food and places and is adventurous.
            She quickly recognizes something worthwhile and is good at keeping track of things to try.
            Her thoughts on new experiences are thoughtful and insightful.
          </p>
          <p>
            Also, she's smoking hot.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={harbourvestLogo} alt="" />
          </span>
          <h3>Senior Associate, Commercial Operations at HarbourVest Partners</h3>
          <p>
            Enthusiastic, hard-working strategist and content creator with expertise in financial product development
            and capital raising. Passionate about fostering inclusive innovation, investing for greater good, advancing
            women's business initiatives, and empowering entrepreneurs...sometimes all at once!
          </p>
          <a href="https://www.linkedin.com/in/christinamquinn/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
