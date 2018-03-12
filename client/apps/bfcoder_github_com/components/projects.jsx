import * as React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>My Projects</h1>
            <p>Here are the projects I have been involved with.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h2>Open Tapestry</h2>
              <p>{'Finding open educational resources and clipping them for others to see and use. This web app allows teachers to gather open educational resources from about the web, and place them into tapestries for their students to view. Or perhaps make lessons to show the class. Possibilities are numerous. It can also be very useful to corporations wanting to train their employees and give them quizzes to make sure they understand the training. Anyone can build up a course for someone to take.'}</p>
              <p>Technology: Ruby on Rails, Javascript, Mysql</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://www.opentapestry.com/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>{"Hacking Instructure's Canvas"}</h2>
              <p>{"I took Instructure's Canvas and modified it for the EDC Maine EM2 Project. It now has the ability to enter misconception probabilities for an assessment. So when the student takes an assessment, it calculates the probability that they have a misconception. It does not show a score to the student or the teacher. The teacher can pull up a report that shows them which students have misconceptions about mathematics. I also incorporated new features into taking an assessment. The student can type in an explanation. They can also draw an explanation as to why they feel the answer they chose is correct."}</p>
              <p>Technology: Ruby on Rails, Javascript, Mysql</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://maine.edc.org/file.php/1/em2/em2.html">View details &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>Saylor.org</h2>
              <p>Online free educational institution called <a target="_blank" rel="noopener noreferrer" href="http://www.saylor.org/">Saylor.org</a>. I helped develop the <a target="_blank" rel="noopener noreferrer" href="http://eportfolio.saylor.org/"> ePortfolio</a> for the site.</p>
              <p>Check it out if you want some free education. Very cool.</p>
              <p>Technology: Ruby on Rails, Javascript, Mysql</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://eportfolio.saylor.org/">Check it out &raquo;</a></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h2>Matti - graph theory</h2>
              <p>Created some interactive modules to teach students about graph theory. This included Euler Circuits, Minimum Spanning Tree - Kruskal&apos;s Algorithm, and Map Coloring. The modules are included with this book &QUOT;<a target="_blank" rel="noopener noreferrer" href="http://www.wiley.com/WileyCDA/WileyTitle/productCd-EHEP002457.html">The Heart of Mathematics: An Invitation to Effective Thinking, 4th Edition</a>.&QUOT;</p>
              <p>Technology: HTML5, Javascript (KineticJS)</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>Matti - Base Blocks</h2>
              <p>Base Blocks had previously been written by my boss <a target="_blank" rel="noopener noreferrer" href="http://www.joelduffin.com/">Joel Duffin</a> however it was written in Java. It can be found on the <a target="_blank" rel="noopener noreferrer" href="http://enlvm.usu.edu/ma/nav/index.jsp">eNLVM</a>: <a target="_blank" rel="noopener noreferrer" href="http://enlvm.usu.edu/ma/nav/activity.jsp?sid=nlvm&cid=4_2&lid=152">Base Blocks</a>. This made it useless to be ran on an iOS device. So I was enlisted to re-write the code in HTML5 so it could be ran on mobile devices as well. I wrote a lot of it and Kami Wilson took over the project so I could focus on other projects.</p>
              <p>Technology: HTML5, Javascript (KineticJS)</p>
            </div>
          </div>
          <div className="col-md-4 well">
            <h2>Octopi</h2>
            <p>{"Another project that wanted Instructure's Canvas modified for use in an adaptive math testing environment. I made the system work, however the guy never got the funding to complete it."}</p>
            <p>Technology: Ruby on Rails, Javascript, Mysql</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h2>Open Assessments</h2>
              <p>{"This is a project that we built and was funded by MIT. It is a way for anyone to create online assessments and embed them anywhere on the web. Put them inside Instructure's Canvas, or put them on your blog. Doesn't really matter. After people have taken the assessment, you can view the statistics. It was built with Ruby on Rails. We will switch it over to Ruby on Rails combined with Ember.js eventually."}</p>
              <p>Technology: Ruby on Rails, Javascript</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://www.openassessments.com/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>CMAT</h2>
              <p>CMAT stands for Concept Map Authoring Tool. You can build concept maps with it.</p>
              <p>Technology: Ruby on Rails, HTML5, Javascript (KineticJS, Ember)</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://cmat.herokuapp.com/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>OEIT Player</h2>
              <p>{'I rebuilt the MIT OEIT Player to work with html5 using JW Player 6. If you check it out, go to the bottom left video of Walter Lewin for a good example. I made it so they can easily put new videos together and using data tags set the parameters of the video.'}</p>
              <p>Technology: HTML5, Javascript, JW Player 6</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://iihs.herokuapp.com/">Check it out &raquo;</a></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h2>OEIT Player Authoring</h2>
              <p>I built an authoring interface for MIT to build the html for the players.</p>
              <p>Technology: HTML5, Javascript</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://iihs.herokuapp.com/admin/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>panOpen</h2>
              <p>{"panOpen is an app that an instructor can create a course with a book. The students can read the book and take quizzes for the chapters. The instructor can view the statistics for each student in the class. Statistics include the time they have spent reading the book and each of their attempts at the quizzes. I also wrote a node app that accepts an image request with user and book id's. It stores that information in Redis. While the student is reading the book, every 15 seconds it sends a request for the image, thus recording that they are reading the book. I then wrote an iron.io task that gets all that data out of Redis and crunches it to compute how long they have been reading for. It then sends that data to rails to store in the database."}</p>
              <p>{'After some time, we decided we needed a faster system. So I converted from a node app to a phoenix elixir app. We no longer send image requests. We just POST to it with CORS as it is on a separate domain, and store it in postgres. During the POST I do an upsert on the data. Each day gets it own entry in the database. So now I no longer need iron.io to compute the data. I can just query the database on demand.'}</p>
              <p>{'Technology: Ruby on Rails, Javascript (Ember, React using Flux and Redux, Phoenix), Postgres'}</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://www.panopen.com/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>FreightLink Tracker</h2>
              <p>{'FreightLink Tracker is an app that enables you to create and track shipments via Truck, Ship, Plane, and Train. I have been re-implementing the shipments pages from Rails to Ember.'}</p>
              <p>Technology: Ruby on Rails, Javascript (Ember), Postgres</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h2>Scry</h2>
              <p />
              <p>Technology: Ruby Gem</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="https://github.com/atomicjolt/scry/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>Senkyoshi</h2>
              <p />
              <p>Technology: Ruby Gem</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="https://github.com/atomicjolt/senkyoshi/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>Senkyoshi Canvas Plugin</h2>
              <p />
              <p>Technology: Canvas Ruby Plugin</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="https://github.com/atomicjolt/senkyoshi_canvas_plugin/">Check it out &raquo;</a></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h2>LTI Starter App</h2>
              <p>{"Used to build lti tools for use with Instructure's Canvas.Worked on the admin interface to help install lti tools into canvas."}</p>
              <p>Technology: Ruby on Rails, Javascript (React using Redux), Postgres</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="https://github.com/atomicjolt/lti_starter_app/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>Adhesion</h2>
              <p>{"LTI Tools for Instructure's Canvas. I worked on Scorm LTI Tools. A tool for playing scorm packages. And a Tool for uploading scorm packages. Adhesion has several other LTI tools that I did not contribute to. Adhesion's upstream is the LTI Starter App."}</p>
              <p>Technology: Ruby on Rails, Javascript (React using Redux), Postgres</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="https://github.com/atomicjolt/adhesion/">Check it out &raquo;</a></p>
            </div>
          </div>
        </div>

        <h1>School Projects</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h2>CS5460 Final Project</h2>
              <p>My CS5460 Computer Securities final project for authenticating a user.</p>
              <p>Technology: Ruby on Rails, Javascript</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://finalproject.bfcoder.com/">Check it out &raquo;</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
              <h2>CS5100 HTML5 Project</h2>
              <p>{'Made a site with Scott Biery that highlighted HTML5 and gave some examples. I wrote the two HTML5 canvas examples and Scott formatted the site and put together the HTML5 examples page. It was a lot of fun to write the javascript for this project. And yes, it works with an iPad. :]'}</p>
              <p>Technology: HTML5</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://www.ninjascott.com/CS5100/about-html5.php">Check it out &raquo;</a></p>
            </div>
          </div>
        </div>

        <h1>Volunteer Projects</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h2>The Living Planet Aquarium</h2>
              <p>Currently building a page to highlight a Sea Turtle that has been rescued.</p>
              <p>Technology: HTML5, Javascript (Ember)</p>
              <p><a target="_blank" rel="noopener noreferrer" className="btn btn-default" href="http://www.thelivingplanet.com/index.php">The Living Planet Aquarium</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
