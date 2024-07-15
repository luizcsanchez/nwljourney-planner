import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const ButtonVariants = tv({
  base: 'rounded-lg px-5 py-2 flex font-medium items-center justify-center gap-2',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secundary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },

    size: {
      default: 'py-2',
      full: 'h-11 w-full',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof ButtonVariants> {
  children: ReactNode
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={ButtonVariants({ variant, size })}>
      {children}
    </button>
  )
}
