import React, { useEffect } from 'react';
import Img from '../../global/img';
import './style.css';

export default function Index() {
  useEffect(() => {
    const container = document.querySelector('.cards-one-container');
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isMouseDown = false;
    });

    container.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    container.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * .5; // Adjust the scrolling speed if needed
      container.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <>
      <div className="frow">
        <h1>NEW GAMES</h1>
        <section className="cards-one-container">
          <div className="cards-father card-1">
            <Img src="../../../assets/images/MadOfWar/God-of-war-ragnarok--removebg-preview 1.png" />
            <Img src="../../../assets/images/MadOfWar/51439937017_28a550e739_k-removebg-preview 1.png" />
            <p>
              Join in the new DLC with Kratos to learn more about him and his future.
            </p>
          </div>
          <div className="cards-father card-2">
            <Img src="../../../assets/images/SuperMan/Suicidesquadteaser 1.png" />
            <h3>Be part of the Suicide Squad<br />and kill the Justice League!<br />-Amanda Waller</h3>
          </div>
          <div className="cards-father card-3">
            <Img src="../../../assets/images/SpiderMan/f2016467115dbcad82af2044b0129220.png" />
            <Img src="../../../assets/images/SpiderMan/HD-wallpaper-miles-morales-ps5-spiderman-watch-removebg-preview 1 (3).png" alt="" />
            <h3>Miles Morales discovers powers<br />from his mentor, Peter Parker.<br />Master his unique, bio-electric<br />venom blast attacks.</h3>
          </div>
        </section>
      </div>
    </>
  );
}