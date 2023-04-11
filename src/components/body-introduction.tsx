import "../scss/body-introduction.scss";

export const BodyIntroduction = () => {
  return (
    <section className='section is-medium is-primary has-text-centered is-long'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-three-fifths'>
            <h1 className='title is-spaced is-size-3-desktop is-size-4-mobile'>
              Hi, I’m Matt. Nice to meet you.
            </h1>
            <h2 className='subtitle is-size-5-desktop has-text-weight-normal'>
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
