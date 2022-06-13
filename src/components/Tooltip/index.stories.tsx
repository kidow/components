import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display',
  component: Component,
  argTypes: {
    content: {
      control: { type: 'string' },
      defaultValue: 'content'
    },
    position: {
      control: { type: 'radio' },
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: 'top'
    },
    border: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      defaultValue: 'light'
    },
    arrow: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    padding: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    animation: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Component>

export const Tooltip: ComponentStory<typeof Component> = ({ ...props }) => (
  <div className="flex items-center justify-center h-96">
    <Component {...props}>
      <div>Hover!</div>
    </Component>
  </div>
)
