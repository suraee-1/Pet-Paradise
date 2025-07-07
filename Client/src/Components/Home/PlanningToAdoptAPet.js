import React from 'react';
import Card from "./Card";

const PlanningToAdoptAPet = () => {
  return (
    <div className='planning-container'>
        <h1>Planning to Adopt a Pet?</h1>
        <div className='boxes-container'>
            <Card title=" Finding Love, One Paw at a Time" description="Welcoming a pet into your life is a beautiful journey — one that brings joy, love, and a lifelong bond not just for you, but for the furry friend who finally finds a home. There’s something truly special about the magic of adoption."/>
            <Card title="Your Journey to Pet Adoption" description="Thinking about adding a furry friend to your family? Adopting a pet is a beautiful way to do it! Finding the perfect companion takes some thought and planning, but the love, joy, and lifelong bond you’ll gain make it all worth it." />
            <Card title="The Soothing Presence of Pets" description="Animals have a remarkable way of enriching our lives — not just as companions, but as healing presences that can uplift our minds, bodies, and hearts in powerful ways."/>
        </div>
    </div>
  )
}

export default PlanningToAdoptAPet;