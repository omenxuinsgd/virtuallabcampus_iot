import { SvgIcon } from "../../common/SvgIcon";
import { Link } from "react-router-dom";

const CardVirtualLab = () => {
  return (
    <div className="container is-centered mt-5">
      <div className="columns is-multiline mt-2">
          <div className="column is-one-quarter-desktop is-one-quarter-tablet is-one-second-mobile" key="satu">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                <SvgIcon src="phet_black.png" width="28px" height="28px" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5 mb-2">PhET Virtual Lab</p>
                    <p className="has-text-black mb-1" style={{fontSize: '14px'}}>Simulasi sains dan matematika gratis untuk mengajarkan topik STEM, termasuk fisika, kimia, biologi, dan matematika, dari University of Colorado Boulder.</p>
                    
                  </div>
                </div>
              </div>
              <footer className="card-footer mt-0">
              <a href="https://phet.colorado.edu/en/simulations/browse" target="_blank" className="card-footer-item">
                    Kunjungi
                </a>
                </footer>
            </div>
          </div>
          <div className="column is-one-quarter-desktop is-one-quarter-tablet is-one-second-mobile" key="dua">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                <SvgIcon src="tinkercad.jpg" width="28px" height="28px" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5 mb-2">Tinkercad</p>
                    <p className="has-text-black mb-1" style={{fontSize: '14px'}}>Tinkercad adalah aplikasi gratis dan mudah digunakan untuk desain 3D, elektronik, dan pengkodean. Aplikasi ini digunakan oleh guru, anak-anak, dan para penghobi!</p>
                    
                  </div>
                </div>
              </div>
              <footer className="card-footer mt-0">
              <a href="https://www.tinkercad.com/" target="_blank" className="card-footer-item">
                    Kunjungi
                </a>
                </footer>
            </div>
          </div>
          <div className="column is-one-quarter-desktop is-one-quarter-tablet is-one-second-mobile" key="tiga">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                <SvgIcon src="wowki.png" width="28px" height="28px" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5 mb-2">Wokwi</p>
                    <p className="has-text-black mb-1" style={{fontSize: '14px'}}>Wokwi adalah simulator Elektronik online digunakan untuk mensimulasikan Arduino, ESP32, STM32, komponen, dan sensor populer lainnya.</p>
                    
                  </div>
                </div>
              </div>
              <footer className="card-footer mt-0">
              <a href="https://wokwi.com/" target="_blank" className="card-footer-item">
                    Kunjungi
                </a>
                </footer>
            </div>
          </div>
          <div className="column is-one-quarter-desktop is-one-quarter-tablet is-one-second-mobile" key="empat">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                <SvgIcon src="easyeda.png" width="28px" height="28px" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5 mb-2">EasyEDA</p>
                    <p className="has-text-black mb-1" style={{fontSize: '14px'}}>Pengambilan skematik, simulator sirkuit, dan editor PCB. Ini adalah cara yang lebih mudah untuk membuat karya seni, sirkuit dan PCB di browser Anda!</p>
                    
                  </div>
                </div>
              </div>
              <footer className="card-footer mt-0">
              <a href="https://easyeda.com/editor" target="_blank" className="card-footer-item">
                    Kunjungi
                </a>
                </footer>
            </div>
          </div>
      </div>
      </div>
  );
};

export default CardVirtualLab;