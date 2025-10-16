import { useEffect } from 'react';

const TimelinePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Timeline | Spectre Divide Memorial';
  }, []);

  const timelineEvents = [
    { year: '2020', title: 'EVENT TITLE', description: 'Placeholder text for event description. Details about what happened on this date would go here.' },
    { year: '2021', title: 'EVENT TITLE', description: 'Placeholder text for event description. Details about what happened on this date would go here.' },
    { year: '2022', title: 'EVENT TITLE', description: 'Placeholder text for event description. Details about what happened on this date would go here.' },
    { year: '2023', title: 'EVENT TITLE', description: 'Placeholder text for event description. Details about what happened on this date would go here.' },
    { year: '2024', title: 'EVENT TITLE', description: 'Placeholder text for event description. Details about what happened on this date would go here.' },
    { year: '2025', title: 'EVENT TITLE', description: 'Placeholder text for event description. Details about what happened on this date would go here.' },
  ];

  return (
    <div id="timeline" className="tab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Timeline</h2>
          <p className="section-description">Key dates and events from the game's history.</p>
        </div>

        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <p className="timeline-date">{event.year}</p>
                <h3 className="timeline-title">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
