function Tags({ tags }) {
  return (
    <div className="tagsPanel">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag.split(" ")[0]}
        </span>
      ))}
    </div>
  );
}
export default Tags;
