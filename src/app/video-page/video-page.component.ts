import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videos: object[] = [{title: "SAMPLE TEXT", thumbnail: "../thumbnail-images/apLogo1.jpg"},
                      {title: "ANOTHER VIDEO", thumbnail: "../thumbnail-images/apLogo1.jpg"},
                      {title: "AND ANOTHA ONE", thumbnail: "../thumbnail-images/apLogo1.jpg"},
                      {title: "AND ANOTHA ANOTHA VIDEO", thumbnail: "../thumbnail-images/apLogo1.jpg"}]

}
