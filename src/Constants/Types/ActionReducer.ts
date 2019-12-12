type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

export default Action;