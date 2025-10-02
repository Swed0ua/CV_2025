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
  return (
    <div
      key={`${itemIndex}-${icon.id}`}
      className="tech-icon"
      style={{
        backgroundColor: icon.color,
        width: size.width,
        height: size.height,
      }}
    >
      <span className="tech-icon-text">{icon.name}</span>
    </div>
  );
}

export default TechRowItem;
