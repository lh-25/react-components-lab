import './WeatherForcast.css'

export default function WeatherForecast (props) {

  return (
    <div className="weather">
      <h2>{props.weatherForecast.day}</h2>
      <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt} />
      <p><span>Conditions:</span> {props.weatherForecast.conditions} </p>
      <p><span>Time:</span> {props.weatherForecast.time}</p>
    </div>
  )
}