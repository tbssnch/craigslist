import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { Router } from '@angular/router';
import { JobService } from '../job.service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobService]
})

export class JobsComponent implements OnInit {
  jobs: Job[];
  constructor(private router: Router, private jobService: JobService){}

  ngOnInit(){
    this.jobs = this.jobService.getJobs();
  }

  goToDetailPage(clickedJob: Job) {
     this.router.navigate(['jobs', clickedJob.id]);
  };
}
