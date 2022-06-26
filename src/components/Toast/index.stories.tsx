import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from 'components/Button'
import { Event, EventListener } from 'services'

export default {
  title: 'Feedback',
  component: Component,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right'
      ],
      defaultValue: 'top-right'
    },
    type: {
      control: { type: 'radio' },
      options: ['success', 'info', 'warn', 'error'],
      defaultValue: 'success'
    },
    pauseOnHover: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    message: {
      control: { type: 'text' },
      defaultValue: 'Message here'
    },
    autoClose: {
      control: 'select',
      options: [1000, 2000, 3000, 4000, 5000, false],
      defaultValue: 3000
    }
  }
} as ComponentMeta<typeof Component>

export const Toast: ComponentStory<typeof Component> = ({ ...props }) => (
  <>
    <div className="flex items-center justify-center">
      <Button onClick={() => EventListener.emit(Event.Toast, props)}>
        Toast!
      </Button>
    </div>
    <Component.Container />
  </>
)
