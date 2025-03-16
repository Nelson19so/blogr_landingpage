import { useState } from "react";
import Navbar from "../components/Navbar";
import editorDesktop from "../../public/images/illustration-editor-desktop.svg";
import editorMobile from "../../public/images/illustration-editor-mobile.svg";
import illustrationPhone from "../../public/images/illustration-phones.svg";
import patternCircle from "../../public/images/bg-pattern-circles.svg";

function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="section-home">
        <div className="container-home-page w-full items-center text-center pt-50">
          <div className="container-text text-white">
            <h1 className="title">A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
          </div>

          <div className="container-btns mt-10">
            <button className="btn-start-free-home mr-5 bg-white font-bold p-3 rounded-3xl pl-6 pr-6">
              Start for Free
            </button>
            <button className="btn-learn-more bg-transparent border hover:bg-white text-white border-white btn p-3 pl-6 pr-6 rounded-3xl">
              Learn more
            </button>
          </div>
        </div>

        <main>
          <div className="container-items w-full pt-20 pb-20 bg-white">
            <div className="container-title w-full">
              <h1 className="text-center">Designed for the future</h1>
            </div>
            <div className="container-items md:flex md:justify-between w-full mt-5">
              <div className="md:w-40% w-full container-img md:hidden block">
                <img
                  src={editorMobile}
                  alt=""
                  className="md:ml-30 mb-5 flex justify-self-center"
                  width="300"
                />
              </div>

              <div className="md:w-60% mb-10 w-full md:pl-30 mt-5 md:text-left text-center pl-8 pr-8">
                <article>
                  <div className="article-one">
                    <div className="container-title">
                      <h3 className="title">
                        Introducing an extensible editor
                      </h3>
                    </div>
                    <div className="container-articles mt-5">
                      <p className="text-gray-600">
                        Blogr features an exceedingly intuitive interface which
                        lets you focus on one thing: creating content. The
                        editor supports management of multiple blogs and allows
                        easy manipulation of embeds such as images, videos, and
                        Markdown. Extensibility with plugins and themes provide
                        easy ways to add functionality or change the looks of a
                        blog.
                      </p>
                    </div>
                  </div>

                  <div className="article-two mt-10">
                    <div className="container-title">
                      <h3 className="title">Robust content management</h3>
                    </div>
                    <div className="containimgeditor-desktoper-articles mt-5">
                      <p className="text-gray-600">
                        Flexible content management enables users to easily move
                        through posts. Increase the usability of your blog by
                        adding customized categories, sections, format, or flow.
                        With this functionality, you’re in full control.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="md:w-40% w-full container-img md:block hidden">
                <img src={editorDesktop} alt="" className="md:ml-30 mb-5" />
              </div>
            </div>
          </div>
        </main>

        <article>
          <div className="container-items- w-full bg-dark md:mt-0 mt-10">
            <div className="container-padder">
              <div className="container-img-phone w-30% md:ml-35">
                <img src={illustrationPhone} alt="phone" />
              </div>

              <div className="pattern-circle container-left md:h-full md:w-50">
                <img src={patternCircle} alt="igm-background" />
              </div>

              <div className="container-articles-phone md:float-left h-full">
                <div className="containr-padder">
                  <h1>State of the Art Infrastructure</h1>

                  <p>
                    With reliability and speed in mind, worldwide data centers
                    provide the backbone for ultra-fast connectivity. This
                    ensures your site will load instantly, no matter where your
                    readers are, keeping your site competitive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Home;
