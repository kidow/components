import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation',
  component: Component
} as ComponentMeta<typeof Component>

export const Stepper: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
