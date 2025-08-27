import React, { useEffect, useRef } from 'react';
import { TimelineItem as TimelineItemType } from '../../types';

interface TimelineProps {
  items: TimelineItemType[];
}

const TimelineComponent: React.FC<TimelineProps> = ({ items }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const timelineItems = timeline.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target as HTMLElement;
            const index = Array.from(timelineItems).indexOf(item);
            
            setTimeout(() => {
              item.classList.add('animate-in');
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <div className="timeline-year">{item.year}</div>
            <h4 className="timeline-title">{item.title}</h4>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;