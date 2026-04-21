// Barrel export — @fn_library
// Primitives
export { Alert, AlertTitle, AlertDescription } from './alert'
export { Badge, badgeVariants } from './badge'
export { Button, buttonVariants } from './button'
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from './card'
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from './dialog'
export { Input, InputGroup, InputIcon } from './input'
export { Label } from './label'
export { KPICard } from './kpi_card'
export { Select } from './select'
export type { SelectProps } from './select'
export { SimpleSelect } from './simple_select'
export type { SimpleSelectOption, SimpleSelectGroup, SimpleSelectOptions } from './simple_select'
export { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonCard, SkeletonTable, SkeletonText } from './skeleton'
export { Sparkline } from './sparkline'
export type { SparklineProps, SparklineVariant } from './sparkline'
export { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs'
export { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from './tooltip'
export { FormField } from './form_field'
export type { FormFieldProps } from './form_field'
export { PageHeader } from './page_header'
export { ProgressBar } from './progress_bar'

// Charts
export { AreaChart } from './area_chart'
export type { AreaChartProps, GradientConfig } from './area_chart'
export { BarChart } from './bar_chart'
export type { BarChartProps } from './bar_chart'
export { LineChart } from './line_chart'
export type { LineChartProps, CurveType } from './line_chart'
export { PieChart } from './pie_chart'
export type { PieChartProps } from './pie_chart'
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, getSeriesColor } from './chart_container'
export type { Series } from './chart_container'

// Data
export { DataTable } from './data_table'
export type { DataTableProps, ColumnDef, DataTableDensity } from './data_table'
export { FunnelChart } from './funnel_chart'
export type { FunnelChartProps, FunnelStage } from './funnel_chart'
export { HeatmapGrid } from './heatmap_grid'
export type { HeatmapGridProps, HeatmapColumn } from './heatmap_grid'

// Mantine Provider
export { FnMantineProvider } from './mantine_provider'
export type { FnMantineProviderProps } from './mantine_provider'

// Page templates
export { analyticsPage } from './analytics_page'
export type { AnalyticsPageProps, MetricConfig, ChartConfig } from './analytics_page'
export { crudPage } from './crud_page'
export type { CrudPageProps, CrudField } from './crud_page'
export { dashboardLayout } from './dashboard_layout'
export type { DashboardWidget, DashboardLayoutProps } from './dashboard_layout'
export { detailPage } from './detail_page'
export type { DetailPageProps, DetailField, DetailTab, TimelineEvent } from './detail_page'
export { settingsPage } from './settings_page'
export type { SettingsPageProps, SettingSection, SettingField } from './settings_page'

// Hooks — Wails
export { useWailsQuery } from './use_wails_query'
export type { UseWailsQueryOptions, UseWailsQueryResult } from './use_wails_query'
export { useWailsMutation } from './use_wails_mutation'
export type { UseWailsMutationOptions, UseWailsMutationResult } from './use_wails_mutation'
export { useWailsStream, useWailsLogs } from './use_wails_stream'
export type { UseWailsStreamOptions, UseWailsStreamResult } from './use_wails_stream'
export { useWailsEvent, useWailsEmit } from './use_wails_event'
export type { UseWailsEventOptions, UseWailsEventResult } from './use_wails_event'

// Accordion
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'
export type { AccordionProps } from './accordion'

// Avatar
export { Avatar, avatarVariants } from './avatar'
export type { AvatarProps } from './avatar'

// Breadcrumb
export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './breadcrumb'

// Checkbox
export { Checkbox } from './checkbox'
export type { CheckboxProps } from './checkbox'

// Command
export { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSearch, CommandSeparator, CommandShortcut } from './command'
export type { CommandItemData, CommandProps } from './command'

// Dropdown Menu
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './dropdown_menu'

// Pagination
export { Pagination } from './pagination'
export type { PaginationProps } from './pagination'

// Popover
export { Popover, PopoverClose, PopoverContent, PopoverDescription, PopoverHeader, PopoverPortal, PopoverTitle, PopoverTrigger } from './popover'

// Radio Group
export { RadioGroup, RadioGroupItem } from './radio_group'
export type { RadioGroupItemProps } from './radio_group'

// Sheet
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, sheetVariants } from './sheet'
export type { SheetContentProps } from './sheet'

// Switch
export { SwitchToggle } from './switch_toggle'
export type { SwitchToggleProps } from './switch_toggle'

// Textarea
export { Textarea } from './textarea'
export type { TextareaProps } from './textarea'

// Toast
export { Toast, ToastProvider, ToastViewport, toastVariants, useToast } from './toast'
export type { ToastEntry, ToastProps, ToastViewportProps } from './toast'

// Search
export { SearchBar } from './search_bar'
export type { SearchBarProps } from './search_bar'

// Hooks — Canvas
export { useAnimatedCanvas } from './use_animated_canvas'

// Wails Provider
export { WailsProvider } from './wails_provider'

// New Mantine components
export { FnAppShell } from './app_shell'
export { FnStepper } from './stepper'
export { FnTimeline } from './timeline'
export { FnActionIcon } from './action_icon'
export { FnNumberInput } from './number_input'
export { FnSegmentedControl } from './segmented_control'
export { FnLoadingOverlay } from './loading_overlay'
export { FnRingProgress } from './ring_progress'
export { FnNavLink } from './nav_link'
export { FnIndicator } from './indicator'
