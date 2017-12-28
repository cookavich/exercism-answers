const EARTH_ORBIT = 31557600;

export default class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarth() {
    return this.calculateAge(1)
  }

  onMercury() {
    return this.calculateAge(0.2408467)
  }

  onVenus() {
    return this.calculateAge(0.61519726)
  }

  onMars() {
    return this.calculateAge(1.8808158)
  }

  onJupiter() {
    return this.calculateAge(11.862615)
  }

  onSaturn() {
    return this.calculateAge(29.447498)
  }

  onUranus() {
    return this.calculateAge(84.016846)
  }

  onNeptune() {
    return this.calculateAge(164.79132)
  }

  calculateAge(earthOrbitRatio) {
    return Number(((this.seconds / EARTH_ORBIT) / earthOrbitRatio).toFixed(2))
  }
}
