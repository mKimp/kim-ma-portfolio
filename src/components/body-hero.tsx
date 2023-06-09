import "../scss/body-hero.scss";
export const BodyHero = () => {
  return (
    <section>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column'>
              <h1 className='hero-title is-spaced'>
                Full Stack, Software Engineer
              </h1>
              <h2 className='hero-subtitle'>
                I code beautifully to bring ideas to life, and I love what I do.
              </h2>
              <div className='hero-container-image'>
                <img
                  src='https://portfolio-logo-pride.s3.us-west-2.amazonaws.com/5072860.png'
                  alt='body-hero-img'
                  className='body-hero-img'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
