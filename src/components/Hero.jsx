import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://res.cloudinary.com/dicvjx88i/image/upload/v1775430151/brewtiful_day_banner_image_1_qvs18j.jpg",
  "https://res.cloudinary.com/dicvjx88i/image/upload/v1775430151/brewtiful_day_banner_image_3_dpynhv.jpg",
  "https://res.cloudinary.com/dicvjx88i/image/upload/v1775430151/brewtiful_day_banner_image_2_w2eyvh.jpg",
];

const SLIDE_INTERVAL_MS = 5500;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hero">
      <div className="hero-image" aria-hidden="true">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={
              i === activeIndex
                ? "hero-image-slide hero-image-slide--active"
                : "hero-image-slide"
            }
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-text">
        <h1>Brewtiful Day</h1>
        <p>Brewing up sunshine, one cup at a time.</p>
      </div>
    </div>
  );
};

export default Hero;
