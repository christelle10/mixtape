const CLIENT_ID = "456b35c25847443aaf4a6da5719a85a1";
const CLIENT_SECRET = "261c8b83f432490baae638ea860ce632";
const REDIRECT_URL_AFTER_LOGIN = "https://mixtape-me.web.app/home";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPACE_DELIMETER = "%2b";
const SCOPES = [

    'user-top-read'
   
];

const SCOPE_URL_PARAM = SCOPES.join();

module.exports = {CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URL_AFTER_LOGIN, SPACE_DELIMETER, SCOPES, SCOPE_URL_PARAM};