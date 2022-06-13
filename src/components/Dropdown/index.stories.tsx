import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation',
  component: Component,
  argTypes: {
    list: {
      control: { type: 'object' },
      defaultValue: ['Apple', 'Microsoft', 'Tesla']
    },
    onClick: {
      action: 'onClick'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Dropdown'
    }
  }
} as ComponentMeta<typeof Component>

export const Dropdown: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
