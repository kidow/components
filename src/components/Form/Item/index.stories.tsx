import FormItem from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/FormItem',
  component: FormItem
} as ComponentMeta<typeof FormItem>

export const Primary: ComponentStory<typeof FormItem> = () => <FormItem />
