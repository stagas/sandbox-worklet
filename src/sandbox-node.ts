import { Rpc, rpc } from 'rpc-mini'

export class SandboxNode extends AudioWorkletNode {
  private static hasRegistered = false

  static async register(context: BaseAudioContext) {
    if (this.hasRegistered) return
    // @ts-ignore
    await context.audioWorklet.addModule(new URL('./sandbox-processor.js', import.meta.url).href)
    this.hasRegistered = true
  }

  static async create(context: BaseAudioContext) {
    await this.register(context)
    return new this(context)
  }

  rpc: Rpc

  constructor(context: BaseAudioContext) {
    super(context, 'sandbox')
    this.rpc = rpc(this.port)
  }

  eval(code: string) {
    return this.rpc('eval', code)
  }
}
