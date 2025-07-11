import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-6)}`
}
export function isAndroid(): boolean {
  return (
    typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent)
  )
}

export function isSmallIOS(): boolean {
  return (
    typeof navigator !== 'undefined' && /iPhone|iPod/.test(navigator.userAgent)
  )
}

export function isLargeIOS(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    (/iPad/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
  )
}

export function isIOS(): boolean {
  return isSmallIOS() || isLargeIOS()
}

export function isMobile(): boolean {
  return isAndroid() || isIOS()
}
