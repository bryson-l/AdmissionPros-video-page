import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class YoutubeService {
  constructor(private http: HttpClient) { }
  apiKey = "AIzaSyD0iYq4TzP6M0UHlc6Xv28oTWhRysOpDu8"
  getYoutubeChannel(channelId: any): Observable<any> {
      return this.http.get( // this is where the URL goes that you will be requesting data from
          'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channelId + '&part=snippet,id&order=date&maxResults=20')
  }
  getVideoDetails(videoId: any): Observable<any> {
      return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' + this.apiKey)
  }
}