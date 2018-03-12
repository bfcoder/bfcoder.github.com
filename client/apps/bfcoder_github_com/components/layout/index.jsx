import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Index extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" activeClassName="active">bfcoder</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">About</NavItem>
            <NavItem eventKey={2} href="/projects">Projects</NavItem>
            <NavDropdown eventKey={3} title="Other" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="http://blog.bfcoder.com">Blog</MenuItem>
              <MenuItem eventKey={3.2} href="https://github.com/bfcoder">GitHub</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <div className="container-fluid">

          {this.props.children || ''}

          <hr />

          <footer>
            <p>
              <a href="http://stackoverflow.com/users/1477165/bfcoder">
                <img
                  src="http://stackoverflow.com/users/flair/1477165.png?theme=dark"
                  width="208"
                  height="58"
                  alt="profile for bfcoder at Stack Overflow, Q&A for professional and enthusiast programmers"
                  title="profile for bfcoder at Stack Overflow, Q&A for professional and enthusiast programmers"
                />
              </a>
            </p>

            <p>
              <a
                href="https://twitter.com/bfcoder"
                className="twitter-follow-button"
                data-show-count="false"
                data-dnt="true"
              >
                Follow @bfcoder
              </a>
            </p>

            <p>
              <a href="http://www.linkedin.com/pub/james-carbine/b/74/628">
                <img
                  src="http://www.linkedin.com/img/webpromo/btn_liprofile_blue_80x15.png"
                  width="80"
                  height="15"
                  alt="View James Carbine's profile on LinkedIn"
                />
              </a>
            </p>

            <p>&copy; bfcoder 2015, 2016, 2017</p>
          </footer>

        </div>
      </div>
    );
  }
}
