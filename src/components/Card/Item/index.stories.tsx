import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from '..'

export default {
  title: 'Data Display/Card',
  component: Component,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: '라벨'
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    plain: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Component>

export const Item: ComponentStory<typeof Component> = ({ ...props }) => (
  <Card title="타이틀">
    <Component {...props}>카드 아이템</Component>
  </Card>
)
