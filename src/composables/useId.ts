
export const useId = (length = 36) => crypto.randomUUID().slice(0, length)