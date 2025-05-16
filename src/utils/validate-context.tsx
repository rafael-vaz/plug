export function validateContext(context: unknown, contextName: string) {
  if (!context) {
    throw new Error(`Failed to get context value! (${contextName})`);
  }
}
