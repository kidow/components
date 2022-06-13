import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import dayjs from 'dayjs'

export default {
  title: 'Data Entry',
  component: Component,
  argTypes: {
    value: {
      control: { type: 'object' },
      defaultValue: dayjs()
    },
    onChange: {
      action: 'onChange'
    }
  }
} as ComponentMeta<typeof Component>

export const TimePicker: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
