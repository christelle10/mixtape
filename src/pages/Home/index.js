import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardContent from '../../components/CardContent';
import "./index.css";


/*const Home = () => {
    const [token, setToken] = useState("");
    const [playlists, setPlaylists] = useState({});
    const [profile, setProfile] = useState({});
    const [artists, setArtists] = useState({});
    const [tracks, setTracks] = useState({});

    //different end points
    const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
    const TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term";
    const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=long_term";
    const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

    //obtaining access token
    const getParamsFromHash = (hash) => {
        const hashContent = hash.substr(1); //Remove # 
        const paramsSplit = hashContent.split('&');
        let params = {};
        let values = [];
        paramsSplit.forEach((param) => {
            values = param.split('=');
            params[values[0]] = values[1];
        })
        return params;
    }

    const getData = async (endpoint, seFunction) => {
        await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then ( response => {
            seFunction(response.data);
            console.log(response.data);
        }

        ).catch( error => {
            console.log(error);
        }

        )
    }
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    useEffect(() => {
        if(window.location.hash) {
            const hash = window.location.hash;
            const tokens = getParamsFromHash(hash);
            localStorage.setItem('token', tokens.access_token);
            setToken(tokens.access_token);
            window.history.pushState({}, null, '/home'); 
        }
        
        getData(PLAYLISTS_ENDPOINT, setPlaylists);
        getData(TRACKS_ENDPOINT, setTracks);
        getData(ARTISTS_ENDPOINT, setArtists);
        getData(PROFILE_ENDPOINT, setProfile);

    }, []);
    console.log(token);
    return (
        
        <div>
            <MixtapeCard>
                <CardContent></CardContent>
            </MixtapeCard>
            {
                
            }
            {
                profile.display_name && profile.images &&
                <div className = "profile">
                    <img src= {profile.images[0].url} alt = 'profile img'/>
                    <h1>Welcome to your mixtape profile 👋, {profile.display_name}</h1>
                </div>
            }
            {
                tracks.items && 
                <div className = "list">
                    <h2>your all-time favorite songs</h2>
                    <div style = {{display: 'grid', gridTemplateColumns: 'auto auto auto auto'}}> 
                        {
                            tracks.items.map((track, index) => {
                                return (
                                    <div key = {index} className = 'track' style = {{width: '100%', textAlign: 'center'}}>
                                        <img src = {track.album.images[0].url}/>
                                        <h2>{track.name}</h2>
                                        <h3>{track.artists[0].name}</h3>
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>
            }
            {
                artists.items && 
                <div className = "list">
                    <h2>your all-time favorite artists</h2>
                    <div style = {{display: 'grid', gridTemplateColumns: 'auto auto auto auto'}}> 
                        {
                            artists.items.map((artist, index) => {
                                return (
                                    <div key = {index} className = 'artist' style = {{width: '100%', textAlign: 'center'}}>
                                        <img src = {artist.images[0].url}/>
                                        <h2>{artist.name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>
            }
        </div>
    )
}; */

const Home = () => {
    return (
        
        
      
    <CardContent>

    </CardContent>
    
    )
    
};  

export default Home;
