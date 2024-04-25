"use server";
import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.NEXT_PRIVATE_Client_SECRET;

interface Game {
    id: number;
    name: string;
    age_ratings?: number[];
    aggregated_rating?: number;
    aggregated_rating_count?: number;
    alternative_names?: string[];
    artworks?: number[];
    bundles?: number[];
    category?: number;
    checksum?: string;
    collection?: number;
    collections?: number[];
    cover?: {
        id: number;
        url: string;
        width: number;
        height: number;
    };
    // Adicione os outros campos conforme necessário
}

const igdbUrl = "https://api.igdb.com/v4/";

const fetchAccessToken = async () => {
    const tokenResponse = await axios.post(
        "https://id.twitch.tv/oauth2/token",
        null,
        {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: "client_credentials",
            },
        }
    );

    return tokenResponse.data.access_token;
};

export const fetchGames = async () => {
    const accessToken = await fetchAccessToken();

    const gamesResponse = await axios.post(`${igdbUrl}games`, null, {
        headers: {
            "Client-ID": clientId,
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return gamesResponse.data;
};

export const fetchSpecificGame = async (gameName: string) => {
    const accessToken = await fetchAccessToken();

    const specificGameResponse = await axios.post(
        `${igdbUrl}games`,
        `fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites,thumbnails; where name = "${gameName}";`,
        {
            headers: {
                "Client-ID": clientId,
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (specificGameResponse.data.length === 0) {
        throw new Error(`Jogo "${gameName}" não encontrado.`);
    }

    const coverId = specificGameResponse.data[0].cover;

    let coverDetails = null;
    if (coverId) {
        const coverResponse = await axios.post(
            `${igdbUrl}covers`,
            `fields alpha_channel,animated,checksum,game,game_localization,height,image_id,url,width; where id = ${coverId};`,
            {
                headers: {
                    "Client-ID": clientId,
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        coverDetails = coverResponse.data[0];
    }

    return {
        info: specificGameResponse.data[0],
        cover: coverDetails,
    };
};
