import "./slides.css";

export default function Slides() {
  return (
    <div className="slidesContainer">
      <h1 className="slideTitle"> The Team </h1>
      <section className="slide" aria-label="Gallery">
        <ol className="slide__viewport">
          <li id="slide__slide1" tabindex="0" className="slide__slide">
            <div className="slide__snapper">
              <a href="#slide__slide4" className="slide__prev"></a>
              <a href="#slide__slide2" className="slide__next"></a>
            </div>
            <h1 className="picBio" > KING INFANT: DEV </h1>
          </li>
          <li id="slide__slide2" tabindex="0" className="slide__slide">
            <div className="slide__snapper"></div>
            <a href="#slide__slide1" className="slide__prev"></a>
            <a href="#slide__slide3" className="slide__next"></a>
            <h1 className="picBio2" > QUEEN INFANT: ARTIST </h1>
          </li>
        </ol>
      </section>
    </div>
  );
}
