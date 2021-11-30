# Vue WLED

A Vue 3 plugin to integrate WLED devices with your Vue 3 application.

## Installation

Install WLED Client and Vue WLED:

```bash
$ npm install wled-client @wled-client/vue
```

Then in your app, create the WLED Client instance and pass it to the WLED Client Vue Plugin:

```js
const { createApp } = require('vue')
const { wledClientPlugin } = require('vue-wled')

const app = createApp(App)

const wledClient = new WLEDClient('<Your Device IP>')
app.use(wledClientPlugin(wledClient))

app.mount('#app')
```

## Usage

In your components you can now use the composable `useWLEDCLient`:

```vue
<script setup>
	const { state, reboot } = useWLEDClient()
</script>

<template>
	<div>Device on state: {{ state.on }}</div>
	<button @click="reboot">Reboot</button>
</template>
```

## License

Vue WLED is [MIT](LICENSE) licensed.
