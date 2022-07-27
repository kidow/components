import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs',
  component: Component,
  argTypes: {
    onEnter: {
      action: 'onEnter'
    },
    info: {
      control: { type: 'text' }
    },
    error: {
      control: { type: 'text' }
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    float: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: '플레이스홀더'
    }
  }
} as ComponentMeta<typeof Component>

export const Textarea: ComponentStory<typeof Component> = ({ ...props }) => (
  <div className="mt-4">
    <Component {...props} />
  </div>
)
