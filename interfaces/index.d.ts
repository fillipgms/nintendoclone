namespace models {
    interface Game {
        age_ratings: string;
        artworks: number[];
        category: number;
        cover: number;
        genres: string;
        id: number;
        name: string;
        rating: number;
        screenshots: number[];
        url: string;
        videos: number[];
    }

    interface Cover {
        alpha_channel: boolean;
        animated: boolean;
        checksum: number;
        game: number;
        game_localization: number;
        height: number;
        image_id: number;
        url: string;
        width: number;
    }

    interface Video {
        checksum: number;
        game: number;
        name: string;
        video_id: string;
    }

    interface Screenshots {
        alpha_channel: boolean;
        animated: boolean;
        checksum: number;
        game: number;
        height: number;
        image_id: number;
        url: string;
        width: number;
    }
}
