import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./style.css";

function Index() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "http://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing: ${nameToDelete}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
                <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Index;
