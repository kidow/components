import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display',
  component: Component,
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: '타이틀'
    },
    caption: {
      control: { type: 'text' },
      defaultValue: '캡션'
    },
    footer: {
      control: { type: 'text' },
      defaultValue: '푸터'
    },
    border: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    padding: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Component>

export const Card: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props}>children</Component>
)
