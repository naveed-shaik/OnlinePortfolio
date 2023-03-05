import "./styles.css";
import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
  FaDownload,
  FaHome,
  FaFileCode,
  FaUserGraduate,
  FaBriefcase,
  FaCommentAlt,
  FaMap,
  FaEnvelope,
  FaMobile
} from "react-icons/fa";
export default function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body {background-color:#E5E5E5;"}</style>
      </Helmet>
      (
      <div className="Home">
        <h2 className="role">I’m Rayan Adlrdard Front-End Developer</h2>
        <h3 className="role_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </h3>
        <button className="hiremebutton">HIRE ME →</button>
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
        <div className="rectangle3"></div>
        <div className="rectangle4"></div>
        <div className="rectangle5"></div>
        <div className="rectangle6"></div>
      </div>
      ,<div className="sizedbox1"></div>,
      <div className="whatcanido">
        <h1 className="whatcanidoheading">What Can I Do</h1>
        <h2 className="wcidsubheading">
          A service offering consists of one or more service commitments that
          uniquely define the level of service in terms of availability, scope,
          pricing, and packaging options. . A service can have multiple service
          offerings (each made available as separate catalog items) with
          different service level agreements (SLAs).
        </h2>
        <div class="grid">
          <div className="service1"></div>
          <div className="service2"></div>
          <div className="service3"></div>
          <div className="service4"></div>
          <div className="service5"></div>
          <div className="service6"></div>
        </div>
      </div>
      ,<div className="sizedbox2"></div>,
      <div className="certifications">
        <h1 className="certificationsheading">certifications</h1>
        <h2 className="certificationssubheading">
          Professional certifications can help individuals advance faster in
          their careers, especially in highly-specialized industries such as
          human resources, accounting or information technology.
        </h2>
        <div className="certificatecard1">
          <div className="coursera">
            <p className="courseraname">Coursera</p>
          </div>
          <p className="coursename">Machine Learning For All</p>
          <p className="coursedescription">
            Machine learning (ML) is the study of computer algorithms that can
            improve automatically through experience and by the use of data. ...
            Machine learning algorithms build a model based on sample data,
            known as training data, in order to make predictions or decisions
            without being explicitly programmed to do so.
          </p>
        </div>
        <div className="certificatecard2">
          <div className="coursera">
            <p className="courseraname">Coursera</p>
          </div>
          <p className="coursename">Flutter App Development</p>
          <p className="coursedescription">
            Flutter is Google's free and open-source UI framework for creating
            native mobile applications. Released in 2017, Flutter allows
            developers to build mobile applications for both iOS and Android
            with a single codebase and programming language. This capability
            makes building iOS and Android apps simpler and faster.
          </p>
        </div>
        <div className="certificatecard3">
          <div className="coursera">
            <p className="courseraname">Coursera</p>
          </div>
          <p className="coursename">Full Stack Development</p>
          <p className="coursedescription">
            Full stack development: It refers to the development of both front
            end(client side) and back end(server side) portions of web
            application. Full stack web Developers: Full stack web developers
            have the ability to design complete web applications and websites
          </p>
        </div>
      </div>
      ,<div className="sizedbox3"></div>,
      <div className="education">
        <h1 className="educationheading">Education</h1>
        <h2 className="educationsubheading">
          Education is both the act of teaching knowledge to others and the act
          of receiving knowledge from someone else. Education also refers to the
          knowledge received through schooling or instruction and to the
          institution of teaching as a whole
        </h2>
        <div className="educationdiv">
          <div className="edu1">
            <p className="universityoftoronto">University Of Toronto</p>
            <p className="student">Student</p>
            <p className="duration">Jan 1016 - Dec 2021</p>
            <p className="cot">Certificate Of Web Training</p>
            <p className="cotdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
          <div className="div1"></div>
          <div className="edu2">
            <p className="universityoftoronto">University Of Toronto</p>
            <p className="student">Student</p>
            <p className="duration">Jan 1016 - Dec 2021</p>
            <p className="cot">Certificate Of Web Training</p>
            <p className="cotdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
          <div className="div2"></div>
          <div className="edu3">
            <p className="universityoftoronto">University Of Toronto</p>
            <p className="student">Student</p>
            <p className="duration">Jan 1016 - Dec 2021</p>
            <p className="cot">Certificate Of Web Training</p>
            <p className="cotdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </div>
      </div>
      ,<div className="sizedbox4"></div>,
      <div className="workhistory">
        <h1 className="educationheading">Work History</h1>
        <h2 className="educationsubheading">
          Education is both the act of teaching knowledge to others and the act
          of receiving knowledge from someone else. Education also refers to the
          knowledge received through schooling or instruction and to the
          institution of teaching as a whole
        </h2>
        <div className="whdiv">
          <div className="wh1">
            <p className="universityoftoronto">University Of Toronto</p>
            <p className="student">Student</p>
            <p className="duration">Jan 1016 - Dec 2021</p>
            <p className="cot">Certificate Of Web Training</p>
            <p className="cotdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
          <div className="div1"></div>
          <div className="wh2">
            <p className="universityoftoronto">University Of Toronto</p>
            <p className="student">Student</p>
            <p className="duration">Jan 1016 - Dec 2021</p>
            <p className="cot">Certificate Of Web Training</p>
            <p className="cotdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
          <div className="div2"></div>
          <div className="wh3">
            <p className="universityoftoronto">University Of Toronto</p>
            <p className="student">Student</p>
            <p className="duration">Jan 1016 - Dec 2021</p>
            <p className="cot">Certificate Of Web Training</p>
            <p className="cotdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </div>
      </div>
      ,<div className="sizedbox5"></div>,
      <div className="portfolio">
        <h1>portfolio</h1>
      </div>
      ,<div className="sizedbox6"></div>,
      <div className="blog">
        <h1 className="blogheading">Blog</h1>
        <h2 className="blogsubheading">
          A blog (a shortened version of “weblog”) is an online journal or
          informational website displaying information in reverse chronological
          order, with the latest posts appearing first, at the top. It is a
          platform where a writer or a group of writers share their views on an
          individual subject.
        </h2>

        <div className="blogcard1">
          <div className="blogcardimage1"></div>
          <p className="makebusinesscard">Make Business Card</p>
          <p className="blogcarddescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna
          </p>
          <p className="learnmore">Learn More</p>
        </div>
        <div className="blogcard2">
          <div className="blogcardimage1"></div>
          <p className="makebusinesscard">Make Business Card</p>
          <p className="blogcarddescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna
          </p>
          <p className="learnmore">Learn More</p>
        </div>
        <div className="blogcard3">
          <div className="blogcardimage1"></div>
          <p className="makebusinesscard">Make Business Card</p>
          <p className="blogcarddescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna
          </p>
          <p className="learnmore">Learn More</p>
        </div>
      </div>
      ,<div className="sizedbox7"></div>,
      <div className="leaveusyourinfo">
        <h2 className="contactinfotitle">Leave Us Your Info</h2>
        <div className="leaveusyourinfobody"></div>
        <h2 className="fullnamehint">Your Full Name ( Required )</h2>
        <form>
          <input
            type="text"
            className="fullnameform"
            ref={(c) => (this.title = c)}
            name="title"
          />
        </form>
        <h2 className="mailidhint">Your Email ( Required )</h2>
        <form>
          <input
            type="text"
            className="emailform"
            ref={(c) => (this.title = c)}
            name="title"
          />
        </form>
        <h2 className="subjecthint">Subject</h2>
        <form>
          <input
            type="text"
            className="subjectform"
            ref={(c) => (this.title = c)}
            name="title"
          />
        </form>
        <h2 className="yourmessagehint">Your Message</h2>
        <textarea className="yourmessageform" cols="30" rows="10"></textarea>
        <button
          type="button"
          onClick={this.onSubmit}
          className="sendmessagebutton"
        >
          SEND MESSAGE
        </button>
      </div>
      ,
      <div className="contactinformation">
        <h2 className="contactinfotitle">Contact Information</h2>
        <div className="location">
          <FaMap class="locationicon"></FaMap>
          <h3 className="countryheading">Country:</h3>
          <h3 className="cityheading">City:</h3>
          <h3 className="streetheading">Street:</h3>
          <h3 className="countryname">India</h3>
          <h3 className="cityname">Tirupati</h3>
          <h3 className="streetname">Balaji Colony</h3>
        </div>
        <div className="gmail">
          <FaEnvelope class="locationicon"></FaEnvelope>
          <h3 className="countryheading">Email:</h3>
          <h3 className="cityheading">Skype:</h3>
          <h3 className="streetheading">Telegram:</h3>
          <h3 className="countryname">youremail@gmail.com</h3>
          <h3 className="cityname">@yourusername</h3>
          <h3 className="streetname">@yourusername</h3>
        </div>
        <div className="mobile">
          <FaMobile class="locationicon"></FaMobile>
          <h3 className="countryheading">Support Services:</h3>
          <h3 className="cityheading">Office:</h3>
          <h3 className="streetheading">Personal:</h3>
          <h3 className="countryname">15369</h3>
          <h3 className="cityname">+58 (021)356 587 235</h3>
          <h3 className="streetname">+58 (021)356 587 235</h3>
        </div>
      </div>
      , ), (
      <div className="leftmenu">
        <div className="profilepic"></div>
        <h1 className="name">Rayan Adlardard</h1>
        <h1 className="leftmenurole">Front-End Developer</h1>
        <div>
          <button class="socialicons">
            <FaFacebookF class="facebookicon"></FaFacebookF>
          </button>
          <button class="socialicons">
            <FaInstagram class="instagramicon"></FaInstagram>
          </button>
          <button class="socialicons">
            <FaGithubAlt class="githubicon"></FaGithubAlt>
          </button>
          <button class="socialicons">
            <FaTwitter class="twittericon"></FaTwitter>
          </button>
          <button class="socialicons">
            <FaLinkedinIn class="linkedinicon"></FaLinkedinIn>
          </button>
        </div>
        ,<p className="line1"></p>
        <div className="info">
          <h3 className="age">Age :</h3>
          <h3 className="givenage">24</h3>
          <h3 className="residence">Residence :</h3>
          <h3 className="givenresidence">Tirupati</h3>
          <h3 className="freelance">Freelance :</h3>
          <h3 className="freelancestatus">Available</h3>
          <h3 className="address">Address :</h3>
          <h3 className="givenaddress">Tirupati</h3>
        </div>
        ,<p className="line2"></p>,
      </div>
      <div className="languagesbox">
        <h3 className="languagesheading">Languages</h3>
        <h3 className="languagename1">English</h3>
        <h3 className="languagenamepercentage1">100%</h3>
        <p className="progressbar1"></p>
        <p className="progressbar1color"></p>
        <h3 className="languagename2">Hindi</h3>
        <h3 className="languagenamepercentage2">75%</h3>
        <p className="progressbar2"></p>
        <p className="progressbar2color"></p>
        <h3 className="languagename3">Telugu</h3>
        <h3 className="languagenamepercentage3">50%</h3>
        <p className="progressbar3"></p>
        <p className="progressbar3color"></p>
      </div>
      <p className="line3"></p>
      <div className="skillsbox">
        <h3 className="skillsheading">Skills</h3>
        <h3 className="skillname1">Html</h3>
        <h3 className="skillnamepercentage1">100%</h3>
        <p className="skillbar1"></p>
        <p className="skillbar1color"></p>
        <h3 className="skillname2">CSS</h3>
        <h3 className="skillnamepercentage2">75%</h3>
        <p className="skillbar2"></p>
        <p className="skillbar2color"></p>
        <h3 className="skillname3">Js</h3>
        <h3 className="skillnamepercentage3">75%</h3>
        <p className="skillbar3"></p>
        <p className="skillbar3color"></p>
        <h3 className="skillname4">PHP</h3>
        <h3 className="skillnamepercentage4">50%</h3>
        <p className="skillbar4"></p>
        <p className="skillbar4color"></p>
        <h3 className="skillname5">Machine Learning</h3>
        <h3 className="skillnamepercentage5">50%</h3>
        <p className="skillbar5"></p>
        <p className="skillbar5color"></p>
      </div>
      <p className="line4"></p>
      <div className="extraskillsbox">
        <h3 className="extraskillsheading">Extra Skills</h3>
      </div>
      <button class="downloadcv">
        DOWNLOAD CV
        <FaDownload class=""></FaDownload>
      </button>
      ),
      <div className="rightmenu">
        <button>
          <FaHome
            rotation={270}
            size="md"
            // style={{ fontSize: "-2px", color: "red" }}
            className="homeicon"
          />
        </button>
        <button>
          <FaFileCode className="fileicon"></FaFileCode>
        </button>
        <button>
          <FaUserGraduate className="graduateicon"></FaUserGraduate>
        </button>
        <button>
          <FaBriefcase className="briefcaseicon"></FaBriefcase>
        </button>
        <button>
          <FaCommentAlt className="commenticon"></FaCommentAlt>
        </button>
      </div>
    </div>
  );
}

