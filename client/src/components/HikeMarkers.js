import { Marker, Popup } from "react-leaflet";

const HikeMarkers = ({hikes}) => {

  return (
    <>
      {hikes.map(
        hike => {
          return (
            <Marker
              key={hike.id}
              name={hike.name}
              position={hike.startPointCoordinates}
            >
              <Popup>
                <h3>{hike.name}</h3>
                <p>{hike.distance.km}km/{hike.distance.miles}miles</p>
                <p>{hike.time}</p>
                <p>{hike.difficulty}</p>
              </Popup>
            </Marker>
          )
        }
      )}
    </>
  )
}

export default HikeMarkers;