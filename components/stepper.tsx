import * as React from 'react'
import { Stepper } from '@mantine/core'

interface StepDef {
  label: string
  description?: string
  icon?: React.ReactNode
}

interface FnStepperProps {
  steps: StepDef[]
  active: number
  onStepClick?: (step: number) => void
  orientation?: 'horizontal' | 'vertical'
  allowNextStepsSelect?: boolean
}

function FnStepper({
  steps,
  active,
  onStepClick,
  orientation = 'horizontal',
  allowNextStepsSelect = false,
}: FnStepperProps) {
  return (
    <Stepper
      active={active}
      onStepClick={onStepClick}
      orientation={orientation}
      allowNextStepsSelect={allowNextStepsSelect}
    >
      {steps.map((step, i) => (
        <Stepper.Step
          key={i}
          label={step.label}
          description={step.description}
          icon={step.icon}
        />
      ))}
    </Stepper>
  )
}

export { FnStepper }
export type { FnStepperProps, StepDef }
