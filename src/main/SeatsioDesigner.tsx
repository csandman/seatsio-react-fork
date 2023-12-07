import Embeddable from './Embeddable'
import { ChartDesigner, ChartDesignerConfigOptions, Seatsio } from '@seatsio/seatsio-types'

export default class SeatsioDesigner extends Embeddable<ChartDesignerConfigOptions, ChartDesigner> {
    createChart (seatsio: Seatsio, config: ChartDesignerConfigOptions) {
        return new seatsio.SeatingChartDesigner(config)
    }
}