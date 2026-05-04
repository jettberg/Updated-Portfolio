import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'myFlix Client (Angular)',
    description:
      'An Angular-based frontend for the myFlix application, demonstrating component architecture, routing, and TypeScript integration.',
    tech: ['Angular', 'TypeScript', 'REST API'],
    image: 'assets/images/projects/angular.png',
    liveUrl: 'https://jettberg.github.io/myFlix-Angular-client/',
    githubUrl: 'https://github.com/jettberg/myFlix-Angular-client/',
    featured: true
  },
  {
    title: 'myFlix REST API',
    description:
      'A backend REST API that serves movie, genre, director, and user data with authentication, authorization, and user favorites.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Passport'],
    image: 'assets/images/projects/rest-api.png',
    liveUrl: 'https://movies-my-flix-application-7f3ae970a7e3.herokuapp.com/',
    githubUrl: 'https://github.com/jettberg/movie_api'
  },
  {
    title: 'myFlix Client (React)',
    description:
      'A single-page movie application allowing users to register, browse movies, manage favorites, and update their profile using a custom REST API.',
    tech: ['React', 'React Router', 'Bootstrap', 'REST API'],
    image: 'assets/images/projects/react-myflix.png',
    liveUrl: 'https://myflix-frontend.netlify.app/',
    githubUrl: 'https://github.com/jettberg/myFlix-client'
  },
  {
    title: 'Meet App (PWA)',
    description:
      'A progressive web app for discovering tech events, with city filtering, data visualizations, offline support, and automated testing.',
    tech: ['React', 'Vite', 'Recharts', 'PWA', 'Testing'],
    image: 'assets/images/projects/meet.png',
    liveUrl: 'https://meet-sigma-ten.vercel.app/',
    githubUrl: 'https://github.com/jettberg/meet'
  },
  {
    title: 'Let’s Chat',
    description:
      'A mobile chat application built with React Native featuring real-time messaging, image sharing, and location sharing using Firebase.',
    tech: ['React Native', 'Expo', 'Firebase'],
    image: 'assets/images/projects/lets-chat.png',
    githubUrl: 'https://github.com/jettberg/lets-chat'
  },
  {
    title: 'Pokédex JavaScript App',
    description:
      'A JavaScript application that loads Pokémon data from an external API and dynamically displays details using modals.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PokéAPI'],
    image: 'assets/images/projects/pokemon.png',
    liveUrl: 'https://jettberg.github.io/JSapp/',
    githubUrl: 'https://github.com/jettberg/JSapp'
  }
];