import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback',
  component: Component,
  argTypes: {
    value: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
      defaultValue: 50
    }
  }
} as ComponentMeta<typeof Component>

export const Progress: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
