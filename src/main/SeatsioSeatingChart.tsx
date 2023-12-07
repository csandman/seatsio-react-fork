import { ChartRendererConfigOptions, SeatingChart, Seatsio } from '@seatsio/seatsio-types'
import Embeddable from './Embeddable'

export default class SeatsioSeatingChart extends Embeddable<ChartRendererConfigOptions, SeatingChart> {
    createChart (seatsio: Seatsio, config: ChartRendererConfigOptions) {
        return new seatsio.SeatingChart(config)
    }
}