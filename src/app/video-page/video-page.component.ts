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
  videoData: any[] = [];

  ngOnInit(): void {
    // this.youtubeService.getYoutubeChannel('UCb0KsZUaW-BC4EFPY29CVOw')
    //                    .subscribe(data => {
    //                     data.items.forEach(item => {
    //                       if (item.id.videoId) {
    //                         this.videoIds.push(item.id.videoId)
    //                       }
    //                                                })
    //                       this.videoData = []
    //                       this.videoIds.forEach(videoId => {
    //                         this.youtubeService.getVideoDetails(videoId)
    //                                            .subscribe(data => {
    //                                              data.items[0].snippet.videoId = videoId
    //                                              data.items[0].snippet.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ data.items[0].snippet.videoId + '?autoplay=1')
    //                                              this.videoData.push(data.items[0].snippet)
    //                                            })
    //                       })
    //                       console.log(JSON.stringify(this.videoData))
    //                       console.log(this.videoData)
    //                                       })
    this.videoData = [
      {
        "publishedAt": "2011-07-20T00:01:15Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "Blue Man Group - Endless Column (HQ)",
        "description": "Endless Column, track 14 from \"Audio\" by Blue Man Group",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/0RvYrTGgSyY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/0RvYrTGgSyY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/0RvYrTGgSyY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/0RvYrTGgSyY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/0RvYrTGgSyY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "Endless Column",
          "Audio",
          "Blue Man Group"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Blue Man Group - Endless Column (HQ)",
          "description": "Endless Column, track 14 from \"Audio\" by Blue Man Group"
        },
        "videoId": "0RvYrTGgSyY",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/0RvYrTGgSyY?autoplay=1"
        }
      },
      {
        "publishedAt": "2018-06-27T09:54:23Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "Chilling Souls - A Relaxing Mix from Souls series",
        "description": "#Darksouls #DemonsSouls #VGOST #relax #Music #Fromsoftware #Compilation #Dark\n#Fantasy #Videogame #Soundtrack #Chill \nA selection of most relaxing music from Souls Series, from Demon's Souls to Dark Souls III. \n\nAll rights belongs to their respective owners. \nMusic composed by Shunsuke Kida, Motoi Sakuraba and Yuka \nKitamura.\n[0:00]  Demon's Souls - Character Creation\n[4:13]  Dark Souls - Menu Theme\n[8:14]  Dark Souls II - Fire Keepers\n[10:59]  Dark Souls III - Firelink Shrine\n[14:05]  Demon's Souls - Maiden in Black\n[18:19]  Dark Souls - Firelink Shrine\n[20:42]  Dark Souls II - Majula\n[23:54]  Dark Souls III - Dancer of the Boreal Valley (Wrong name in the video! ops!)\n[26:57]  Demon's Souls - The Old One (Wrong name in the video! ops!)\n[29:15]  Dark Souls - Daughters of Chaos\n[31:30]  Dark Souls II - King Vendrick\n[34:42]  Dark Souls III - Abyss Watchers\n[37:06]  Demon's Souls - Old Monk \n[40:00]  Dark Souls - Gwynevere, Princess of Sunlight\n[42:15]  Dark Souls II -  Longing\n[48:54]  Dark Souls III - Secret Betrayal\n[51:40]  Demon's Souls - Maiden Astraea \n[54:33]  Dark Souls - Great Grey Wolf Sif\n[57:05]  Dark Souls II -  Remains\n[59:22]  Dark Souls III - Premonition\n[1:01:29]  Demon's Souls - Old King Allant\n[1:04:28]  Dark Souls - Dark Sun Gwyindolin \n[1:06:41]  Dark Souls II - Queen of Drangleic\n[1:09:40]  Dark Souls III - Epilogue\n[1:16:26]  Demon's Souls - One who Craves Souls\n[1:20:42]  Dark Souls - Gwyin, Lord of Cinder\n[1:23:05]  Dark Souls II - Milfanito\n[1:25:50]  Demon's Souls - Return to Slumber\n[1:29:40]  Dark Souls - Nameless Song (Wrong name in the video! ops!)",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FMxj-zHfZbw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FMxj-zHfZbw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FMxj-zHfZbw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/FMxj-zHfZbw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/FMxj-zHfZbw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "Compilation",
          "music",
          "game",
          "Dark Souls",
          "Demon's Souls",
          "Relax",
          "Videogame",
          "OST",
          "Soundtrack",
          "Shunsuke Kida",
          "Motoi Sakuraba",
          "Yuka Kitamura",
          "Firelink Shrine",
          "Fire Keepers",
          "Menu Theme",
          "Character Creation",
          "Majula"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Chilling Souls - A Relaxing Mix from Souls series",
          "description": "#Darksouls #DemonsSouls #VGOST #relax #Music #Fromsoftware #Compilation #Dark\n#Fantasy #Videogame #Soundtrack #Chill \nA selection of most relaxing music from Souls Series, from Demon's Souls to Dark Souls III. \n\nAll rights belongs to their respective owners. \nMusic composed by Shunsuke Kida, Motoi Sakuraba and Yuka \nKitamura.\n[0:00]  Demon's Souls - Character Creation\n[4:13]  Dark Souls - Menu Theme\n[8:14]  Dark Souls II - Fire Keepers\n[10:59]  Dark Souls III - Firelink Shrine\n[14:05]  Demon's Souls - Maiden in Black\n[18:19]  Dark Souls - Firelink Shrine\n[20:42]  Dark Souls II - Majula\n[23:54]  Dark Souls III - Dancer of the Boreal Valley (Wrong name in the video! ops!)\n[26:57]  Demon's Souls - The Old One (Wrong name in the video! ops!)\n[29:15]  Dark Souls - Daughters of Chaos\n[31:30]  Dark Souls II - King Vendrick\n[34:42]  Dark Souls III - Abyss Watchers\n[37:06]  Demon's Souls - Old Monk \n[40:00]  Dark Souls - Gwynevere, Princess of Sunlight\n[42:15]  Dark Souls II -  Longing\n[48:54]  Dark Souls III - Secret Betrayal\n[51:40]  Demon's Souls - Maiden Astraea \n[54:33]  Dark Souls - Great Grey Wolf Sif\n[57:05]  Dark Souls II -  Remains\n[59:22]  Dark Souls III - Premonition\n[1:01:29]  Demon's Souls - Old King Allant\n[1:04:28]  Dark Souls - Dark Sun Gwyindolin \n[1:06:41]  Dark Souls II - Queen of Drangleic\n[1:09:40]  Dark Souls III - Epilogue\n[1:16:26]  Demon's Souls - One who Craves Souls\n[1:20:42]  Dark Souls - Gwyin, Lord of Cinder\n[1:23:05]  Dark Souls II - Milfanito\n[1:25:50]  Demon's Souls - Return to Slumber\n[1:29:40]  Dark Souls - Nameless Song (Wrong name in the video! ops!)"
        },
        "defaultAudioLanguage": "zxx",
        "videoId": "FMxj-zHfZbw",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/FMxj-zHfZbw?autoplay=1"
        }
      },
      {
        "publishedAt": "2015-04-16T22:45:45Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "Titan Souls - Il Cubo spara laser bum bum",
        "description": "Provare e riprovare!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BzUtCEiDsuc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BzUtCEiDsuc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BzUtCEiDsuc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/BzUtCEiDsuc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/BzUtCEiDsuc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "Titan Souls",
          "Cube"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Titan Souls - Il Cubo spara laser bum bum",
          "description": "Provare e riprovare!"
        },
        "videoId": "BzUtCEiDsuc",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/BzUtCEiDsuc?autoplay=1"
        }
      },
      {
        "publishedAt": "2011-07-19T23:02:42Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "Blue Man Group - Shadows (HQ)",
        "description": "Shadows, track 11 from \"Audio\" by Blue Man Group",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/odpHmEJc4KE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/odpHmEJc4KE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/odpHmEJc4KE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/odpHmEJc4KE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/odpHmEJc4KE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "Shadows",
          "Audio",
          "Blue Man Group"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Blue Man Group - Shadows (HQ)",
          "description": "Shadows, track 11 from \"Audio\" by Blue Man Group"
        },
        "videoId": "odpHmEJc4KE",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/odpHmEJc4KE?autoplay=1"
        }
      },
      {
        "publishedAt": "2012-03-29T19:35:19Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "Paolo Benvegnù - Nel Silenzio @Teatro Montevergini (Palermo)",
        "description": "\"Nel Silenzio\" di Paolo Benvegnù all'Atelier Montevergini di Palermo il 28 Marzo 2012\nMancano i primi secondi della canzone!\nTutti i diritti riservati al diretto interessato.\n\nTesto: \nVoglio respirare lentamente il tuo profumo e non so se risvegliarti\nHo dormito poco per sognarti all'improvviso e non ho sognato niente\nEsco per lasciarti libera di sopravvivere per dimenticarti e ritrovarti inconsapevole.\nNon vedi che mi arrendo\nNon capisci che lasciandoti andare\nPotrai desiderare\nRiconquistarti e perderti\nPerchè non vedi che ti attendo\nTi proteggerò restando lontano\nNel silenzio\nNel silenzio i tuoi vestiti ballano\nPoi sorpresi dalla luce cadono\nCon una grazia irreale\nirreale\nMa io devo ritornare a camminare verso ciò che non so\nAnche se ieri ti ho sentito respirare in ogni cosa che ho\ndesiderato\nEsco dal tuo corpo con un gesto impercettibile per dimenticare che l'attesa sia incantevole\nNon vedi che mi arrendo\nNon capisci che lasciandoti andare\nPotrai desiderare\nRiconquistarti e perderti\nPerchè non vedi che ti attendo\nTi proteggerò restando lontano\nNel silenzio\nNel silenzio",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/cC8k6pZsWB4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/cC8k6pZsWB4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/cC8k6pZsWB4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/cC8k6pZsWB4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/cC8k6pZsWB4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "Paolo Bevegnù",
          "Nel SIlenzio",
          "Montevergini",
          "Scisma",
          "Musica Italiana",
          "Music",
          "Cantautori",
          "Palermo",
          "Live",
          "Concerto"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Paolo Benvegnù - Nel Silenzio @Teatro Montevergini (Palermo)",
          "description": "\"Nel Silenzio\" di Paolo Benvegnù all'Atelier Montevergini di Palermo il 28 Marzo 2012\nMancano i primi secondi della canzone!\nTutti i diritti riservati al diretto interessato.\n\nTesto: \nVoglio respirare lentamente il tuo profumo e non so se risvegliarti\nHo dormito poco per sognarti all'improvviso e non ho sognato niente\nEsco per lasciarti libera di sopravvivere per dimenticarti e ritrovarti inconsapevole.\nNon vedi che mi arrendo\nNon capisci che lasciandoti andare\nPotrai desiderare\nRiconquistarti e perderti\nPerchè non vedi che ti attendo\nTi proteggerò restando lontano\nNel silenzio\nNel silenzio i tuoi vestiti ballano\nPoi sorpresi dalla luce cadono\nCon una grazia irreale\nirreale\nMa io devo ritornare a camminare verso ciò che non so\nAnche se ieri ti ho sentito respirare in ogni cosa che ho\ndesiderato\nEsco dal tuo corpo con un gesto impercettibile per dimenticare che l'attesa sia incantevole\nNon vedi che mi arrendo\nNon capisci che lasciandoti andare\nPotrai desiderare\nRiconquistarti e perderti\nPerchè non vedi che ti attendo\nTi proteggerò restando lontano\nNel silenzio\nNel silenzio"
        },
        "videoId": "cC8k6pZsWB4",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/cC8k6pZsWB4?autoplay=1"
        }
      },
      {
        "publishedAt": "2011-07-19T23:48:35Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "Blue Man Group - Klein Mandelbrot (HQ)",
        "description": "Klein Mandelbrot, track 13 from \"Audio\" by Blue Man Group",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Q1JJUbWX9RE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Q1JJUbWX9RE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Q1JJUbWX9RE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Q1JJUbWX9RE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Q1JJUbWX9RE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "Klein Mandelbrot",
          "Audio",
          "Blue Man Group"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Blue Man Group - Klein Mandelbrot (HQ)",
          "description": "Klein Mandelbrot, track 13 from \"Audio\" by Blue Man Group"
        },
        "videoId": "Q1JJUbWX9RE",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/Q1JJUbWX9RE?autoplay=1"
        }
      },
      {
        "publishedAt": "2019-04-30T16:09:56Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "Gorogoa OST - Complete Soundtrack",
        "description": "#gorogoa #VGOST #relax #Music #Videogame #Soundtrack #Chill \nGorogoa Original Soundtrack, composed by Joel Corelitz\n\nGorogoa is an elegant evolution of the puzzle genre, told through a beautifully hand-drawn story designed and illustrated by Jason Roberts.\n\nUNIQUELY IMAGINATIVE PUZZLES\nThe gameplay of Gorogoa is wholly original, comprised of lavishly illustrated panels that players arrange and combine in imaginative ways to solve puzzles. Impeccably simple, yet satisfyingly complex.\n\nGORGEOUSLY HAND-DRAWN GAMEPLAY\nJason Roberts created thousands of meticulously detailed hand-drawn illustrations, encompassing the impressive scope of Gorogoa's personal narrative.\n\nA NEW KIND OF STORYTELLING\nGorogoa isn't just a game - it's a work of art, expressing itself through soulful, charming illustrations and distinguished puzzle mechanics. \n\nAll rights belongs to their respective owners. \nSupport creators buying the game and the soundtrack! \n\nhttps://open.spotify.com/album/7asu5KfbDAYEho26WCKllX\nhttps://store.steampowered.com/app/745160/Gorogoa__Soundtrack/\nhttps://www.gog.com/game/gorogoa_soundtrack\n\n[0:00] Arrival\n[3:00] Invitation\n[9:14] Sanctuary\n[14:53] Study\n[23:05] Pilgrimage\n[34:30] Patchwork\n[45:47] Resignation\n[47:15] Devotion\n[54:11] Hymm",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Jb8pRGRIt04/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Jb8pRGRIt04/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Jb8pRGRIt04/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Jb8pRGRIt04/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Jb8pRGRIt04/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "vgost",
          "gorogoa",
          "Videogame",
          "sountrack",
          "chill",
          "relax"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Gorogoa OST - Complete Soundtrack",
          "description": "#gorogoa #VGOST #relax #Music #Videogame #Soundtrack #Chill \nGorogoa Original Soundtrack, composed by Joel Corelitz\n\nGorogoa is an elegant evolution of the puzzle genre, told through a beautifully hand-drawn story designed and illustrated by Jason Roberts.\n\nUNIQUELY IMAGINATIVE PUZZLES\nThe gameplay of Gorogoa is wholly original, comprised of lavishly illustrated panels that players arrange and combine in imaginative ways to solve puzzles. Impeccably simple, yet satisfyingly complex.\n\nGORGEOUSLY HAND-DRAWN GAMEPLAY\nJason Roberts created thousands of meticulously detailed hand-drawn illustrations, encompassing the impressive scope of Gorogoa's personal narrative.\n\nA NEW KIND OF STORYTELLING\nGorogoa isn't just a game - it's a work of art, expressing itself through soulful, charming illustrations and distinguished puzzle mechanics. \n\nAll rights belongs to their respective owners. \nSupport creators buying the game and the soundtrack! \n\nhttps://open.spotify.com/album/7asu5KfbDAYEho26WCKllX\nhttps://store.steampowered.com/app/745160/Gorogoa__Soundtrack/\nhttps://www.gog.com/game/gorogoa_soundtrack\n\n[0:00] Arrival\n[3:00] Invitation\n[9:14] Sanctuary\n[14:53] Study\n[23:05] Pilgrimage\n[34:30] Patchwork\n[45:47] Resignation\n[47:15] Devotion\n[54:11] Hymm"
        },
        "videoId": "Jb8pRGRIt04",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/Jb8pRGRIt04?autoplay=1"
        }
      },
      {
        "publishedAt": "2011-07-19T23:10:18Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "Blue Man Group - Cat Video (HQ)",
        "description": "Cat Video, track 12 from \"Audio\" by Blue Man Group",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/rVsp8icP1rw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/rVsp8icP1rw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/rVsp8icP1rw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/rVsp8icP1rw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/rVsp8icP1rw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "Cat Video",
          "Audio",
          "Blue Man Group"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Blue Man Group - Cat Video (HQ)",
          "description": "Cat Video, track 12 from \"Audio\" by Blue Man Group"
        },
        "videoId": "rVsp8icP1rw",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/rVsp8icP1rw?autoplay=1"
        }
      },
      {
        "publishedAt": "2012-02-15T16:41:29Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "SpaceChem - Split Before Bonding (178/1/18)",
        "description": "Recorded solution for \"Split Before Bonding\" from SpaceChem, a design-based puzzle game from Zachtronics Industries.\n\nDownload the demo at http://www.spacechemthegame.com today!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PMOybvQa0S4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PMOybvQa0S4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PMOybvQa0S4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/PMOybvQa0S4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/PMOybvQa0S4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "zachtronics",
          "industries",
          "spacechem",
          "split-before-bonding"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "SpaceChem - Split Before Bonding (178/1/18)",
          "description": "Recorded solution for \"Split Before Bonding\" from SpaceChem, a design-based puzzle game from Zachtronics Industries.\n\nDownload the demo at http://www.spacechemthegame.com today!"
        },
        "videoId": "PMOybvQa0S4",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/PMOybvQa0S4?autoplay=1"
        }
      },
      {
        "publishedAt": "2012-02-15T17:44:55Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "SpaceChem - Settling into the Routine (1630/3/62)",
        "description": "Recorded solution for \"Settling into the Routine\" from SpaceChem, a design-based puzzle game from Zachtronics Industries.\n\nDownload the demo at http://www.spacechemthegame.com today!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/P_p4wsYU1Jw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/P_p4wsYU1Jw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/P_p4wsYU1Jw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/P_p4wsYU1Jw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/P_p4wsYU1Jw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "zachtronics",
          "industries",
          "spacechem",
          "settling-into-the-routine"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "SpaceChem - Settling into the Routine (1630/3/62)",
          "description": "Recorded solution for \"Settling into the Routine\" from SpaceChem, a design-based puzzle game from Zachtronics Industries.\n\nDownload the demo at http://www.spacechemthegame.com today!"
        },
        "videoId": "P_p4wsYU1Jw",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/P_p4wsYU1Jw?autoplay=1"
        }
      },
      {
        "publishedAt": "2015-10-02T22:52:25Z",
        "channelId": "UCb0KsZUaW-BC4EFPY29CVOw",
        "title": "WildStar Reborn - Primo Avvio! - First Start!",
        "description": "Questo è un video di gameplay al primo avvio di Wildstar Reborn. \nDura circa 3 ore e manca di commentario poiché l'intento non è fare un video guida o recensione ma semplicemente di far vedere in versione \"uncut\" le meccaniche e le prime quest del titolo!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/K_PAIVfPCBk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/K_PAIVfPCBk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/K_PAIVfPCBk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/K_PAIVfPCBk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/K_PAIVfPCBk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "kiactus",
        "tags": [
          "WildStar (Video Game)",
          "Massively Multiplayer Online Role-playing Game (Video Game Genre)",
          "Massively Multiplayer Online Game (Media Genre)",
          "Online Game (Website Category)",
          "First start",
          "Games",
          "Primo Avvio",
          "MMO",
          "Uncut",
          "First look"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "WildStar Reborn - Primo Avvio! - First Start!",
          "description": "Questo è un video di gameplay al primo avvio di Wildstar Reborn. \nDura circa 3 ore e manca di commentario poiché l'intento non è fare un video guida o recensione ma semplicemente di far vedere in versione \"uncut\" le meccaniche e le prime quest del titolo!"
        },
        "videoId": "K_PAIVfPCBk",
        "videoUrl": {
          "changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/K_PAIVfPCBk?autoplay=1"
        }
      }
    ]
    this.videoData.forEach(data => {
      data.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ data.videoId + '?autoplay=1')
    })
  }
}