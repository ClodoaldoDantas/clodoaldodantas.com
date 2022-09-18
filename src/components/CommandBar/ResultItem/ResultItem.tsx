/* eslint-disable react/display-name */
import { ActionImpl } from 'kbar'
import { forwardRef } from 'react'
import {
  getContainerStyles,
  actionNameContainerStyles,
  actionNameStyles,
  shortcutGridStyles,
  shortcutStyles,
} from './ResultItem.styles'

export const ResultItem = forwardRef(
  (
    {
      action,
      active,
    }: {
      action: ActionImpl
      active: boolean
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} style={getContainerStyles(active)}>
        <div style={actionNameContainerStyles}>
          {action.icon && action.icon}
          <span style={actionNameStyles}>{action.name}</span>
        </div>

        {action.shortcut?.length && (
          <div aria-hidden style={shortcutGridStyles}>
            {action.shortcut.map((sc) => (
              <kbd key={sc} style={shortcutStyles}>
                {sc}
              </kbd>
            ))}
          </div>
        )}
      </div>
    )
  }
)
