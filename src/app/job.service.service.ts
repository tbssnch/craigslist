import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { JOBS } from './mock-jobs';

@Injectable()
export class JobService {

  constructor() { }

  getJobs() {
    return JOBS;
  }

  getJobById(jobId: number){
    for (let i = 0; i <= JOBS.length - 1; i++) {
      if (JOBS[i].id === jobId) {
        return JOBS[i];
      }
    }
   }

}
