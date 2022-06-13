import Form from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/Form',
  component: Form
} as ComponentMeta<typeof Form>

export const Primary: ComponentStory<typeof Form> = () => <Form />
