import Carousel from './Carousel';
import '../Styling/home.css';
import office from '../Media/office.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Carousel />
      <div>
        <section className="home_section1">
          <img
            src={office}
            alt="a colourful, empty office space with high wooden ceiling and large windows"
          ></img>
          <div className="home_section1_text">
            <h3>Justo petentium te vix, scripta regione urbanitas</h3>
            <p>
              Populo factam no dolor doleniti deseruisse necum, nam quodsi
              aliquam eligendi ne: Ferri eu accuatate nec, summo accumsan at vi
              s legere inperut, nam consequat forms No sitcomuage voluptatibus,
              omniumluctus metarecteu detset sedanec odio option, fem assum eum
              o
            </p>
            <ul>
              <li>Te pefficienti assuever, it molestle suavitate per</li>
              <li>
                Te nam dolorem rationibus repudiandan, ne lus fallaluip
                consetetur
              </li>
              <li>Ut qui dicant copiosaeinterpretaris </li>
              <li>
                Ut indoctum patrioque voluptaria duo. ut vis semper abhorreant
              </li>
            </ul>
            <Link to="/about-us">
              <button>Learn more</button>
            </Link>
          </div>
        </section>
        <section className="home_section2">
          <div className="home_section2_text_container">
            <div className="home_section2_mask">
              <div className="home_section2_text">
                <h3>
                  Nulla sem urna, dictum sed nisi in, viverra rutrum neque
                </h3>
                <p>
                  Cras sit amet dapibus magna. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec
                  finibus nula quis orem molis lacinia Fit anu ligula.
                  Pelerntque augue es, petertanque ut maximus non, elendutorem
                  Vestibulum rutrum maluc turpi matematts wmadimus ac. Quisque
                  iac hendrerit ex ot tincidunt. Aenean eu magna ut nii placerat
                  fringilla sed diam
                </p>
                <button>Log in</button>
              </div>
            </div>
          </div>
        </section>
        <section className="home_section3">
          <h3>Sed libero justo, lobortis sit amet suscipit non</h3>
          <h4>taria duo ut vis semper abhorreant</h4>
          <div className="home_section3_columns">
            <p className="home_section3_para1">
              Petentesque ac condimentum fels. Suspendisse vel suscipit delor,
              necoreet nulla. Kam auctor ultrices dapibus. Donec ac interdum du,
              quis fisitus lectus. Cras in utrices neque Curabitur agt turpis
              iaculis dam congue sagittis a vel ligula Mauris ut arcu ex Nullam
              quis orci ante. Nuncfells posuere non gravida in, commodo in arcu.
              in fugiat magna non volutpat facius Nam aliquam janto nec alquam
              iacula Integer laorest puhenar eix pulvinar fermentum. Morbi
              whicula sodales munc ac varles. Proin porttitor parttitor atero
              vel pharetra.
            </p>
            <p>
              Cras samt apibus magra Or was natuue peratus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec magnis dis
              parturient montes, nascetur ridiculus mus. Donec finibusn querem
              mats lacinia. Fusce ut arcu ga Pleague so, pellentesque ut macmus
              non, and utionem ebulum rutrum malesuada turpis molestie mattis
              velit maemus ac qusque lacus hendrerit esticidunt Aanean eu magna
              ut nihi placerat fringtain adam Suspendisse tristique vel du
              nemenda. Cras matti quementum suopit Pom at dementum austa
              porttiram Curabitur esmo, ar te trinque volutpat augue lectus
              ignem junts at faucibus orci enta ett
            </p>
            <p>
              Sed sed sapien prium maemus fels vel mas eft, Sed Ibers jutt,
              oorsamer suscipit non, autor non ero Mas quis nisl eget enim porta
              blandit a nec sapien. Mauris porttito neque ut tortor acrisque at
              iaculis nunc ornare. Pellentesque non nuncula interdum et
              maresiada fames ac antem primis in fautun. Aenean et sodales din
              Larem pr augue non autor quam placerat nac Nota semua dictum set
              nisi in viverra nutum neque Alguam ipsum nunc, porta a agus a moth
              are in aula od Prame Curabitur fringilla els a porttitor maemus.
              Vestibulu ante nec leo malesuada porthor sit amet magna
            </p>
          </div>
          <div className="home_section3_button_container">
            <Link to="/contact-us">
              <button>Contact us</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
