import DailyForecast from "./DailyForecast"
import DataWeather from "../data/DataWeather"

const WeeklyForecast = () => {
    return (
    <>
        <div className="week-forecast">
        <DailyForecast weekday={DataWeather[0].weekday} weather={DataWeather[0].weather} tempDay={DataWeather[0].tempDay} tempNight={DataWeather[0].tempNight} />
        <DailyForecast weekday={DataWeather[1].weekday} weather={DataWeather[1].weather} tempDay={DataWeather[1].tempDay} tempNight={DataWeather[1].tempNight} />
        <DailyForecast weekday={DataWeather[2].weekday} weather={DataWeather[2].weather} tempDay={DataWeather[2].tempDay} tempNight={DataWeather[2].tempNight} />
        <DailyForecast weekday={DataWeather[3].weekday} weather={DataWeather[3].weather} tempDay={DataWeather[3].tempDay} tempNight={DataWeather[3].tempNight} />
        <DailyForecast weekday={DataWeather[4].weekday} weather={DataWeather[4].weather} tempDay={DataWeather[4].tempDay} tempNight={DataWeather[4].tempNight} />
        <DailyForecast weekday={DataWeather[5].weekday} weather={DataWeather[5].weather} tempDay={DataWeather[5].tempDay} tempNight={DataWeather[5].tempNight} />
        <DailyForecast weekday={DataWeather[6].weekday} weather={DataWeather[6].weather} tempDay={DataWeather[6].tempDay} tempNight={DataWeather[6].tempNight} />
        </div>
    </>
    )
}

export default WeeklyForecast