import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import debounce from "lodash.debounce";

import computerAddict from "./images/slider/computerAddict.svg";
import pornAddict from "./images/slider/pornAddict.svg";
import drugAddict from "./images/slider/drugAddict.svg";
import cigarette from "./images/slider/cigarette.svg";
import internet from "./images/slider/internet.svg";
import gambling from "./images/slider/gambling.svg";
import smartphone from "./images/slider/smartphone.svg";

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
        style={{ paddingBottom: "20px" }}
      >
        <li className="item">
          <img draggable="false" width="100px" height="100px" src={drugAddict} />
          <div className="space"></div>
          <div className="item-info">
            <div className="item-info-title">Наркозависимость</div>
            <div className="item-info-text">
              Зависимость от наркотиков вызывает сильное физическое и психическое привыкание, разрушает здоровье и социальные связи.
            </div>
          </div>
        </li>

        <li className="item">
          <img draggable="false" width="100px" height="100px" src={pornAddict} />
          <div className="space"></div>
          <div className="item-info">
            <div className="item-info-title">Порнозависимость</div>
            <div className="item-info-text">
              Чрезмерное потребление порно может нарушать реальную интимную жизнь и вызывать психологические проблемы.
            </div>
          </div>
        </li>

        <li className="item">
          <img draggable="false" width="100px" height="100px" src={computerAddict} />
          <div className="space"></div>
          <div className="item-info">
            <div className="item-info-title">Компьютерная зависимость</div>
            <div className="item-info-text">
              Чрезмерное использование компьютера может привести к проблемам со здоровьем и социальной изоляции.
            </div>
          </div>
        </li>

        <li className="item">
          <img draggable="false" width="100px" height="100px" src={cigarette} />
          <div className="space"></div>
          <div className="item-info">
            <div className="item-info-title">Никотиновая зависимость</div>
            <div className="item-info-text">
              Зависимость от никотина вызывает серьёзные заболевания дыхательной и сердечно-сосудистой систем.
            </div>
          </div>
        </li>

        <li className="item">
          <img draggable="false" width="100px" height="100px" src={internet} />
          <div className="space"></div>
          <div className="item-info">
            <div className="item-info-title">Интернет-зависимость</div>
            <div className="item-info-text">
              Неконтролируемое использование интернета может привести к проблемам с реальной социальной жизнью и работоспособностью.
            </div>
          </div>
        </li>

        <li className="item">
          <img draggable="false" width="100px" height="100px" src={gambling} />
          <div className="space"></div>
          <div className="item-info">
            <div className="item-info-title">Лудомания</div>
            <div className="item-info-text">
              Зависимость от азартных игр ведёт к финансовым проблемам и разрушению личных отношений.
            </div>
          </div>
        </li>

        <li className="item">
          <img draggable="false" width="120px" height="120px" src={smartphone} />
          <div className="space"></div>
          <div className="item-info">
            <div className="item-info-title">Номофобия</div>
            <div className="item-info-text">
              Страх остаться без мобильного телефона вызывает беспокойство и стресс.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ScrollableContainer;
