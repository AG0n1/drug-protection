import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import debounce from "lodash.debounce";

import computerAddict from "./images/slider/computerAddict.svg"
import pornAddict from "./images/slider/pornAddict.svg"
import drugAddict from "./images/slider/drugAddict.svg"
import cigarette from "./images/slider/cigarette.svg"
import internet from "./images/slider/internet.svg"
import gambling from "./images/slider/gambling.svg"
import smartpnone from "./images/slider/smartphone.svg"

const ScrollableContainer = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef(null);

  const checkForScrollPosition = () => {
    const { current } = containerRef;
    if (current) {
      const { scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const distance = x - startX;
    containerRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const { current } = containerRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, []);

  return (
    <div
      className="scrollableContainer"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <ul 
        className="list" 
        ref={containerRef}
        style={{paddingBottom: "20px"}}
    >
        
        <li className="item">
            <img draggable="false" width="100px" height="100px" src={drugAddict} />

          <div className="space">

          </div>
          <div className="item-info">
            <div className="item-info-title">
              Наркозависимость
            </div>

            <div className="item-info-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officiis, deserunt neque, doloremque cupiditate nam voluptatem accusamus...
            </div>
          </div>
        </li>

        
        <li className="item">
            <img draggable="false" width="100px" height="100px" src={pornAddict} />

          <div className="space">

          </div>
          <div className="item-info">
            <div className="item-info-title">
              Порнозависимость
            </div>

            <div className="item-info-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officiis, deserunt neque, doloremque cupiditate nam voluptatem accusamus...
            </div>
          </div>
        </li>

        
        <li className="item">
          <img draggable="false" width="100px" height="100px" src={computerAddict} />
          <div className="space">

          </div>
          <div className="item-info">
            <div className="item-info-title">
              Компьютерная зависимость
            </div>

            <div className="item-info-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officiis, deserunt neque, doloremque cupiditate nam voluptatem accusamus...
            </div>
          </div>
        </li>

        
        <li className="item">
            <img draggable="false" width="100px" height="100px" src={cigarette} />
          <div className="space">

          </div>
          <div className="item-info">
            <div className="item-info-title">
              Никотиновая зависимость
            </div>

            <div className="item-info-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officiis, deserunt neque, doloremque cupiditate nam voluptatem accusamus...
            </div>
          </div>
        </li>

        
        <li className="item">
          <img draggable="false" width="100px" height="100px" src={internet} />
          <div className="space">

          </div>
          <div className="item-info">
            <div className="item-info-title">
              Интернет-зависимость
            </div>

            <div className="item-info-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officiis, deserunt neque, doloremque cupiditate nam voluptatem accusamus...
            </div>
          </div>
        </li>

        
        <li className="item">
        <img draggable="false" width="100px" height="100px" src={gambling} />

          <div className="space">

          </div>
          <div className="item-info">
            <div className="item-info-title">
              Лудомания
            </div>

            <div className="item-info-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officiis, deserunt neque, doloremque cupiditate nam voluptatem accusamus...
            </div>
          </div>
        </li>

        
        <li className="item">
          <img draggable="false" width="120px" height="120px" src={smartpnone} />

          <div className="space">

          </div>
          <div className="item-info">
            <div className="item-info-title">
              Номофобия
            </div>

            <div className="item-info-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officiis, deserunt neque, doloremque cupiditate nam voluptatem accusamus...
            </div>
          </div>
        </li>

        
      </ul>
    </div>
  );
};

export default ScrollableContainer;
