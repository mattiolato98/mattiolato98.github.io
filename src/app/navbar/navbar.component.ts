import { Component, HostListener, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('collapse', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  public url: any;
  burgerClicked = false;

  @HostListener('window:resize', ['$event'])
  onResize(event?): void {
    this.setBurgerClicked();
  }

  constructor(private router: Router) {
    this.url = router.url;
  }

  ngOnInit(): void {
    this.setBurgerClicked();
  }

  setBurgerClicked(): void {
    const screenWidth = window.innerWidth;
    this.burgerClicked = screenWidth > 991;
  }

  setClasses(): object {
    return {
      toggle: this.burgerClicked,
    };
  }

  toggleBurger(): void {
    this.burgerClicked = !this.burgerClicked;
  }
}
