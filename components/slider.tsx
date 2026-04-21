import { Slider as MantineSlider, RangeSlider as MantineRangeSlider } from '@mantine/core'
import type { SliderProps as MantineSliderProps, RangeSliderProps as MantineRangeSliderProps } from '@mantine/core'

interface SliderProps extends MantineSliderProps {}
interface RangeSliderProps extends MantineRangeSliderProps {}

function Slider(props: SliderProps) {
  return <MantineSlider {...props} />
}

function RangeSlider(props: RangeSliderProps) {
  return <MantineRangeSlider {...props} />
}

export { Slider, RangeSlider }
export type { SliderProps, RangeSliderProps }
