import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/Form',
  component: Component,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'label'
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'children'
    }
  }
} as ComponentMeta<typeof Component>

export const Item: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
