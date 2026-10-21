import axios from 'axios';
import { resolveImageUrl, onImageError } from "../../utils/image";
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { AllDiv, ImgDiv, InfoBottom, InfoDiv, InfoInner, InnerDiv, MyPageBtn, ProductImg, ProductTitle, ReservationNumberInner, ReservationsTitle, SubTitle, Title, TitleDiv } from './PaymentSuccessSt';
import { NewReservation, ProductDetail } from '../../types/type';
import { format } from 'date-fns';

export default function PaymentSuccess() {
  const [cookies] = useCookies(["token"]);
  const [searchParams] = useSearchParams();
  const pgToken = searchParams.get("pg_token");
  const tid = localStorage.getItem("tid");
  const orderId = localStorage.getItem("orderId");
  const userId = localStorage.getItem("userId");
  const Pid = localStorage.getItem("productId");
  const [productId, setProductId] = useState<number>();
  const [productData, setProductData] = useState<ProductDetail>();
  const [reservationData, setReservationData] = useState<NewReservation>();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (pgToken && tid) {
  
      axios.post(`http://localhost:4040/api/v1/kakaoPay/success`, {
        cid: "TC0ONETIME",
        tid: tid,
        partner_order_id: orderId,
        partner_user_id: userId,
        product_id: Pid,
        pg_token: pgToken
      }, {
        headers: { 
          Authorization: `Bearer ${cookies.token}`,
        }
      })
      .then(response => {
        setProductId(Number(response.data.data.item_code));
        localStorage.removeItem("tid");
        localStorage.removeItem("userId");
      })
      .catch(error => {
        console.error("결제 승인 실패:", error);
      });
    }
  }, []);


  useEffect(() => {
    if (!orderId) return;
    try {
      axios.get(`http://localhost:4040/api/v1/reservations/${orderId}`, {
        headers: {
          Authorization : `Bearer ${cookies.token}`
        }
      }).then((response) => {
        setReservationData(response.data.data);
        console.log(response.data.data);
      }).catch((error) => console.error("예약 정보 불러오기 실패:", error))
    } catch(error) {
      console.error("예약 정보 불러오기 실패:", error);
    }
  }, [])

  useEffect(() => {
    if (!productId) return;
    try {
      axios.get(`http://localhost:4040/api/v1/products/${productId}`)
      .then((response) => {
        setProductData(response.data.data);
      }).catch((error) => console.error("상품 정보 불러오기 실패:", error))
    } catch(error) {
      console.error(error);
    }
  }, [productId])

  if (!orderId) {
    return <Navigate to="/reservationCheck" replace />;
  }

  const dash = "-";
  const fmt = (d?: string | Date) => (d ? format(new Date(d), "yyyy-MM-dd") : dash);

  return (
    <AllDiv>
      <TitleDiv>
        <Title>결제가 완료되었어요</Title>
        <SubTitle>예약 내용은 마이페이지에서 언제든 확인할 수 있어요.</SubTitle>
      </TitleDiv>
      <InnerDiv>
        <ImgDiv>
          <ProductImg src={resolveImageUrl(productData?.productImages?.[0])} onError={onImageError} alt={productData?.productName ?? ""} />
        </ImgDiv>

        <InfoDiv>
          <InfoInner>
            <ProductTitle>{productData?.productName ?? "숙소 정보를 불러오는 중이에요"}</ProductTitle>
          </InfoInner>

          <InfoInner>
            <ReservationsTitle>예약 번호</ReservationsTitle>
            <ReservationNumberInner>{reservationData?.orderId ?? orderId}</ReservationNumberInner>
          </InfoInner>

          <InfoBottom>
            <div>
              <ReservationsTitle>체크인</ReservationsTitle>
              <ReservationNumberInner>{fmt(reservationData?.startDate)}</ReservationNumberInner>
            </div>
            <div>
              <ReservationsTitle>체크아웃</ReservationsTitle>
              <ReservationNumberInner>{fmt(reservationData?.endDate)}</ReservationNumberInner>
            </div>
            <div>
              <ReservationsTitle>인원</ReservationsTitle>
              <ReservationNumberInner>{reservationData?.person ? `${reservationData.person}명` : dash}</ReservationNumberInner>
            </div>
            <div>
              <ReservationsTitle>결제 금액</ReservationsTitle>
              <ReservationNumberInner>
                {reservationData?.totalPrice != null ? `${Number(reservationData.totalPrice).toLocaleString("ko-KR")}원` : dash}
              </ReservationNumberInner>
            </div>
          </InfoBottom>
        </InfoDiv>
      </InnerDiv>

      <MyPageBtn onClick={() => navigate("/reservationCheck")}>내 예약 확인</MyPageBtn>
    </AllDiv>
  );
}
