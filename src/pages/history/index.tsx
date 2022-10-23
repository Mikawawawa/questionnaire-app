import { Component, useEffect, useState } from "react";
import { HistoryCard } from "@/components/Flow/HistoryCard";
import { useQueryUser } from "@/utils/hooks/useQueryUser";
import Taro from "@tarojs/taro";

const Index = () => {
  useQueryUser();
  const [history, setHistory] = useState([]);
  useEffect(() => {
    Taro.request({
      url: "http://localhost:3000/api/wechat/answerList"
    }).then(({ data }) => {
      console.log(data.answerList);
      if (Array.isArray(data.answerList)) {
        setHistory(data.answerList);
      }
    });
  }, []);

  return (
    <div className="page space-y-6">
      {history.map(item => (
        <HistoryCard {...item} />
      ))}
    </div>
  );
};

export default Index;
