import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Input',
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
      defaultValue: '01012345678'
    },
    value: {
      control: { type: 'text' }
    },
    onCodeChange: {
      action: 'onCodeChange'
    }
  }
} as ComponentMeta<typeof Component>

export const CountryCode: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
