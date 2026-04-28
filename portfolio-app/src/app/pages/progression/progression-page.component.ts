import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-progression-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './progression-page.component.html',
    styleUrls: ['./progression-page.component.css']
})
export class ProgressionPageComponent {
    progressionItems = [
        {
            label: '01',
            title: 'Starting with HTML & CSS',
            subtitle: 'Original Portfolio',
            description:
                'My first portfolio was built with basic HTML and CSS...',
            image: '/assets/images/projects/old-portfolio.png',
            image2: '/assets/images/projects/new-portfolio.png', // or new version comparison
            lessons: ['Page structure', 'Navigation', 'Basic styling', 'Responsive thinking']
        },
        {
            label: '02',
            title: 'Learning JavaScript and APIs',
            subtitle: 'Pokédex App',
            description:
                'The Pokédex project helped me move beyond static pages by using JavaScript to fetch data from an external API and display it dynamically.',
            image: '/assets/images/projects/pokemon.png',
            lessons: ['JavaScript fundamentals', 'API requests', 'Dynamic rendering', 'Modals']
        },
        {
            label: '03',
            title: 'Building the Backend',
            subtitle: 'myFlix REST API',
            description:
                'The myFlix API was where I started thinking like a full-stack developer. I built endpoints, connected MongoDB, added authentication, and created the backend that later powered my front-end clients.',
            image: '/assets/images/projects/rest-api.png',
            lessons: ['Node.js', 'Express', 'MongoDB', 'Authentication', 'REST API design']
        },
        {
            label: '04',
            title: 'Connecting Frontend to Backend',
            subtitle: 'myFlix React Client',
            description:
                'The React version of myFlix helped me understand how a front-end application communicates with a custom API, manages state, handles routing, and creates a complete user experience.',
            image: '/assets/images/projects/react-myflix.png',
            lessons: ['React components', 'Routing', 'State management', 'API integration']
        },
        {
            label: '05',
            title: 'Refining Architecture with Angular',
            subtitle: 'myFlix Angular Client',
            description:
                'The Angular version felt like a major step forward. It introduced stronger structure, TypeScript, services, routing, and a more modular way of organizing an application.',
            image: '/assets/images/projects/angular.png',
            lessons: ['Angular', 'TypeScript', 'Services', 'Component architecture']
        },
        {
            label: '06',
            title: 'Continuing to Build',
            subtitle: 'Current Portfolio & Client Work',
            description:
                'This portfolio represents where I am now: building cleaner, more intentional applications while continuing to work on real-world projects and improve with each build.',
            image: '/assets/images/projects/meet.png',
            lessons: ['Design polish', 'Real-world projects', 'Reusable components', 'Continuous learning']
        }
    ];
}