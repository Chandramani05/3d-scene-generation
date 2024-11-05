# 3D Scene Generation

## Abstract
In this project, I introduce a novel approach to generating 3D-consistent, stylized scenes inspired by iconic films. Building on the **SceneScape** pipeline, I use **Dreambooth** to fine-tune **Stable Diffusion** models with a few example images. This fine-tuning process allows me to create scenes that not only capture the visual essence of chosen films but also maintain 3D depth and consistency. I integrate **ControlNet** to guide inpainting tasks, ensuring that scene structure and context remain coherent as the depth information and mesh reconstruction are refined iteratively. Through experiments across multiple films, this approach demonstrates a high degree of style and content fidelity to the original films, validated by both quantitative metrics and human evaluations. This project pushes the boundaries of generating immersive 3D experiences that stay true to specific artistic styles.

## Project Overview
This project is designed to bring stylized 3D scenes to life using minimal training data. This approach leverages cutting-edge technologies such as Stable Diffusion, Dreambooth, and ControlNet to create immersive, depth-consistent 3D scenes from just a few reference images. By fine-tuning Stable Diffusion models, this method allows for high-quality generation that closely mirrors the original style of the selected films, producing scenes that maintain depth and coherence.

## Features
- **Few-shot Training for Scene Generation**: Using Dreambooth, I adapt Stable Diffusion models to create stylized scenes with minimal data requirements, capturing the artistic style of specific films.
- **Depth and Consistency Maintenance with ControlNet**: ControlNet is applied to provide contextual inpainting, ensuring structural integrity and consistency across scenes.
- **Quantitative and Qualitative Validation**: The model’s outputs are evaluated using quantitative aesthetic metrics and qualitative assessments, proving the high fidelity of generated scenes to the source material.

## Methodology
1. **Fine-tuning with Dreambooth**: The model is fine-tuned on a few example images per scene, enabling it to learn the visual style and depth cues specific to each film.
2. **Integration of ControlNet**: ControlNet guides the model’s inpainting tasks by conditioning it on depth-based masks, which helps maintain scene coherence and structural consistency.
3. **Iterative Depth Estimation and Mesh Reconstruction**: The 3D consistency of generated scenes is enhanced through iterative processes that refine depth estimation and mesh reconstruction.

## Results
Experiments across multiple films show that this produces scenes with a high degree of stylistic and content fidelity to the original films. Both quantitative metrics and human evaluations affirm the superiority over baseline methods, particularly in maintaining depth and artistic integrity in generated scenes.

## Installation
To set up the project environment, clone this repository and install the required dependencies:

```bash
git clone https://github.com/Chandramani05/3d-scene-generation.git
cd 3d-scene-generation
pip install -r requirements.txt
