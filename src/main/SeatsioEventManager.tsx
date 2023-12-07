import { EventManager, EventManagerConfigOptions, Seatsio } from '@seatsio/seatsio-types'
import Embeddable from './Embeddable'

export default class SeatsioEventManager extends Embeddable<EventManagerConfigOptions, EventManager> {
    createChart (seatsio: Seatsio, config: EventManagerConfigOptions) {
        return new seatsio.EventManager(config)
    }
}