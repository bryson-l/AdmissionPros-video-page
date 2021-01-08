import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';
import {DomSanitizer} from '@angular/platform-browser';
import { VideoVaultService } from '../services/videoVault.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css'],
  providers: [YoutubeService, VideoVaultService]
})
export class VideoPageComponent implements OnInit {

  constructor(public youtubeService: YoutubeService,
              public videoVaultService: VideoVaultService,
              public sanitizer: DomSanitizer) { }
  
  videoData: any[] = [];
  p: number = 1; // required variable for the ngx-pagination
  searchCriteria: string = '';

  /*
  When adding videos to the database, they must have the following format for the VideoUrl column:
  "https://www.youtube.com/embed/VIDEO_ID?autoplay=0"
  this is a proper link that will embed into an iframe like the corresponding HTML file
  */

  ngOnInit(): void {
      this.videoVaultService.getVideos()
                            .subscribe(data => {
                              let tmp = []
                              data.forEach(videoDetails => {
                                if (videoDetails.VideoUrl.includes('youtube')) { // this is to ensure that only youtube links will be embeded
                                  videoDetails.VideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoDetails.VideoUrl)// this is needed so the browser doesn't freak out
                                  tmp.push(videoDetails)
                                }
                              })
                              this.videoData = tmp
                            })
  }

  onSearchClick() {
    this.videoVaultService.getVideos(this.searchCriteria) // this passes the search text from the input box to the API call which will affect the SQL statement that the server will run
                          .subscribe(data => {
                            let tmp = []
                            data.forEach(videoDetails => {
                              if (videoDetails.VideoUrl.includes('youtube')) {
                                videoDetails.VideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoDetails.VideoUrl)
                                tmp.push(videoDetails)
                              }
                            })
                            this.videoData = tmp
                          })
  }
}