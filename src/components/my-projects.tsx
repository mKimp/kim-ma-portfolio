import "../scss/my-projects.scss";
export const MyProjects = () => {
  return (
    <section className='projects section startups has-text-centered'>
      <div className='container'>
        <div className='startup-grid'>
          <div className='columns'>
            <div className='column'>
              <div className='box'>
                <h1>The US National Parks</h1>
                <div className='project-img-container'>
                  <img
                    src='https://home-page-background.s3.us-west-2.amazonaws.com/National-Parks-photos.jpg'
                    alt='national-park'
                    className='my-project-images'
                  />
                </div>
                <p>
                  Creator of National Dashboard, a front-end website to
                  search/lookup information for national parks in the United
                  States.
                </p>
                <p>
                  <span> Tech Stack: </span>Typescript, HTML, SCSS, React, and
                  National Park Service API
                </p>
                <p>
                  Deployed to Amazon Web Services S3 bucket with Route 53, and
                  Cloudfront.{" "}
                </p>
              </div>
              <button className='check-me-out-btn'> Check me out </button>
            </div>
            <div className='column'>
              <div className='box'>
                <h1>Word Search Helper</h1>
                <div className='project-img-container'>
                  <img
                    src='https://blog.harveydelaney.com/content/images/size/w2000/2020/01/npm.jpg'
                    alt='npm'
                    className='my-project-images'
                  />
                </div>
                <p>
                  A powerful, easy-to-configure, published npm package to search
                  and return a list of all words with a given prefix from the
                  user-customized database.
                </p>
                <p>
                  <span>Tech Stack:</span> Javascript, Data Structure (Trie),
                  and Npm Registry Protocol.
                </p>
                <p>
                  {" "}
                  Have reached 189 downloads to be used in Node.js environment
                  in four days.{" "}
                </p>
              </div>
              <button className='check-me-out-btn'> Check me out </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
