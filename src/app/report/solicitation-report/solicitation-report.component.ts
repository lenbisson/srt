import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitationService } from '../../solicitation.service';


@Component({
  selector: 'app-solicitation-report',
  templateUrl: './solicitation-report.component.html',
  styleUrls: ['./solicitation-report.component.css']
})
export class SolicitationReportComponent implements OnInit {

  solicitations: any[];
  solicitation = {};

  filterParams = {
      agency: '',
      office: '',
      contact: '',
      eitLikelihood: '',
      isReadable: '',
      reviewStatus: '',
      reviewRec: '',
    };

  constructor(
    private solicitationService: SolicitationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initFilterParams();

    this.solicitationService.getFilteredSolicitations(this.filterParams)
    .subscribe(
        solicitations => {
          this.solicitations = solicitations;
        },
        err => {
            console.log(err);
        });
  this.solicitationService.pushedSolicitations.subscribe(
    solicitations => this.solicitations = solicitations);
  }

  // set initial params based upon logged in user
  initFilterParams() {
    var agency = localStorage.getItem("agency");
    if (agency == "General Services Administration"){
      this.filterParams.agency = "";
    } else {
      this.filterParams.agency = localStorage.getItem("agency");
    }
  }

  // Manual review button kicks this off.  navigates to solicitation review page
  onRowSelect(solicitation: any) {
    this.router.navigate(['/report', solicitation.data._id]);

    console.log("selected sol is ",solicitation);
  }

}