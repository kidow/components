import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs',
  component: Component
} as ComponentMeta<typeof Component>

export const Textarea: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
