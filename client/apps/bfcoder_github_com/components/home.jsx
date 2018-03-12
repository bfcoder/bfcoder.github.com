import * as React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="text-center">
            <p>I am bfcoder, aka James Carbine</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="well">
              <h4>Profession</h4>
              <p>I am a software developer. I write code for <a target="_blank" rel="noopener noreferrer" href="http://www.atomicjolt.com/">Atomic Jolt</a>. I worked for Tatemae from November 2011 - November 2014. I was hired on with Atomic Jolt in November 2014. Prior to that I worked for the Sam's Club Pharmacy as a Pharmacy Technician for 6 years while I studied Computer Science at USU. Take a look at some of the <Link to="projects">Projects</Link> I have done.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="well">
              <h4>Education</h4>
              <p>{'I studied Computer Science at Utah State University in Logan, Utah. I graduated with a BS in Computer Science in May 2013.'}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="well">
              <h4>Experience</h4>
              <p><a target="_blank" rel="noopener noreferrer" href="http://rubyonrails.org/">Ruby on Rails</a></p>
              <p><a href="http://yuiblog.com/crockford/">Javascript</a> (including <a target="_blank" rel="noopener noreferrer" href="http://jquery.com/">jQuery</a>, <a target="_blank" rel="noopener noreferrer" href="http://emberjs.com/">Ember.js</a>, <a target="_blank" rel="noopener noreferrer" href="http://coffeescript.org/">CoffeeScript</a>, <a target="_blank" rel="noopener noreferrer" href="http://nodejs.org/">Node.js</a>, and <a target="_blank" rel="noopener noreferrer" href="https://facebook.github.io/react/">React.js</a>)</p>
              <p><a target="_blank" rel="noopener noreferrer" href="http://www.html5rocks.com/">HTML5</a></p>
              <p><a target="_blank" rel="noopener noreferrer" href="http://www.iron.io/">Iron.io</a></p>
              <p>C#</p>
              <p>C++</p>
              <p><a target="_blank" rel="noopener noreferrer" href="http://www.phoenixframework.org/">Phoenix</a></p>
              <p>postgres</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="well">
              <h4>Barefeet</h4>
              <p>{"Yes indeed, I am a barefoot advocate. I started going barefoot in the Fall of 2010. I wear shoes on very few occasions, and not for long when I do. When I ride my motorcycle, I wear shoes. When I'm working with the horses, I wear shoes. When I'm working with power tools/machinery(lawn mower), I wear shoes. But pretty much other than that, I have nixed shoes. I especially dislike shoes with a heal. My wife owns no high heels. Period. I hiked all over Moab and Arches National Park while being barefoot. I've done 5 mile hikes through the mountains barefoot. I love being barefoot. I believe my body has strengthened itself since going barefoot. Back pains have gone, unless of course I have done something to incite pain. Like sleeping on a rock in the middle of my back I'm sure would incite pain. Barefeet FTW!"}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
