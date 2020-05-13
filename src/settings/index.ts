import envelopeIcon from '../assets/envelope.png';
import githubIcon from '../assets/github.png';
import linkedInIcon from '../assets/linkedIn.png';
import bookAMealImage from '../assets/projects/bookAMealImage.png';
import bookShelfImage from '../assets/projects/bookShelfImage.png';
import upshotImage from '../assets/projects/upshotImage.png';
import twitterIcon from '../assets/twitter.png';

import { IThemeProps, ISkillGroup } from '../types';
import { IContactFormErrors } from './../types/index.d';

export const STORAGE = 'storage';
// Theme
export const THEME = 'theme';
export const LIGHT = 'light';
export const DARK = 'dark';
export const FLIP_THEME: IThemeProps = {
  dark: LIGHT,
  light: DARK,
};
export const THEME_ICON: IThemeProps = {
  dark: 'toggle_on',
  light: 'toggle_off',
};
export const THEME_ATTRIBUTE = 'data-theme';

export const GET_TO_KNOW_ME = `
  I am a Fullstack Software Developer  with 3+ years experience in designing and developing modern web applications. I enjoy solving complex problems and building quality products
  with good user experience. I have ample experience working with technologies and tools such as HTML, CSS/SASS, Javascript, Node.js, 
  Typescript/ES6, React, Redux, Vue, Golang, Docker, PostgreSQL, MongoDB, Nightwatch.js, Swagger, Mocha, Chai, Jest, Webpack, Shopify, 
  Python, AWS, Terraform among others.
`;

export const NAV_LINKS = [
  {
    key: 'Skills & Tech',
    link: '/skills',
  },
  {
    key: 'Projects',
    link: '/projects',
  },
  {
    key: 'Contact',
    link: '/contact',
  },
];

export const PROJECT_LIST = [
  {
    key: 2,
    title: 'Book-A-Meal',
    image: bookAMealImage,
    description: `Book-A-Meal is an app designed to let you order 
      meals from your favourite resturant at your convience.`,
    link: 'http://book-me-a-meal.herokuapp.com/',
    githubLink: 'https://github.com/rovilay/Book-A-Meal',
  },
  {
    key: 1,
    title: 'Upshot',
    image: upshotImage,
    description: `This is an application designed to help manage events and make it more fun.`,
    link: 'https://upshot-hq.herokuapp.com/',
    githubLink: '',
  },
  {
    key: 3,
    title: 'Book-Shelf',
    image: bookShelfImage,
    description: `A Python and Vue application focused on managing books.`,
    link: 'http://books-on-shelf.herokuapp.com/',
    githubLink: 'https://github.com/rovilay/Books-shelf',
  }
];

export const SKILL_GROUPS: ISkillGroup[] = [
  {
    title: 'frontend',
    skills: ['Javascript/Es6', 'React.js', 'Vue.js', 'HTML', 'CSS/SASS', 'Typescript', 'Shopify', 'Redux'],
    icon: 'palette',
  },
  {
    title: 'backend',
    skills: ['Node.js', 'Golang', 'Python', 'Express', 'Flask', 'Gin', 'Typescript'],
    icon: 'build',
  },
  {
    title: 'databases & orm',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'GraphQL', 'Sequelize', 'Mongoose'],
    icon: 'storage',
  },
  {
    title: 'deployment & services',
    skills: ['Heroku', 'Netlify', 'AWS', 'Docker', 'Terraform'],
    icon: 'cloud',
  },
  {
    title: 'misc.',
    skills: ['Git', 'Github', 'Figma', 'Invision', 'Gitlab', 'Trello', 'Jira', 'Pivotal Tracker'],
    icon: 'settings',
  },
];

export const BLOG_URL = '';

export const errorsMap: IContactFormErrors = {
  name: 'Please leave a name',
  email: 'Please leave an email',
  message: 'Please leave a message',
};

export const PARTICLES_JS_CONFIG: object = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 3,
    },
    line_linked: {
      enable: true,
      color: '#b9b9b9',
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

export const ENGINEER_NAME = 'Ogooluwa Akinola';

export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: githubIcon,
    link: 'http://github.com/rovilay',
    alt: 'Github icon',
  },
  {
    id: 2,
    icon: linkedInIcon,
    link: 'https://www.linkedin.com/in/ogooluwa-akinola/',
    alt: 'LinkedIn Icon',
  },
  {
    id: 3,
    icon: twitterIcon,
    link: 'https://twitter.com/rovilay_jnr',
    alt: 'Twitter Icon',
  },
  {
    id: 4,
    icon: envelopeIcon,
    link: 'mailto:ogooluwaakinola@gmail.com',
    alt: 'Mailto Icon',
  },
];
