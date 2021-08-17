import React from 'react';
import { useState, useEffect } from 'react';
import HikesList from '../components/HikesList';
import HikesMap from '../components/HikesMap';
import SearchBar from '../components/SearchBar';
import { getHikes } from '../services/HikesService';

const HikesContainer = () => {

  const [allHikes, setAllHikes] = useState([]);
  const [filteredHikes, setFilteredHikes] = useState([]);

  useEffect(() => {
    getHikes().then((allHikes) => {
      setAllHikes(allHikes);
      setFilteredHikes(allHikes);
    })
  }, []);

  useEffect(() => {
    resetHikes();
  }, [allHikes])

  // to add new hikes
  const addHike = (hike) => {
    const temp = allHikes.map(s => s);
    temp.push(hike);
    setAllHikes(temp);
  }

  // to remove hikes from personal list
  const removeHike = (id) => {
    const temp = allHikes.map(h => h);
    const indexToDel = temp.map(h => h._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setAllHikes(temp);
  }

  const getHikesByDifficulty = (event) => {
    const hikesByDifficulty = allHikes.filter(
      hike => hike.difficulty === event.target.value
    );
    setFilteredHikes(hikesByDifficulty);
  }

  const resetHikes = () => {
    setFilteredHikes(allHikes);
  }

  // developing map only rn, not returning other components
  return (
    <>
      <SearchBar 
        getHikesByDifficulty={getHikesByDifficulty} 
        resetHikes={resetHikes} />   
      {/* <HikesList hikes={hikes}/> */}
      <HikesMap hikes={filteredHikes}/>
    </>
  );
} 

export default HikesContainer;