import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry',
  component: Component
} as ComponentMeta<typeof Component>

export const DatetimePicker: ComponentStory<typeof Component> = ({
  ...props
}) => <Component {...props} />
