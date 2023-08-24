const ResourceLinks = ({ linkData }) => {
  return (
    <>
      <ul className="r-links-container">
        {linkData.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noreferrer noopener">
              <div className="r-individual-link">
                <div className="r-individual-link-name">{link.name}</div>
                <div className="r-individual-link-description">
                  {link.description}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResourceLinks;
