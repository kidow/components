import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs',
  component: Component,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    onChange: {
      action: 'onChange'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Label'
    },
    indeterminate: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Component>

export const Checkbox: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
