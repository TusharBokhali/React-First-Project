import logo from "./logo.svg";
import downarrow from "./downarrow.svg";
import "./App.css";
import "./keeda.css";
import "./responsivekeeda.css";
import sv1 from "./stars.svg";
import quotes from "./quotess.svg";
import right from "./right.svg";
import insta from "./insta.svg";
import X from "./X.svg";
import link from "./link.svg";
import face from "./face.svg";


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="log">
            <img
              src="https://examkeeda.com/_next/image/?url=%2Fimages%2Fexam-keeda-logo.png&w=128&q=75"
              alt=""
            />
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="#" className="highlight">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Typing Practice</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="sing">
            <button>Login</button>
            <button>Sing Up</button>
          </div>
        </nav>

        <div className="centar-part-main">
          <div className="header-text">
            <p>
              Skill up programming career{" "}
              <span className="highlight">coding</span> exercises, quizzes, and
              tutorials!
            </p>
            <button>PLAY QUIZ</button>
          </div>
          <div className="header-images-laptop">
            <img
              src="https://examkeeda.com/_next/image/?url=%2Fimages%2Fexam-keeda-quiz.png&w=1200&q=75"
              alt=""
            />
          </div>
        </div>

        <div className="item-cards">
          <div className="card">
            <p>5.0k+</p>
            <p>Daily Users</p>
          </div>
          <div className="card">
            <p>10+</p>
            <p>Quality streams</p>
          </div>
          <div className="card">
            <p>50+</p>
            <p>Study Subjects</p>
          </div>
        </div>

        <div className="trendig-cards">
          <div className="trending-top-desc">
            <h1>Trending Quiz Topics</h1>
            <p>
              You can find topic-wise study materials for different technologies
              and programming languages like C, C++, Javascript, Python, PHP,
              Node.js, React.js, HTML, CSS, SQL, etc. Exam Keeda provides{" "}
              <a className="highlight ">Study Materials</a> , test series,
              exercises, MCQ quizzes, tutorials, and coding competitions for all
              programming languages, cross platforms and frameworks and also get
              certificates.
            </p>
          </div>
          <div className="course-cards">
            <div className="course-card">
              <div className="overflow">
                <img
                  src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fsubject%2F1707205105870-479055956.jpg&w=828&q=75"
                  alt=""
                />
              </div>
              <div>
                <h2>Java</h2>
              </div>
              <button>PLAY QUIZ</button>
            </div>

            <div className="course-card">
              <div className="overflow">
                <img
                  src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fsubject%2F1707205154469-694852922.jpg&w=828&q=75"
                  alt=""
                />
              </div>
              <div>
                <h2>PHP</h2>
              </div>
              <button>PLAY QUIZ</button>
            </div>

            <div className="course-card">
              <div className="overflow">
                <img
                  src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fsubject%2F1707205128179-479760586.jpg&w=828&q=75"
                  alt=""
                />
              </div>
              <div>
                <h2>JavaScript</h2>
              </div>
              <button>PLAY QUIZ</button>
            </div>

            <div className="course-card">
              <div className="overflow">
                <img
                  src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fsubject%2F1707205141519-991194191.jpg&w=828&q=75"
                  alt=""
                />
              </div>

              <h2>Python</h2>

              <button>PLAY QUIZ</button>
            </div>
          </div>
        </div>

        <div className="view-content">
          <div className="view-main">
            <div className="top-view-content">
              <h1>Top-Picked Areas of Study</h1>
              <p>
                Exam Keeda offers you the best categories of tools and
                technologies like programming languages, web frameworks, app
                frameworks, game frameworks, cross-platforms, artificial
                intelligence, machine learning, databases, markup languages, and
                many more tools to upgrade your knowledge of information and
                technology.
              </p>
              <div>
                <div className="line">
                  Programming Languages
                  <img src={downarrow} alt="" />
                </div>
                <div className="line">
                  Various types of frameworks
                  <img src={downarrow} alt="" />
                </div>

                <div className="line">
                  Cross Platforms
                  <img src={downarrow} alt="" />
                </div>

                <div className="line">
                  Databases
                  <img src={downarrow} alt="" />
                </div>
              </div>
              <button>TUTORIALS</button>
            </div>
          </div>
        </div>

        <div className="four-content">
          <div className="four-image">
            <img
              src="https://examkeeda.com/_next/image/?url=%2Fimages%2Ffeature.webp&w=750&q=97"
              alt=""
            />
          </div>

          <div className="part-of-cards">
            <h1>
              Develop an Enjoyable <span className="highlight">Learning</span>{" "}
              Roadmap
            </h1>
            <p>
              Make your learning roadmap to prepare for data science, software
              development, web development, app development, game development
              with Exam Keeda. Our platform gives you the opportunity to learn
              programming languages like C, C++, Python, PHP, JavaScript(JS),
              JAVA and many more in different ways, like through tutorials,
              study materials, codding competitions, MCQ quizzes, projects, and
              more.
            </p>
            <div className="multiple-for-cards">
              <div className="m1">
                <div className="m1-top">
                  <div className="color">X</div>
                  <div className="m1-top-details">
                    <h3>Free Study Materials</h3>
                  </div>
                </div>
                <div className="m1-pra">
                  <p>
                    Our platform provides free study materials for all
                    programming languages and <br /> frameworks.
                  </p>
                </div>
              </div>

              <div className="m1">
                <div className="m1-top">
                  <div className="color">X</div>
                  <div className="m1-top-details">
                    <h3>Topic wise Quizzes</h3>
                  </div>
                </div>
                <div className="m1-pra">
                  <p>
                    Exam Keeda provides topic-wise studies and quizzes from
                    which users can update specific topics like variables,
                    loops, statements, database queries, and many more.
                  </p>
                </div>
              </div>

              <div className="m1">
                <div className="m1-top">
                  <div className="color">X</div>
                  <div className="m1-top-details">
                    <h3>Flexible Study Time</h3>
                  </div>
                </div>
                <div className="m1-pra">
                  <p>
                    With flexible study schedules user can upgrade their
                    knowledge by taking different durations quizzes from which
                    user can update their coding knowledge
                  </p>
                </div>
              </div>

              <div className="m1">
                <div className="m1-top">
                  <div className="color">X</div>
                  <div className="m1-top-details">
                    <h3>Competition Exams</h3>
                  </div>
                </div>
                <div className="m1-pra">
                  <p>
                    Exam organizers organize competition exams frequently, and
                    toppers can get prizes like shopping vouchers, cashback
                    coupons, rewards coins, and many more based on their
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cartoon-parts-main">
          <div className="w-1200">
            <div className="cartoon-images-part">
              <img
                src="https://examkeeda.com/_next/image/?url=%2Fimages%2Ftestimonial.png&w=640&q=97"
                width="100%"
                alt=""
              />
            </div>
            <div className="cartton-details">
              <h1>
                Testimonial What our <span className="highlight">Users</span>{" "}
                Say
              </h1>
              <div className="reviews">
                <div className="r1">
                  <div className="r-star">
                    <div className="star">
                      <img src={sv1} alt="" />
                      <img src={sv1} alt="" />
                      <img src={sv1} alt="" />
                      <img src={sv1} alt="" />
                      <img src={sv1} alt="" />
                    </div>
                    <div className="coma">
                      <img src={quotes} alt="" />
                    </div>
                  </div>
                  <div className="break-overfollow">
                    <p>
                      Exam keedas certification course helps me grow in the IT
                      field and also teaches me the best possible ways to solve
                      tasks, learn... coding, and prepare for interviews.
                    </p>
                  </div>
                  <div className="profile-images">
                    <div className="p-img">
                      <img
                        src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Ftestimonial%2F1709875200318-273375433.png&w=128&q=97"
                        alt=""
                      />
                    </div>
                    <div className="margins">
                      <h2>Ashish Patel</h2>
                      <p>Collage Student</p>
                    </div>
                  </div>
                </div>

                <div className="r1">
                  <div className="r-star">
                    <div className="star">
                      <img src={sv1} alt="" />
                      <img src={sv1} alt="" />
                      <img src={sv1} alt="" />
                      <img src={sv1} alt="" />
                      <img src={sv1} alt="" />
                    </div>
                    <div className="coma">
                      <img src={quotes} alt="" />
                    </div>
                  </div>
                  <div className="break-overfollow">
                    <p>
                      Exam keedas certification course helps me grow in the IT
                      field and also teaches me the best possible ways to solve
                      tasks, learn... coding, and prepare for interviews.
                    </p>
                  </div>
                  <div className="profile-images">
                    <div className="p-img">
                      <img
                        src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Ftestimonial%2F1709875200318-273375433.png&w=128&q=97"
                        alt=""
                      />
                    </div>
                    <div className="margins">
                      <h2>Ashish Patel</h2>
                      <p>Collage Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1200">
          <div className="expriance-card-main">
            <h1>Trending Things</h1>
            <p>
              Designers and developers can find the latest and trending things
              about <span className="highlight"> programming languages</span>,
              developing projects, research and development blogs,
              <span className="highlight">technical articles</span> on AI and
              ML, new frameworks, and their updates. Our blogs have a collection
              of the latest and trending from which users can gain knowledge in
              fields like information and technology and level up their
              creativity and coding skills.
            </p>
            <h2>
              <button>VIEW ALL</button>
            </h2>
          </div>
        </div>
        <div className="w-1200">
          <div className="cards-gamming-cards">
            <div className="c-1">
              <div className="c1-imag">
                <img
                  src="https://examkeeda.s3.ap-south-1.amazonaws.com/blog/unlocking-3d-virtual-reality.webp"
                  alt=""
                />
              </div>
              <div className="break-overflows">
                <h4>
                  Unlocking Possibilities: A Deep Dive into 3D... Virtual
                  Reality
                </h4>
              </div>
              <div className="revews-gammings">
                <div className="name-profile">
                  <img
                    src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fstream%2F1707203675272-10920660.webp&w=32&q=75"
                    alt=""
                  />
                  <p>Frameworks</p>
                </div>
                <div className="gamming-detail-descr">
                  <p>
                    Beyond Mobile: Flutter's Multiverse ExpandsIn the
                    ever-evolving realm of app development, Flutter has
                    transcended its mobile-first roots, blossoming into a
                    versatile UI toolkit that empowers developers to conquer
                    multiple platforms. This article delves into the innovative
                    spirit of Flutter, exploring its potential to reshape the
                    landscape of user experience across devices.A Single
                    Codebase, Boundless PossibilitiesAt its core, Flutter isn't
                    just about crafting beautiful mobile apps – it's about code
                    unification. Flutter's magic lies in its ability to leverage
                    a single codebase to build native applications for mobile,
                    web, and even desktop environments. This eliminates the need
                    for platform-specific coding, saving developers time and
                    resources while fostering code consistency. Imagine crafting
                    a stunning user interface once and deploying it seamlessly
                    across various platforms, ensuring a cohesive brand
                    experience for your users.Hot Reloading the Game: Iteration
                    on SteroidsOne of Flutter's most game-changing features is
                    Hot Reload. This revolutionary functionality allows
                    developers to see code changes reflected in the running app
                    in milliseconds, without the need for lengthy restarts. This
                    fosters an iterative development process, enabling
                    developers to experiment, refine, and perfect the user
                    interface with lightning speed. Hot Reload streamlines the
                    development workflow, boosting productivity and allowing for
                    real-time collaboration, where changes can be discussed and
                    implemented instantly.Widgets: The Building Blocks of
                    BrillianceFlutter empowers developers to construct
                    captivating user interfaces through a comprehensive set of
                    customizable widgets. These widgets act as the building
                    blocks of any Flutter app, ranging from fundamental elements
                    like buttons and text fields to intricate interactive
                    components. This rich library provides the flexibility to
                    create anything from a simple to-do list to a visually
                    stunning and feature-packed social media application. What's
                    more, the widget-based architecture makes Flutter
                    approachable for both seasoned developers and those new to
                    the game, allowing them to craft exceptional user
                    experiences with relative ease.Adapting to Every Screen:
                    Responsive Design Made SimpleIn today's world of diverse
                    screen sizes and resolutions, a responsive design approach
                    is no longer a luxury, but a necessity. Flutter embraces
                    this concept with open arms, providing a robust set of tools
                    and widgets that automatically adapt user interfaces to
                    different screen dimensions. This ensures that your app
                    looks its best and delivers an intuitive experience
                    regardless of whether it's displayed on a smartphone,
                    tablet, or a large desktop monitor. With Flutter, you can be
                    confident that your users will have a consistent and
                    visually pleasing interaction, no matter the device they
                    choose.A Thriving Community: Fueling InnovationThe Flutter
                    community is a vibrant ecosystem brimming with passionate
                    developers from all corners of the globe. This collaborative
                    environment fosters knowledge sharing and innovation,
                    leading to an extensive collection of open-source packages,
                    plugins, and resources. Developers can leverage these
                    readily available solutions to address various development
                    challenges, accelerate their workflows, and push the
                    boundaries of what's possible with Flutter.Conclusion:
                    Beyond the HorizonFlutter has redefined the UI development
                    landscape by offering a versatile and efficient toolkit that
                    transcends the limitations of mobile development. Its
                    ability to create cross-platform applications with a single
                    codebase, coupled with features like Hot Reload, a rich
                    widget library, and responsive design capabilities,
                    positions Flutter as a powerful tool for shaping the future
                    of user experience. As the Flutter ecosystem continues to
                    evolve, one thing is certain: the possibilities for crafting
                    exceptional and unified app experiences across various
                    platforms are truly limitless. Embrace Flutter, and embark
                    on a journey where innovation meets efficiency, and user
                    experiences reach new heights.
                  </p>
                </div>
                <div className="games-buttons">
                  <p>Read more</p>
                  <img src={right} alt="" />
                </div>
              </div>
            </div>


            <div className="c-1">
            <div className="c1-imag">
                <img
                  src="https://examkeeda.s3.ap-south-1.amazonaws.com/blog/flutter-ui-toolkit.webp"
                  alt=""
                />
              </div>
              <div className="break-overflows">
                <h4>
                  Unlocking Possibilities: A Deep Dive into 3D... Virtual
                  Reality
                </h4>
              </div>
              <div className="revews-gammings">
                <div className="name-profile">
                  <img
                    src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fstream%2F1707203675272-10920660.webp&w=32&q=75"
                    alt=""
                  />
                  <p>Frameworks</p>
                </div>
                <div className="gamming-detail-descr">
                  <p>
                    Beyond Mobile: Flutter's Multiverse ExpandsIn the
                    ever-evolving realm of app development, Flutter has
                    transcended its mobile-first roots, blossoming into a
                    versatile UI toolkit that empowers developers to conquer
                    multiple platforms. This article delves into the innovative
                    spirit of Flutter, exploring its potential to reshape the
                    landscape of user experience across devices.A Single
                    Codebase, Boundless PossibilitiesAt its core, Flutter isn't
                    just about crafting beautiful mobile apps – it's about code
                    unification. Flutter's magic lies in its ability to leverage
                    a single codebase to build native applications for mobile,
                    web, and even desktop environments. This eliminates the need
                    for platform-specific coding, saving developers time and
                    resources while fostering code consistency. Imagine crafting
                    a stunning user interface once and deploying it seamlessly
                    across various platforms, ensuring a cohesive brand
                    experience for your users.Hot Reloading the Game: Iteration
                    on SteroidsOne of Flutter's most game-changing features is
                    Hot Reload. This revolutionary functionality allows
                    developers to see code changes reflected in the running app
                    in milliseconds, without the need for lengthy restarts. This
                    fosters an iterative development process, enabling
                    developers to experiment, refine, and perfect the user
                    interface with lightning speed. Hot Reload streamlines the
                    development workflow, boosting productivity and allowing for
                    real-time collaboration, where changes can be discussed and
                    implemented instantly.Widgets: The Building Blocks of
                    BrillianceFlutter empowers developers to construct
                    captivating user interfaces through a comprehensive set of
                    customizable widgets. These widgets act as the building
                    blocks of any Flutter app, ranging from fundamental elements
                    like buttons and text fields to intricate interactive
                    components. This rich library provides the flexibility to
                    create anything from a simple to-do list to a visually
                    stunning and feature-packed social media application. What's
                    more, the widget-based architecture makes Flutter
                    approachable for both seasoned developers and those new to
                    the game, allowing them to craft exceptional user
                    experiences with relative ease.Adapting to Every Screen:
                    Responsive Design Made SimpleIn today's world of diverse
                    screen sizes and resolutions, a responsive design approach
                    is no longer a luxury, but a necessity. Flutter embraces
                    this concept with open arms, providing a robust set of tools
                    and widgets that automatically adapt user interfaces to
                    different screen dimensions. This ensures that your app
                    looks its best and delivers an intuitive experience
                    regardless of whether it's displayed on a smartphone,
                    tablet, or a large desktop monitor. With Flutter, you can be
                    confident that your users will have a consistent and
                    visually pleasing interaction, no matter the device they
                    choose.A Thriving Community: Fueling InnovationThe Flutter
                    community is a vibrant ecosystem brimming with passionate
                    developers from all corners of the globe. This collaborative
                    environment fosters knowledge sharing and innovation,
                    leading to an extensive collection of open-source packages,
                    plugins, and resources. Developers can leverage these
                    readily available solutions to address various development
                    challenges, accelerate their workflows, and push the
                    boundaries of what's possible with Flutter.Conclusion:
                    Beyond the HorizonFlutter has redefined the UI development
                    landscape by offering a versatile and efficient toolkit that
                    transcends the limitations of mobile development. Its
                    ability to create cross-platform applications with a single
                    codebase, coupled with features like Hot Reload, a rich
                    widget library, and responsive design capabilities,
                    positions Flutter as a powerful tool for shaping the future
                    of user experience. As the Flutter ecosystem continues to
                    evolve, one thing is certain: the possibilities for crafting
                    exceptional and unified app experiences across various
                    platforms are truly limitless. Embrace Flutter, and embark
                    on a journey where innovation meets efficiency, and user
                    experiences reach new heights.
                  </p>
                </div>
                <div className="games-buttons">
                  <p>Read more</p>
                  <img src={right} alt="" />
                </div>
              </div>
            </div>


            <div className="c-1">
            <div className="c1-imag">
                <img
                  src="https://examkeeda.s3.ap-south-1.amazonaws.com/blog/data-science-ai-analytics.webp"
                  alt=""
                />
              </div>
              <div className="break-overflows">
                <h4>
                  Unlocking Possibilities: A Deep Dive into 3D... Virtual
                  Reality
                </h4>
              </div>
              <div className="revews-gammings">
                <div className="name-profile">
                  <img
                    src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fstream%2F1707203675272-10920660.webp&w=32&q=75"
                    alt=""
                  />
                  <p>Frameworks</p>
                </div>
                <div className="gamming-detail-descr">
                  <p>
                    Beyond Mobile: Flutter's Multiverse ExpandsIn the
                    ever-evolving realm of app development, Flutter has
                    transcended its mobile-first roots, blossoming into a
                    versatile UI toolkit that empowers developers to conquer
                    multiple platforms. This article delves into the innovative
                    spirit of Flutter, exploring its potential to reshape the
                    landscape of user experience across devices.A Single
                    Codebase, Boundless PossibilitiesAt its core, Flutter isn't
                    just about crafting beautiful mobile apps – it's about code
                    unification. Flutter's magic lies in its ability to leverage
                    a single codebase to build native applications for mobile,
                    web, and even desktop environments. This eliminates the need
                    for platform-specific coding, saving developers time and
                    resources while fostering code consistency. Imagine crafting
                    a stunning user interface once and deploying it seamlessly
                    across various platforms, ensuring a cohesive brand
                    experience for your users.Hot Reloading the Game: Iteration
                    on SteroidsOne of Flutter's most game-changing features is
                    Hot Reload. This revolutionary functionality allows
                    developers to see code changes reflected in the running app
                    in milliseconds, without the need for lengthy restarts. This
                    fosters an iterative development process, enabling
                    developers to experiment, refine, and perfect the user
                    interface with lightning speed. Hot Reload streamlines the
                    development workflow, boosting productivity and allowing for
                    real-time collaboration, where changes can be discussed and
                    implemented instantly.Widgets: The Building Blocks of
                    BrillianceFlutter empowers developers to construct
                    captivating user interfaces through a comprehensive set of
                    customizable widgets. These widgets act as the building
                    blocks of any Flutter app, ranging from fundamental elements
                    like buttons and text fields to intricate interactive
                    components. This rich library provides the flexibility to
                    create anything from a simple to-do list to a visually
                    stunning and feature-packed social media application. What's
                    more, the widget-based architecture makes Flutter
                    approachable for both seasoned developers and those new to
                    the game, allowing them to craft exceptional user
                    experiences with relative ease.Adapting to Every Screen:
                    Responsive Design Made SimpleIn today's world of diverse
                    screen sizes and resolutions, a responsive design approach
                    is no longer a luxury, but a necessity. Flutter embraces
                    this concept with open arms, providing a robust set of tools
                    and widgets that automatically adapt user interfaces to
                    different screen dimensions. This ensures that your app
                    looks its best and delivers an intuitive experience
                    regardless of whether it's displayed on a smartphone,
                    tablet, or a large desktop monitor. With Flutter, you can be
                    confident that your users will have a consistent and
                    visually pleasing interaction, no matter the device they
                    choose.A Thriving Community: Fueling InnovationThe Flutter
                    community is a vibrant ecosystem brimming with passionate
                    developers from all corners of the globe. This collaborative
                    environment fosters knowledge sharing and innovation,
                    leading to an extensive collection of open-source packages,
                    plugins, and resources. Developers can leverage these
                    readily available solutions to address various development
                    challenges, accelerate their workflows, and push the
                    boundaries of what's possible with Flutter.Conclusion:
                    Beyond the HorizonFlutter has redefined the UI development
                    landscape by offering a versatile and efficient toolkit that
                    transcends the limitations of mobile development. Its
                    ability to create cross-platform applications with a single
                    codebase, coupled with features like Hot Reload, a rich
                    widget library, and responsive design capabilities,
                    positions Flutter as a powerful tool for shaping the future
                    of user experience. As the Flutter ecosystem continues to
                    evolve, one thing is certain: the possibilities for crafting
                    exceptional and unified app experiences across various
                    platforms are truly limitless. Embrace Flutter, and embark
                    on a journey where innovation meets efficiency, and user
                    experiences reach new heights.
                  </p>
                </div>
                <div className="games-buttons">
                  <p>Read more</p>
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer>
      <div className="width-1200">
        <div className="footer-1">
          <img
            src="https://examkeeda.com/_next/image/?url=%2Fimages%2Fexam-keeda-white.svg&w=256&q=75"
            alt=""
          />
          <h6>
            Exam Keeda is an online practice platform that has been operating
            since 2024 until now.
          </h6>
          <div className="social-media">
        <div className="hover"> <img src={insta} alt="" /></div>
        <div className="hover"><img src={X} alt="" /></div>
        <div className="hover"><img src={link} alt="" /></div>
        <div className="hover"><img src={face} alt="" /></div>
          </div>
        </div>

        <div className="footer-1-flex">
        <div className="mains-footer-1">

          <h2>Menu</h2>
          <div className="details-menu">
            <div>Home</div>
            <div>Tutorials</div>
            <div>Typing Practice</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="mains-footer-1">

          <h2>About</h2>
          <div className="details-menu">
            <div>Contact Us</div>
            <div>Privacy & Policy</div>
            <div>Term & Service</div>
          </div>
        </div>
        </div>
      </div>
      <div className="last-date-details">
        <div className="container">
            <h4>© 2024 All Rights Reserved by Exam Keeda</h4>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
