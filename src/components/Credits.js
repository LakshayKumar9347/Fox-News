import React, { Component } from 'react'

export default class Credits extends Component {
  render() {
    return (
      <div className=" container text-light p-3">
        <div className="d-flex">
          <div className="container">
            <h1 className=" fw-bold">🦄Credits🦄</h1>
            <div className="content m-2">
              <h1 className='display-6 fw-bold'>React Library</h1>
              <p>This content was created with the help of React JS, a JavaScript library for building user interfaces. React is a declarative, efficient, and flexible library that makes it easy to create complex and interactive UIs.

                React is used by some of the biggest companies in the world, including Facebook, Instagram, and Netflix. It is a popular choice for building single-page applications (SPAs), which are web applications that load all of their content at once and then update the content dynamically as the user interacts with the app.

                In this content, I used React to create a simple UI that displays a list of items. The UI is interactive, so the user can click on the items to see more information about them. I also used React to create a more complex UI that displays a map of the world. The map is interactive, so the user can zoom in and out and pan around the map.

                I am grateful to React for making it possible to create these complex and interactive UIs. React is a powerful library that makes it easy to build beautiful and engaging web applications.</p></div>
            <div className="content m-2">
              <h1 className='display-6 fw-bold'>News Api</h1>
              <p>News API websites are a great way to get live data for your website. They provide access to a wide variety of news sources, so you can find the latest news from around the world.

                There are many different news API websites available, so you can choose one that fits your needs. Some popular options include NewsAPI.org, Google News API, and Bing News Search API.

                Once you have chosen a news API website, you can start using it to get live data for your website. The process is usually very simple. You just need to sign up for an account, get an API key, and then start making requests.

                The requests will return JSON data that you can use to display the news on your website. The data typically includes the title, author, date, content, and URL of the news article.

                Using a news API website is a great way to keep your website up-to-date with the latest news. It is also a great way to provide your visitors with a more personalized experience.</p></div>
            <div className="content m-2">
              <h1 className='display-6 fw-bold'>Bootstrap</h1>
              <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

                Bootstrap is one of the most popular CSS frameworks in the world, and it is used by millions of developers to create beautiful and responsive websites. Bootstrap is easy to learn and use, and it provides a wide range of features that can help you to create your website quickly and easily.

                Some of the benefits of using Bootstrap include:

                Responsive design: Bootstrap is designed to be responsive, which means that your website will look good on all devices, from desktop computers to smartphones and tablets.
                Mobile-first: Bootstrap is mobile-first, which means that it is optimized for mobile devices. This is important, as more and more people are using their mobile devices to access the internet.
                Easy to learn and use: Bootstrap is easy to learn and use, even for beginners. The documentation is clear and concise, and there are many tutorials available online.
                Wide range of features: Bootstrap provides a wide range of features, including typography, forms, buttons, navigation, and more. This means that you can create a complete website using Bootstrap without having to write any custom code.
                If you are looking for a free and easy-to-use CSS framework for your website, then Bootstrap is a great option. It is used by millions of developers around the world, and it is constantly being updated with new features.</p></div>
            <div className="content m-2">
              <h1 className='display-6 fw-bold'>Node Js</h1>
              <p>Node.js is a JavaScript runtime environment that is designed to build scalable network applications. Asynchronous behavior is a key feature of Node.js, and it allows Node.js to handle a large number of concurrent connections.

                In synchronous programming, the program is executed line by line, one line at a time. Each time a function is called, the program execution waits until that function returns before continuing to the next line of code. This can be inefficient, especially for network applications, where there may be a lot of waiting time.

                In asynchronous programming, the program does not wait for functions to return. Instead, it continues to execute the next line of code, and the function is executed in the background. When the function is finished, it will call a callback function, which will be executed in the main thread.

                This allows Node.js to handle a large number of concurrent connections. When a new connection is made, Node.js will create a new thread to handle the connection. The thread will execute the asynchronous code, and the main thread will continue to handle other connections.

                This asynchronous behavior makes Node.js a very efficient platform for building scalable network applications.</p></div>
          </div>
        </div>
      </div>
    )
  }
}
