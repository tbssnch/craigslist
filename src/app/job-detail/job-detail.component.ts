import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Job } from '../job.model';
import { JobService } from '../job.service.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  providers: [JobService]
})
export class JobDetailComponent implements OnInit {
  jobId: number;
  jobToDisplay: Job;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private jobService: JobService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.jobId = parseInt(urlParameters['id']);
    });
    this.jobToDisplay = this.jobService.getJobById(this.jobId);
  }
}
