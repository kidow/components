import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation',
  component: Component,
  argTypes: {
    list: {
      control: { type: 'object' },
      defaultValue: [
        { path: '/', name: '홈' },
        { path: '/producuts', name: '상품 리스트' },
        { path: '/products/1', name: '상품 상세' }
      ]
    }
  }
} as ComponentMeta<typeof Component>

export const Breadcrumb: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
