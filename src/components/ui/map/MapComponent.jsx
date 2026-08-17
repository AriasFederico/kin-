export const MapComponent = ({ coordenates }) => {
  // Soporta objeto { lat, lng } o string (ej: "-34.9244,-57.9704" o "Av. Corrientes 1234")
  const queryLocation =
    typeof coordenates === 'object' && coordenates !== null
      ? `${coordenates.lat},${coordenates.lng}`
      : coordenates;

  const encodedQuery = encodeURIComponent(queryLocation);

  return (
    <div style={{ width: '100%' }}>
      <iframe
        title='Mapa de ubicación'
        width='100%'
        height='350'
        style={{ border: 0 }}
        loading='lazy'
        allowFullScreen
        src={`https://maps.google.com/maps?q=${encodedQuery}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
      />
    </div>
  );
};
