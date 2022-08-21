<h1>
sandbox-worklet <a href="https://npmjs.org/package/sandbox-worklet"><img src="https://img.shields.io/badge/npm-v1.1.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-98-FFF.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Eval untrusted JS in an AudioWorklet inside an unpriviledged iframe.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i sandbox-worklet </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add sandbox-worklet </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add sandbox-worklet</code>
</td></tr></table>
</h4>

## API

<p>  <details id="SandboxNode$15" title="Class" ><summary><span><a href="#SandboxNode$15">#</a></span>  <code><strong>SandboxNode</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="constructor$23" title="Constructor" ><summary><span><a href="#constructor$23">#</a></span>  <code><strong>constructor</strong></code><em>(context)</em>    </summary>  <a href=""></a>  <ul>    <p>  <details id="new SandboxNode$24" title="ConstructorSignature" ><summary><span><a href="#new SandboxNode$24">#</a></span>  <code><strong>new SandboxNode</strong></code><em>()</em>    </summary>    <ul><p><a href="#SandboxNode$15">SandboxNode</a></p>      <p>  <details id="context$25" title="Parameter" ><summary><span><a href="#context$25">#</a></span>  <code><strong>context</strong></code>    </summary>    <ul><p><span>BaseAudioContext</span></p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="rpc$26" title="Property" ><summary><span><a href="#rpc$26">#</a></span>  <code><strong>rpc</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Rpc</span></p>        </ul></details><details id="eval$27" title="Method" ><summary><span><a href="#eval$27">#</a></span>  <code><strong>eval</strong></code><em>(code)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="code$29" title="Parameter" ><summary><span><a href="#code$29">#</a></span>  <code><strong>code</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>eval</strong><em>(code)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details><details id="create$20" title="Method" ><summary><span><a href="#create$20">#</a></span>  <code><strong>create</strong></code><em>(context)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="context$22" title="Parameter" ><summary><span><a href="#context$22">#</a></span>  <code><strong>context</strong></code>    </summary>    <ul><p><span>BaseAudioContext</span></p>        </ul></details>  <p><strong>create</strong><em>(context)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;<a href="#SandboxNode$15">SandboxNode</a>&gt;</ul></p></p>    </ul></details><details id="register$17" title="Method" ><summary><span><a href="#register$17">#</a></span>  <code><strong>register</strong></code><em>(context)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="context$19" title="Parameter" ><summary><span><a href="#context$19">#</a></span>  <code><strong>context</strong></code>    </summary>    <ul><p><span>BaseAudioContext</span></p>        </ul></details>  <p><strong>register</strong><em>(context)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;void&gt;</ul></p></p>    </ul></details></p></ul></details><details id="Sandbox$1" title="TypeAlias" ><summary><span><a href="#Sandbox$1">#</a></span>  <code><strong>Sandbox</strong></code>    </summary>  <a href=""></a>  <ul><p>{<p>  <details id="destroy$7" title="Property" ><summary><span><a href="#destroy$7">#</a></span>  <code><strong>destroy</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$8" title="Function" ><summary><span><a href="#__type$8">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p>        </ul></details><details id="eval$3" title="Property" ><summary><span><a href="#eval$3">#</a></span>  <code><strong>eval</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$4" title="Function" ><summary><span><a href="#__type$4">#</a></span>  <em>(code)</em>    </summary>    <ul>    <p>    <details id="code$6" title="Parameter" ><summary><span><a href="#code$6">#</a></span>  <code><strong>code</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong></strong><em>(code)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;any&gt;</ul></p></p>    </ul></details></p>        </ul></details><details id="ondestroy$10" title="Property" ><summary><span><a href="#ondestroy$10">#</a></span>  <code><strong>ondestroy</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$11" title="Function" ><summary><span><a href="#__type$11">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p>        </ul></details></p>}</p>        </ul></details><details id="createSandbox$13" title="Function" ><summary><span><a href="#createSandbox$13">#</a></span>  <code><strong>createSandbox</strong></code><em>()</em>    </summary>  <a href=""></a>  <ul>    <p>      <p><strong>createSandbox</strong><em>()</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;<a href="#Sandbox$1">Sandbox</a>&gt;</ul></p></p>    </ul></details></p>

## Credits

- [rpc-mini](https://npmjs.org/package/rpc-mini) by [stagas](https://github.com/stagas) &ndash; A mini RPC for MessagePort interfaces.

## Contributing

[Fork](https://github.com/stagas/sandbox-worklet/fork) or [edit](https://github.dev/stagas/sandbox-worklet) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
