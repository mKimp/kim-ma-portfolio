import "../scss/body-introduction.scss";

export const BodyIntroduction = () => {
  return (
    <section className='section body-introduction is-medium is-primary has-text-centered is-long'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-three-fifths'>
            <h1 className='intro-title is-spaced is-size-3-desktop is-size-4-mobile'>
              Hi, I’m Kim. Nice to meet you.
            </h1>
            <h2 className='intro-subtitle is-size-5-desktop has-text-weight-normal'>
              I am a career changer with two years of full-stack web development
              experience specializing in Javascript, Typescript, React, Node.js,
              and PostgreSQL. I worked at two companies in full-stack and
              software development roles. I am naturally curious and perpetually
              working on improving my skills continually.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
