import { Ref } from 'vue'
import { WLEDClient, WLEDClientLiveLEDs } from 'wled-client'

export interface VueWLEDClient extends Omit<WLEDClient, 'addEventListener'|'removeEventListener'|'on'|'off'|'once'|'emit'|'dispatchEvent'> {
	connecting:Ref<boolean>,
	onLiveLEDs(callback:(leds:WLEDClientLiveLEDs)=>void):void
}
