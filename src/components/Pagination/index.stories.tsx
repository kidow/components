import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation',
  component: Component,
  argTypes: {
    currentPage: {
      control: { type: 'number' },
      defaultValue: 5
    },
    totalCount: {
      control: { type: 'number' },
      defaultValue: 100
    },
    pageSize: {
      control: { type: 'number' },
      defaultValue: 10
    },
    onPageChange: {
      action: 'onPageChange'
    }
  }
} as ComponentMeta<typeof Component>

export const Pagination: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
