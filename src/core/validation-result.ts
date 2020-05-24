interface ValidationSuccess<T> {
  readonly passes: true;
  readonly value: T;
}

interface ValidationFailed {
  readonly passes: false;
  readonly causes: readonly string[];
}

export type ValidationResult<T> = ValidationSuccess<T>|ValidationFailed;
