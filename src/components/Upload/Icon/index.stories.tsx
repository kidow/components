import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/Upload',
  component: Component,
  argTypes: {
    value: {
      control: { type: 'text' },
      defaultValue: 'https://i.pravatar.cc'
    },
    onChange: {
      action: 'onChange'
    }
  }
} as ComponentMeta<typeof Component>

export const Icon: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
