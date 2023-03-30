import React,{useState, useEffect} from 'react';
import './App.css';
import Movies from './Components/Movies';

function App() {

  const [movieData, SetmovieData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a636ecd9efmsh4e5ef960c5985d6p17d3dcjsn2dffa9610c36',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  // fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20',options)
 // .then(res => res.json())
 //.then(data => console.log(data))
 //.then(data => SetmovieData(data))

 const getMovie = async () => {
  const data = await fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20',options);
  const result = await data.json();
  console.log(result)
  SetmovieData(result.d)
 };

 useEffect(() => {
   getMovie();
 },[])



  return (
    <div className="App">
      <h1>Best Movies & TV Shows </h1>

      <div className='movie-container'>
    
       {movieData.map((movie) => (
        <Movies 
          key={movie.id}
          movie={movie}
        />
       ))}
      
       </div>
    </div>
  );
}

export default App;
