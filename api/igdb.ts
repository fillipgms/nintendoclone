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
    screenshots?: number[];
}

const igdbUrl = "https://api.igdb.com/v4";

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

export const fetchTenGames = async () => {
    const accessToken = await fetchAccessToken();

    const gamesResponse = await axios.post(`${igdbUrl}games`, null, {
        headers: {
            "Client-ID": clientId,
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return gamesResponse.data;
};

export const getSpecificGame = async (gameName: string) => {
    const accessToken = await fetchAccessToken();

    const specificGameResponse = await axios.post(
        `${igdbUrl}/games`,
        `fields age_ratings, cover, artworks, category, collection, genres, name, rating, screenshots, url, videos; where name = "${gameName}";`,
        {
            headers: {
                "Client-ID": clientId,
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    return specificGameResponse.data;
};

export const getArtworkById = async (
    coverId: number,
    videosIds: number[],
    screenshotsIds: number[]
) => {
    const accessToken = await fetchAccessToken();
    const artworks = { cover: {}, videos: [], screenshots: [] };

    const coverPromise = axios.post<{ data: models.Cover }>(
        `${igdbUrl}/covers`,
        `fields alpha_channel,animated,checksum,game,game_localization,height,image_id,url,width; where id = ${coverId};`,
        {
            headers: {
                "Client-ID": clientId,
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    const videosPromises = videosIds.map((id) =>
        axios.post(
            `${igdbUrl}/game_videos`,
            `fields checksum,game,name,video_id; where id = ${id};`,
            {
                headers: {
                    "Client-ID": clientId,
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
    );

    const screenshotsPromises = screenshotsIds.map((id) =>
        axios.post(
            `${igdbUrl}/screenshots`,
            `fields alpha_channel,animated,checksum,game,height,image_id,url,width; where id = ${id};`,
            {
                headers: {
                    "Client-ID": clientId,
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
    );

    const [coverResponse, videosResponses, screenshotsResponses] =
        await Promise.all([
            coverPromise,
            Promise.all(videosPromises),
            Promise.all(screenshotsPromises),
        ]);

    artworks.cover = coverResponse.data;
    artworks.videos = videosResponses.map(
        (response) => response.data as models.Video
    );
    artworks.screenshots = screenshotsResponses.map(
        (response) => response.data as models.Screenshots
    );

    return artworks;
};
