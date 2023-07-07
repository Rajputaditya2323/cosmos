import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTBiNWJjMjhhYmQxZGIzMDQxZDdjMzAxOTljYjBiNSIsInN1YiI6IjY0YTgxZDRhOTU3ZTZkMDExYzRjMWUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ztk3kNw6ofpfSSrHbpwuslgq83tX10godVKFL7Hu8Ck';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
