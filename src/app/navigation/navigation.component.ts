import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToMR() {
    this.router.navigate(['/mondial-relay'])
  }

  goToPoste() {
    this.router.navigate(['/la-poste'])
  }
}
