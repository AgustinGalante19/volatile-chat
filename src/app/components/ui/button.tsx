import { cn } from '@/app/utils/cn'
import { IconLoader2 } from '@tabler/icons-react'
import { VariantProps, cva } from 'class-variance-authority'
import React, { forwardRef } from 'react'

const buttonVariants = cva(
  'rounded-md flex items-center justify-center transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-sec-gray text-white hover:bg-opacity-90 dark:hover:bg-opacity-90 font-medium dark:bg-white dark:text-black',
        secondary:
          'bg-white text-sec-gray dark:text-white hover:bg-gray-300/20 dark:bg-sec-gray/50 border dark:border-gray-200/10 dark:hover:bg-gray-300/20',
      },
      size: {
        small: 'text-sm px-2 py-1',
        normal: 'py-2 px-3',
        large: 'text-lg px-3 py-2',
      },
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    children,
    className,
    variant = 'default',
    size = 'normal',
    isLoading,
    ...rest
  } = props

  return (
    <button
      ref={ref}
      {...rest}
      type={type}
      className={cn(buttonVariants({ className, variant, size }))}
      disabled={isLoading}
    >
      <div className={cn(isLoading ? 'block' : 'hidden')}>
        <IconLoader2 className="animate-spin mr-2" size={20} />
      </div>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
