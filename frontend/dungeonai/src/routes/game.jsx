import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import EventsList from "../components/EventsList";
import PlayerList from "../components/PlayerList";
import Roll from "../components/Roll";

// React component to give a view of the details of an individual game.

// The component will contain a list of events that have occurred in the game (each event will have text describing the event) and a list of players in the game (each player will have a picture, name, and health bar).

// React component to give a view of the details of an individual game.

export default function Game() {
  // Set game id from url params
  const { id } = useParams();

  // Variables to store game data (events) and player data
  const [game, setGame] = useState([]);
  const [players, setPlayers] = useState([]);

  // Initialize game and players array with dummy data

  const events = [
    {
      id: 1,
      text: "This is event 1",
    },
    {
      id: 2,
      text: "This is event 2",
    },
  ];

  let playersData = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      name: "Player 1",
      currentHealth: 100,
      maxHealth: 100,
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      name: "Player 2",
      currentHealth: 100,
      maxHealth: 100,
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      name: "Player 3",
      currentHealth: 100,
      maxHealth: 100,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-slate-400">
        {/* Render list of events */}
        <div class="grid-container grid grid-cols-5">
          <div class="item1 col-span-4">
            <EventsList events={events} />
            <Roll />
          </div>
          <div class="item2 col-span-1 players m-4 font-bold p-4">
            <h1>Players:</h1>
            <PlayerList players={playersData} />
          </div>
        </div>

        {/* <Die game={id} /> */}
        {/* Render list of players */}
        {/* <PlayersList players={playersData} /> */}
      </div>
    </div>
  );
}