import { Component } from "@angular/core";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { MusicService } from "./shared/MusicService";
import { Music } from "./shared/IMusic";
import { VirtualTimeScheduler } from "rxjs";


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]

})

export class AppComponent {
    public direction: number;
    public playlist: Array<Music>
    public current: number;
    public currentMusic: Music;
    public random = false;
    

    constructor(private mService: MusicService) { }

    ngOnInit(): void {
        this.playlist = this.mService.getPlaylist();
        if (this.random) {
            this.current = Math.floor(Math.random() * this.playlist.length);
            this.currentMusic = this.playlist[this.current];
        } else {
            this.current = 0;
            this.currentMusic = this.playlist[this.current];
        }
    }

    nextMusic(): void {
        if (this.random) {
            this.current = this.current = Math.floor(Math.random() * this.playlist.length);
            this.currentMusic = this.playlist[this.current];
        } else {
            if (this.current != this.playlist.length) {
                this.current = this.current + 1;
                this.currentMusic = this.playlist[this.current];
            }
        }
    }

    previousMusic(): void {
        if (!this.random) {
            if (this.current != 0) {
                this.current = this.current - 1;
                this.currentMusic = this.playlist[this.current];
            }
        }
    }

    randomChange(): void {
        this.random ? this.random = false : this.random = true;
    }


    // Swipe para trocar de música
    onSwipe(args: SwipeGestureEventData) {
        if (args.direction === 1) {
            this.previousMusic();
        } else if (args.direction === 2) {
            this.nextMusic();
        }
    }
}
