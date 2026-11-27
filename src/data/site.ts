// Site content, kept separate from markup so every page/layout renders the
// same data. Strings marked `html` may contain inline links and are rendered
// as HTML (they are authored here, never user input).

export interface Link {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  href?: string;
  /** Related tools shown under the main skill. */
  includes?: Link[];
}

export type ProjectCategory = 'work' | 'school' | 'volunteer';

export interface Project {
  title: string;
  category: ProjectCategory;
  /** Paragraphs of description (HTML allowed). */
  html: string[];
  tech: string[];
  links: Link[];
}

export interface TimelineEntry {
  when: string;
  title: string;
  org: string;
  detail: string;
}

export const person = {
  handle: 'bfcoder',
  name: 'James Carbine',
  role: 'Software Developer',
  employer: { label: 'Atomic Jolt', href: 'http://www.atomicjolt.com/' },
  tagline: 'Software developer at Atomic Jolt, working with Ruby on Rails, JavaScript and Phoenix.',
};

export const social = {
  github: { label: 'GitHub', href: 'https://github.com/bfcoder' },
  blog: { label: 'Blog', href: 'https://blog.bfcoder.com' },
  stackoverflow: { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/1477165/bfcoder' },
  twitter: { label: 'Twitter', href: 'https://twitter.com/bfcoder' },
} satisfies Record<string, Link>;

export const nav = {
  internal: [
    { label: 'About', href: '/' },
    { label: 'Projects', href: '/projects' },
  ],
  external: [social.blog, social.github],
};

/** Original "Profession" paragraph from the About page. */
export const professionHtml =
  'I am a software developer. I write code for <a target="_blank" rel="noopener" href="http://www.atomicjolt.com/">Atomic Jolt</a>. I worked for Tatemae from November 2011 - November 2014. I was hired on with Atomic Jolt in November 2014. Prior to that I worked for the Sam\'s Club Pharmacy as a Pharmacy Technician for 6 years while I studied Computer Science at USU. Take a look at some of the <a href="/projects">Projects</a> I have done.';

/** Original "Education" paragraph from the About page. */
export const educationHtml =
  'I studied Computer Science at Utah State University in Logan, Utah. I graduated with a BS in Computer Science in May 2013.';

/** Career history, most recent first, derived from the About page. */
export const timeline: TimelineEntry[] = [
  {
    when: 'Nov 2014 – present',
    title: 'Software Developer',
    org: 'Atomic Jolt',
    detail: 'Hired on in November 2014.',
  },
  {
    when: 'Nov 2011 – Nov 2014',
    title: 'Software Developer',
    org: 'Tatemae',
    detail: 'Three years building web applications.',
  },
  {
    when: 'May 2013',
    title: 'BS, Computer Science',
    org: 'Utah State University',
    detail: 'Logan, Utah.',
  },
  {
    when: '6 years, while at USU',
    title: 'Pharmacy Technician',
    org: "Sam's Club Pharmacy",
    detail: 'Worked in the pharmacy while studying Computer Science at USU.',
  },
];

export const skills: Skill[] = [
  { name: 'Ruby on Rails', href: 'http://rubyonrails.org/' },
  {
    name: 'JavaScript',
    href: 'http://yuiblog.com/crockford/',
    includes: [
      { label: 'jQuery', href: 'http://jquery.com/' },
      { label: 'Ember.js', href: 'http://emberjs.com/' },
      { label: 'CoffeeScript', href: 'http://coffeescript.org/' },
      { label: 'Node.js', href: 'http://nodejs.org/' },
      { label: 'React.js', href: 'https://facebook.github.io/react/' },
    ],
  },
  { name: 'HTML5', href: 'http://www.html5rocks.com/' },
  { name: 'Iron.io', href: 'http://www.iron.io/' },
  { name: 'C#' },
  { name: 'C++' },
  { name: 'Phoenix', href: 'http://www.phoenixframework.org/' },
  { name: 'postgres' },
];

const a = (href: string, text: string) => `<a target="_blank" rel="noopener" href="${href}">${text}</a>`;

/** Projects, most recent first within each category. */
export const projects: Project[] = [
  // Work
  {
    title: 'Dev Ops Clustering',
    category: 'work',
    html: ['Virtualized clusters of servers running apps / Maintaining those machines'],
    tech: ['Bash', 'nginx', 'Apache'],
    links: [],
  },
  {
    title: 'Atomic Assessments',
    category: 'work',
    html: ["LTI integration for Learnosity with Instructure's Canvas."],
    tech: ['Ruby on Rails', 'JavaScript', 'React'],
    links: [
      { label: 'LTI connector', href: 'http://learnosityconnector.atomicjoltapps.com/' },
      { label: 'Learnosity', href: 'https://learnosity.com/' },
    ],
  },
  {
    title: 'Atomic Curriculum Tools',
    category: 'work',
    html: ["LTI tools that integrate with Instructure's Canvas to provide a better module system and to search all your content."],
    tech: ['Ruby on Rails', 'JavaScript', 'React'],
    links: [{ label: 'Check it out', href: 'http://navigator.atomicjoltapps.com/' }],
  },
  {
    title: 'TherapyMate',
    category: 'work',
    html: ['Therapist and patients management'],
    tech: ['Ruby on Rails', 'JavaScript', 'React', 'Ember'],
    links: [{ label: 'Check it out', href: 'https://www.therapymate.com/' }],
  },
  {
    title: 'Arrowhead Infobase',
    category: 'work',
    html: ['Dentist and patients management'],
    tech: ['Ruby on Rails', 'JavaScript'],
    links: [],
  },
  {
    title: 'Adhesion',
    category: 'work',
    html: ['SCORM package manager and player'],
    tech: ['Ruby on Rails', 'JavaScript', 'React'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/atomicjolt/adhesion' }],
  },
  {
    title: 'FreightLink Tracker',
    category: 'work',
    html: ['FreightLink Tracker is an app that enables you to create and track shipments via Truck, Ship, Plane, and Train. I have been re-implementing the shipments pages from Rails to Ember.'],
    tech: ['Ruby on Rails', 'JavaScript', 'Ember', 'PostgreSQL'],
    links: [],
  },
  {
    title: 'panOpen',
    category: 'work',
    html: [
      "panOpen is an app that an instructor can create a course with a book. The students can read the book and take quizzes for the chapters. The instructor can view the statistics for each student in the class. Statistics include the time they have spent reading the book and each of their attempts at the quizzes. I also wrote a node app that accepts an image request with user and book id's. It stores that information in Redis. While the student is reading the book, every 15 seconds it sends a request for the image, thus recording that they are reading the book. I then wrote an iron.io task that gets all that data out of Redis and crunches it to compute how long they have been reading for. It then sends that data to rails to store in the database.",
      'After some time, we decided we needed a faster system. So I converted from a node app to a phoenix elixir app. We no longer send image requests. We just POST to it with CORS as it is on a separate domain, and store it in postgres. During the POST I do an upsert on the data. Each day gets it own entry in the database. So now I no longer need iron.io to compute the data. I can just query the database on demand.',
    ],
    tech: ['Ruby on Rails', 'JavaScript', 'Ember', 'React', 'Phoenix', 'PostgreSQL'],
    links: [{ label: 'Check it out', href: 'http://www.panopen.com/' }],
  },
  {
    title: 'OEIT Player Authoring',
    category: 'work',
    html: ['I built an authoring interface for MIT to build the html for the players.'],
    tech: ['HTML5', 'JavaScript'],
    links: [{ label: 'Check it out', href: 'http://iihs.herokuapp.com/admin/' }],
  },
  {
    title: 'OEIT Player',
    category: 'work',
    html: ['I rebuilt the MIT OEIT Player to work with html5 using JW Player 6. If you check it out, go to the bottom left video of Walter Lewin for a good example. I made it so they can easily put new videos together and using data tags set the parameters of the video.'],
    tech: ['HTML5', 'JavaScript', 'JW Player'],
    links: [{ label: 'Check it out', href: 'http://iihs.herokuapp.com/' }],
  },
  {
    title: 'CMAT',
    category: 'work',
    html: ['CMAT stands for Concept Map Authoring Tool. You can build concept maps with it.'],
    tech: ['Ruby on Rails', 'HTML5', 'JavaScript', 'KineticJS', 'Ember'],
    links: [{ label: 'Check it out', href: 'http://cmat.herokuapp.com/' }],
  },
  {
    title: 'Open Assessments',
    category: 'work',
    html: ["This is a project that we built and was funded by MIT. It is a way for anyone to create online assessments and embed them anywhere on the web. Put them inside Instructure's Canvas, or put them on your blog. Doesn't really matter. After people have taken the assessment, you can view the statistics. It was built with Ruby on Rails. We will switch it over to Ruby on Rails combined with Ember.js eventually."],
    tech: ['Ruby on Rails', 'JavaScript'],
    links: [{ label: 'Check it out', href: 'http://www.openassessments.com/' }],
  },
  {
    title: 'Octopi',
    category: 'work',
    html: ["Another project that wanted Instructure's Canvas modified for use in an adaptive math testing environment. I made the system work, however the guy never got the funding to complete it."],
    tech: ['Ruby on Rails', 'JavaScript', 'MySQL'],
    links: [],
  },
  {
    title: 'Matti - Base Blocks',
    category: 'work',
    html: [`Base Blocks had previously been written by my boss ${a('http://www.joelduffin.com/', 'Joel Duffin')} however it was written in Java. It can be found on the ${a('http://enlvm.usu.edu/ma/nav/index.jsp', 'eNLVM')}: ${a('http://enlvm.usu.edu/ma/nav/activity.jsp?sid=nlvm&cid=4_2&lid=152', 'Base Blocks')}. This made it useless to be ran on an iOS device. So I was enlisted to re-write the code in HTML5 so it could be ran on mobile devices as well. I wrote a lot of it and Kami Wilson took over the project so I could focus on other projects.`],
    tech: ['HTML5', 'JavaScript', 'KineticJS'],
    links: [],
  },
  {
    title: 'Matti - graph theory',
    category: 'work',
    html: [`Created some interactive modules to teach students about graph theory. This included Euler Circuits, Minimum Spanning Tree - Kruskal's Algorithm, and Map Coloring. The modules are included with this book "${a('http://www.wiley.com/WileyCDA/WileyTitle/productCd-EHEP002457.html', 'The Heart of Mathematics: An Invitation to Effective Thinking, 4th Edition')}."`],
    tech: ['HTML5', 'JavaScript', 'KineticJS'],
    links: [],
  },
  {
    title: 'Saylor.org',
    category: 'work',
    html: [
      `Online free educational institution called ${a('http://www.saylor.org/', 'Saylor.org')}. I helped develop the ${a('http://eportfolio.saylor.org/', 'ePortfolio')} for the site.`,
      'Check it out if you want some free education. Very cool.',
    ],
    tech: ['Ruby on Rails', 'JavaScript', 'MySQL'],
    links: [{ label: 'Check it out', href: 'http://eportfolio.saylor.org/' }],
  },
  {
    title: "Hacking Instructure's Canvas",
    category: 'work',
    html: ["I took Instructure's Canvas and modified it for the EDC Maine EM2 Project. It now has the ability to enter misconception probabilities for an assessment. So when the student takes an assessment, it calculates the probability that they have a misconception. It does not show a score to the student or the teacher. The teacher can pull up a report that shows them which students have misconceptions about mathematics. I also incorporated new features into taking an assessment. The student can type in an explanation. They can also draw an explanation as to why they feel the answer they chose is correct."],
    tech: ['Ruby on Rails', 'JavaScript', 'MySQL'],
    links: [{ label: 'View details', href: 'http://maine.edc.org/file.php/1/em2/em2.html' }],
  },
  {
    title: 'Open Tapestry',
    category: 'work',
    html: ['Finding open educational resources and clipping them for others to see and use. This web app allows teachers to gather open educational resources from about the web, and place them into tapestries for their students to view. Or perhaps make lessons to show the class. Possibilities are numerous. It can also be very useful to corporations wanting to train their employees and give them quizzes to make sure they understand the training. Anyone can build up a course for someone to take.'],
    tech: ['Ruby on Rails', 'JavaScript', 'MySQL'],
    links: [{ label: 'Check it out', href: 'http://www.opentapestry.com/' }],
  },

  // School
  {
    title: 'CS5460 Final Project',
    category: 'school',
    html: ['My CS5460 Computer Securities final project for authenticating a user.'],
    tech: ['Ruby on Rails', 'JavaScript'],
    links: [{ label: 'Check it out', href: 'http://finalproject.bfcoder.com/' }],
  },
  {
    title: 'CS5100 HTML5 Project',
    category: 'school',
    html: ['Made a site with Scott Biery that highlighted HTML5 and gave some examples. I wrote the two HTML5 canvas examples and Scott formatted the site and put together the HTML5 examples page. It was a lot of fun to write the javascript for this project. And yes, it works with an iPad. :]'],
    tech: ['HTML5'],
    links: [{ label: 'Check it out', href: 'http://www.ninjascott.com/CS5100/about-html5.php' }],
  },

  // Volunteer
  {
    title: 'The Living Planet Aquarium',
    category: 'volunteer',
    html: ['Currently building a page to highlight a Sea Turtle that has been rescued.'],
    tech: ['HTML5', 'JavaScript', 'Ember'],
    links: [{ label: 'The Living Planet Aquarium', href: 'http://www.thelivingplanet.com/index.php' }],
  },
];

export const categories: { id: ProjectCategory; label: string; blurb: string }[] = [
  { id: 'work', label: 'Work', blurb: 'Projects I have built professionally.' },
  { id: 'school', label: 'School', blurb: 'Coursework from Utah State University.' },
  { id: 'volunteer', label: 'Volunteer', blurb: 'Pitching in for good causes.' },
];

/** Every distinct technology, most-used first. */
export const allTech: string[] = (() => {
  const counts = new Map<string, number>();
  for (const p of projects) for (const t of p.tech) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0])).map(([t]) => t);
})();

/** Normalised current path ("/" or "/projects") for nav highlighting. */
export function currentPath(pathname: string): string {
  const p = pathname.replace(/\.html$/, '').replace(/\/+$/, '');
  return p === '' || p === '/index' ? '/' : p;
}
