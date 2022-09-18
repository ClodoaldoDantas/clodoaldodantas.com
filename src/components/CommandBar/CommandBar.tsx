import { ReactNode } from 'react'
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar'

import { FiCopy, FiCode } from 'react-icons/fi'

import { ResultItem } from './ResultItem/ResultItem'
import {
  positionerStyle,
  animatorStyle,
  searchStyle,
  groupNameStyle,
} from './CommandBar.styles'

interface CommandBarProps {
  children: ReactNode
}

export function CommandBar({ children }: CommandBarProps) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    console.log('link copiado')
  }

  const viewSource = () => {
    window.open('https://github.com/clodoaldodantas', '_blank')
  }

  const actions = [
    {
      id: 'copy',
      name: 'Copy Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'General',
      perform: copyLink,
      icon: <FiCopy size={24} />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: viewSource,
      icon: <FiCode size={24} />,
    },
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner style={positionerStyle}>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}
