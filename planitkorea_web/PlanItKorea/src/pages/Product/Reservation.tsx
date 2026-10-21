import React, {
  useEffect,
  useState,
} from "react";
import { ProductDetail, SubProduct } from "../../types/type";
import {
  PersonDiv,
  PersonInput,
  PriceBar,
  ReservationBar,
  ReservationBarDiv,
  SelectInfo,
  BarTitle,
  FieldLabel,
  DateRow,
} from "./DetailSt";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faWonSign } from "@fortawesome/free-solid-svg-icons";
import { GroupLine } from "../CustomerService/customerSt";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/date.css";

interface ReservationProps {
  product: ProductDetail;
  selectSubProduct?: SubProduct;
  startDateProp?: Date;
  endDateProp?: Date;
  personProp?: number;
  handlePersonChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Reservation({
  product,
  selectSubProduct,
  startDateProp,
  endDateProp,
  personProp,
  handlePersonChange,
}: ReservationProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(startDateProp);
  const [endDate, setEndDate] = useState<Date | undefined>(endDateProp);
  const [person, setPerson] = useState<number>(personProp || 1);
  const [availableSubProducts, setAvailableSubProducts] = useState<SubProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>("0");

  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const navigate = useNavigate();

  const today = new Date();

  useEffect(() => {
    if (!selectSubProduct || !selectSubProduct.subPrice) {
      setTotalPrice("0");
      return;
    }

    const days  = calculateDays();
    const subProductPrice = strToNum(selectSubProduct?.subPrice);
    setTotalPrice(numPriceToStr(subProductPrice * days));
  }, [startDate, endDate, selectSubProduct]);

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    return Math.max(
      Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)),
      1
    );
  };

  function strToNum(str: string): number {
    return parseInt(str.replace(/[^0-9]/g, ""), 10);
  }

  function numPriceToStr(num: number): string {
    return num.toLocaleString("ko-KR");
  }

  const reservationSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!token) {
      alert("로그인 후 예약이 가능합니다.");
      return;
    }

    const reservationInfo = {
      productId: product.productId,
      subProductId: selectSubProduct?.subProductId,
      productName: product.productName,
      img: Array.isArray(product.productImages)
        ? product.productImages
        : [product.productImages || ""],
      startDate: startDate ? startDate.toISOString() : "",
      endDate: endDate ? endDate.toISOString() : "",
      person,
      price: strToNum(totalPrice),
    };
    navigate("/paymentPage", { state: { reservationInfo } });
  };

  useEffect(() => {
    if (product.subProducts) {
      setAvailableSubProducts(
        product.subProducts.filter((sub) => sub.subPerson >= person)
      );
    }
  }, [person, product.subProducts]);

  return (
    <ReservationBarDiv>
      <ReservationBar>
        <BarTitle>예약 정보</BarTitle>
        <FieldLabel>체크인 · 체크아웃</FieldLabel>
        <DateRow>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date || undefined)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="체크인"
            isClearable={false}
            minDate={today}
          />
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date || undefined)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || today}
            placeholderText="체크아웃"
          />
        </DateRow>
        <FieldLabel>인원</FieldLabel>
        <PersonDiv>
          <PersonInput
            type="number"
            value={person}
            placeholder="인원 수"
            aria-label="인원 수"
            onChange={(e) => {
              const newPerson = Number(e.target.value) || 1;
              setPerson(newPerson);
              handlePersonChange(e);
            }}
            min={1}
          ></PersonInput>
        </PersonDiv>
        <SelectInfo>
          <FontAwesomeIcon
            icon={faCalendar}
            style={{ margin: "0 7px 0 6px" }}
          />
          {startDate && endDate
            ? `${calculateDays()}박 ${calculateDays() + 1}일`
            : "날짜를 선택해주세요"}
        </SelectInfo>
        <SelectInfo>
          <span>객실</span> <b>{selectSubProduct?.subName ?? "객실을 선택해주세요"}</b>
        </SelectInfo>
        <GroupLine style={{ marginBottom: "5px" }} />
        <PriceBar>
          <div>총 합계</div>
          <div>
            <FontAwesomeIcon style={{ margin: "0 5px" }} icon={faWonSign} />
            {strToNum(totalPrice).toLocaleString("ko-KR")}
          </div>
        </PriceBar>
        <Button variant="contained" disableElevation sx={{ width: "100%", borderRadius: "12px", py: 1.4, fontWeight: 700, mt: 1 }} onClick={reservationSubmit}>
          예약 하기
        </Button>
      </ReservationBar>
    </ReservationBarDiv>
  );
}
