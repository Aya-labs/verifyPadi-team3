import{e as u,w as m,aa as p}from"./index-OE56k1X-.js";import{a as l,U as d,R as w}from"./errors-3055a99c.browser.esm-nv5LXain.js";import{InjectedConnector as f}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-yG-y9jf8.js";import{a as g}from"./thirdweb-dev-wallets.browser.esm-oYsxdPUp.js";import"./url-bc88b2b6.browser.esm-bQ071zCC.js";import"./normalizeChainId-e4cc0175.browser.esm-3qrEAm98.js";import"./index.es-c5c7QnKt.js";import"./tslib.es6-GVow8CXj.js";class _ extends f{constructor(t){const n={...{name:"Core Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:g},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),u(this,"id",m.coreWallet)}async connect(){var r,n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new l;this.setupListeners(),this.emit("message",{type:"connecting"});let o=null;if((r=this.options)!=null&&r.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(o=await this.getAccount().catch(()=>null),!!o))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(h){if(this.isUserRejectedRequestError(h))throw new d(h)}if(!o){const s=await e.request({method:"eth_requestAccounts"});o=p(s[0])}let i=await this.getChainId(),c=this.isChainUnsupported(i);if(t.chainId&&i!==t.chainId)try{await this.switchChain(t.chainId),i=t.chainId,c=this.isChainUnsupported(t.chainId)}catch(s){console.error(`Could not switch to chain id : ${t.chainId}`,s)}(n=this.options)!=null&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const a={chain:{id:i,unsupported:c},provider:e,account:o};return this.emit("connect",a),a}catch(e){throw this.isUserRejectedRequestError(e)?new d(e):e.code===-32002?new w(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{_ as CoreWalletConnector};