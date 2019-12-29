export class TypeAssertionError extends Error {
  constructor(
      baseMessage: string,
      readonly causes: readonly string[],
  ) {
    super(`TypeAssertionError: ${baseMessage}\n  Causes:\n${renderCauses(causes)}`);
  }
}

function renderCauses(causes: readonly string[]): string {
  return causes.map(cause => `  >   ${cause}`).join('\n');
}
