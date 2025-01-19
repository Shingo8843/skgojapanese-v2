export default function Volunteers() {
    const members = [
      { name: "Shingo Morita", role: "Project Leader", image: "/images/Shingo.jpg" },
      { name: "Keigo Morita", role: "Website Manager", image: "/images/Keigo.jpg" },
      { name: "Yura Yamagishi", role: "Volunteer", image: "/images/Yura.jpeg" },
      { name: "Riki Ishida", role: "Volunteer", image: "/images/Riki.jpg" },
      { name: "Yuma Kai", role: "Volunteer", image: "/images/Yuma.png" },
    ];
  
    return (
      <section id="volunteers">
        <h2>Volunteers</h2>
        <div className="volunteers-grid">
          {members.map((member, index) => (
            <div key={index} className="volunteer-card">
              <div
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                  aspectRatio: "4/5",
                  width: "100%",
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  