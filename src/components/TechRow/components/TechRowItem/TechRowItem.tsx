import { TechIcon } from '../../TechRowTypes';

interface TechRowItemProps {
  itemIndex: number;
  icon: TechIcon;
  size: {
    height: number;
    width: number;
  };
}

export function TechRowItem({ itemIndex, icon, size }: TechRowItemProps) {
  const handleClick = () => {
    if (icon.url) {
      window.open(icon.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      key={`${itemIndex}-${icon.id}`}
      className={`tech-icon ${icon.url ? 'tech-icon-clickable' : ''}`}
      title={icon.name || 'Tech icon'}
      onClick={handleClick}
      style={{
        backgroundColor: icon.color,
        width: size.width,
        height: size.height,
      }}
    >
      <img
        src={icon.imagePath}
        alt={icon.name || 'Tech icon'}
        className="tech-icon-image"
        title={icon.name || 'Tech icon'}
      />
      {icon.name && <span className="tech-icon-text">{icon.name}</span>}
    </div>
  );
}

export default TechRowItem;
