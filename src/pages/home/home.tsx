import { useState } from "react"
import { Button } from "semantic-ui-react"
import { ColumnDisplay } from "./column_display";
import { fetchOnAirTvShows, fetchNowPlayingMovies } from "./query";
import { useQuery } from "@tanstack/react-query";

export enum DisplayType {
    Movies = "movies",
    TvShows = "tvshows"
}

export const Home = () => {

    const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies);
    const {data: NowPlayingMoviesData, isLoading: isLoadingNowPlayingMovies } = useQuery({queryKey: ["NowPlayingMovies"], queryFn: fetchNowPlayingMovies});
    const {data: OnAirTvShowsData, isLoading: isLoadingOnAirTvShows} = useQuery({queryKey: ["OnAirTvShows"], queryFn: fetchOnAirTvShows});


    return (
        <div style={{marginTop:50, height:"auto"}}>
            <Button.Group>
                <Button color={displayType === DisplayType.Movies ? "blue" : undefined} onClick={() => setDisplayType(DisplayType.Movies)}>
                    Movies
                </Button>
                <Button color={displayType === DisplayType.TvShows ? "blue" : undefined} onClick={() => setDisplayType(DisplayType.TvShows)}>
                    Tv Shows
                </Button>
            </Button.Group>
            {isLoadingNowPlayingMovies || isLoadingOnAirTvShows ? (
                <div> Loading...</div>
            ) : (
            <div style={{marginTop: 20}}>
                {displayType === DisplayType.Movies ? (
                <ColumnDisplay data={NowPlayingMoviesData.results} displayType={DisplayType.Movies} /> 
                ) : (
                <ColumnDisplay data={OnAirTvShowsData.results} displayType={DisplayType.TvShows} />
                )}
            </div>
            )}
        </div>
    )
}