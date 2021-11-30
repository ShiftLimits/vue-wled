import { Ref } from 'vue'
import { WLEDClient } from 'wled-client'

export interface VueWLEDClient extends Omit<WLEDClient, 'addEventListener'|'removeEventListener'|'on'|'off'|'once'|'emit'|'dispatchEvent'> {
	connecting:Ref<boolean>
}
