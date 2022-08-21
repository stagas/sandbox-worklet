/** @env browser */
import { SandboxNode } from '..'

const ctx = new AudioContext()

describe('SandboxNode', () => {
  it('works', async () => {
    const node = await SandboxNode.create(ctx)
    expect(node).toBeInstanceOf(SandboxNode)
  })

  it('evals', async () => {
    const node = await SandboxNode.create(ctx)
    expect(node).toBeInstanceOf(SandboxNode)
    const result = await node.eval(`
      return 1 + 1
    `)
    expect(result).toEqual(2)
  })
})
