import { Injectable } from '@angular/core';
import { Music } from './IMusic'

@Injectable({
    providedIn: 'root',
})
export class MusicService {

    constructor() { }

    getPlaylist(): Music[] {
        return this.generatePlaylist();
    }


    generatePlaylist(): Music[] {
        return [{
            music_artist: "Arcade Fire",
            music_file: " - ",
            music_name: "Wake Up",
            music_file_album: "https://img.discogs.com/3uYpRsYSMCKSBZJjqZnmi-iJtq4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-409021-1463664474-9669.jpeg.jpg"
        },
        {
            music_artist: "Arcade Fire",
            music_file: " - ",
            music_name: "Rebellion (Lies)",
            music_file_album: "https://img.discogs.com/3uYpRsYSMCKSBZJjqZnmi-iJtq4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-409021-1463664474-9669.jpeg.jpg"
        },
        {
            music_artist: "Arcade Fire",
            music_file: " - ",
            music_name: "Everything_Now",
            music_file_album: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d5/Arcade_Fire_-_Everything_Now_-_2017.jpg/220px-Arcade_Fire_-_Everything_Now_-_2017.jpg"
        },
        {
            music_artist: "Arcade Fire",
            music_file: " - ",
            music_name: "Infinite Content",
            music_file_album: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d5/Arcade_Fire_-_Everything_Now_-_2017.jpg/220px-Arcade_Fire_-_Everything_Now_-_2017.jpg"
        }];

    }


}
