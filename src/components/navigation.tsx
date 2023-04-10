import "../scss/navigation.scss";
export const Navigation = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <img
          src='https://portfolio-logo-pride.s3.us-west-2.amazonaws.com/pride.png'
          alt='logo'
          className='logo'
        ></img>
      </div>
      <div className='navbar-menu is-shadowless' id='navMenu'>
        <div className='navbar-start'></div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <button className='say-hello-btn'> Say Hello </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
