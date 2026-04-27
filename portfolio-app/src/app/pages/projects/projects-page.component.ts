import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  projects = PROJECTS;

  oldPortfolioUrl = 'https://jettberg.github.io/portfolio-website/';
}