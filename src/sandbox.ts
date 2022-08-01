import { rpc } from 'rpc-mini'

export type Sandbox = {
  eval: (code: string) => Promise<any>
  destroy: () => void
  ondestroy?: () => void
}

export const createSandbox = () => {
  const iframe = document.createElement('iframe')

  iframe.setAttribute('sandbox', 'allow-scripts')

  iframe.setAttribute(
    'csp',
    [
      `default-src 'none'`,
      `object-src 'none'`,
      `script-src 'unsafe-eval'`,
      `script-src-elem 'self' 'unsafe-inline'`,
    ].join(';')
  )

  // @ts-ignore
  const src = new URL('sandbox-iframe.js', import.meta.url).href

  iframe.style.display = 'none'
  iframe.srcdoc = `<script src="${src}" type="module"></script>`
  document.body.appendChild(iframe)

  return new Promise<Sandbox>(resolve => {
    iframe.onload = () => {
      const { port1, port2 } = new MessageChannel()
      iframe.contentWindow!.postMessage('init', '*', [port2])
      let remote = rpc(port1)
      resolve({
        eval: (code: string) => remote('eval', code),
        destroy(this: Sandbox) {
          remote = async () => {
            throw new Error('Sandbox has been destroyed.')
          }
          iframe.remove()
          this.ondestroy?.()
        },
      })
    }
  })
}
