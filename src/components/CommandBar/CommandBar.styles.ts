export const positionerStyle = {
  position: 'fixed' as React.CSSProperties['position'],
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'var(--kbarOverlay)',
  boxSizing: 'border-box' as React.CSSProperties['boxSizing'],
}

export const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  background: 'var(--kbarBg)',
  color: 'var(--kbarColor)',
  borderRadius: '8px',
  overflow: 'hidden',
}

export const searchStyle = {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box' as React.CSSProperties['boxSizing'],
  outline: 'none',
  border: 'none',
  background: 'var(--kbarBg)',
  color: 'var(--kbarColor)',
}

export const groupNameStyle = {
  padding: '8px 16px',
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  opacity: 0.5,
}
