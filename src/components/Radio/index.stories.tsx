import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs',
  component: Component,
  argTypes: {
    value: {
      defaultValue: 'Google'
    },
    onChange: {
      action: 'onChange'
    },
    options: {
      defaultValue: [
        { name: 'Google', value: 'Google' },
        { name: 'Amazon', value: 'Amazon' },
        { name: 'Meta', value: 'Meta', disabled: true },
        { name: 'Microsoft', value: 'Microsoft' },
        { name: 'Apple', value: 'Apple' }
      ],
      control: { type: 'radio' }
    },
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    },
    initial: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Component>

export const Radio: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
