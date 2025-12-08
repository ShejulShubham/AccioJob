import { useState } from "react";

import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";
import RecipesList from "../components/RecipesList";

export default function Home() {
  const [activeMood, setActiveMood] = useState("");

  function changeMood(mood) {
    setActiveMood(mood);
  }

  return (
    <div className="container">
      <Header />

      {/* Mood Selection Component */}
      <MoodSelector activeMood={activeMood} handleActiveMood={changeMood} />

      {/* Recipes List Component */}
      <RecipesList activeMood={activeMood}/>
    </div>
  );
}
