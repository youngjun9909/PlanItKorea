import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { resolveImageUrl, onImageError } from "../../utils/image";
import { Top5Product } from "../../types/type";
import HomeImg from "./HomeImg";
import {
  City,
  CityImg,
  CityName,
  CityShade,
  CityWarp,
  EmptyNote,
  GroupDesc,
  GroupLabel,
  HomeBox,
  MostUsed,
  MostUsedBox,
  PopularCityBox,
  PriceDiv,
  ProductCity,
  ProductDetail,
  ProductImg,
  ProductName,
  Section,
} from "./HomeSt";
import busan from "../../assets/images/region/busan.jpg";
import gapyeong from "../../assets/images/region/gapyeong.jpg";
import gyengju from "../../assets/images/region/gyengju.jpg";
import jeju from "../../assets/images/region/jeju.jpg";
import seoul from "../../assets/images/region/seoul.jpg";

const popularCities = [
  { name: "제주도", img: jeju },
  { name: "서울", img: seoul },
  { name: "부산", img: busan },
  { name: "가평", img: gapyeong },
  { name: "경주", img: gyengju },
];

export default function Home() {
  const [products, setProducts] = useState<Top5Product[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4040/api/v1/products/top5`)
      .then((response) => setProducts(response.data.data || []))
      .catch((error) => console.error(error))
      .finally(() => setLoaded(true));
  }, []);

  const handleProductClick = (productId: number) => {
    navigate(`/detailProduct/${productId}`);
    window.scrollTo(0, 0);
  };

  const handleCityClick = (cityName: string) => {
    navigate(`/allProductPage?cityName=${encodeURIComponent(cityName)}`);
  };

  return (
    <HomeBox>
      <HomeImg />

      <Section>
        <div>
          <GroupLabel>국내 인기 여행지</GroupLabel>
          <GroupDesc>가장 많이 찾는 지역에서 숙소를 둘러보세요.</GroupDesc>
        </div>
        <PopularCityBox>
          {popularCities.map((city) => (
            <City key={city.name} onClick={() => handleCityClick(city.name)}>
              <CityImg src={city.img} alt="" />
              <CityShade />
              <CityName>{city.name}</CityName>
            </City>
          ))}
        </PopularCityBox>
      </Section>

      <Section>
        <div>
          <GroupLabel>인기 숙소</GroupLabel>
          <GroupDesc>찜이 많은 순서로 보여드려요.</GroupDesc>
        </div>
        {loaded && products.length === 0 ? (
          <EmptyNote>아직 등록된 숙소가 없어요.</EmptyNote>
        ) : (
          <MostUsedBox>
            {products.map((product) => (
              <MostUsed key={product.productId} onClick={() => handleProductClick(product.productId)}>
                <ProductImg
                  src={resolveImageUrl(product.productImage)}
                  onError={onImageError}
                  alt={product.productName}
                />
                <ProductDetail>
                  <CityWarp>
                    <ProductCity>
                      {product.productRegion} · {product.productCategory}
                    </ProductCity>
                  </CityWarp>
                  <ProductName>{product.productName}</ProductName>
                  <PriceDiv>{product.productPrice}원</PriceDiv>
                </ProductDetail>
              </MostUsed>
            ))}
          </MostUsedBox>
        )}
      </Section>
    </HomeBox>
  );
}
