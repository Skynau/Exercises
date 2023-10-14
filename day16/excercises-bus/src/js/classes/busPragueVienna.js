export class busPragueVienna {
    constructor(direction, stations, seats, passengers, last_station) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station;
    }

    current() {
        return this.stations[this.last_station]
    }
    next() {
        return this.last_station++
    }
    board(count) {
       if (count <= (this.seats - this.passengers)) {
        return this.passengers + count
        } else {
            return this.passengers + (this.seats - this.passengers)
        }
    }
    deboard(count) {
        if (this.passengers >= count) {
            return this.passengers - count
        } else {
            return this.passengers = 0
        }
    }
}