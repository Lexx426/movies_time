export const fetchTVDetails = async (tvShowId: String) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWNkN2IxNTI4ZTdlZDE1MTE5OTU4ZGNhNDcxYTU4NyIsInN1YiI6IjY1YTA0Y2MwNWIwNzE0MDEyOWZkY2YyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ubD6R-nlk2oUwwdLT1Ix8IQvWJ3KVYmutaCYIb7Y6Oo'
            },
        }
    );
    return res.json()
}