import React from "react";
import BoardList from "../../component/BoardList";

export default function Notification() {
  return <BoardList boardType="공지사항" emptyText="등록된 공지사항이 없어요." />;
}
