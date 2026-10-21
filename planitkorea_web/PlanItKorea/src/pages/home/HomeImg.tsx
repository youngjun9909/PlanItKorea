import React from "react";
import springImg from "../../assets/images/mainImg/spring.jpg";
import summerImg from "../../assets/images/mainImg/summer.jpg";
import fallImg from "../../assets/images/mainImg/fall.jpg";
import winterImg from "../../assets/images/mainImg/winter.jpg";
import { Hero, HeroShade, HeroSub, HeroText, HeroTitle, MainImg } from "./HomeSt";

type Season = "spring" | "summer" | "fall" | "winter";

function getSeason(date: Date): Season {
  const month = date.getMonth();
  if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 10) {
    return "fall";
  } else {
    return "winter";
  }
}

const images: { [key in Season]: string } = {
  spring: springImg,
  summer: summerImg,
  fall: fallImg,
  winter: winterImg,
};

const seasonName: { [key in Season]: string } = {
  spring: "봄",
  summer: "여름",
  fall: "가을",
  winter: "겨울",
};

export default function HomeImg() {
  const currentSeason = getSeason(new Date());
  return (
    <Hero>
      <MainImg src={images[currentSeason]} alt={`${seasonName[currentSeason]} 풍경`} />
      <HeroShade />
      <HeroText>
        <HeroTitle>이번 {seasonName[currentSeason]}, 어디로 떠나볼까요?</HeroTitle>
        <HeroSub>지역, 날짜, 인원만 고르면 바로 예약할 수 있어요.</HeroSub>
      </HeroText>
    </Hero>
  );
}
