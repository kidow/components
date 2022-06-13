import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from 'components'

export default {
  title: 'Data Display',
  component: Component
} as ComponentMeta<typeof Component>

export const Badge: ComponentStory<typeof Component> = () => (
  <Component>
    <Button>Badge</Button>
  </Component>
)
