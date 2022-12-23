
const API_KEY = "390aa52f8331091cc41c51c19d818578";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-GB`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-GB`
}

export default requests;