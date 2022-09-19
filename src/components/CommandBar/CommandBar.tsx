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

import {
  FiCopy,
  FiCode,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from 'react-icons/fi'

import { ResultItem } from './ResultItem/ResultItem'
import {
  positionerStyle,
  animatorStyle,
  searchStyle,
  groupNameStyle,
} from './CommandBar.styles'
import { contact } from '@/data/contact'

interface CommandBarProps {
  children: ReactNode
}

export function CommandBar({ children }: CommandBarProps) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    console.log('link copiado')
  }

  const openLink = (url: string) => {
    window.open(url, '_blank')
  }

  const actions = [
    {
      id: 'copy',
      name: 'Copiar Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'Geral',
      perform: copyLink,
      icon: <FiCopy size={24} />,
    },
    {
      id: 'source',
      name: 'Ver o código fonte',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'Geral',
      perform: () => openLink(`${contact.github}/clodoaldodantas.com`),
      icon: <FiCode size={24} />,
    },
    {
      id: 'email',
      name: 'Enviar E-mail',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'Geral',
      perform: () => openLink(`mailto:${contact.email}`),
      icon: <FiMail size={24} />,
    },
    {
      id: 'resume',
      name: 'Baixar Currículo',
      shortcut: ['r'],
      keywords: 'download-resume',
      section: 'Geral',
      perform: () => openLink('/resume.pdf'),
      icon: <FiDownload size={24} />,
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'follow-github',
      section: 'Seguir',
      perform: () => openLink(contact.github),
      icon: <FiGithub size={24} />,
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      shortcut: ['f', 'l'],
      keywords: 'follow-linkedin',
      section: 'Seguir',
      perform: () => openLink(contact.linkedin),
      icon: <FiLinkedin size={24} />,
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
