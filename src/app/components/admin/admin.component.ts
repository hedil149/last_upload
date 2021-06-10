import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {


  sidenavOpened: boolean = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav | undefined;
  layoutChangeSubscription: Subscription = new Subscription;
  loading: boolean = false;
  loadingSubcription: Subscription = new Subscription;


  constructor(
    private breakpointObserver: BreakpointObserver,

  ) {}

  ngOnInit() {
    this.layoutChangeSubscription = this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.sidenavOpened = false;
        } else {
          this.sidenavOpened = true;
        }
      });



  }

  ngOnDestroy() {
    this.loadingSubcription.unsubscribe();
  }
}
