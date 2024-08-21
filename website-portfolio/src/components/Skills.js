function Skills() {
  const programmingLanguages = [
    { name: 'Python', icon: 'fab fa-python', color: '#306998' },
    { name: 'C#', image: '/csharp_img.png' }, 
    { name: 'C++', image: '/c++_img.png' }, 
    { name: 'C', image: '/c_img.png' }, 
    { name: 'Java', icon: 'fas fa-code', color: '#00599C' },
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'yellow' },
    { name: 'XAML', image: '/xaml.png' }, 
    { name: 'Solidity', image: '/solidity.png' }, 
    { name: 'CSS', image: '/css.png' }, 
    { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
    { name: 'SQL', image: '/sql.png' }, 
    { name: 'Blazor', image: '/blazor.png' }, 
    { name: 'Assembly', image: '/assembly.png' }, 
    { name: 'Swift', image: '/swift.png' }, 
  ];

  const applications = [
    { name: 'Visual Studio', icon: 'fab fa-microsoft', color: '#5C2D91' },
    { name: 'Visual Code', icon: 'fab fa-microsoft', color: '#007ACC' },
    { name: 'Git', icon: 'fab fa-git', color: '#F05032' },
    { name: 'GitLab', icon: 'fab fa-gitlab', color: '#FCA121' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#5C2D91' },
    { name: 'GitHub Actions', icon: 'fab fa-github', color: '#2088FF' },
    { name: 'NameCheap', image: '/namecheap.png' }, 
    { name: 'EasyWP', image: '/easywp.png' }
  ];

  const frameworks = [
    { name: 'Qt Creator', image: '/qtcreator.png' }, 
    { name: 'MySQL', image: '/mysql.png' }, 
    { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
    { name: 'AWS', icon: 'fab fa-amazon', color: '#FF9900' },
    { name: 'Vercel', image: '/vercel.png' }, 
    { name: 'Node.js', icon: 'fab fa-node', color: '#8CC84B' },
    { name: 'Next.js', image: '/nextjs.png' }, 
    { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Jest', icon: 'fas fa-vial', color: '#C2135D' },
    { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759B' },
  ];

  const renderSection = (title, items) => (
    <div>
      <h3 className="text-center">{title}</h3>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-2 mb-4" key={index}>
            <div className="card text-center border-0">
              <div className="card-body">
                {item.image ? (
                  <img src={item.image} alt={item.name} style={{ width: '3rem', height: '3rem' }} />
                ) : (
                  <i className={`${item.icon} fa-3x`} style={{ color: item.color }}></i>
                )}
                <h6 className="card-title">{item.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      {renderSection('Programming Languages', programmingLanguages)}
      {renderSection('Applications', applications)}
      {renderSection('Frameworks/Tools', frameworks)}
    </div>
  );
}

export default Skills;
