import { useCallback, useEffect, useMemo, useState } from "react";
import LazySwiper, { useLazySwiper } from "taro-lazy-swiper";
import { View } from "@tarojs/components";
import {
  ActionButton,
  PrimaryButton
} from "@/components/Questionnaire/actions";
import { HistoryCard } from "@/components/Flow/HistoryCard";
import "./index.css";
import AnswerForm from "@/components/answerForm";
import Taro, { useRouter } from "@tarojs/taro";

export default props => {
  const [lazySwiper] = useLazySwiper();
  const router = useRouter();
  const code = useMemo(() => router.params.code, [router]);

  const [loading, setLoading] = useState(false);
  const [questionaire, setQuestionaire] = useState<any>([]);
  const [schedule, setSchedule] = useState<any>();

  const [begin, setBegin] = useState(false);

  const [active, setActive] = useState(0);

  const [answer, setAnswer] = useState<any>([]);

  const handleSubmit = useCallback(
    async (answerData: any) => {
      const res =await Taro.request({
        url: "http://localhost:3000/api/wechat/answer",
        method: "POST",
        data: {
          raw: JSON.stringify(answerData),
          scheduleId: schedule?.id
        }
      });
      console.log("res", res);
      Taro.navigateTo({
        url: `/pages/result/index?id=${res.data.answer.id}`
      });
    },
    [schedule]
  );

  useEffect(() => {
    if (code !== undefined) {
      setLoading(true);
      Taro.request({
        url: "http://192.168.2.228:3000/api/wechat/schedule",
        data: {
          code
        }
      })
        .then(res => {
          const { questionaire: ques, ...rest } = res.data;
          const content = JSON.parse(ques.content);
          setQuestionaire(
            [
              { type: "cover" },
              ...content,
              { type: "end" }
            ].map((item, index) => ({ ...item, index: +index }))
          );
          setSchedule(rest);
          setAnswer(Array(content.length).fill(undefined));
        })
        .finally(() => setLoading(false));
    }
  }, [code]);

  return (
    <View className="page">
      <div
        style={{
          flex: 1
        }}
      >
        <LazySwiper
          lazySwiper={lazySwiper}
          dataSource={questionaire}
          style={{
            height: "100%"
          }}
          keyExtractor={data => data.index}
          renderContent={(data, extra) => {
            const { isActive } = extra;
            if (isActive) {
              setActive(+extra.key);
            }
            if (data.type === "cover") {
              // setBegin(!isActive);

              return (
                <div
                  style={{
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}
                >
                  <div className="at-article">
                    <div className="at-article__h1">{schedule.name}</div>

                    <div className="at-article__info" style={{
                      whiteSpace: "pre-line"
                    }}>
                      {schedule.description}
                    </div>

                    <div
                      style={{
                        marginTop: "12px"
                      }}
                    >
                      <ActionButton
                        onClick={() => {
                          lazySwiper.toSection(1);
                        }}
                      >
                        开始吧
                      </ActionButton>
                    </div>
                  </div>
                </div>
              );
            } else if (data.type === "end") {
              return (
                <div
                  style={{
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}
                >
                  <div className="at-article">
                    <div className="at-article__h1">{schedule.name}</div>

                    <div className="at-article__info">
                      问卷填写完成，请检查后提交
                    </div>

                    <div
                      style={{
                        marginTop: "12px"
                      }}
                    >
                      <ActionButton
                        onClick={() => {
                          handleSubmit(answer);
                        }}
                      >
                        提交
                      </ActionButton>

                      <PrimaryButton
                        onClick={() => {
                          lazySwiper.toSection(1);
                        }}
                      >
                        回到第一题
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="item m-4" key={extra.key}>
                  <AnswerForm
                    question={data}
                    data={answer[+extra.key - 1]}
                    onChange={value => {
                      const newAnswer = [...answer];
                      newAnswer[+extra.key - 1] = value;
                      setAnswer(newAnswer);
                    }}
                  >
                    <div className="fixed-bar">
                      <ActionButton
                        formType="submit"
                        onClick={() => lazySwiper.prevSection()}
                        disabled={active <= 1}
                      >
                        上一个
                      </ActionButton>
                      <ActionButton
                        formType="submit"
                        onClick={() => lazySwiper.nextSection()}
                      >
                        下一个
                      </ActionButton>
                      {/* <ActionButton
                        formType="submit"
                        onClick={() => lazySwiper.toSection(1)}
                      >
                        回到头
                      </ActionButton> */}
                    </div>
                  </AnswerForm>
                </div>
              );
            }
          }}
        />
      </div>
      {/* {begin && (
        <div className="fixed-bar">
          <ActionButton
            onClick={() => lazySwiper.prevSection()}
            disabled={active <= 1}
          >
            上一个
          </ActionButton>
          <ActionButton onClick={() => lazySwiper.nextSection()}>
            下一个
          </ActionButton>
          <ActionButton onClick={() => lazySwiper.toSection(1)}>
            回到头
          </ActionButton>
        </div>
      )} */}
    </View>
  );
};
