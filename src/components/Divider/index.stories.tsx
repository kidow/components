import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import classnames from 'classnames'

export default {
  title: 'Data Display',
  component: Component,
  argTypes: {
    mode: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
      defaultValue: 'horizontal'
    }
  }
} as ComponentMeta<typeof Component>

export const Divider: ComponentStory<typeof Component> = ({ ...props }) => (
  <div
    className={classnames('flex', { 'flex-col': props.mode === 'horizontal' })}
  >
    <div>Left or Up</div>
    <Component {...props} />
    <div>Right or Down</div>
  </div>
)
