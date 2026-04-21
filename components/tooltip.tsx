import * as React from 'react'
import { Tooltip as MantineTooltip } from '@mantine/core'

function TooltipProvider({ delayDuration: _delayDuration = 300, children }: { delayDuration?: number; children: React.ReactNode }) {
  return <>{children}</>
}

const TooltipContext = React.createContext<{
  label: React.ReactNode
  setLabel: (label: React.ReactNode) => void
  side: 'top' | 'right' | 'bottom' | 'left'
  setSide: (side: 'top' | 'right' | 'bottom' | 'left') => void
  offset: number
  setOffset: (offset: number) => void
}>({
  label: '',
  setLabel: () => {},
  side: 'top',
  setSide: () => {},
  offset: 4,
  setOffset: () => {},
})

interface TooltipProps {
  children: React.ReactNode
  delayDuration?: number
}

function Tooltip({ children }: TooltipProps) {
  const [label, setLabel] = React.useState<React.ReactNode>('')
  const [side, setSide] = React.useState<'top' | 'right' | 'bottom' | 'left'>('top')
  const [offset, setOffset] = React.useState(4)

  return (
    <TooltipContext.Provider value={{ label, setLabel, side, setSide, offset, setOffset }}>
      {children}
    </TooltipContext.Provider>
  )
}

function TooltipTrigger({ children, ...props }: React.ComponentProps<'button'>) {
  const { label, side, offset } = React.useContext(TooltipContext)
  return (
    <MantineTooltip label={label} position={side} offset={offset} withArrow>
      {React.isValidElement(children) ? (
        React.cloneElement(children as React.ReactElement<any>, props)
      ) : (
        <button type="button" data-slot="tooltip-trigger" {...props}>{children}</button>
      )}
    </MantineTooltip>
  )
}

function TooltipPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

interface TooltipContentProps extends React.ComponentProps<'div'> {
  sideOffset?: number
  side?: 'top' | 'right' | 'bottom' | 'left'
}

function TooltipContent({ children, sideOffset, side = 'top' }: TooltipContentProps) {
  const { setLabel, setSide, setOffset } = React.useContext(TooltipContext)

  React.useEffect(() => {
    setLabel(children)
    setSide(side)
    if (sideOffset !== undefined) setOffset(sideOffset)
  }, [children, side, sideOffset, setLabel, setSide, setOffset])

  return null
}

export { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger }
