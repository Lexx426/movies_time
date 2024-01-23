import { Container, Header, Menu, Segment } from "semantic-ui-react"
import { DisplayType } from "../home/home"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../individuals/movie_query";
import { fetchRatedMovies, fetchRatedTv } from "./rated_query";
import { ColumnDisplay } from "../home/column_display";

export const Rated = () => {
    const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

    const {data: ratedMovies, isLoading: isLoadingRatedMovies} = useQuery({
        queryKey: ["ratedMovies"], 
        queryFn: fetchRatedMovies});

        const {data: ratedTv, isLoading: isLoadingRatedTv} = useQuery({
            queryKey: ["ratedTv"], 
            queryFn: fetchRatedTv});

    return (
        <Container style={{ marginTop: 50 }}>
            <Menu pointing secondary>
                <Menu.Item name="Movies" active={activeTabs === DisplayType.Movies} onClick={() => setActiveTabs(DisplayType.Movies)} />
                <Menu.Item name="Tv Shows" active={activeTabs === DisplayType.TvShows} onClick={() => setActiveTabs(DisplayType.TvShows)} />
            </Menu>
            <Segment>
                {activeTabs === DisplayType.Movies ? (
                    <div>
                        <Header as={"h2"}> Rated Movies </Header>
                        <ColumnDisplay 
                            data={ratedMovies.results}
                            displayType={DisplayType.Movies}
                        />
                    </div>
                ) : (
                    <div>
                        <Header as={"h2"}> Rated Tv Shows </Header>
                        <ColumnDisplay 
                                data={ratedTv.results}
                                displayType={DisplayType.TvShows}
                        />
                    </div>
                )}
            </Segment>
        </Container>
    )
}