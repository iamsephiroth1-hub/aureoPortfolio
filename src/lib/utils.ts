import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(clsx(inputs))
}

export function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()}`
}

export function truncate(text: string, length = 140): string {
  if (text.length <= length) return text
  return text.slice(0, length).trimEnd() + '...'
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}
