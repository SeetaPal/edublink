
import React, { useEffect, useState } from "react";
import "./ComingSoon.css";

// 🎯 FIXED TARGET DATE (set once, not inside function)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 12);

function ComingSoon() {

const getTimeLeft = () => {
const difference = targetDate - new Date();

let timeLeft = {
days: 0,
hours: 0,
minutes: 0,
seconds: 0
};

if (difference > 0) {
timeLeft = {
days: Math.floor(difference / (1000 * 60 * 60 * 24)),
hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
minutes: Math.floor((difference / 1000 / 60) % 60),
seconds: Math.floor((difference / 1000) % 60)
};
}

return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(getTimeLeft());

useEffect(() => {
const timer = setInterval(() => {
setTimeLeft(getTimeLeft());
}, 1000);

return () => clearInterval(timer);
}, []);

return (
<section className="coming-section">

<div className="coming-box">

<h1>Coming Soon</h1>

{/* COUNTDOWN */}
<div className="countdown">

<div>
<h2>{timeLeft.days}</h2>
<span>Days</span>
</div>

<div>
<h2>{timeLeft.hours}</h2>
<span>Hours</span>
</div>

<div>
<h2>{timeLeft.minutes}</h2>
<span>Minutes</span>
</div>

<div>
<h2>{timeLeft.seconds}</h2>
<span>Seconds</span>
</div>

</div>

{/* EMAIL */}
<div className="subscribe">

<input type="email" placeholder="Enter your email" />

<button>Subscribe →</button>

</div>

</div>

</section>
);
}

export default ComingSoon;