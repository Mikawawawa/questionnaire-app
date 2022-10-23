import Taro from "@tarojs/taro";
import React from "react";
import { Chip } from "./Chip";

export const HistoryCard = ({ schedule, questionaire, ...props }) => {
  return (
    <div
      className='flex justify-center m-4'
      onClick={() => {
        Taro.navigateTo({
          url: `/pages/result/index?id=${props.id}`
        });
      }}
    >
      <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
        <div className='p-3 flex flex-col justify-start'>
          <div
            className='text-xl font-bold mb-2 '
            style={{
              color: "#2C5378",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "flex-start"
            }}
          >
            {schedule.name}
            <Chip>{props.result}</Chip>
          </div>
          <p
            className='text-gray-700 text-base mb-4'
            style={{
              lineHeight: 1.8
            }}
          >
            {schedule.description}
          </p>
          <p className='text-gray-600 text-xs'>
            {new Date(props.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};
