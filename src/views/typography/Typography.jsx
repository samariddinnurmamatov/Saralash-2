import { Fragment } from "react";
import SectionContainer from "./components/SectionContainer";
import Header from "./containers/Header";
import TypographySection from "./containers/TypographySection";
import { TypographyHeading } from "./components/TypographyHeading";
import { TypographyParagraph } from "./components/TypographyParagraph";

const Typography = () => {
  return (
    <Fragment>
      <Header />
      <section className="typography py-10">
        <SectionContainer>
          <div>
            <TypographySection title="Typography (Heading)">
              <hr />
              <TypographyHeading level={1}>H1 Heading</TypographyHeading>
              <TypographyHeading level={2}>H2 Heading</TypographyHeading>
              <TypographyHeading level={3}>H3 Heading</TypographyHeading>
              <TypographyHeading level={4}>H4 Heading</TypographyHeading>
              <TypographyHeading level={5}>H5 Heading</TypographyHeading>
              <TypographyHeading level={6}>H6 Heading</TypographyHeading>
            </TypographySection>

            <TypographySection title="Paragraph">
              <hr />
              <TypographyParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat voluptas accusamus! Perspiciatis quam
                quisquam iste id officiis quia commodi quibusdam sapiente molestiae! Aliquam tempore ad quis, culpa sit ullam quam
                inventore voluptatum necessitatibus numquam! Tempora nobis iure cupiditate excepturi aliquid earum ratione dignissimos,
                a consequatur odio quo aut rem voluptatem quam repellat sint, eligendi facilis maiores unde, soluta quos, veritatis
                sit. Dolore deleniti dolorum repellendus dolorem cum, unde architecto consectetur odit rem eveniet, accusantium omnis
                suscipit totam quibusdam officiis blanditiis molestiae! Totam ipsam temporibus aspernatur praesentium quam, laboriosam
                ipsa rem. Maxime repudiandae molestias in consequuntur sint, dicta? Temporibus, fugiat!
              </TypographyParagraph>
            </TypographySection>

            <TypographySection title="Blockquote">
              <hr />
              <TypographyParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae rem ut veritatis quisquam doloribus nam excepturi,
                deserunt odit, aut. Possimus blanditiis culpa natus eius non molestias nihil praesentium, vel ullam dolorum qui,
                quibusdam minima placeat officiis quod dolorem perferendis dicta harum ab obcaecati nemo! Quisquam, porro qui
                tempora, ducimus aspernatur vitae odit aliquid soluta eius tenetur, atque minima error est officiis itaque nobis
                voluptate? Modi aliquid reiciendis perspiciatis totam asperiores consequuntur sint molestias. Error quas quod
                voluptatem eligendi modi asperiores ipsam nemo, obcaecati provident omnis nisi dolorem aliquam sapiente, quidem,
                porro quo id fuga! Recusandae blanditiis aliquid repudiandae animi officia.
              </TypographyParagraph>
            </TypographySection>
          </div>
        </SectionContainer>
      </section>
    </Fragment>
  );
};


export default Typography;
