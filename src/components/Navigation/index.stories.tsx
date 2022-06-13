import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation',
  component: Component
} as ComponentMeta<typeof Component>

export const Navigation: ComponentStory<typeof Component> = () => <Component />
