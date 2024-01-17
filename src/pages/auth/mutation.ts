export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWNkN2IxNTI4ZTdlZDE1MTE5OTU4ZGNhNDcxYTU4NyIsInN1YiI6IjY1YTA0Y2MwNWIwNzE0MDEyOWZkY2YyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ubD6R-nlk2oUwwdLT1Ix8IQvWJ3KVYmutaCYIb7Y6Oo'
            },
        }
    );

    const json_data = res.json();
    console.log(json_data);
    return json_data; 
    // console.log(res.json());
    // return res.json();
    
};