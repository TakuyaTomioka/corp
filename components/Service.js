import ServiceCard from './ServiceCard';

const Service = ({ services }) => {
  return (
    <div>
      <h2>ちょっと解決</h2>
      <ServiceCard
        services={services}
      />
    </div>
  )
};

export default Service;