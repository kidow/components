import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Layout',
  component: Component
} as ComponentMeta<typeof Component>

export const Masonry: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props}>
    {Array.from({ length: 20 }).map((_, key) => (
      <img
        src="https://i.pravatar.cc"
        alt=""
        style={{ height: 100 + Math.floor(Math.random() * 300) }}
        key={key}
      />
    ))}
  </Component>
)
