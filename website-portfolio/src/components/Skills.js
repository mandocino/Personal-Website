function Skills({ isDarkMode }) {
  const programmingLanguages = [
    { name: 'Python', icon: 'fab fa-python', color: '#306998' },
    { name: 'C#', image: '/csharp_img.png' },
    { name: 'C++', image: '/c++_img.png' },
    { name: 'C', image: '/c_img.png' },
    { name: 'Java', image: '/java_icon.png' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'yellow' },
    { name: 'XAML', image: '/xaml.png' },
    { name: 'Solidity', image: '/solidity.png' },
    { name: 'CSS', image: '/css.png' },
    { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
    { name: 'SQL', image: '/sql.png' },
    { name: 'Assembly', image: '/assembly.png' },
    { name: 'Swift', image: '/swift.png' },
  ];

  const frameworks = [
    { name: 'Node.js', icon: 'fab fa-node', color: '#8CC84B' },
    { name: 'Next.js', image: '/nextjs.png' },
    { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Jest', image: '/jest.png' },
  ];

  const toolsApplications = [
    { name: 'Visual Studio', icon: 'fab fa-microsoft', color: '#5C2D91' },
    { name: 'VS Code', icon: 'fab fa-microsoft', color: '#007ACC' },
    { name: 'Qt Creator', image: '/qtcreator.png' },
    { name: 'MySQL', image: '/mysql.png' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
    { name: 'AWS', icon: 'fab fa-amazon', color: '#FF9900' },
    { name: 'Vercel', image: '/vercel.png' },
    { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759B' },
    { name: 'NameCheap', image: '/namecheap.png' },
    { name: 'EasyWP', image: '/easywp.png' },
    { name: 'GitLab', icon: 'fab fa-gitlab', color: '#FCA121' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#5C2D91' },
    { name: 'GitHub Actions', icon: 'fab fa-github', color: '#2088FF' },
  ];

  const renderSection = (title, items) => (
    <div>
      <h3 id="skills" className={`section text-center mb-4 ${isDarkMode ? 'text-White' : 'bg-light'}`}>{title}</h3>
      <div className="row justify-content-center">
        {items.map((item, index) => (
          <div className="col-2 mb-1" key={index}>
            <div className="card-skills text-center border-0 p-1">
              <div className="card-body p-2 icon-text-wrapper">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="interactive-icon" style={{ width: '2.5rem', height: '2.5rem' }} />
                ) : (
                  <i className={`${item.icon} fa-2x interactive-icon`} style={{ color: item.color }}></i>
                )}
                <h6 className={`card-title mt-1 interactive-text ${isDarkMode ? 'text-White' : 'bg-light'}`}>{item.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <hr className={`${isDarkMode ? 'text-White' : 'bg-light'}`} />
      {renderSection('Programming Languages', programmingLanguages)}
      {renderSection('Frameworks', frameworks)}
      {renderSection('Tools/Applications', toolsApplications)}
    </div>
  );
}

export default Skills;
