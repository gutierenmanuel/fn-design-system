import { Rating as MantineRating, type RatingProps as MantineRatingProps } from '@mantine/core'

interface RatingProps extends MantineRatingProps {}

function Rating(props: RatingProps) {
  return <MantineRating {...props} />
}

export { Rating }
export type { RatingProps }
