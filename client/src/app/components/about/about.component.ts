import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "assets/unknown.jpg";
  profile_link:string = null;


  // inject the Spotify service so this component can use it to get the "about me" information from Spotify.
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  // runs when the "load info" button is clicked
  loadAboutMe() {
    this.spotifyService.aboutMe().then((data) => {
      this.name = data.name;
      this.profile_pic = data.imageURL;
      this.profile_link = data.spotifyProfile;
    });
  }
}
