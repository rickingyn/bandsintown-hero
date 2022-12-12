import React, { createContext, useEffect, useState } from "react";
import { Artist } from '../types/artist';
import dummyData from "../data/dummyData.json";

interface ArtistContextProps {
    artist: Artist;
    setArtist: React.Dispatch<React.SetStateAction<Artist>>;
    getArtist: any;
}

interface ArtistContextProviderProps {
    children: React.ReactNode;
}

// Create Context
export const ArtistContext = createContext<ArtistContextProps>(
    {} as ArtistContextProps
);

// Context Provider
export const ArtistContextProvider = ({
    children,
}: ArtistContextProviderProps) => {
    // preload artist state with dummy data
    const [artist, setArtist] = useState<Artist>(dummyData);

    // Get artist Drake on load
    useEffect(() => {
        getArtist("Drake");
    }, []);

    /**
     * Fetch Artist from Bandsintown API and set artist state
     * @param search string of artist name to fetch
     */
    const getArtist = async (search: string) => {
        try {
            const appId = "Test";

            const response = await fetch(
                `https://rest.bandsintown.com/artists/${search}?app_id=${appId}`
            );
            const data = await response.json();

            setArtist(data);
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <ArtistContext.Provider value={{ artist, setArtist, getArtist }}>
            {children}
        </ArtistContext.Provider>
    );
};
