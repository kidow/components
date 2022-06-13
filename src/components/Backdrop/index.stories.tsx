import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback',
  component: Component,
  argTypes: {
    loading: {
      control: { type: 'boolean', defaultValue: false },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Component>

export const Backdrop: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
