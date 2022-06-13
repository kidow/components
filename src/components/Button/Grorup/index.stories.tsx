import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Button',
  component: Component,
  argTypes: {
    onClick: {
      action: 'onClick'
    },
    list: {
      control: { type: 'object' },
      defaultValue: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  }
} as ComponentMeta<typeof Component>

export const Group: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
