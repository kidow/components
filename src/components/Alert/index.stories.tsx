import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback',
  component: Component,
  argTypes: {
    type: {
      options: ['success', 'info', 'warn', 'error'],
      defaultValue: 'success',
      control: { defaultValue: 'success' }
    },
    message: {
      control: { type: 'text' },
      defaultValue: 'Message'
    },
    close: {
      control: { type: 'boolean', defaultValue: false },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Component>

export const Alert: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
