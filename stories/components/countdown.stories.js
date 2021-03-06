import React from 'react'
import { storiesOf } from '@storybook/react'
import { Countdown } from 'components/UI'

storiesOf('Components', module).addWithChapters('Countdown', {
  chapters: [
    {
      sections: [
        {
          title: 'Default',
          sectionFn: () => <Countdown date={Math.round(new Date() / 1000) + 5000} />,
        },
        {
          title: 'Stop after expire',
          sectionFn: () => (
            <Countdown date={Math.round(new Date() / 1000) + 5000} isContinual={false} />
          ),
        },
        {
          title: 'Custom colors',
          sectionFn: () => (
            <Countdown
              colorActive="lightningOrange"
              colorExpired="yellow"
              date={Math.round(new Date() / 1000) + 5000}
            />
          ),
        },
      ],
    },
  ],
})
