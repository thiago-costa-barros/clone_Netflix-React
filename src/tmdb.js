const API_KEY = 'api_key=bfef0387d2c731c374d7330ca1d73b25';
const API_BASE = 'https://api.themoviedb.org/3';
const PT_BR = 'language=pt-br';

/* 
    - originais da netflix
    - recomendados (trending)
    - top rated 
    - ação
    - comedia
    - terror
    - romance
    - documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}

export default {
    getHomeLIst: async () => {
        return [
            {
                slug: 'mostWatched',
                title: 'Mais assistidos',
                items: await basicFetch(`/discover/movie?sort_by=popularity.desc&${PT_BR}&${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?${API_KEY}&${PT_BR}`)
            },
            {
                slug: 'topratedMovie',
                title: 'Filmes Em alta',
                items: await basicFetch(`/movie/top_rated?${API_KEY}&${PT_BR}`)
            },
            {
                slug: 'topratedTv',
                title: 'Séries Em alta',
                items: await basicFetch(`/tv/top_rated?${API_KEY}&${PT_BR}`)
            },
            {
                slug: 'mostPopular',
                title: 'Sucesso de Público',
                items: await basicFetch(`/discover/movie?primary_release_year=2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020&sort_by=vote_average.desc${PT_BR}&${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&${PT_BR}&${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&${PT_BR}&${API_KEY}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFetch(`/discover/movie?with_genres=18&${PT_BR}&${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&${PT_BR}&${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&${PT_BR}&${API_KEY}`)
            },
            {
                slug: 'animation',
                title: 'Animação',
                items: await basicFetch(`/discover/movie?with_genres=16&${PT_BR}&${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&${PT_BR}&${API_KEY}`)
            },
        ];
    },
    getTvInfo: async (tvId, media_type) => {
        let info = {};

        if (tvId) {
            switch (media_type) {
                case 'movie':
                    info = await basicFetch(`/movie/${tvId}?${PT_BR}&${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${tvId}?${PT_BR}&${API_KEY}`);
                    break;
            }
        }
        return info;
    },
    getMovieInfo: async (movieId, media_type) => {
        let info = {};

        if (movieId) {
            switch (media_type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?${PT_BR}&${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${PT_BR}&${API_KEY}`);
                    break;
            }
        }
        return info;
    }
}