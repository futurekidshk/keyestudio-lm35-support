/**
 * Helper blocks to make the temperature sensor easier to use.
 * This means that directly accessing information from the pins is not required.
 */
//% block="LM35 Temperature Sensor"
namespace keyestudioLM35 {
    let s_pin: AnalogPin | null = null;

    /**
     * Sets the pins to control the temperature sensor.
     */
    //% block="set pin S:$s"
    //% weight=100
    export function setPin(s: AnalogPin): void {
        s_pin = s
    }

    /**
     * Get the current temperature from the temperature sensor.
     * If a pin is not defined, the temperature 0 is returned.
     */
    //% block="get temperature"
    //% weight=99
    export function getTemperature(): number {
        if (s_pin === null) {
            return 0
        }
        return Math.idiv(300 * pins.analogReadPin(s_pin), 1023)
    }
}
