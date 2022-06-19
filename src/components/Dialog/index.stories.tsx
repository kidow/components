import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'
import Button from 'components/Button'

export default {
  title: 'Feedback',
  component: Component,
  argTypes: {
    onClose: {
      action: 'onClose'
    },
    title: {
      control: { type: 'text' },
      defaultValue: '다이얼로그'
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'html <dialog> 태그로 만들어졌습니다.'
    },
    padding: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    footer: {
      control: { type: 'text' },
      defaultValue: 'Footer'
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
    }
  }
} as ComponentMeta<typeof Component>

export const Dialog: ComponentStory<typeof Component> = ({ ...props }) => {
  const ref = useRef<HTMLDialogElement>(null)
  return (
    <>
      <Button shape="outlined" onClick={() => ref.current?.showModal()}>
        Open
      </Button>
      <Component ref={ref} {...props}>
        Dialog
      </Component>
    </>
  )
}
