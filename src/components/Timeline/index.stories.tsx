import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display',
  component: Component,
  argTypes: {
    list: {
      control: { type: 'object' },
      defaultValue: [
        {
          tag: '2022',
          title: 'Title 1',
          content: (
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          )
        },
        {
          tag: '2021',
          title: 'Title 2',
          content: (
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          )
        },
        {
          tag: '2020',
          title: 'Title 3',
          content: (
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          )
        }
      ]
    }
  }
} as ComponentMeta<typeof Component>

export const Timeline: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
