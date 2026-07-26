type Props = {
  latitude: number;
  longitude: number;
};

export default function LocationInfo({
  latitude,
  longitude,
}: Props) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>クリックした場所</h2>

      <p>緯度: {latitude.toFixed(6)}</p>

      <p>経度: {longitude.toFixed(6)}</p>
    </div>
  );
}