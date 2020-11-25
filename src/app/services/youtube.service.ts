import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {apiString} from '../../assets/secret'

@Injectable()
export class YoutubeService {
  constructor(private http: HttpClient) { }
  getYoutubeChannel(channelId: any): Observable<any> {
      return this.http.get( // this is where the URL goes that you will be requesting data from
          'https://www.googleapis.com/youtube/v3/search?key=' + apiString + '&channelId=' + channelId + '&part=snippet,id&order=date&maxResults=300')
  }
  getVideoDetails(videoId: any): Observable<any> {
      return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' + apiString)
  }
}