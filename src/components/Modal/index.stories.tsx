import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback',
  component: Component,
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    onClose: {
      action: 'onClose'
    },
    maxWidth: {
      control: { type: 'radio' },
      options: [
        'max-w-xs',
        'max-w-sm',
        'max-w-md',
        'max-w-lg',
        'max-w-xl',
        'max-w-2xl',
        'max-w-3xl',
        'max-w-4xl',
        'max-w-5xl',
        'max-w-6xl',
        'max-w-7xl',
        'max-w-8xl',
        'max-w-full',
        'max-w-screen-sm',
        'max-w-screen-md',
        'max-w-screen-lg',
        'max-w-screen-xl',
        'max-w-screen-2xl'
      ],
      defaultValue: 'max-w-lg'
    },
    description: {
      defaultValue: 'Description',
      control: { type: 'text' }
    },
    padding: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'Title'
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Children'
    },
    footer: {
      control: { type: 'text' },
      defaultValue: 'Footer'
    }
  }
} as ComponentMeta<typeof Component>

export const Modal: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
