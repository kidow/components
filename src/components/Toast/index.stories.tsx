import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback',
  component: Component
} as ComponentMeta<typeof Component>

export const Toast: ComponentStory<typeof Component> = () => <Component />
