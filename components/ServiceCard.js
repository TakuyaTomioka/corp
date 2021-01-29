import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = ({ services }) => {
  return (
    <div>
      {services.map(service => (
        <Link href="/services/[id]" as={`services/${service.id}`} key={service.id}>
          <a>
            <img src={service.image.url} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </a>
        </Link>
      ))}
    </div>
  )
}


export default Card;