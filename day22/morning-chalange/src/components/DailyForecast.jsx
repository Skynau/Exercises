const DailyForecast = ({weekday, weather, tempDay, tempNight}) => {

    return (
    <div class="day-forecast">
        <div className="day-forecast__header">{weekday}</div>
        <div className="day-forecast__body">
          <div className={weather}></div>
          <div className="day-forecast__temps">
            <span className="temp-day">{tempDay}°</span>
            <span className="temp-night">{tempNight}°</span>
          </div>
        </div>
      </div>

    )
}

export default DailyForecast