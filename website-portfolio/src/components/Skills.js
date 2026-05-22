const PROGRAMMING_LANGUAGES = [
  { name: 'Python', icon: 'fab fa-python', color: '#306998' },
  { name: 'C#', image: '/csharp_img.png' },
  { name: 'C++', image: '/c++_img.png' },
  { name: 'C', image: '/c_img.png' },
  { name: 'Java', image: '/java_icon.png' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
  { name: 'XAML', image: '/xaml.png' },
  { name: 'Solidity', image: '/solidity.png' },
  { name: 'CSS', image: '/css.png' },
  { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
  { name: 'SQL', image: '/sql.png' },
  { name: 'Assembly', image: '/assembly.png' },
  { name: 'Swift', image: '/swift.png' },
];

const FRAMEWORKS = [
  { name: 'Node.js', icon: 'fab fa-node', color: '#8CC84B' },
  { name: 'Next.js', image: '/nextjs.png' },
  { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
  { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38BDF8' },
  { name: 'Jest', image: '/jest.png' },
];

const TOOLS = [
  { name: 'Visual Studio', icon: 'fab fa-microsoft', color: '#5C2D91' },
  { name: 'VS Code', icon: 'fab fa-microsoft', color: '#007ACC' },
  { name: 'Linux / Bash', icon: 'fab fa-linux', color: '#FCC624' },
  { name: 'PowerShell', icon: 'fas fa-terminal', color: '#5391FE' },
  { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
  { name: 'Prisma', icon: 'fas fa-layer-group', color: '#2D3748' },
  { name: 'REST APIs', icon: 'fas fa-network-wired', color: '#22D3EE' },
  { name: 'Postman', icon: 'fas fa-paper-plane', color: '#FF6C37' },
  { name: 'Qt Creator', image: '/qtcreator.png' },
  { name: 'MySQL', image: '/mysql.png' },
  { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
  { name: 'PostgreSQL', icon: 'fas fa-database', color: '#4169E1' },
  { name: 'Supabase', icon: 'fas fa-bolt', color: '#3ECF8E' },
  { name: 'AWS', icon: 'fab fa-amazon', color: '#FF9900' },
  { name: 'Vercel', image: '/vercel.png' },
  { name: 'Unity', icon: 'fab fa-unity', color: '#ffffff' },
  { name: 'Godot', icon: 'fas fa-gamepad', color: '#478CBF' },
  { name: 'Remix', icon: 'fas fa-code', color: '#8B5CF6' },
  { name: 'Pandas', icon: 'fas fa-table', color: '#150458' },
  { name: 'NumPy', icon: 'fas fa-square-root-variable', color: '#4D77CF' },
  { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759B' },
  { name: 'NameCheap', image: '/namecheap.png' },
  { name: 'EasyWP', image: '/easywp.png' },
  { name: 'Jira / Confluence', icon: 'fab fa-atlassian', color: '#0052CC' },
  { name: 'GitLab', icon: 'fab fa-gitlab', color: '#FCA121' },
  { name: 'GitHub', icon: 'fab fa-github', color: '#8957e5' },
  { name: 'GitHub Actions', icon: 'fab fa-github', color: '#2088FF' },
];

const GROUPS = [
  { title: 'Programming Languages', items: PROGRAMMING_LANGUAGES },
  { title: 'Frameworks', items: FRAMEWORKS },
  { title: 'Tools & Applications', items: TOOLS },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">What I work with</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            The languages, frameworks, and tools I reach for to ship software.
          </p>
        </div>

        {GROUPS.map((group) => (
          <div className="skills-group reveal" key={group.title}>
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-grid">
              {group.items.map((item) => (
                <div className="skill-tile" key={item.name}>
                  <span className="skill-icon">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <i className={item.icon} style={{ color: item.color }} />
                    )}
                  </span>
                  <span className="skill-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
