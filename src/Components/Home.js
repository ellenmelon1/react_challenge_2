import Carousel from './Carousel';
import '../App.css';
import office from '../Media/office.jpg';
import model from '../Media/trendy_woman.jpg';

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
          <h3>Justo petentium te vix, scripta regione urbanitas</h3>
          <p>
            Populo factam no dolor doleniti deseruisse necum, nam quodsi aliquam
            eligendi ne: Ferri eu accuatate nec, summo accumsan at vi s legere
            inperut, nam consequat forms No sitcomuage voluptatibus,
            omniumluctus metarecteu detset sedanec odio option, fem assum eum o
          </p>
          <ul>
            <li>Te pefficienti assuever, it molestle suavitate per</li>
            <li>
              Te nam dolorem rationibus repudiandan, ne lus fallaluip consetetur
            </li>
            <li>Ut qui dicant copiosaeinterpretaris </li>
            <li>
              Ut indoctum patrioque voluptaria duo. ut vis semper abhorreant
            </li>
          </ul>
          <button>Learn more</button>
        </section>
        <section className="home_section2">
          <img src={model} alt="woman with round sunglasses pouting"></img>
          <div className="home_section2_text_container">
            <div className="mask">
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
      </div>
    </div>
  );
};

export default Home;
