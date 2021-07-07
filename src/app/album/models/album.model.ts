import { Artist } from "src/app/artist/models/artist.model";

export interface Album {
    id?: number;
    name?: string;
    cover?: string;
    releaseDate?: Date;
    description?: string;
    label?: Label;
    albumType?: AlbumType;
    artists?: Artist[];
    genres?: Genre[];
    tracks?: Track[];
}

export interface Label {
    id?: number;
    name?: string;
    picture?: string;
    location?: string;
    foundationYear?: number;
}

export interface AlbumType {
    id?: number;
    name?: string;
}

export interface Genre {
    id?: number;
    name?: string;
}

export interface Track {
    id?: number;
    num?: string;
    name?: string;
    duration?: number;
}