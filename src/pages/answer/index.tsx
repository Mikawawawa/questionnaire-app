import LazySwiper, { useLazySwiper } from 'taro-lazy-swiper'
import { View } from '@tarojs/components'
import { ActionButton } from '@/components/Questionnaire/actions'
import { HistoryCard } from '@/components/Flow/HistoryCard'
import './index.css'

const dataSource = Array(10)
  .fill(0)
  .map((_, i) => {
    return { data: i + 1 }
  })

export default () => {
  const [lazySwiper] = useLazySwiper()

  return (
    <View className="page">
      <LazySwiper
        lazySwiper={lazySwiper}
        dataSource={dataSource}
        style={{
          height: '100%'
        }}
        keyExtractor={(data) => data.toString()}
        renderContent={(data, { isActive }) => {
          return (
            <div
              className='item'
            >
              {JSON.stringify(data)}
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
              <HistoryCard></HistoryCard>
            </div>
          )
        }}
      />
      <div className="fixed-bar">
        <ActionButton onClick={() => lazySwiper.prevSection()}>
          上一个
        </ActionButton>
        <ActionButton onClick={() => lazySwiper.nextSection()}>
          下一个
        </ActionButton>
        <ActionButton onClick={() => lazySwiper.toSection(0)}>
          回到头
        </ActionButton>
      </div>
    </View>
  )
}
