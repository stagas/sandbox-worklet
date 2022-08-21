/** @env browser */
import { createSandbox } from '..'

describe('createSandbox', () => {
  it('works', async () => {
    const sandbox = await createSandbox()
    const result = await sandbox.eval('return 1 + 1')
    expect(result).toBe(2)
  })

  it('fails', async () => {
    const sandbox = await createSandbox()
    expect(() => sandbox.eval('fetch()')).rejects.toThrow('fetch is not defined')
  })

  // this works but is untestable because there is no way to catch the
  // `import() is disallowed` error, so it's commented out :/
  // it('import fails', async () => {
  //   const sandbox = await createSandbox()
  //   expect(() => sandbox.eval('import("./")')).rejects.toThrow('disallowed')
  // })

  it('destroy', async () => {
    const sandbox = await createSandbox()
    const result = await sandbox.eval('return 1 + 1')
    expect(result).toBe(2)
    sandbox.destroy()
    expect(() => sandbox.eval('return 1 + 1')).rejects.toThrow('destroyed')
  })
})
