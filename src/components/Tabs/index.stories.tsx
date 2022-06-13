import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation',
  component: Component,
  argTypes: {
    list: {
      control: { type: 'object' },
      defaultValue: ['전체', '상품', '회원', '주문']
    },
    value: {
      control: { type: 'number' },
      defaultValue: 0
    },
    onChange: {
      action: 'onChange'
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md'
    }
  }
} as ComponentMeta<typeof Component>

export const Tabs: ComponentStory<typeof Component> = ({ ...props }) => (
  <div className="border-b px-6">
    <Component {...props} />
  </div>
)
