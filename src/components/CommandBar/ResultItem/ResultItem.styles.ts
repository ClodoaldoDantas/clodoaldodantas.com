export const getContainerStyles = (active: boolean) => ({
  padding: '12px 16px',
  background: active ? 'var(--kbarHover)' : 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
})

export const actionNameContainerStyles = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  fontSize: 14,
}

export const actionNameStyles = {
  color: 'var(--kbarName)',
}

export const shortcutGridStyles = {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
}

export const shortcutStyles = {
  padding: '4px 6px',
  background: 'var(--kbarShortcutBg)',
  color: 'var(--kbarColor)',
  borderRadius: '4px',
  fontSize: 14,
  fontFamily: 'JetBrains Mono, monospace',
  textTransform: 'uppercase' as React.CSSProperties['textTransform'],
}
