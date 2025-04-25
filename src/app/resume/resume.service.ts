import { Injectable } from '@angular/core';
import { ResumeInterface } from './resume.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }
 
resumes: ResumeInterface[] = [

  {
    title1: "2025 - Oracle Certified Associate",
    title2: "Java SE",
    location: "",
    description: "Official certification validating core Java SE knowledge, including object-oriented programming, data types, control structures, and exception handling. Demonstrates strong foundation in Java programming and code reliability."
  },  
  {
    title1: "2024 - Open Gate",
    title2: "Full Stack Developer",
    location: "Milano (MI)",
    description: "Design, develop, and implement software solutions in a dynamic team environment. Responsibilities include creating scalable web applications, enhancing existing systems, and integrating modern technologies. Participate in code reviews, debugging, and ensuring high-quality performance. Collaborate with stakeholders to deliver reliable products on time."
  },   
  {
    title1: "2024 - Fidelio",
    title2: "Full Stack Developer",
    location: "Milano (MI)",
    description: "Developed and maintained software solutions in collaboration with Reply for various high-profile projects. Focused on building scalable and efficient web applications while ensuring seamless integration with client systems. Participated in all stages of the development lifecycle, including coding, testing, and deployment, with a strong emphasis on code quality and performance. Collaborated closely with cross-functional teams to meet client requirements and deliver innovative solutions within tight deadlines."
  },  
  {
    title1: "2023 - Freelance",
    title2: "Full Stack Developer",
    location: "Milano (MI)",
    description: "Worked independently with clients to design, develop, and deploy full-stack web applications tailored to their needs. Responsibilities included building responsive front-end interfaces, implementing robust back-end systems, and managing database integrations. Ensured high-quality deliverables by thoroughly testing and debugging code. Collaborated with clients to gather requirements, propose solutions, and deliver projects within agreed timelines. Maintained strong communication to provide regular updates and support post-deployment."
  },
  {
    title1: "2023 - Master Full Stack Development",
    title2: "Start2Impact University",
    location: "Milano (MI)",
    description: "Completed an intensive program in Full Stack Development, focusing on the design and implementation of complete web applications. Gained practical experience in front-end and back-end development, application deployment, and database management. Enhanced problem-solving skills and collaborated on real-world projects to deliver scalable and efficient software solutions. Developed a strong foundation in best practices for modern software development."
  }
             

]

getResumes(): ResumeInterface [] {
  return this.resumes
}

}
