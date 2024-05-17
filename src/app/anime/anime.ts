export class Anime {

    id: number;
    name: string;
    description: string;
    Rating: number;
    episode: number;
    categorie: string;
    studio: string;
    img: string;

    public constructor(id: number, name: string, channel: string, episode: number, description: string, categorie: string, Rating: number, img: string, studio: string){
        this.id = id;
        this.name = name;
        this.episode = episode;
        this.description = description;
        this.categorie = categorie;
        this.Rating = Rating;
        this.img = img;
        this.studio = studio;
    }
} 