import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        {/* Image displayed on the Home page */}
        <img
          src='https://cdn.dribbble.com/users/336179/screenshots/4640431/media/e09212d61dbe72f6dff3ec142fbb524c.png?resize=400x300&vertical=center' // URL of the image
          alt='Home Page' // Alt text for accessibility
          className='mx-auto d-block' // Center the image horizontally and display it as a block element
        />
      </div>
    );
  }
}

export default Home;
