function Props({ title, description }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Props;
