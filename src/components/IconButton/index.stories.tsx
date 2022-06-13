import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  MinusIcon,
  PlusIcon,
  SearchIcon,
  UploadIcon
} from '@heroicons/react/outline'

export default {
  title: 'Inputs',
  component: Component,
  argTypes: {
    onClick: {
      action: 'onClick'
    }
  }
} as ComponentMeta<typeof Component>

export const IconButton: ComponentStory<typeof Component> = ({ ...props }) => (
  <div className="flex flex-wrap gap-3">
    <Component {...props}>
      <PlusIcon />
    </Component>
    <Component {...props}>
      <MinusIcon />
    </Component>
    <Component {...props}>
      <UploadIcon />
    </Component>
    <Component {...props}>
      <SearchIcon />
    </Component>
  </div>
)
