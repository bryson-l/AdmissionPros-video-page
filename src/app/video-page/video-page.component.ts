import { Component, OnInit } from '@angular/core';
import { VideoModel } from '../models/video.component';
import { YoutubeService } from '../services/youtube.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css'],
  providers: [YoutubeService]
})
export class VideoPageComponent implements OnInit {

  constructor(public youtubeService: YoutubeService,
              public sanitizer: DomSanitizer) { }
  
  channelData: any = {};
  videoIds: any[] = [];
  videoData: VideoModel[] = [];

  ngOnInit(): void {
    this.youtubeService.getYoutubeChannel('UCxdeYyA-nTo1Y9slBixgcGA')
                       .subscribe(data => {
                        data.items.forEach(item => {
                          if (item.id.videoId) {
                            this.videoIds.push(item.id.videoId)
                          }
                                                   })
                          this.videoData = []
                          this.videoIds.forEach(videoId => {
                            this.youtubeService.getVideoDetails(videoId)
                                               .subscribe(data => {
                                                 data.items[0].snippet.videoId = videoId
                                                 data.items[0].snippet.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ data.items[0].snippet.videoId + '?autoplay=1')
                                                 this.videoData.push(data.items[0].snippet)
                                               })
                          })
                          console.log(this.videoData)
                                          })
  }
}