import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display',
  component: Component,
  argTypes: {
    start: {
      control: { type: 'number' },
      defaultValue: 0
    },
    end: {
      control: { type: 'number' },
      defaultValue: 1000000
    },
    duration: {
      control: { type: 'number' },
      defaultValue: 2
    }
  }
} as ComponentMeta<typeof Component>

export const CountTo: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
