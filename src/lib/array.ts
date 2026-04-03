/**
 * Checks if the provided data is a non-empty array.
 *
 * @param data - The data to check.
 * @returns `true` if the data is a non-empty array, otherwise `false`.
 */
export const isValidArray = (data: unknown): data is unknown[] =>
  Array.isArray(data) && data.length > 0;

/**
 * Returns the provided data if it is a non-empty array, otherwise returns an empty array.
 *
 * @template T - The type of elements expected in the array.
 * @param data - The data to validate and return.
 * @returns The provided data if it is a non-empty array, otherwise an empty array.
 */
export const getValidArray = <T>(data: unknown): T[] =>
  isValidArray(data) ? (data as T[]) : [];
