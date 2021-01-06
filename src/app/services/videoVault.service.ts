import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {string} from '../../assets/secret'
/* IMPORTANT
   The URL will need to be changed to match other services. This uses a proxy file to trick the browser to avoid CORS errors.
   Look in other services and replace the 'http://localhost:4200/api' with API string variable used in AP services.
   I am also uncertain how the GUID implementation will differ for someone working within AP, consult with Anthony as to how that would work. */
@Injectable()
export class VideoVaultService {
  constructor(private http: HttpClient) { }
    getVideos(search?: string): Observable<any> {
        if (search) {
            return this.http.get(
                'http://localhost:4200/api' + 'VideoVault/?guid=' + string + '&title=' + search
            )
        }
        else {
            return this.http.get( // this is where the URL goes that you will be requesting data from
                'http://localhost:4200/api' + 'VideoVault/?guid=' + string) // this is changed to the correct URL by the proxy file
        }
    }
    postAddVideo(videoDetails: object): Observable<any> {
        /*this does not currently work outside of AP5 because the Angular proxy does not support
          routing for HTTP methods other than GET*/
        return this.http.post(
            'http://localhost:4200/api' + 'VideoVault?guid=' + string,
            videoDetails
        )
    }
}