import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



const items = [
  {
    src: './assets/images/foodpic-4.jpeg',
    altText: 'Slide 1',
    head:'Let us do the work for you:',
    caption: ' Be cozy and spend some extra time with your family'
  },
  {
    src: './assets/images/foodpic-5.jpeg',
    altText: 'Slide 2',
    head:'Enter your Zipcode:',
    caption: 'And we will show you all the nearest drivers.'
  },
  {
    src: './assets/images/zipcode2.png',
    altText: 'Slide 3',
    head:'Choose the driver:',
    caption: 'And we will deliver your food as soon as possible.'
  }
];

const Slidebar = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption  captionText={item.caption} captionHeader={item.head} />
       </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
  </Carousel>
  );
}

export default Slidebar;