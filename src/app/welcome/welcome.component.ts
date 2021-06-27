import {Component, HostListener, OnInit} from '@angular/core';
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  instagramIcon = faInstagram;
  githubIcon = faGithub;
  screenWidth;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?): void {
    this.screenWidth = window.innerWidth;
  }
}
