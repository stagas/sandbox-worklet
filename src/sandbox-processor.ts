import { rpc } from 'rpc-mini'

export class SandboxProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    rpc(this.port, this as any)
  }

  eval(code: string) {
    return new Function(code)()
  }

  process() {
    return true
  }
}

registerProcessor('sandbox', SandboxProcessor)
