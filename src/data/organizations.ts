export interface Organization {
  name: string
  role: string
  startDate: string
  endDate: string
  description?: string
}

export const organizations: Organization[] = [
  {
    name: 'Codability Tech',
    role: 'Member',
    startDate: '2023',
    endDate: '2025',
    description: '' /* TODO: Add organization description */
  }
]

export default organizations
