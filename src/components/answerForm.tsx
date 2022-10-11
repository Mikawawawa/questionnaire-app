import Taro from '@tarojs/taro'
import {
  AtForm,
  AtInput,
  AtButton,
  AtCheckbox,
  AtIcon,
  AtBadge,
  AtRate,
} from 'taro-ui'
import { EnhancedForm } from './Form'
import {
  EnhancedMultipleSelector,
  EnhancedSingleSelector,
} from './Form/controls/EnhancedSelector'
import { EnhancedRadio } from './Form/controls/EnhancedSingle'
import { FormItemEnhanced } from './Form/formItem'

import { rulePhone } from './Form/rules'
// export default function AnswerForm() {
//   return (
//     <AtForm
//       onSubmit={() => {
//         console.log('onSubmit')
//       }}
//       onReset={() => {
//         console.log('onReset')
//       }}
//     >
//       <div
//         className="at-article__p"
//         style={{
//           lineHeight: 1.8,
//         }}
//       >
//         这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
//         ABCDEFGHIJKLMNOPQRSTUVWXYZ
//       </div>

//       <AtInput
//         name="value"
//         title="文本"
//         type="text"
//         placeholder="单行文本"
//         onChange={() => {
//           console.log('onChange')
//         }}
//       />

//       <AtCheckbox
//         options={[
//           {
//             value: 'list1',
//             label: 'iPhone X',
//             desc:
//               '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
//           },
//           {
//             value: 'list2',
//             label: 'HUAWEI P20',
//           },
//           {
//             value: 'list3',
//             label: 'OPPO Find X',
//             desc:
//               '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
//             disabled: true,
//           },
//           {
//             value: 'list4',
//             label: 'vivo NEX',
//             desc:
//               '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
//             disabled: true,
//           },
//         ]}
//       />
//       <AtButton formType="submit">提交</AtButton>
//       <AtButton formType="reset">重置</AtButton>
//     </AtForm>
//   )
// }

export default function AnswerForm() {
  return (
    <EnhancedForm onChange={value => {
      console.log(value)
    }}>
      <div className="at-article__h3">请从下列选项中，选出一个最符合你的</div>
      <FormItemEnhanced
        name="add"
        label="手机号码"
        prefix={<AtIcon size={10} value="add" />}
        // suffix={<AtIcon size={20} value="chevron-right" />}
        enter
        rules={[
          { required: true, message: '请输入手机号' },
          {
            validator: (rule, value) => rulePhone(rule, value),
            message: '请输入正确的手机号',
          },
        ]}
      >
        <AtInput placeholder="我是默认提示" />
      </FormItemEnhanced>

      <FormItemEnhanced name="single">
        <EnhancedSingleSelector
          options={[
            { label: '单选项一', value: 'option1', desc: '单选项描述' },
            { label: '单选项二', value: 'option2' },
            {
              label: '单选项三禁用',
              value: 'option3',
              desc: (
                <AtBadge value={10} maxValue={99}>
                  <AtButton size="small">按钮</AtButton>
                </AtBadge>
              ),
              disabled: true,
            },
          ]}
        />
      </FormItemEnhanced>

      <FormItemEnhanced name="multiple">
        <EnhancedMultipleSelector
          options={[
            { label: '单选项一', value: 'option1', desc: '单选项描述' },
            { label: '单选项二', value: 'option2' },
            {
              label: '单选项三禁用',
              value: 'option3',
              desc: (
                <AtBadge value={10} maxValue={99}>
                  <AtButton size="small">按钮</AtButton>
                </AtBadge>
              ),
              disabled: true,
            },
          ]}
        />
      </FormItemEnhanced>

      <FormItemEnhanced name="rate">
        <AtRate size={40} />
      </FormItemEnhanced>
    </EnhancedForm>
  )
}
