import { Component, OnInit } from '@angular/core';
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  instagramIcon = faInstagram;
  githubIcon = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
