interface ServiceItemProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

function ServiceItem({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: ServiceItemProps) {
  return <div>ServiceItem</div>;
}

export default ServiceItem;
