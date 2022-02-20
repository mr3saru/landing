export function RawException(message: string): any {
  throw new Error(message || 'Function not implemented.')
}
