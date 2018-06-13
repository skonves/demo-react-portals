import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PictureInPicture } from './PictureInPicture';

class App extends Component {
  state = { showInline: true };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.showInline ? (
          <React.Fragment>
            <button onClick={() => this.setState({ showInline: false })}>
              PiP
            </button>
            <video src="https://i.gifer.com/l44.mp4" loop autoPlay />
          </React.Fragment>
        ) : (
          <PictureInPicture>
            <button onClick={() => this.setState({ showInline: true })}>
              inline
            </button>
            <video src="https://i.gifer.com/l44.mp4" loop autoPlay />
          </PictureInPicture>
        )}

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          Bacon ipsum dolor amet ham hock tenderloin jowl picanha doner
          prosciutto pig turducken jerky kevin tail pork. Cow beef ribs alcatra,
          turkey picanha hamburger pork chop chicken bresaola. Pork chop
          pastrami pig, pancetta cow tongue sirloin sausage turkey pork. Pork
          loin chicken spare ribs burgdoggen sirloin picanha venison, porchetta
          ground round fatback meatball frankfurter pork meatloaf bacon.
          Kielbasa rump prosciutto short ribs ham hock picanha flank cow
          bresaola shankle corned beef pancetta jowl.
        </p>
        <p>
          Kevin pork loin fatback, venison sirloin alcatra jerky chicken picanha
          cupim beef ribs ground round short loin porchetta. Burgdoggen doner
          sausage shank leberkas short ribs. Boudin brisket biltong meatloaf
          drumstick, flank beef ribs. Fatback salami strip steak, jerky
          drumstick picanha ham hock t-bone shoulder sausage chuck brisket
          pancetta tail ham.
        </p>
        <p>
          Shoulder kevin porchetta turkey cow picanha. Sausage boudin leberkas,
          beef ribs sirloin brisket tongue venison bresaola strip steak. Biltong
          corned beef porchetta short ribs pork chop burgdoggen leberkas spare
          ribs prosciutto rump shoulder pastrami salami. Meatball shankle
          picanha, cupim t-bone ham capicola.
        </p>
        <p>
          Jerky short ribs burgdoggen sausage turkey andouille cow shoulder.
          Landjaeger swine tongue, beef venison kevin pancetta shankle. Flank
          short ribs chicken frankfurter, fatback pastrami venison. Ham beef
          brisket buffalo sausage. Capicola shoulder brisket buffalo, short loin
          tenderloin alcatra swine corned beef frankfurter picanha tail pastrami
          leberkas. Venison ribeye meatloaf biltong.
        </p>
        <p>
          Bresaola tenderloin tail beef doner hamburger spare ribs sausage ham
          hock pig brisket. Flank drumstick chicken ribeye rump, shank ball tip
          cow ground round. Pastrami fatback bresaola pig burgdoggen ribeye.
          Burgdoggen ham hock pig beef chuck. Spare ribs short ribs leberkas,
          kevin andouille venison brisket jerky bresaola turkey ham buffalo
          kielbasa picanha. Tri-tip meatball chuck porchetta jerky short ribs
          jowl, corned beef doner picanha kielbasa beef ribs ribeye leberkas
          bresaola.
        </p>
        <p>
          Short loin turkey shankle ball tip bresaola brisket drumstick kielbasa
          tail corned beef tenderloin shoulder ham pork chop. Ham hock pork loin
          tongue, ball tip capicola biltong doner pork chop. Chuck beef corned
          beef pancetta. Meatloaf porchetta pork short loin strip steak
          leberkas.
        </p>
        <p>
          T-bone sirloin pancetta, pastrami tail brisket flank bresaola leberkas
          cupim. Brisket strip steak kielbasa prosciutto, short loin leberkas
          beef. Salami chicken pork belly, ham hock fatback corned beef ribeye
          chuck swine rump strip steak. Salami tri-tip pig jowl. Chicken boudin
          frankfurter biltong turkey sirloin ground round. Corned beef
          frankfurter flank, shoulder filet mignon beef ribs ham tail pig
          turducken t-bone ham hock drumstick picanha cow. Tenderloin sirloin
          short loin shank, tri-tip prosciutto sausage beef ribs ham hock ribeye
          hamburger bacon ball tip flank picanha.
        </p>
        <p>
          Brisket tenderloin swine, pig ham pancetta pork belly sausage tri-tip
          biltong shank pork chop frankfurter chuck beef ribs. Andouille jowl
          short loin, pork belly turducken kevin pork chop venison capicola.
          Jerky bacon meatloaf sirloin, pork loin turkey rump sausage
          frankfurter. Tenderloin chicken bresaola, cupim sirloin shoulder
          sausage boudin porchetta andouille buffalo frankfurter ham hock
          hamburger pastrami. Sirloin pork chop tongue strip steak, short loin
          chuck venison turkey salami landjaeger prosciutto spare ribs fatback
          pork belly ball tip.
        </p>
        <p>
          Leberkas buffalo andouille ribeye meatloaf drumstick doner pastrami,
          shankle shoulder. Capicola shankle sirloin bacon buffalo, shoulder
          beef burgdoggen picanha. Turducken alcatra ribeye, meatball burgdoggen
          beef ribs strip steak flank pig short loin rump chicken sirloin.
          Andouille sausage flank jowl prosciutto leberkas pancetta. Rump filet
          mignon doner capicola pastrami turducken tenderloin ball tip salami
          picanha prosciutto landjaeger jowl. Short loin drumstick flank salami
          ball tip doner chicken tenderloin biltong shankle t-bone cupim
          hamburger rump.
        </p>
        <p>
          Beef chicken beef ribs landjaeger, filet mignon short loin meatball
          fatback tenderloin. Doner pancetta turducken meatloaf tongue cow
          tenderloin alcatra tail jowl tri-tip flank beef ribs strip steak ham
          hock. Filet mignon drumstick doner, capicola buffalo pork loin kevin
          biltong ham pastrami. Ground round tail doner, picanha salami ribeye
          turducken chuck ball tip meatloaf biltong pastrami. Alcatra t-bone
          frankfurter short loin flank tail.
        </p>
      </div>
    );
  }
}

export default App;
