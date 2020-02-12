import envelopeIcon from '../assets/envelope.png';
import githubIcon from '../assets/github.png';
import linkedInIcon from '../assets/linkedIn.png';
import bookAMealImage from '../assets/projects/bookAMealImage.png';
import bookShelfImage from '../assets/projects/bookShelfImage.png';
import upshotImage from '../assets/projects/upshotImage.png';
import twitterIcon from '../assets/twitter.png';

import { IThemeProps } from '../types';
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
  I am a Fullstack Software Engineer based in Nigeria. With over 2 years of
  experience, I design backend systems with different languages e.g Node.js, Go, and Python. and
  versatile with frontend engineering.
  <br />
  When I am not coding, you can find me playing watching debates, reading, watching
  movies or learning new stuff.
`;

export const NAV_LINKS = [
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
    link: 'https://upshot-stage.netlify.com/',
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
