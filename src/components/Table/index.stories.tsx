import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import dayjs from 'dayjs'
import { Checkbox as TableCheckbox } from 'components'

export default {
  title: 'Data Display/Table',
  component: Component,
  argTypes: {
    list: {
      control: { type: 'object' },
      defaultValue: [{}, {}, {}, {}]
    },
    columns: {
      control: { type: 'object' },
      defaultValue: (
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>연락처</th>
          <th>생성일</th>
        </tr>
      )
    },
    loading: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'lg',
      options: ['xs', 'sm', 'md', 'lg']
    },
    renderItem: {
      defaultValue: (item: any, key: number) => (
        <tr key={key}>
          <td>kidow</td>
          <td>김동욱</td>
          <td>
            010-{1000 + Math.floor(Math.random() * 9000)}-
            {1000 + Math.floor(Math.random() * 9000)}
          </td>
          <td>
            {dayjs()
              .add(
                -Math.floor(Math.random() * new Date().getTime()),
                'millisecond'
              )
              .format('YYYY년 MM월 DD일 HH시 mm분 ss초')}
          </td>
        </tr>
      )
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

export const Checkbox: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component
    {...props}
    columns={
      <tr>
        <th>
          <TableCheckbox
            checked={Math.random() > 0.5}
            onChange={() => {}}
            label=""
          />
        </th>
        <th>아이디</th>
        <th>이름</th>
        <th>연락처</th>
        <th>생성일</th>
      </tr>
    }
    renderItem={(item, key) => (
      <tr key={key}>
        <td>
          <TableCheckbox
            checked={Math.random() > 0.5}
            onChange={() => {}}
            label=""
          />
        </td>
        <td>kidow</td>
        <td>김동욱</td>
        <td>
          010-{1000 + Math.floor(Math.random() * 9000)}-
          {1000 + Math.floor(Math.random() * 9000)}
        </td>
        <td>
          {dayjs()
            .add(
              -Math.floor(Math.random() * new Date().getTime()),
              'millisecond'
            )
            .format('YYYY년 MM월 DD일 HH시 mm분 ss초')}
        </td>
      </tr>
    )}
  />
)
