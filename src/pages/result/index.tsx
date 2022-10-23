import { Component, useEffect, useMemo, useState } from "react";
import { HistoryCard } from "@/components/Flow/HistoryCard";
import { useQueryUser } from "@/utils/hooks/useQueryUser";
import Taro, { useRouter } from "@tarojs/taro";

const Index = () => {
  const router = useRouter();
  const id = useMemo(() => router.params.id, [router]);
  const [answer, setAnswer] = useState({});
  useEffect(() => {
    if (!id) {
      return;
    }
    Taro.request({
      url: `http://localhost:3000/api/wechat/answer?id=${id}`,
      method: "GET"
    }).then(({ data }) => {
      const resultList = JSON.parse(data.answer.questionaire.result);
      const currentResult = resultList.find(
        item => item.code === data.answer.result
      );
      setAnswer({ ...data.answer, currentResult });
    });
  }, [id]);

  console.log("answer", answer);

  if (!answer?.schedule || !answer.questionaire) {
    return null;
  }

  return (
    <div className="page space-y-6">
      <div className="at-article">
        <div className="at-article__h1">{answer.schedule.name}</div>
        <div className="at-article__h2">{answer.questionaire.name}</div>
        <div className="at-article__h3">
          结果：{answer.currentResult.title}
        </div>
        <div className="at-article__p">{answer.currentResult.description}</div>
      </div>
    </div>
  );
};

export default Index;
