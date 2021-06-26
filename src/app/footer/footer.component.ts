import { Component, OnInit } from '@angular/core';
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  instagramIcon = faInstagram;
  githubIcon = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
