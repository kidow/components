import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/Form',
  component: Component
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = () => <Component />
