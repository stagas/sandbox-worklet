import { SandboxNode } from './sandbox-node'

self.onmessage = async e => {
  self.onmessage = null

  const [port2] = e.ports

  const ctx = new OfflineAudioContext({ length: 1, sampleRate: 3000 })
  const node = await SandboxNode.create(ctx)

  node.port.onmessage = ({ data }) => port2.postMessage(data)
  port2.onmessage = ({ data }) => node.port.postMessage(data)
}
