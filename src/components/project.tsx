import "../scss/project.scss";

export const Projects = () => {
  return (
    <section className='section skills has-text-centered'>
      <div className='container is-narrow'>
        <div className='box'>
          <h1 className='title-projects'>Projects</h1>
          <div className='content'>
            <div className='columns is-centered'>
              <div className='column'>
                <h1 className='title is-size-4 is-spaced'>Designer</h1>
                <p>
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  Things I enjoy designing:
                </p>
                <p>UX, UI, Web, Apps, Logos</p>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  Design Tools:
                </p>
                <ul>
                  <li>Affinity Designer</li>
                  <li>Figma</li>
                  <li>Font Awesome</li>
                  <li>Pen &amp; Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                </ul>
              </div>
              <div className='column'>
                <h1 className='title is-size-4 is-spaced'>
                  Frontend Developer
                </h1>
                <p>
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  Languages I speak:
                </p>
                <p>HTML, Pug, Slim, CSS, Sass, Git</p>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  Dev Tools:
                </p>
                <ul>
                  <li>Atom</li>
                  <li>Bitbucket</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Codekit</li>
                  <li>Github</li>
                  <li>Surge</li>
                  <li>Terminal</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div className='column'>
                <h1 className='title is-size-4 is-spaced'>Mentor</h1>
                <p>
                  I genuinely care about people, and love helping fellow
                  designers work on their craft.
                </p>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  Experiences I draw from:
                </p>
                <p>UX/UI, Product design, Freelancing</p>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  Mentor Stats:
                </p>
                <ul>
                  <li>7 years experience</li>
                  <li>26 short courses</li>
                  <li>65 bootcamps</li>
                  <li>200+ students</li>
                  <li>2,350+ mentor sessions</li>
                  <li>60+ group critiques</li>
                  <li>16,500+ comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
