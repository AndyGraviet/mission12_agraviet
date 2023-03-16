import React from "react";
import "./App.css";
import Card from "./components/card";
import Nav from "./components/nav";
import teams from "./data/CollegeBasketballTeams.json";

export default function App() {
  const allTeams = teams.teams;

  return (
    <div>
      <Nav />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            This is a bunch of basketball teams
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Below you can find a bunch of basketball teams on custom react cards
          </p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {allTeams.map((team) => (
              <Card school={team.school} name={team.name} city={team.city} state={team.state}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
