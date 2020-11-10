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

  videos: object[] = [{title: "SAMPLE TEXT", thumbnail: "/assets/120-gif.gif"},
                      {title: "ANOTHER VIDEO", thumbnail: "/assets/120-gif.gif"},
                      {title: "AND ANOTHA ONE", thumbnail: "/assets/120-gif.gif"},
                      {title: "AND ANOTHA ANOTHA VIDEO", thumbnail: "/assets/120-gif.gif"}]
}