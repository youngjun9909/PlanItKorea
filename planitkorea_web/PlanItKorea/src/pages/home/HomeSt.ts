import styled from "styled-components";

export const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-top: 8px;
  @media (max-width: 640px) {
    gap: 40px;
  }
`;

// ----- 히어로 (계절 이미지) -----
export const Hero = styled.section`
  position: relative;
  height: 380px;
  margin-top: 8px;
  border-radius: var(--radius-hero);
  overflow: hidden;
  background: var(--brand-tint);
  @media (max-width: 640px) {
    height: 260px;
    border-radius: 20px;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 20, 40, 0) 35%, rgba(10, 20, 40, 0.62) 100%);
`;

export const HeroText = styled.div`
  position: absolute;
  left: 40px;
  bottom: 36px;
  right: 40px;
  color: #fff;
  @media (max-width: 640px) {
    left: 20px;
    bottom: 20px;
    right: 20px;
  }
`;

export const HeroTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.035em;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  @media (max-width: 640px) {
    font-size: 26px;
  }
`;

export const HeroSub = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  opacity: 0.95;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

// ----- 섹션 -----
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GroupLabel = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const GroupDesc = styled.p`
  margin: 4px 0 0;
  font-size: 15px;
  color: var(--ink-soft);
`;

// ----- 인기 여행지 -----
export const PopularCityBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  @media (max-width: 900px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 16px;
    margin: 0 -16px;
    padding: 0 16px 4px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const City = styled.button`
  position: relative;
  padding: 0;
  border: none;
  background: var(--brand-tint);
  border-radius: var(--radius-card);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4 / 5;
  text-align: left;
  @media (max-width: 900px) {
    flex: 0 0 150px;
    scroll-snap-align: start;
  }
  &:hover img {
    transform: scale(1.05);
  }
`;

export const CityImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
`;

export const CityShade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 20, 40, 0) 50%, rgba(10, 20, 40, 0.6) 100%);
  pointer-events: none;
`;

export const CityName = styled.span`
  position: absolute;
  left: 16px;
  bottom: 14px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

// ----- 인기 숙소 -----
export const MostUsedBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 24px 20px;
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 12px;
  }
`;

export const MostUsed = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-card);
  background: var(--brand-tint);
  display: block;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 2px;
`;

export const ProductName = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const CityWarp = styled.div``;

export const ProductCity = styled.span`
  font-size: 13px;
  color: var(--ink-mute);
`;

export const PriceDiv = styled.div`
  padding-top: 4px;
  font-size: 16px;
  font-weight: 800;
`;

export const EmptyNote = styled.p`
  margin: 0;
  padding: 40px 0;
  text-align: center;
  color: var(--ink-mute);
`;
