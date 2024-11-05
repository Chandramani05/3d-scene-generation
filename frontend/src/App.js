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
          In my project, I present,a novel approach to generating 3D-consistent, stylized scenes
          inspired by iconic films. My method builds on the <strong>SceneScape</strong> pipeline, incorporating <strong>Dreambooth </strong>&nbsp;
          to fine-tune Stable Diffusion models with just a few example images. This fine-tuning allows me to create scenes that not only 
          reflect the visual essence of chosen films but also preserve 3D depth and consistency. I integrate <strong>ControlNet </strong>&nbsp;
          to guide the model’s inpainting tasks, ensuring that scene structure and context remain coherent as the depth information 
          and mesh reconstruction are iteratively refined. Through experiments across multiple films, this method demonstrates a high degree 
          of style and content fidelity to the original films, validated through quantitative metrics and human evaluations. This work 
          advances the possibilities for generating immersive 3D experiences that remain true to specific artistic styles.
        </p>
      ),
    },
    contributions: {
      title: "Approach",
      content: (
        <ul>
          <li>
            <strong>Few-shot Training for Scene Generation:</strong> I apply Dreambooth to adapt Stable Diffusion models, extending 
            their application from subject-driven generation to stylized, scene-based generation. This allows me to recreate scenes that 
            retain the unique artistic qualities of specific films with minimal data.
          </li>
          <li>
            <strong>Integration of ControlNet for Structural Consistency:</strong> I incorporate ControlNet to condition the model 
            on depth-based masks, which provides contextual guidance during inpainting. This technique is essential for maintaining 
            coherence across scenes and ensuring structural fidelity in 3D space.
          </li>
          <li>
            <strong>Comprehensive Experimental Validation:</strong> I evaluate this approach against the baseline SceneScape method 
            using both aesthetic metrics and human assessments. These evaluations demonstrate projects's effectiveness in preserving 
            the intended style and quality of the original films.
          </li>
        </ul>
      ),
    },
    methods: {
      title: "Methods",
      content: (
        <p>
          In developing this method, I modify the foundational SceneScape pipeline by introducing <strong>Dreambooth</strong> for fine-tuning 
          Stable Diffusion models. For each scene, I use a few key training images to train the model, enabling it to produce stylized 
          scenes that maintain consistency with the target film’s visual characteristics. Additionally, I employ <strong>ControlNet</strong> 
          to guide inpainting tasks, which helps ensure scene coherence, depth consistency, and the reduction of geometric distortion 
          in generated 3D walkthroughs. This process is further enhanced by iterative depth estimation and mesh reconstruction, which 
          allows for realistic scene development that aligns with the film’s visual language.
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
