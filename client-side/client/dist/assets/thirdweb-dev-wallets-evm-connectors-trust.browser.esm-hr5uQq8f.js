import{InjectedConnector as s}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-yG-y9jf8.js";import{b as e}from"./index-OE56k1X-.js";import"./url-bc88b2b6.browser.esm-bQ071zCC.js";import"./errors-3055a99c.browser.esm-nv5LXain.js";import"./normalizeChainId-e4cc0175.browser.esm-3qrEAm98.js";class T extends s{constructor(t){const i={...{name:"Trust",getProvider(){var n;function r(o){if(o!=null&&o.isTrust)return o}if(e(globalThis.window))return(n=globalThis.window.ethereum)!=null&&n.providers?globalThis.window.ethereum.providers.find(r):r(globalThis.window.ethereum)}},...t.options};super({chains:t.chains,options:i,connectorStorage:t.connectorStorage})}}export{T as TrustConnector};