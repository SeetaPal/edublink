import React from "react";
import "./Event1.css";

const events = [
  {
    id: 1,
    time: "8 AM - 9 PM",
    title: "Creative Teaching Seminar Master Class",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor...",
    location: "Ontario City, Canada",
    date: "18",
    month: "Dec",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
  },
  {
    id: 2,
    time: "10 AM - 2 PM",
    title: "Business Growth Workshop",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor...",
    location: "New York, USA",
    date: "05",
    month: "Jan",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    id: 3,
    time: "9 AM - 12 PM",
    title: "UI/UX Design Bootcamp",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    location: "London, UK",
    date: "22",
    month: "Feb",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    id: 4,
    time: "11 AM - 4 PM",
    title: "React Masterclass",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    location: "Berlin, Germany",
    date: "10",
    month: "Mar",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 5,
    time: "2 PM - 6 PM",
    title: "AI & Future Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    location: "Dubai, UAE",
    date: "15",
    month: "Apr",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    id: 6,
    time: "7 AM - 10 AM",
    title: "Startup Networking",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    location: "Mumbai, India",
    date: "28",
    month: "May",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  }
];

const Event1 = () => {
  return (
    <div className="event-page">

      {/* Banner */}
      <div className="banner">
        <h1>Events</h1>
        <p>Home &gt; Events</p>
      </div>

      {/* Heading */}
      <div className="event-header">
        <h2>EVENTS</h2>
        <div className="title-row">
          <h3>Popular Events</h3>
          <span className="arrow">→</span>
        </div>
      </div>

      {/* Cards */}
      <div className="event-grid">
        {events.map((item) => (
          <div className="card" key={item.id}>

            <div className="image-box">
              <img src={item.img} alt="event" />

              <div className="time-box">{item.time}</div>

              <div className="date-circle">
                <span>{item.date}</span>
                <small>{item.month}</small>
              </div>

              {/* NEW BUTTON INSIDE IMAGE */}
            </div>



            <div className="card-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              <div className="location">
                📍 {item.location}
              </div>

              {/* Button (hidden by default) */}
              <button className="join-btn">Learn More →</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Event1;