import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
const position = [51.505, -0.09]
const map_view = () => {
return <div className="container">
   <MapContainer
 center={position} zoom={13} scrollWheelZoom={true}>
<TileLayer
  attribution='&copy; <a href="http://osm.org/copyright">'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position}>
  <Popup>
    Junior. <br /> Denuncia.
  </Popup>
</Marker>
</MapContainer>
</div>
}
export default map_view;