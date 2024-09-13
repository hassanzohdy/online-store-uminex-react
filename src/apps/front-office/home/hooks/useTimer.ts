import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const startNewCountdown = () => {
      const targetTime = new Date();
      targetTime.setHours(targetTime.getHours() + 1);
      return targetTime;
    };

    let targetTime = startNewCountdown();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
      const hours = Math.floor(
        ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * 3,
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        targetTime = startNewCountdown();
      } else {
        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return { timeLeft };
};
