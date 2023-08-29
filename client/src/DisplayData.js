import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";

const QUERY_ALL_USERS = gql`
  query Users {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query Movies {
    movies {
      name
      YearOfPublication
      InTheaters
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      YearOfPublication
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      age
    }
  }
`;

function Displaydata() {
  const [movieSearched, setMovieSearched] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");

  const { data, loading, error , refetch } = useQuery(QUERY_ALL_USERS);
  const { data: MovieData } = useQuery(QUERY_ALL_MOVIES);

  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  const [createUser] = useMutation(CREATE_USER_MUTATION);

  if (loading) {
    return <h1 className="App"> DATA IS LOADING ... </h1>;
  }
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }

  if (MovieData) {
    console.log(MovieData);
  }

  if (movieError) {
    console.log(movieError);
  }

  return (
    <>
      <div className="App">
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => {
            setAge(parseInt(event.target.value));
          }}
        />
        <input
          type="text"
          placeholder="Nationality"
          onChange={(event) => {
            setNationality(event.target.value);
          }}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                input: {
                  name: name,
                  username: username,
                  age: age,
                  nationality: nationality,
                },
              },
            });
            refetch(); 
          }}
        >
          Create User
        </button>
      </div>
      <div className="App">
        <h1>
          <u>List Of Users</u>
        </h1>
        {data &&
          data.users.map((user) => {
            return (
              <div>
                <hr />
                <h1> Name : {user.name} </h1>
                <h1> Username : {user.username} </h1>
                <h1> Age : {user.age} </h1>
                <h1> Nationality : {user.nationality} </h1>
              </div>
            );
          })}
        <hr />
        <hr />
        <h1>
          <u>List Of Movies</u>
        </h1>
        {MovieData &&
          MovieData.movies.map((movie) => {
            return (
              <div>
                <hr />
                <h1> Title : {movie.name} </h1>
              </div>
            );
          })}
      </div>
      <div className="App">
        <input
          type="text"
          onChange={(event) => {
            setMovieSearched(event.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          SEARCH
        </button>
        <div>
          {movieSearchedData && (
            <div>
              <h1> Title : {movieSearchedData.movie.name} </h1>
              <h1> Release : {movieSearchedData.movie.YearOfPublication} </h1>
            </div>
          )}
          {movieError && <h1>Movie not found</h1>}
        </div>
      </div>
    </>
  );
}

export default Displaydata;
