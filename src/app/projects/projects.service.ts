import { Injectable } from '@angular/core';
import { ProjectsInterface } from './projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: ProjectsInterface[] = [
    {
      imageUrl: "assets/images/air-quality-index.png",
      title: "Air Quality Index",
      projectSummury: "A web application that monitors and displays real-time air quality data for various cities, helping users stay informed about environmental conditions.",
      projectSummuryTry: "Click the image and Try it! 👉",
      link: "https://spiffy-pudding-2f0704.netlify.app/"
    },
    {
      imageUrl: "assets/images/playground-project.jpg",
      title: "Playground Website",
      projectSummury: "An interactive platform showcasing modern design and user engagement through creative features and responsive layouts.",
      projectSummuryTry: "Click the image and Try it! 👉",
      link: "https://657339f613a6c829b72b795a--musical-khapse-3d1e52.netlify.app/"
    },
    {
      imageUrl: "assets/images/cities-lifestyle.jpg",
      title: "Cities Lifestyle",
      projectSummury: "A website providing curated information about the lifestyle, culture, and attractions of different cities around the world.",
      projectSummuryTry: "Click the image and Try it! 👉",
      link: "https://luminous-truffle-7cc7e6.netlify.app/"
    },
    {
      imageUrl: "assets/images/meditation-app.jpg",
      title: "Meditation App",
      projectSummury: "A user-friendly app designed to guide users through meditation sessions, promoting relaxation and mental well-being.",
      projectSummuryTry: "Click the image and Try it! 👉",
      link: "https://jacopocasanova98.github.io/React-Meditation-App/"
    },
    {
      imageUrl: "assets/images/js-counter.jpg",
      title: "Js Counter",
      projectSummury: "A simple yet functional JavaScript-based counter app demonstrating dynamic interactions and minimalistic design.",
      projectSummuryTry: "Click the image and Try it! 👉",
      link: "https://jacopocasanova98.github.io/JS-Counter/"      
    }
  ];
  

  getProjects(): ProjectsInterface[] {
    return this.projects;
  }

}
