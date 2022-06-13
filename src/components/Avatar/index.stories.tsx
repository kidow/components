import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display',
  component: Component,
  argTypes: {
    src: {
      control: { type: 'text' },
      defaultValue: 'https://i.pravatar.cc'
    },
    alt: {
      control: { type: 'text' },
      defaultValue: ''
    },
    shape: {
      options: ['circle', 'square'],
      defaultValue: 'circle'
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md'
    },
    border: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Component>

export const Avatar: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
