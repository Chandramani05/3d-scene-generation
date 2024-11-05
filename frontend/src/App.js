import React, { useRef, useState } from "react";
import * as styles from "./App.css.ts";
import { Carousel } from "antd";
import spiritedaway from "./assets/spiritedaway/spiritedaway.mp4";
import harrypotter from "./assets/harrypotter/harrypotter.mp4";
import marnie from "./assets/marnie/marnie.mp4";
import frozen from "./assets/frozen/frozen.mp4";
import spiritedaway0 from "./assets/spiritedaway/0.jpeg";
import spiritedaway1 from "./assets/spiritedaway/1.jpeg";
import spiritedaway2 from "./assets/spiritedaway/2.jpeg";
import harrypotter0 from "./assets/harrypotter/0.jpeg";
import harrypotter1 from "./assets/harrypotter/1.jpeg";
import harrypotter2 from "./assets/harrypotter/2.jpeg";
import frozen0 from "./assets/frozen/0.jpg";
import frozen1 from "./assets/frozen/1.jpeg";
import frozen2 from "./assets/frozen/2.jpg";
import marnie0 from "./assets/marnie/0.png";
import marnie1 from "./assets/marnie/1.jpeg";
import marnie2 from "./assets/marnie/2.jpeg";

function App() {
  const carouselRef = useRef(null);
  const [activeSection, setActiveSection] = useState("abstract");

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const sections = {
    abstract: {
      title: "Abstract",
      content: (
        <p>
          This project presents <strong>StyleScape</strong>, a novel approach to 3D scene generation that synthesizes
          stylized, depth-consistent scenes inspired by iconic films. Building upon the <strong>SceneScape</strong> pipeline,
          this method fine-tunes Stable Diffusion models using <strong>Dreambooth</strong> for few-shot generation of scenes 
          that match the visual essence of selected movies. By integrating <strong>ControlNet</strong> for contextual inpainting, 
          the model preserves the structural integrity of scenes through iterative depth estimation and mesh reconstruction. 
          Experiments demonstrate that StyleScape produces superior style and content fidelity to the target films compared to 
          baseline methods, validated by both quantitative metrics and human assessments.
        </p>
      ),
    },
    contributions: {
      title: "Contributions",
      content: (
        <ul>
          <li>
            <strong>Few-shot Training for Scene Generation:</strong> Application of Dreambooth to adapt Stable Diffusion models for 
            scene-driven generation, extending capabilities from subject-driven to stylized, scene-driven applications.
          </li>
          <li>
            <strong>ControlNet Integration:</strong> Enables contextual inpainting by conditioning model on depth-based mask inputs 
            to maintain scene coherence and structural consistency.
          </li>
          <li>
            <strong>Experimental Validation:</strong> Evaluation against baseline SceneScape through human assessments and 
            aesthetic metrics to validate the approach.
          </li>
        </ul>
      ),
    },
    methods: {
      title: "Methods",
      content: (
        <p>
          Our method, StyleScape, modifies the SceneScape pipeline by introducing Dreambooth for fine-tuning Stable Diffusion 
          models on a few training images per scene. This enables generation of stylized scenes consistent with the target films.
          ControlNet is used to guide the inpainting tasks to ensure scene coherence, depth consistency, and to mitigate issues 
          related to geometric distortion in 3D walkthroughs.
        </p>
      ),
    },
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>3D Scene Generation</h1>
        <h2>Project Page</h2>
      </header>

      {/* Static Section Tabs */}
      <div className={styles.tabsContainer}>
        {Object.keys(sections).map((sectionKey) => (
          <button
            key={sectionKey}
            className={`${styles.tabButton} ${activeSection === sectionKey ? styles.activeTab : ""}`}
            onClick={() => setActiveSection(sectionKey)}
          >
            {sections[sectionKey].title}
          </button>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <section className={styles.contentSection}>
        <h2>{sections[activeSection].title}</h2>
        {sections[activeSection].content}
      </section>

      {/* Carousel for Film Results */}
      <section className={styles.carouselContainer}>
        <Carousel ref={carouselRef} arrows afterChange={onChange} className={styles.carousel}>
          {/* Harry Potter Section */}
          <div className={styles.contentStyle}>
            <h2>
              The Great Hall from <span className={styles.italic}>Harry Potter and the Sorcerer's Stone</span>
            </h2>
            <div className={styles.carouselContentFlex}>
              <div className={styles.carouselContentDivOne}>
                <h3>Few-shot training images:</h3>
                <img className={styles.dreamboothImage} src={harrypotter0} width="100%" />
                <img className={styles.dreamboothImage} src={harrypotter1} width="100%" />
                <img className={styles.dreamboothImage} src={harrypotter2} width="100%" />
              </div>
              <div className={styles.carouselContentDivTwo}>
                <h3>Generated walkthrough:</h3>
                <video src={harrypotter} width="100%" controls autoPlay muted playsInline />
              </div>
            </div>
          </div>

          {/* Spirited Away Section */}
          <div className={styles.contentStyle}>
            <h2>
              Train from <span className={styles.italic}>Spirited Away</span>
            </h2>
            <div className={styles.carouselContentFlex}>
              <div className={styles.carouselContentDivOne}>
                <h3>Few-shot training images:</h3>
                <img className={styles.dreamboothImage} src={spiritedaway0} width="100%" />
                <img className={styles.dreamboothImage} src={spiritedaway1} width="100%" />
                <img className={styles.dreamboothImage} src={spiritedaway2} width="100%" />
              </div>
              <div className={styles.carouselContentDivTwo}>
                <h3>Generated walkthrough:</h3>
                <video src={spiritedaway} width="100%" controls autoPlay muted playsInline />
              </div>
            </div>
          </div>

          {/* When Marnie Was There Section */}
          <div className={styles.contentStyle}>
            <h2>
              Anna's Room from <span className={styles.italic}>When Marnie Was There</span>
            </h2>
            <div className={styles.carouselContentFlex}>
              <div className={styles.carouselContentDivOne}>
                <h3>Few-shot training images:</h3>
                <img className={styles.dreamboothImage} src={marnie0} width="100%" />
                <img className={styles.dreamboothImage} src={marnie1} width="100%" />
                <img className={styles.dreamboothImage} src={marnie2} width="100%" />
              </div>
              <div className={styles.carouselContentDivTwo}>
                <h3>Generated walkthrough:</h3>
                <video src={marnie} width="100%" controls autoPlay muted playsInline />
              </div>
            </div>
          </div>

          {/* Frozen Section */}
          <div className={styles.contentStyle}>
            <h2>
              Arendelle Castle from <span className={styles.italic}>Frozen</span>
            </h2>
            <div className={styles.carouselContentFlex}>
              <div className={styles.carouselContentDivOne}>
                <h3>Few-shot training images:</h3>
                <img className={styles.dreamboothImage} src={frozen0} width="100%" />
                <img className={styles.dreamboothImage} src={frozen1} width="100%" />
                <img className={styles.dreamboothImage} src={frozen2} width="100%" />
              </div>
              <div className={styles.carouselContentDivTwo}>
                <h3>Generated walkthrough:</h3>
                <video src={frozen} width="100%" controls autoPlay muted playsInline />
              </div>
            </div>
          </div>
        </Carousel>

        {/* Navigation Buttons */}
        <div className={styles.navButtons}>
          <button className={styles.navButton} onClick={prevSlide}>
            &#9664; {/* Left arrow */}
          </button>
          <button className={styles.navButton} onClick={nextSlide}>
            &#9654; {/* Right arrow */}
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
