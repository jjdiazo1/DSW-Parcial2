import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  animes: Array<Anime> = [];
  totalEpisodes: number = 0;
  averageRating: number = 0;
  selectedAnime!: Anime;
  selected = false;

  constructor(private animeService: AnimeService) { }

  getAnimeList(){
    this.animeService.getAnimes().subscribe(animes=> {
      this.animes = animes;
      this.calculateTotalEpisodes();
      this.calculateAverageRating();
    });
  }

  calculateAverageRating() {
    let totalRating = 0;
    for (let a of this.animes) {
      totalRating += a.Rating;
    }
    this.averageRating = totalRating / this.animes.length;
  }

  calculateTotalEpisodes() {
    let totalEpi = 0;
    for (let a of this.animes) {
      totalEpi += a.episode;
    }
    this.totalEpisodes = totalEpi;
  }

  onSelected(anime: Anime): void{
    this.selected = true;
    this.selectedAnime = anime;
  }

  ngOnInit() {
    this.getAnimeList();
  }

}
