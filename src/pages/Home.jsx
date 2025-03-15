import { useState } from "react";
import Navbar from "../components/Navbar";
import editorDesktop from "../../public/images/illustration-editor-desktop.svg";

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
            <button className="mr-5 bg-white font-bold p-2 rounded-2xl pl-6 pr-6">
              Start for Free
            </button>
            <button className="bg-transparent border hover:bg-white text-white border-white btn p-2 pl-6 pr-6 rounded-2xl">
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
                  src={editorDesktop}
                  alt=""
                  className="md:ml-30 mb-5 flex justify-self-center"
                  width="300"
                />
              </div>

              <div className="md:w-60% mb-10 w-full md:pl-30 mt-5 md:text-left text-center pl-8 pr-8">
                <article>
                  <div className="article-one">
                    <div className="container-title">
                      <h1 className="title">
                        Introducing an extensible editor
                      </h1>
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
                      <h1 className="title">Robust content management</h1>
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

              <div className="md:w-40% w-full container-img md:display hidden">
                <img src={editorDesktop} alt="" className="md:ml-30 mb-5" />
              </div>
            </div>
          </div>
        </main>

        <article></article>
      </section>
    </>
  );
}

export default Home;
