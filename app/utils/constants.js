export const API_KEY = "AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4"
// export const API_KEY = "AIzaSyDG8fUcQ2Q3wCOlsy5_hNZFyNoKG2WvPgM"

// export const API_KEY = "AIzaSyAOE8c0Ce0Gk0sH3avHe6yQ5zmMvFExOQU"

// export const API_KEY = "AIzaSyA1AEzfMZaeUYvgRLauF-AaJx9e9Ds2MCY"


export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=' + API_KEY ;
export const SEARCH_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
export const CATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + API_KEY;
export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;
export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${API_KEY}&relatedToVideoId=`;
export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;



