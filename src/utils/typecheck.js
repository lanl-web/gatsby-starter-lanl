export const isIterableElseEmpty = (object) =>
  object != null && typeof object[Symbol.iterator] === 'function' ? object : [];
