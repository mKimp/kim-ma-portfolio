import "../scss/experience.scss";

export const Experience = () => {
  return (
    <section className='section projects has-text-centered'>
      <div className='container is-narrow'>
        <div className='box'>
          <h1 className='title-projects'>Experience</h1>
          <div className='content'>
            <div className='columns is-centered'>
              <div className='column'>
                <h1 className='title is-size-4 is-spaced'>
                  Software Enginner{" "}
                  <small className='companies'>BrandLive | Portland, OR</small>
                  <p className='companies-date'>7/2022 - 1/2023</p>
                </h1>
                <p className='job-description'>
                  {" "}
                  I designed and developed front and back-end features for
                  Brandlive's live events products.
                </p>
                <p className='achivement-title'>Achivements:</p>
                <ul className='achivement-lists'>
                  <li>
                    Saved 55% of the time to customize multiple events in a
                    single customer account by building a global navigation icon
                    feature in Typescript and Express that was shared among
                    events.
                  </li>
                  <li>
                    Suggested and created a new feature that deleted the event’s
                    unused custom pages/links. Helped internal customers to
                    reduce 100% the time of searching a specific page/link.
                  </li>
                  <li>
                    Eliminated 80% of failed QAs by testing the features with
                    the Jest testing framework before moving them to production.
                  </li>
                  <li>
                    Debugged and resolved the bug tickets within 16 hours time
                    limit for every two weeks bug bash using Chrome Devtools and
                    Redux Devtools.
                  </li>
                </ul>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  <span>Tech Stack: </span> Javascript, Typescript, HTML, SCSS,
                  Node.js, Express, React, Redux, PostgreSQL, Jest, Postman,
                  Chrome Web Dev Tool, Redux Dev Tool and Git.
                </p>
              </div>
              <div className='column'>
                <h1 className='title is-size-4 is-spaced'>
                  Web Developer{" "}
                  <small className='companies'>BrandLive | Portland, OR</small>
                  <p className='companies-date'>11/2021 - 7/2022</p>
                </h1>
                <p className='job-description'>
                  {" "}
                  I manipulated the document object model (DOM) of a hundred
                  live events built on Brandlive's platform.
                </p>
                <p className='achivement-title'>Achivements:</p>
                <ul className='achivement-lists'>
                  <li>
                    Created a user interface for Telly Club (a product of
                    Brandlive) and made the website run at least 20% faster by
                    inspecting and removing unused code and reducing the size of
                    almost all images and videos.
                  </li>
                  <li>
                    Built a joystick in React and Typescript to control the
                    movement of Telly, a game character in Telly Club. Worked
                    effectively both on mobiles and websites.
                  </li>
                  <li>
                    Reduced 80% of the time to complete the Jira tickets by
                    creating the reusable functions that are commonly used to
                    manipulate the website’s Document Object Model (DOM) on
                    hundreds of loaded React events.
                  </li>
                </ul>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  <span>Tech Stack: </span> Vanila Javascript, Typescript, HTML,
                  CSS, React, Chrome Dev Tool and Git.
                </p>
              </div>
              {/* -------- */}
              <div className='column'>
                <h1 className='title is-size-4 is-spaced'>
                  Software Engineer Intern{" "}
                  <small className='companies'>Remote</small>
                  <p className='companies-date'>6/2021 - 11/2021</p>
                </h1>
                <p className='job-description'>
                  {" "}
                  I converted design wireframes into website elements for a
                  multiply-player game using Styled Components and Typescript.
                </p>
                <p className='achivement-title'>Achivements:</p>
                <ul className='achivement-lists'>
                  <li>
                    Converted design wireframes to the multi-player education
                    game on the web with Typescript and Style Components under
                    the senior engineer’s supervision.
                  </li>
                  <li>
                    Resolved 70 to 80% of the bugs ticket submitted by the
                    end-users in a weekly manner.
                  </li>
                </ul>
                <p className='list-title has-text-primary has-text-weight-normal'>
                  <span>Tech Stack: </span> : Javascript, Typescript, React,
                  Styled Components, and Git.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
