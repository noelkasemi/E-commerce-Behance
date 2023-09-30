export default function Option({data, error, onChange, value}) {
    return (
        <select value={value} onChange={onChange} className="border-2 border-gray-300 rounded-lg px-4 py-1 w-full">
            {error ? (
        <p>{error}</p>
      ) : (
        data.map((category, index) => (
          <option key={index}>{category}</option>
        ))
      )}
        </select>
    )
}