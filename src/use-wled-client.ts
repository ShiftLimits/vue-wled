import { inject } from 'vue'
import { VueWLEDClient } from './types'
import { CLIENT_KEY } from './constants'

export function useWLEDClient() {
	const client = inject<VueWLEDClient>(CLIENT_KEY)
	if (!client) throw new Error('Unable to inject WLED Client.')
	return client
}
