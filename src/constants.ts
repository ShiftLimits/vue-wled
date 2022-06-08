import { WLEDClientContext } from 'wled-client'

export const CLIENT_KEY = Symbol('__WLED_CLIENT__')

export const DEFAULT_CLIENT_CONTEXT:WLEDClientContext = {
	state: {
		nightlight: {},
		udpSync: {},
		segments: []
	},
	info: {
		leds: {},
		wifi: {},
		fs: {}
	},
	effects: [],
	palettes: [],
	presets: {},
	deviceOptions: {},
	lightCapabilities: {},
	live: {
		leds: false
	},
	config: {}
}