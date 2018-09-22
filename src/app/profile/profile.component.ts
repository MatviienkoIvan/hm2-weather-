import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../hotel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() public profile: Profile;
  constructor() { }

  ngOnInit() {
  }

}
