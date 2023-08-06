import styled from 'styled-components';

export const CardBig = styled.div`
  width: 600px;
  margin-left: 6px;
  border-radius: 50px;
  height: 310px;
  transition: transform 0.3s ease;
`;

export const Card1 = styled(CardBig)`
  background: url("../../../assets/images/MadOfWar/ofWars.png");
`;

export const Card2 = styled(CardBig)`
  background: url("../../../assets/images/spider-super.png");
  position: relative;
  transition: 0.4s ease-in-out all;

  &:hover img {
    transform: scale(1.2);
    transition: 0.4s ease-in-out all;
  }
`;

export const Card3 = styled(CardBig)`
  background: url("../../../assets/images/SpiderMan/Rectangle 4.png");
  position: relative;
  transition: 0.4s ease-in-out all;

  img {
    position: absolute;
    overflow: hidden;
  }

  img:nth-child(1) {
    top: 2rem;
    left: -5rem;
    width: 30rem;
  }

  img:nth-child(2) {
    top: -4.5rem;
    right: 0rem;
    width: 20rem;
    transition: 0.5s ease-in-out all;
  }

  &:hover img:nth-child(2) {
    transform: scale(1.2);
    transition: 0.5s ease-in-out all;
  }

  p {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    line-height: 1.4;
  }
`;