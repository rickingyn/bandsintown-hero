import React, { useContext, useState } from "react";
import { ArtistContext } from "../context/ArtistContext";
import Logo from "./Logo";

const Header: React.FC = () => {
    const { getArtist } = useContext(ArtistContext);
    const [search, setSearch] = useState<string>("");

    /**
     * Update search state on input change
     * @param event event object from function
     */
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
    };

      /**
     * Search new artist on form submit and clear search bar
     * @param event event object from function
     */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        getArtist(search);
        setSearch("");
    };

    return (
        <header className="Header">
            <Logo />
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        aria-label="Search Bar"
                        placeholder="Search for artists"
                        value={search}
                        onChange={handleChange}
                    />
                    <img
                        src="https://assets.prod.bandsintown.com/images/loupe.svg"
                        className="search-icon"
                        alt="Search Icon"
                    />
                </form>
            </div>
            <div className="account">
                <a href="#">Sign Up</a>
                <a href="#">Log In</a>
            </div>
        </header>
    );
};

export default Header;
