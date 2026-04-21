import { Pagination as MantinePagination } from "@mantine/core"

interface PaginationProps {
  total: number
  value?: number
  defaultValue?: number
  onChange?: (page: number) => void
  siblings?: number
  boundaries?: number
  withEdges?: boolean
  className?: string
}

function Pagination({
  total,
  value,
  defaultValue,
  onChange,
  siblings,
  boundaries,
  withEdges = false,
  className,
  ...props
}: PaginationProps) {
  return (
    <MantinePagination
      data-slot="pagination"
      total={total}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      siblings={siblings}
      boundaries={boundaries}
      withEdges={withEdges}
      className={className}
      size="sm"
      {...props}
    />
  )
}

export { Pagination }
export type { PaginationProps }
