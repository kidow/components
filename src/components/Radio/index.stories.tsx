import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs',
  component: Component,
  argTypes: {
    value: {
      defaultValue: 'Google'
    },
    onChange: {
      action: 'onChange'
    },
    options: {
      defaultValue: [
        {
          name: 'Google',
          description: `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...`,
          value: 'Google'
        },
        {
          name: 'Amazon',
          description:
            'Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices and great deals on the largest selection of ...',
          value: 'Amazon'
        },
        {
          name: 'Meta',
          value: 'Meta',
          description:
            '메타버스는 소셜 연결의 차세대 혁신입니다. Facebook의 비전은 메타버스를 실현하는 것으로 이와 같은 미래를 향한 노력을 반영해 이제 저희의 이름을 변경합니다.',
          disabled: true
        },
        {
          name: 'Microsoft',
          description:
            '가정용 또는 비즈니스용 Microsoft 제품 및 서비스를 살펴보세요. Surface, Microsoft 365, Xbox, Windows, Azure 등을 쇼핑하세요. 다운로드 항목을 찾고 지원을 ...',
          value: 'Microsoft'
        },
        {
          name: 'Apple',
          description:
            '새롭게 선보이는 Apple M2 칩 탑재 MacBook Air 및 MacBook Pro 13.',
          value: 'Apple'
        }
      ],
      control: { type: 'radio' }
    },
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    }
  }
} as ComponentMeta<typeof Component>

export const Radio: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)
