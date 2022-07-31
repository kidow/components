import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs',
  component: Component,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    onChange: {
      action: 'onChange'
    },
    label: {
      control: { type: 'text' },
      defaultValue: '라벨'
    },
    indeterminate: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md'
    }
  }
} as ComponentMeta<typeof Component>

export const Checkbox: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
