import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display',
  component: Component,
  argTypes: {
    list: {
      control: { type: 'object' },
      defaultValue: [
        { title: 'Title 1', content: 'Content 1' },
        { title: 'Title 2', content: 'Content 2' },
        { title: 'Title 3', content: 'Content 3' }
      ]
    },
    accordion: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Component>

export const Collapse: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
