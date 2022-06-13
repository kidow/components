import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Button',
  component: Component,
  argTypes: {
    loading: {
      defaultValue: false
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    theme: {
      options: ['primary', 'success', 'danger']
    },
    shape: {
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained'
    },
    onClick: {
      action: 'onClick'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props}>Button</Component>
)
