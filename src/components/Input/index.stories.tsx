import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs',
  component: Component,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    prefix: {
      control: { type: 'text' }
    },
    suffix: {
      control: { type: 'text' }
    },
    align: {
      options: ['left', 'right'],
      defaultValue: 'left'
    },
    error: {
      control: { type: 'text' }
    },
    fullWidth: {
      control: { type: 'boolean' }
    },
    info: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: '플레이스홀더'
    }
  }
} as ComponentMeta<typeof Component>

export const Input: ComponentStory<typeof Component> = ({ ...props }) => (
  <div className="mt-4">
    <Component {...props} />
  </div>
)
