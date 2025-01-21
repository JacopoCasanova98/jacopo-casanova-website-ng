import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';
import { ResumeInterface } from './resume.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

resumes: ResumeInterface [] = []
  
constructor(private resumeService: ResumeService ) {}


ngOnInit(): void {
  this.resumes = this.resumeService.getResumes()
}



}
