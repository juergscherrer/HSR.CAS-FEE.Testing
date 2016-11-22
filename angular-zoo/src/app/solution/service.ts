export interface Service<T> {
	getAll(callback: (animals: T[]) => void): void
}
