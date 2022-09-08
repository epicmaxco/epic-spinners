export const defineLibBuild = (cb: () => void | Promise<void>) => {
  const r = cb()
  if (r && r.then) {
    r.then(() => process.exit(0))
    r.catch((e) => {
      console.error(e)
      process.exit(1)
    })
  }
}
