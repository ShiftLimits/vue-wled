import { Plugin, reactive, ref } from 'vue'
import { WLEDClient, WLEDClientDeviceOptions, WLEDClientEffects, WLEDClientInfo, WLEDClientLive, WLEDClientPalettes, WLEDClientPresets, WLEDClientState } from 'wled-client'
import { CLIENT_KEY, DEFAULT_CLIENT_CONTEXT } from './constants'
import { VueWLEDClient } from './types'
import { deepMerge } from './utils'


export * from './use-wled-client'
export { CLIENT_KEY } from './constants'
export function wledClientPlugin(client:WLEDClient):Plugin {
	const connecting = ref(true)

	const state = reactive<WLEDClientState>(DEFAULT_CLIENT_CONTEXT.state)
	const info = reactive<WLEDClientInfo>(DEFAULT_CLIENT_CONTEXT.info)
	const effects = reactive<WLEDClientEffects>(DEFAULT_CLIENT_CONTEXT.effects)
	const palettes = reactive<WLEDClientPalettes>(DEFAULT_CLIENT_CONTEXT.palettes)
	const presets = reactive<WLEDClientPresets>(DEFAULT_CLIENT_CONTEXT.presets)
	const deviceOptions = reactive<WLEDClientDeviceOptions>(DEFAULT_CLIENT_CONTEXT.deviceOptions)
	const live = reactive<WLEDClientLive>(DEFAULT_CLIENT_CONTEXT.live)

	client.isReady.then(() => {
		deepMerge(state, client.state)
		deepMerge(info, client.info)
		deepMerge(effects, client.effects)
		deepMerge(palettes, client.palettes)
		deepMerge(presets, client.presets)
		deepMerge(deviceOptions, client.deviceOptions)
		deepMerge(live, client.live)
		connecting.value = false
	})
	client.on('update:state', (new_state) => deepMerge(state, new_state))
	client.on('update:info', (new_info) => deepMerge(info, new_info))
	client.on('update:effects', (new_effects) => deepMerge(effects, new_effects))
	client.on('update:palettes', (new_palettes) => deepMerge(palettes, new_palettes))
	client.on('update:presets', (new_presets) => deepMerge(presets, new_presets))
	client.on('update:live', (new_live) => deepMerge(live, new_live))

	const client_api:VueWLEDClient = {
		connecting,
		state,
		info,
		effects,
		palettes,
		presets,
		deviceOptions,
		live,
		get wsReadyState() { return client!.wsReadyState },
		isReady:client.isReady,
		refreshContext: client.refreshContext.bind(client),
		updateState: client.updateState.bind(client),
		buildStateWithSegments: client.buildStateWithSegments.bind(client),
		turnOn: client.turnOn.bind(client),
		turnOff: client.turnOff.bind(client),
		toggle: client.toggle.bind(client),
		setBrightness: client.setBrightness.bind(client),
		connect: client.connect.bind(client),
		disconnect: client.disconnect.bind(client),
		allowLiveData: client.allowLiveData.bind(client),
		ignoreLiveData:client.ignoreLiveData.bind(client),
		clearSegments: client.clearSegments.bind(client),
		createSegment: client.createSegment.bind(client),
		deleteSegment: client.deleteSegment.bind(client),
		getSegment: client.getSegment.bind(client),
		nightlight: {
			get state() { return state.nightlight },
			disable:client.nightlight.disable.bind(client),
			enable:client.nightlight.enable.bind(client),
			setDuration:client.nightlight.setDuration.bind(client),
			setMode:client.nightlight.setMode.bind(client),
			setTargetBrightness:client.nightlight.setTargetBrightness.bind(client),
			toggle:client.nightlight.toggle.bind(client)
		},
		setColor:client.setColor.bind(client),
		setPrimaryColor:client.setPrimaryColor.bind(client),
		setSecondaryColor:client.setSecondaryColor.bind(client),
		setTertiaryColor:client.setTertiaryColor.bind(client),
		setEffect:client.setEffect.bind(client),
		setEffectSpeed:client.setEffectSpeed.bind(client),
		setEffectIntensity:client.setEffectIntensity.bind(client),
		setMainSegmentId:client.setMainSegmentId.bind(client),
		setPalette:client.setPalette.bind(client),
		getPalettesData:client.getPalettesData.bind(client),
		setPlaylist:client.setPlaylist.bind(client),
		setSegments:client.setSegments.bind(client),
		setTransitionTime:client.setTransitionTime.bind(client),
		startLEDStream:client.startLEDStream.bind(client),
		stopLEDStream:client.stopLEDStream.bind(client),
		toggleLEDStream:client.toggleLEDStream.bind(client),
		updateSegment:client.updateSegment.bind(client),
		getPreset:client.getPreset.bind(client),
		setPreset:client.setPreset.bind(client),
		savePreset:client.savePreset.bind(client),
		saveStateAsPreset:client.saveStateAsPreset.bind(client),
		deletePreset:client.deletePreset.bind(client),
		enableUDPSync:client.enableUDPSync.bind(client),
		disableUDPSync:client.disableUDPSync.bind(client),
		reboot:client.reboot.bind(client),
	}

	return {
		install(app) {
			app.provide(CLIENT_KEY, client_api)
		}
	}
}
