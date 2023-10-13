class MockLocalStorage {
    store: { [key: string]: string } = {};
    length: number = Object.keys(this.store).length;
  
    clear(): void {
      this.store = {};
    };
  
    getItem(key: string): string | null {
      return this.store[key] || null;
    };
  
    setItem(key: string, value: string): void {
      this.store[key] = String(value);
    };
  
    removeItem(key: string): void {
      delete this.store[key];
    };
  
    key(): null {
      return null;
    };
  };
  
  Object.defineProperty(global, "localStorage", {
    writable: true,
    value: new MockLocalStorage()
  })

  export {}