function flipArgs(func) {
  return (...args) => {
    func(...Array.from(args).reverse());
  };
}

export { flipArgs };
