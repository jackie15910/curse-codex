function CurseEntry({ curse }) {
  if (!curse) return null;

  return (
    <div className="curse-entry">
      <h2>{curse.name}</h2>
      <p>{curse.description || 'No description yet.'}</p>
      <p><em>{curse.flavor || ''}</em></p>
      {curse.image && <img src={curse.image} alt={curse.name} />}
    </div>
  );
}

export default CurseEntry;