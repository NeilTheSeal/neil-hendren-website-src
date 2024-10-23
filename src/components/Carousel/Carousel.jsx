import { useState } from "react";
import "./Carousel.css";

export default function Carousel(params) {
  const posts = params.params.map((item, index) => {
    return (
      <div key={index} className="carousel-item">
        <a className="carousel-link" href={item.href}>
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
        </a>
      </div>
    );
  });

  const [images, setImages] = useState(posts);

  const switchPost = (direction) => {
    const blogCarouselInner = document.getElementById("blog-carousel-inner");

    if (direction === 1) {
      if (blogCarouselInner.style.transform === "translateX(-100%)") {
        const newImages = images.slice(1);
        const firstImage = images[0];
        newImages.push(firstImage);
        setImages(newImages);
      }
      blogCarouselInner.style.transition = "none";
      blogCarouselInner.style.transform = `translateX(0%)`;
      setTimeout(() => {
        blogCarouselInner.style.transition = "transform 0.4s ease-in-out";
        blogCarouselInner.style.transform = `translateX(-100%)`;
      }, 0);
    } else {
      if (blogCarouselInner.style.transform === "translateX(0%)") {
        const newImages = images.slice(0, images.length - 1);
        const lastImage = images[images.length - 1];
        newImages.unshift(lastImage);
        setImages(newImages);
      }
      blogCarouselInner.style.transition = "none";
      blogCarouselInner.style.transform = `translateX(-100%)`;
      setTimeout(() => {
        blogCarouselInner.style.transition = "transform 0.4s ease-in-out";
        blogCarouselInner.style.transform = `translateX(0%)`;
      }, 0);
    }
  };

  return (
    <div className="carousel">
      <div id="blog-carousel-inner" className="carousel-inner">
        {images}
      </div>
      <div
        id="blog-nav-left"
        onClick={() => {
          switchPost(-1);
        }}
      >
        {"<"}
      </div>
      <div
        id="blog-nav-right"
        onClick={() => {
          switchPost(1);
        }}
      >
        {">"}
      </div>
    </div>
  );
}
