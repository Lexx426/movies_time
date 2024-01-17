import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Grid, Header, Image, List, Loader, Segment } from "semantic-ui-react";
import { fetchTVDetails } from "./tv_query";

export const TvShow = () =>{
    const {id} = useParams<string>();
    
    if (!id) {
        return <div> Invalid Tv Show ID</div>
    };

    const {data, isLoading} = useQuery({
        queryKey: ["tvshow"], 
        queryFn: () => fetchTVDetails(id)});

    if (isLoading){
        return <Loader active />
    }


    return(
        <div style={{marginTop:50}}>
            <Segment>
                <Header>
                    {data.title}
                </Header>
                <Grid columns={2} divided textAlign="left" style={{marginTop:20}}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%"
                                }}>
                                    <Image 
                                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                        size="medium"
                                        centered />

                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <List>
                                <List.Item>
                                    <List.Header>
                                        Contains Adult content?
                                    </List.Header>
                                    {data.adult ? "Yes" : "No"}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Budget:
                                    </List.Header>
                                    {data.budget}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Genres:
                                    </List.Header>
                                    {data.genres.map((genre:any) => (
                                        <List.Item key={genre.id}> {genre.name} </List.Item>
                                    ))}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Production Companies:
                                    </List.Header>
                                    {data.production_companies.map((company: any) => company.name).join(", ")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Release Date:
                                    </List.Header>
                                    {data.release_date}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Runtime:
                                    </List.Header>
                                    {data.runtime}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Revenue:
                                    </List.Header>
                                    {data.revenue}
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>

    )
};