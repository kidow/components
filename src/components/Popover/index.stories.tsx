import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display',
  component: Component
} as ComponentMeta<typeof Component>

export const Popover: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
