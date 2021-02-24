import React, { Component } from "react";
import "./Profile.css";

import user from "../assests/images/user.jpeg";
import project1 from "../assests/images/project1.png";
import project2 from "../assests/images/project2.png";
import project3 from "../assests/images/project3.png";
import project4 from "../assests/images/project4.png";
import insta1 from "../assests/images/insta1.png";
import insta2 from "../assests/images/insta2.png";
import insta3 from "../assests/images/insta3.png";
import insta4 from "../assests/images/insta4.png";
import insta5 from "../assests/images/insta5.png";
import insta6 from "../assests/images/insta6.png";
import insta7 from "../assests/images/insta7.png";
import insta8 from "../assests/images/insta8.png";
import insta9 from "../assests/images/insta9.png";

import { Button, Progress, Row, Col, Card } from "antd";
const { Meta } = Card;

class Profile extends Component {
  render() {
    return (
      <div className="home_page">
        <div
          className="user_name"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <div className="user_name_n_btn">
            <div className="hi">
              <p>
                Hi There, <br />I am Ashwani
                <br />
                <p className="cd">React.js Developer</p>
              </p>
            </div>

            <div classname="user_btn">
              <button className="view_btn">VIEW MY WORKS</button>&emsp;
              <button className="download_btn">DOWNLOAD MY CV</button>
            </div>
          </div>

          <div className="user_dp">
            <img src={user} alt="logo" />
          </div>
        </div>
        <div className="profile_info">
          <Row gutter={[0, 0]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className="creative">
                <p>
                  I’m a Creative Front-end Developer <br />
                  based on Delhi, who
                  <br />
                  loves clean, simple & unique <br />
                  Code.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className="read_more">
                <p>
                  I was Software Developer Intern in Eynos Business Solutions
                  Bangalore, India. I completed B Tech majoring in Information
                  Technology in 2019. I have an opportunity to work as Software
                  developer position. I look forward for this position in your
                  respective company
                </p>
                <br />
                <Button className="read_more_btn">READ MORE</Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="work_exp_details">
          <div className="work_exp">
            <p>Work Experiences</p>
          </div>
          <div className="lorem_ipsum">
            <div className="lorem_ipsum1">
              <p>
                <b>Eynos Business Solutions,Bangalore</b>| Feb 2020 - July 2020
                <br />
                I was working there as a front-end developer.
                <br />I have done 2-3 projects in react.js during my internship.
              </p>
            </div>
            <div className="lorem_ipsum1">
              <p>
                <b>Chetu India Pvt. Ltd.</b>| Jun 2019 - Nov 2019
                <br />
                I was working there as a data associate.
                <br />
                My job responsiblity was to do data entry.
              </p>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="my_skills">My Skills</div>
          <div className="react">
            <p>React.js</p>&emsp;&emsp;&emsp;
            <Progress
              strokeColor={{
                from: "#3667A6",
              }}
              style={{ width: 250 }}
              strokeLinecap="square"
              percent={90}
            />
          </div>
          <div className="react">
            <p>JavaScript</p>&emsp;&emsp;
            <Progress
              strokeColor={{
                from: "#3667A6",
              }}
              style={{ width: 250 }}
              strokeLinecap="square"
              percent={90}
            />
          </div>
          <div className="react">
            <p>Ant Design</p>&emsp;&emsp;
            <Progress
              strokeColor={{
                from: "#3667A6",
              }}
              style={{ width: 250 }}
              strokeLinecap="square"
              percent={85}
            />
          </div>
          <div className="react">
            <p>HTML & CSS</p>&emsp;&nbsp;
            <Progress
              strokeColor={{
                from: "#3667A6",
              }}
              style={{ width: 250 }}
              strokeLinecap="square"
              percent={95}
            />
          </div>
          <div className="react">
            <p>C#</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Progress
              strokeColor={{
                from: "#3667A6",
              }}
              style={{ width: 250 }}
              strokeLinecap="square"
              percent={75}
            />
          </div>
          <div className="react">
            <p>OOPs</p>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            <Progress
              strokeColor={{
                from: "#3667A6",
              }}
              style={{ width: 250 }}
              strokeLinecap="square"
              percent={90}
            />
          </div>
        </div>
        <div className="projects">
          <div className="prev_project">Previous Projects</div>
          <Row gutter={[24, 24]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <Card
                hoverable
                cover={<img alt="Modern Design" src={project1} />}
              >
                <Meta title="Modern Design" />
              </Card>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <Card hoverable cover={<img alt="Test" src={project2} />}>
                <Meta title="Clean and Elegant" />
              </Card>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <Card hoverable cover={<img alt="Test" src={project3} />}>
                <Meta title="Great Support" />
              </Card>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <Card hoverable cover={<img alt="Test" src={project4} />}>
                <Meta title="Easy to customise" />
              </Card>
            </Col>
          </Row>
        </div>
        <div className="insta">
          <div className="first_row">
            <div className="check_my_insta">
              <p className="insta_link">
                Check My <br />
                Instagram
                <br />
                <b>@imashwani_ydv</b>
              </p>
            </div>
            <Row style={{ marginLeft: "10rem" }} gutter={[16, 16]}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <div className="first_image_row">
                  <img src={insta1} alt="insta1" />
                  <img src={insta2} alt="insta2" />
                  <img src={insta3} alt="insta3" />
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <div className="first_image_row">
                  <img src={insta4} alt="insta4" />
                  <img src={insta5} alt="insta5" />
                  <img src={insta6} alt="insta6" />
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <div className="first_image_row">
                  <img src={insta7} alt="insta7" />
                  <img src={insta8} alt="insta8" />
                  <img src={insta9} alt="insta9" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="social_media">
          <div className="footer">
            <ul className="socials">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="copyright">Copyright &copy; 2020 Ashwani</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
