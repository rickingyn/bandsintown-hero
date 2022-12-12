import React, { useContext } from "react";
import { ArtistContext } from "../context/ArtistContext";
import verified from '../verified.svg';

const Hero: React.FC = () => {
    const { artist } = useContext(ArtistContext);

    return (
        <>
            {Object.keys(artist).length > 0 && (
                <div className="Hero">
                    <div className="banner">
                        <img
                            className="banner-background"
                            src={artist.image_url}
                            alt="Banner Background"
                        />
                        <div className="banner-overlay"></div>
                        <div className="content">
                            <img
                                className="avatar"
                                src={artist.image_url}
                                alt="Artist Avatar"
                            />
                            <div className="artist-info">
                                <h1 className="artist">{artist.name}
                                    <img className="verified-icon" src={verified} alt="Verified Icon"/>
                                </h1>
                                <div className="followers">
                                    {artist.tracker_count.toLocaleString()}{" "}
                                    Followers
                                </div>
                            </div>
                        </div>

                        <div className="follow-button">
                            <button>Follow</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Hero;
