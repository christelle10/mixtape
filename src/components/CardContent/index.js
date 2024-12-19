
import MixtapeCard from '../../components/MixtapeCard';
import "./index.css";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as htmlToImage from 'html-to-image';
import { Link } from "react-router-dom";



const CardContent = () => {
    
    const [token, setToken] = useState("");
    const [playlists, setPlaylists] = useState({});
    const [profile, setProfile] = useState({});
    const [artists, setArtists] = useState({});
    const [tracks1, setTracks1] = useState({});
    const [tracks2, setTracks2] = useState({});

    //different end points
    const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
    const TRACKS1_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?offset=0&time_range=long_term&limit=4";
    const TRACKS2_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?offset=4&time_range=long_term&limit=4";
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
        getData(TRACKS1_ENDPOINT, setTracks1);
        getData(TRACKS2_ENDPOINT, setTracks2);
        getData(ARTISTS_ENDPOINT, setArtists);
        getData(PROFILE_ENDPOINT, setProfile);

    }, []);
    console.log(token);
    const print = useRef(null);
    

   
  
    
    const handleDownloadImage = async () => {
        
    const dataUrl = await htmlToImage.toPng(print.current);
 
    // download image
    const link = document.createElement('a');
    link.download = "mixtape.png";
    link.href = dataUrl;
    link.click();
    };
      

    return (
        
        <div>
            
            <div className='container'>
            <div className='header-text'>
                <h1>mixtape.me</h1>
            </div>
            <div id = "print" ref={print}>
            <MixtapeCard>
            {
                profile.images &&
                <div className = "header">
                    <div className ="profile-pic"><img src= {profile.images[0].url} alt = 'profile img' className="profile-img"/></div>
                    <div className = "card-logo">mixtape.me</div>
                </div>
                
            }
            

            {
                profile.display_name && 
                <div className = "profile-details">
                    <h1 className="profile-name">{profile.display_name}<span className="year"> 2023</span></h1>
                </div>
            }
            {
                 playlists.total && artists.items && profile.followers &&
                <div className = "description">
                    <p className = "description-text"> {profile.followers.total} followers. {playlists.total} playlists. Definitely a fan of {artists.items[0].name}, {artists.items[1].name}, {artists.items[2].name}, {artists.items[3].name}, and {artists.items[4].name}.</p>
                </div>
            }
            {
                profile.display_name && 
                <div className="mixtape-title">
                <h2>{profile.display_name}'s mixtape </h2>
                </div>

            }
            
    
            {
                tracks1.items && tracks2.items &&
                <div className = "list">
    
                    <div className="tracks1"> 
                        {
                            tracks1.items.map((track, index) => {
                                
                    
                                return (
                                    
                                    <div key = {index} className = 'track' style = {{width: '100%', textAlign: 'center'}}>
                                        <h2 className="track-name">{track.name}</h2>
                                        <h3 className ="track-artist">{track.artists[0].name}</h3>
                                    </div>
                                    
                                )
                               
                            })
                        }
                    </div> 
                    <div className="tracks2"> 
                        {
                            tracks2.items.map((track, index) => {
                                
                    
                                return (
                                    
                                    <div key = {index} className = 'track' style = {{width: '100%', textAlign: 'center'}}>
                                        <h2 className="track-name">{track.name}</h2>
                                        <h3 className ="track-artist">{track.artists[0].name}</h3>
                                    </div>
                                    
                                )
                               
                            })
                        }
                    </div> 
                </div>
            }
            <div className = "PA">
                <img src="./parental.png" alt = 'parental-adv-img' className="parental-adv"></img>
            </div>
            </MixtapeCard>
            </div>
            
            </div>
            <button type="button" className='download-button' onClick={handleDownloadImage}>Share your Mixtape</button>
            <Link to = "/" style={{ textDecoration: 'none' }}><button type="button" className='download-button'>Back to Home</button></Link>
            
           
                
        </div>
        
    )
};  

export default CardContent;