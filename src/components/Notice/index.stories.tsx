import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback',
  component: Component,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['success', 'info', 'warn', 'danger']
    },
    content: {
      control: { type: 'text' },
      defaultValue: 'Notice'
    }
  }
} as ComponentMeta<typeof Component>

export const Notice: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
