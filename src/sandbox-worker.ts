import { rpc } from 'rpc-mini'

rpc(self as unknown as MessagePort, {
  async eval(code: string) {
    const fn = new Function(code)
    const result = await fn()
    return result
  },
})
