import office from '../Media/office.jpg';
import '../Styling/about.css';

const About = () => {
  return (
    <section className="about">
      <hr></hr>
      <h1>About us</h1>
      <p>
        <span>
          Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quods
          aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at
          vix.
        </span>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, Nunc pulvinar
        enim sed quam efficitur finibus. Fusce amfotur condimentum ord in
        hendrerit. Etiam aliquam vitae ante et scelerisque. Pellentesque commodo
        felis metus, nec congue nisi facilisis quis Aenean maximus bibendum
        congue. Nulla pretium elk non facilisis imperdiet. Curabitur auctor
        lacus turpis, quis fringilla quam faucbus sed. Sed consequat magna
        enim,eu efficitur purus viverra sit amet.{' '}
        <span className="blue_link">Praesent varis porta blandit</span> mollis,
        felis ut convallis convallis
      </p>
      <p>
        Quisque non lectus dolar. In id dictum ex. Aenean laoreet velit sem, in
        dictum orci cursus sit amet. Duis ex est, aliquam quis tincidunt ut,
        imperdiet a lacus. Vestibulum condimentum vehicula nist, at vestibulum
        velit varius sit amet. Cras lacinia facilisis tempus. Fusce nec tempus
        mauris. Sed vitae diam porta, tincidunt ord ac, maximus enim. Integer
        sodales sodales turpis, sit amet uitricies arcu lacinia i. Pellentesque
        volutpat in massa sitamat venenatis. Aliquam erat volutpat. Sed mollis,
        felis ut convallis convallis, nibh quam fringilla metus, a tempus metus
        nunc a sem, Morbi ut metus tincidunt mallis orci quis, efficitur nibh.
      </p>
      <div className="img_container">
        <img
          src={office}
          alt="a colourful, empty office space with high wooden ceiling and large windows"
        ></img>
      </div>
      <p>
        Integer ullamcorper nisi non ultricies consequat. Mauris at ipsum vel
        erat fringilla placerat ut eget nibh. Mauris vehicula a lectus dignissim
        utices. Sed congue nec libers sit amet vestibulum. Donec dignissim nec
        ligula quis placerat. Vivamus porttitor sed uma nec semper. Cras
        bibendum, est vita placerat ultricies, diam massa congue magna, quis
        blandit nibh ante vitae nibh. Aliquam a lobortis augue, eu vestibulum
        lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur a ligula vitae nist blandit tempus ut sit amet urna. Mauris
        convallis nisi a interdum semper. Fusce interdum ullamcorper purus sed
        aliquam. Fusce ut mollis nisi, quis lacinia quam. Donec ligula metus,
        volutpat a odio euismod, dapibus laculis arcu. Ut lobortis magna
        vehicula laoreet feugiat
      </p>
      <h2>Taria duo ut vis semper abhorreant:</h2>
      <ul>
        <li>Te pri efficiendi assueverit, id molestie suavitate per</li>
        <li>
          Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur
        </li>
        <li>Ut qui dicant copiosae interpretaris</li>
        <li>Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant</li>
      </ul>
      <p>
        Suspendisse vel nisi id odio consequat aliquam quis ac nis Vestibulum
        arci enim, porta viverra egestas laoreet, sollicitudin et orci. Ut id
        lacinia tortor. Sed et solicitudin diam, sed facilisis eros Donec sit
        amet consequat neque. Donec tristique tincidunt mi sed tincidunt.
        Suspendisse quis augue eget quam ullamcorper ultricies sed non justo.
      </p>
      <p>
        Maecenas eu mauris felis. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Vestibulum suscipit sem
        at venenatis vulputate. Integer blandt est ut nunc dignissim
        malesuada,Sed gravida quis turpis ut blandit. In hac habitasse platea
        dictumst. in facilisis tellus ipsum, vitae finibus eros condimentum a.
        Sed non iaculis magna, Donec molestie congue tellus, nec lacinia leo
        finibus non. Mauris ut nibh pharetra, placerat imauris vel, semper
        sapien. Proin aliquet quis nibh sit amet hendrenit Ut sit amet mollis
        igula. Sed auctor accumsan nisi velluctus. Curabitur eget nisl hendrerit
        tempus purus velrhoncus lectus. Nullam diam velit, porta id nist ac,
        suscipit sagimis neque, Quisque eu luctus diam
      </p>
    </section>
  );
};

export default About;
