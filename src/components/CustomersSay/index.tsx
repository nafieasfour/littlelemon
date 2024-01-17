import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What ours customers say!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Ali"
          testimonial="Exceptional dining experience at Little Lemon! Impeccable service, exquisite presentation, and each dish was a masterpiece of flavors that delighted the palate."
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Alice"
          testimonial="A culinary symphony at Little Lemon! From the first bite to the last, every dish showcased a harmonious blend of textures and tastes, complemented by an attentive staff!"
        />
        <CustomersSayCard
          rating={3}
          customerImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Leo"
          testimonial="Dining at Little Lemon was an absolute delight! The ambiance was sophisticated, the staff was knowledgeable, and the innovative menu"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Elithabeth"
          testimonial="An unforgettable evening at Little Lemon! The attention to detail in both presentation and service was remarkable, and the culinary creations were a testament to the chef's artistry"
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;