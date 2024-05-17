import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { AnimeModule } from './../anime.module';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  averageRating: number = 0;
  totalEpisodes: number = 0;
  animes: Array<Anime> = []; 
  selectedAnime!: Anime;
  selected = false;

  constructor(private animeService: AnimeService) { }

  getAnimes(): void{
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  getAnimesList() {
    this.animeService.getAnimes().subscribe(animes => {
      this.animes = animes;
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

  onSelected(anime: Anime): void{
    this.selected = true;
    this.selectedAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
    this.getAnimesList();
  }

}