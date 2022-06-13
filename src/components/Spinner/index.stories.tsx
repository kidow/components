import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback',
  component: Component,
  argTypes: {
    className: {
      description: 'currentValue : `h-5 w-5` (tailwindcss)'
    }
  }
} as ComponentMeta<typeof Component>

export const Spinner: ComponentStory<typeof Component> = () => (
  <Component className="h-5 w-5" />
)
