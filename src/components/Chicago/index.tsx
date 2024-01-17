import { FC } from "react";
import { Container, Content, Image } from "./styles";
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../assets/Mario_and_Adrian_B.jpg";

const Chicago: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          Little Lemon is a Mediterranean eatery, adorned with rustic charm and
          azure accents, offers a culinary journey through the region's vibrant
          flavors, featuring the richness of olive oil, sun-kissed tomatoes, and
          fresh herbs.
        </p>
        <p className="lead-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
      </Content>
      <Image>
        <img src={Mario_and_Adrian_A} alt="Mario and Adrian" />
        <img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
      </Image>
    </Container>
  );
};

export default Chicago;
