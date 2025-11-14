"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import type { ReactNode } from "react"

interface Props extends ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
