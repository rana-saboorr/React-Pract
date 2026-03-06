import React, { useState } from "react";
import MenuCard from '../Components/MenuCard';
import Popup from "../Components/Popup";

function Events() {
  const [activeEvent, setActiveEvent] = useState(null);

  const eventData = {
    "Grand Opening": [
      "Ribbon Cutting Ceremony",
      "Live Music",
      "Special Offers",
      "Media Coverage"
    ],
    Birthday: [
      "Customized Cake",
      "Decorations",
      "Party Games",
      "Photography"
    ],
    "Baat Pakki": [
      "Traditional Setup",
      "Family Gathering",
      "Refreshments",
      "Cultural Performances"
    ],
    Nikkah: [
      "Elegant Venue Setup",
      "Catering Service",
      "Photography & Videography",
      "Custom Invitations"
    ],
    "Private Events": [
      "Birthday Celebrations",
      "Anniversary Parties",
      "Family Gatherings",
      "Themed Parties"
    ],
    "Corporate Meetings": [
      "Conference Room Setup",
      "Projector & AV Equipment",
      "Catering Options",
      "Team Building Activities"
    ],
  };

  return (
    <>
     
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-yellow-300 text-[80px] font-bold">Our Events</h2>
          <h2 className="text-white text-[60px] font-bold">CELEBRATIONS & SERVICES</h2>
        </div>
      </section>

     
      <section className="min-h-screen flex flex-col items-center justify-center p-20">
        <h2 className="text-yellow-300 text-[70px] font-extrabold mb-4 text-center">
           Select Your Event
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-bold text-yellow-300 text-[30px]">
          {Object.keys(eventData).map((event) => (
            <MenuCard
              key={event}
              title={event}
              onClick={() => setActiveEvent(event)}
            />
          ))}
        </ul>
      </section>

     
      {activeEvent && (
        <Popup
          title={activeEvent}
          items={eventData[activeEvent]}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </>
  );
}

export default Events;
