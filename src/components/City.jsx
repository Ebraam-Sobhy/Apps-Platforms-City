import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

import redditIcon from '/Reddit.jpeg';
import youtubeIcon from '/youtube.png';
import instagramIcon from '/instagram.png';
import linkedinIcon from '/linkedin.png';
import githubIcon from '/github.png';
import discordIcon from '/discord.png';
import pinterestIcon from '/pinterest.png';
import stackoverflowIcon from '/stackoverflow.png';
import udemyIcon from '/udemy.jpg';
import notionIcon from '/notion.png';
import googleIcon from '/google.png';
import freecodecampIcon from '/freecodecamp.png';
import chatgptIcon from '/chatgpt.png';
import courseraIcon from '/coursera.png';
import geminiIcon from '/gemini.png';
import behanceIcon from '/behance.png';
import sharktank from '/shark-tank.png'

export default function SocialMediaCity() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const playerRef = useRef(null);
  const buildingsRef = useRef([]);
  const textureLoaderRef = useRef(new THREE.TextureLoader());
  
  const touchControls = useRef({ forward: false, backward: false, left: false, right: false });
  const [currentPlatform, setCurrentPlatform] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visitedPlatforms, setVisitedPlatforms] = useState(new Set());
  const navigate = useNavigate();

// Handle navigation to platform
  const navigateToPlatform = () => {
  if (!currentPlatform) return;

  setVisitedPlatforms(prev => new Set([...prev, currentPlatform.name]));

  if (currentPlatform.route) {
    const url = `${window.location.origin}${currentPlatform.route}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  } else if (currentPlatform.link) {
    window.open(currentPlatform.link, '_blank', 'noopener,noreferrer');
  }
};

  const platforms = [
    {
      name: 'Reddit',
      color: 0xff4500,
      position: { x: -15, z: -10 },
      route: '/reddit',
      localImage: redditIcon,
    },
    {
      name: 'YouTube',
      color: 0xff0000,
      position: { x: 15, z: -10 },
      route: '/youtube',
      localImage: youtubeIcon
    },
    {
      name: 'Instagram',
      color: 0xe1306c,
      position: { x: -15, z: -30 },
      route: '/instagram',
      localImage: instagramIcon
    },
    {
      name: 'LinkedIn',
      color: 0x0077b5,
      position: { x: 15, z: -30 },
      route: '/linkedin',
      localImage: linkedinIcon
    },
    {
      name: 'GitHub',
      color: 0x00000,
      position: { x: 0, z: -50 },
      route: '/github',
      localImage: githubIcon
    },
    {
      name: 'Discord',
      color: 0x5865f2,
      position: { x: -20, z: -70 },
      route: '/discord',
      localImage: discordIcon
    },
    {
      name: 'Pinterest',
      color: 0xe60023,
      position: { x: 20, z: -70 },
      route: '/pinterest',
      localImage: pinterestIcon
    },
    {
      name: 'Stack Overflow',
      color: 0xf48024,
      position: { x: -15, z: -90 },
      route: '/stackoverflow',
      localImage: stackoverflowIcon
    },
    {
      name: 'Udemy',
      color: 0xa435f0,
      position: { x: 15, z: -90 },
      route: '/udemy',
      localImage: udemyIcon
    },
    {
      name: 'Notion',
      color: 0x000000,
      position: { x: 0, z: -110 },
      route: '/notion',
      localImage: notionIcon
    },
    {
      name: 'Google Workspace',
      color: 0x4285F4,
      position: { x: -25, z: -130 },
      route: '/google',
      localImage: googleIcon
    },
    {
      name: 'freecodecamp',
      color: 0x0000ff,
      position: { x: 25, z: -130 },
      route: '/freecodecamp',
      localImage: freecodecampIcon
    },
    {
      name: 'Coursera',
      color: 0x2A73CC,
      position: { x: -15, z: -150 },
      route: '/coursera',
      localImage: courseraIcon
    },
    {
      name: 'ChatGPT',
      color: 0x000000,
      position: { x: 15, z: -150 },
      route: '/chatgpt',
      localImage: chatgptIcon
    },
    {
      name: 'Gemini',
      color: 0x0000ff,
      position: { x: -20, z: -170 },
      route: '/gemini',
      localImage: geminiIcon
    },
    {
      name: 'Behance',
      color: 0x1769ff,
      position: { x: 20, z: -170 },
      route: '/behance',
      localImage: behanceIcon
    },
    {
      name: 'Shark Tank',
      color: 0x1da1f2,
      position: { x: -25, z: -190 },
      route: '/sharktank',
      localImage: sharktank
    },
    // {
    //   name: 'TikTok',
    //   color: 0x000000,
    //   position: { x: 25, z: -190 },
    //   route: '/tiktok',
    //   localImage: tiktokIcon
    // },
    // {
    //   name: 'Medium',
    //   color: 0x000000,
    //   position: { x: -15, z: -210 },
    //   route: '/medium',
    //   localImage: mediumIcon
    // },
    // {
    //   name: 'Slack',
    //   color: 0x4a154b,
    //   position: { x: 15, z: -210 },
    //   route: '/slack',
    //   localImage: slackIcon
    // },
  ];

  // Initialize Three.js Scene
  const initScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 50, 150);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 25);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    return { scene, camera, renderer };
  };

  // Setup Lighting (same as before)
  const setupLighting = (scene) => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -80;
    directionalLight.shadow.camera.right = 80;
    directionalLight.shadow.camera.top = 80;
    directionalLight.shadow.camera.bottom = -80;
    scene.add(directionalLight);
  };

  // Create Ground (same as before)
  const createGround = (scene) => {
    const groundGeometry = new THREE.PlaneGeometry(400, 600);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    return ground;
  };

  // Create City Streets (same as before)
  const createStreets = (scene, platforms) => {
  const streetMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
    roughness: 0.9
  });

  // Main street
  const mainStreet = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 250), // extend length to cover all platforms
    streetMaterial
  );
  mainStreet.rotation.x = -Math.PI / 2;
  mainStreet.position.set(0, 0.01, -90); // center it along the extended street
  mainStreet.receiveShadow = true;
  scene.add(mainStreet);

  // Determine number of cross streets based on platforms
  const maxZ = Math.min(...platforms.map(p => p.position.z)); // most negative z
  const numCrossStreets = Math.ceil(Math.abs(maxZ) / 20);

  for (let i = 0; i < numCrossStreets; i++) {
    const crossStreet = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 6),
      streetMaterial
    );
    crossStreet.rotation.x = -Math.PI / 2;
    crossStreet.position.set(0, 0.01, -i * 20 - 10);
    crossStreet.receiveShadow = true;
    scene.add(crossStreet);
  }

  // Center line markings
  const lineMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.3
  });

  const numLines = Math.ceil(Math.abs(maxZ) / 10);
  for (let i = 0; i < numLines; i++) {
    const line = new THREE.Mesh(
      new THREE.PlaneGeometry(0.3, 3),
      lineMaterial
    );
    line.rotation.x = -Math.PI / 2;
    line.position.set(0, 0.02, -i * 10);
    scene.add(line);
  }
};

  // Create Player Character (same as before)
  const createPlayer = (scene) => {
    const playerGroup = new THREE.Group();

    const bodyGeometry = new THREE.CylinderGeometry(0.4, 0.4, 1.2, 8);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x3498db });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    body.castShadow = true;
    playerGroup.add(body);

    const headGeometry = new THREE.SphereGeometry(0.35, 8, 8);
    const headMaterial = new THREE.MeshStandardMaterial({ color: 0xffdbac });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    head.castShadow = true;
    playerGroup.add(head);

    const armGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.7, 6);
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0x3498db });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.5, 0.8, 0);
    leftArm.castShadow = true;
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.5, 0.8, 0);
    rightArm.castShadow = true;
    
    playerGroup.add(leftArm, rightArm);

    const legGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.7, 6);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x2c3e50 });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, 0.1, 0);
    leftLeg.castShadow = true;
    
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, 0.1, 0);
    rightLeg.castShadow = true;
    
    playerGroup.add(leftLeg, rightLeg);

    playerGroup.position.set(0, 0, 10);
    scene.add(playerGroup);
    playerRef.current = playerGroup;

    return playerGroup;
  };

  // Create Building with Platform Image
  const createBuilding = (platform) => {
    const buildingGroup = new THREE.Group();
    const height = 8 + Math.random() * 4;

    // Building Structure
    const buildingGeometry = new THREE.BoxGeometry(6, height, 6);
    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: platform.color,
      roughness: 0.7,
      metalness: 0.3
    });
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.y = height / 2;
    building.castShadow = true;
    building.receiveShadow = true;
    buildingGroup.add(building);

    // Roof
    const roofGeometry = new THREE.BoxGeometry(6.5, 0.5, 6.5);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = height + 0.25;
    roof.castShadow = true;
    buildingGroup.add(roof);

    // Windows
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffaa,
      emissive: 0xffffaa,
      emissiveIntensity: 0.5
    });

    const windowGeometry = new THREE.PlaneGeometry(0.8, 1);
    const numFloors = Math.floor(height / 2);

    for (let floor = 0; floor < numFloors; floor++) {
      const yPos = floor * 2 + 2;

      // Front windows
      const frontWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
      const frontWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
      frontWindow1.position.set(-1.5, yPos, 3.01);
      frontWindow2.position.set(1.5, yPos, 3.01);

      // Back windows
      const backWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
      const backWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
      backWindow1.position.set(-1.5, yPos, -3.01);
      backWindow2.position.set(1.5, yPos, -3.01);
      backWindow1.rotation.y = Math.PI;
      backWindow2.rotation.y = Math.PI;

      // Right side windows
      const rightWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
      const rightWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
      rightWindow1.position.set(3.01, yPos, -1.5);
      rightWindow2.position.set(3.01, yPos, 1.5);
      rightWindow1.rotation.y = -Math.PI / 2;
      rightWindow2.rotation.y = -Math.PI / 2;

      // Left side windows
      const leftWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
      const leftWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
      leftWindow1.position.set(-3.01, yPos, -1.5);
      leftWindow2.position.set(-3.01, yPos, 1.5);
      leftWindow1.rotation.y = Math.PI / 2;
      leftWindow2.rotation.y = Math.PI / 2;

      buildingGroup.add(frontWindow1, frontWindow2, backWindow1, backWindow2, 
                       rightWindow1, rightWindow2, leftWindow1, leftWindow2);
    }

    // Create Image Sign for the building
    const createImageSign = async (platform) => {
      return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        
        // Draw background
        ctx.fillStyle = `#${platform.color.toString(16).padStart(6, '0')}`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw platform name
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(platform.name, canvas.width / 2, 50);
        
        // Load and draw platform image
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = platform.localImage;
        
        img.onload = () => {
          // Draw image in the center
          const imageSize = 300;
          const x = (canvas.width - imageSize) / 2;
          const y = (canvas.height - imageSize) / 2 + 50;
          
          // Draw image
          ctx.drawImage(img, x, y, imageSize, imageSize);
          
          const texture = new THREE.CanvasTexture(canvas);
          const signGeometry = new THREE.PlaneGeometry(5, 5);
          const signMaterial = new THREE.MeshStandardMaterial({ 
            map: texture,
            transparent: true
          });
          const sign = new THREE.Mesh(signGeometry, signMaterial);
          sign.position.set(0, height / 2, 3.1);
          sign.castShadow = true;
          
          resolve(sign);
        };
        
        img.onerror = () => {
          // Fallback if image fails to load
          const texture = new THREE.CanvasTexture(canvas);
          const signGeometry = new THREE.PlaneGeometry(5, 5);
          const signMaterial = new THREE.MeshStandardMaterial({ 
            map: texture,
            transparent: true
          });
          const sign = new THREE.Mesh(signGeometry, signMaterial);
          sign.position.set(0, height / 2, 3.1);
          sign.castShadow = true;
          
          resolve(sign);
        };
      });
    };

    // Create image sign and add it to building
    createImageSign(platform).then(sign => {
      buildingGroup.add(sign);
    });

    // Alternative: Create a 3D floating icon above the building
    const createFloatingIcon = () => {
      const iconGroup = new THREE.Group();
      
      // Create image plane for the icon
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = platform.localImage;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw white circle background
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        // Draw image
        const imageSize = 140;
        const x = (canvas.width - imageSize) / 2;
        const y = (canvas.height - imageSize) / 2;
        ctx.drawImage(img, x, y, imageSize, imageSize);
        
        const texture = new THREE.CanvasTexture(canvas);
        const iconGeometry = new THREE.PlaneGeometry(2, 2);
        const iconMaterial = new THREE.MeshStandardMaterial({ 
          map: texture,
          transparent: true,
          side: THREE.DoubleSide
        });
        const icon = new THREE.Mesh(iconGeometry, iconMaterial);
        icon.position.y = height + 2;
        
        // Make the icon face the player by rotating it
        icon.lookAt(new THREE.Vector3(0, height + 2, 0));
        
        iconGroup.add(icon);
      };
      
      return iconGroup;
    };

    const floatingIcon = createFloatingIcon();
    buildingGroup.add(floatingIcon);

    // Position the building
    buildingGroup.position.set(platform.position.x, 0, platform.position.z);
    
    // Add platform data for interaction
    buildingGroup.userData = {
      type: 'building',
      platform: platform,
      onClick: () => {
        if (playerRef.current) {
          const distance = playerRef.current.position.distanceTo(buildingGroup.position);
          if (distance < 10) {
            setCurrentPlatform(platform);
            setVisitedPlatforms(prev => new Set([...prev, platform.name]));
            
            // Highlight the building briefly
            building.material.color.set(0xffffff);
            setTimeout(() => {
              building.material.color.set(platform.color);
            }, 300);
            
            // Navigate after a short delay for visual feedback
            setTimeout(() => {
              if (platform.route) {
                navigate(platform.route);
              } 
            }, 800);
          }
        }
      }
    };

    return buildingGroup;
  };

  // Create Trees for decoration (same as before)
  const createTrees = (scene, platforms, count = 50) => {
  for (let i = 0; i < count; i++) {
    const treeGroup = new THREE.Group();

    const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.4, 3, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.castShadow = true;
    treeGroup.add(trunk);

    const foliageGeometry = new THREE.SphereGeometry(1.5, 8, 8);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x2d5016 });
    const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
    foliage.position.y = 3;
    foliage.castShadow = true;
    treeGroup.add(foliage);

    let x, z;
    do {
      x = (Math.random() - 0.5) * 80;
      const minZ = Math.min(...platforms.map(p => p.position.z));
      z = Math.random() * -80 + minZ; // cover all platforms
    } while (
      Math.abs(x) < 10 ||
      platforms.some(p =>
        Math.abs(x - p.position.x) < 10 &&
        Math.abs(z - p.position.z) < 10
      )
    );

    treeGroup.position.set(x, 0, z);
    scene.add(treeGroup);
  }
};

  // Create Street Lamps (same as before)
  const createStreetLamps = (scene, count = 22) => {
    for (let i = 0; i < count; i++) {
      const lampGroup = new THREE.Group();

      const poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 6, 8);
      const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
      const pole = new THREE.Mesh(poleGeometry, poleMaterial);
      pole.position.y = 3;
      pole.castShadow = true;
      lampGroup.add(pole);

      const lightGeometry = new THREE.SphereGeometry(0.3, 8, 8);
      const lightMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffaa,
        emissive: 0xffffaa,
        emissiveIntensity: 1
      });
      const light = new THREE.Mesh(lightGeometry, lightMaterial);
      light.position.y = 6;
      lampGroup.add(light);

      const x = 10 * (i % 2 === 0 ? 1 : -1);
      const z = -i * 10 - 5;
      lampGroup.position.set(x, 0, z);
      scene.add(lampGroup);
    }
  };

  // Setup Event Listeners (same as before)
  const setupEventListeners = (renderer) => {
    const keys = {
      w: false, a: false, s: false, d: false,
      ArrowUp: false, ArrowLeft: false, ArrowDown: false, ArrowRight: false
    };

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (keys.hasOwnProperty(key)) keys[key] = true;
      if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (keys.hasOwnProperty(key)) keys[key] = false;
      if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseDown = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current);
      const intersects = raycaster.intersectObjects(buildingsRef.current);

      if (intersects.length > 0) {
        const building = intersects[0].object;
        if (building.userData && building.userData.onClick) {
          building.userData.onClick();
        }
      }
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const fakeMouseEvent = {
          clientX: touch.clientX,
          clientY: touch.clientY
        };
        handleMouseDown(fakeMouseEvent);
      }
    }, { passive: false });

    const handleResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return { keys, handleKeyDown, handleKeyUp, handleResize };
  };

  // Animation Loop (same as before)
  const startAnimation = (keys) => {
    let armSwing = 0;
    let animationFrameId;
    let currentNearbyPlatform = null;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!playerRef.current || !cameraRef.current || !rendererRef.current) return;

      const player = playerRef.current;
      const camera = cameraRef.current;
      const scene = sceneRef.current;
      const renderer = rendererRef.current;

      let isMoving = false;
      const moveDirection = new THREE.Vector3();
      const moveSpeed = 0.2;
      const rotationSpeed = 0.05;

      if (keys.w || keys.ArrowUp || touchControls.current.forward) {
        moveDirection.z -= 1;
        isMoving = true;
      }
      if (keys.s || keys.ArrowDown || touchControls.current.backward) {
        moveDirection.z += 1;
        isMoving = true;
      }
      if (keys.a || keys.ArrowLeft || touchControls.current.left) {
        player.rotation.y += rotationSpeed;
      }
      if (keys.d || keys.ArrowRight || touchControls.current.right) {
        player.rotation.y -= rotationSpeed;
      }

      if (isMoving) {
        moveDirection.normalize();
        moveDirection.applyQuaternion(player.quaternion);
        player.position.add(moveDirection.multiplyScalar(moveSpeed));

        armSwing += 0.2;
        const arms = player.children.filter(child => 
          child.geometry && child.geometry.type === 'CylinderGeometry' && 
          child.position.y > 0.5
        );
        const legs = player.children.filter(child => 
          child.geometry && child.geometry.type === 'CylinderGeometry' && 
          child.position.y < 0.5
        );

        if (arms.length >= 2) {
          arms[0].rotation.x = Math.sin(armSwing) * 0.5;
          arms[1].rotation.x = Math.sin(armSwing + Math.PI) * 0.5;
        }
        if (legs.length >= 2) {
          legs[0].rotation.x = Math.sin(armSwing + Math.PI) * 0.3;
          legs[1].rotation.x = Math.sin(armSwing) * 0.3;
        }
      } else {
        const bodyParts = player.children.filter(child => 
          child.geometry && child.geometry.type === 'CylinderGeometry'
        );
        bodyParts.forEach(part => {
          part.rotation.x = 0;
        });
      }

      let nearestPlatform = null;
      let minDistance = Infinity;

      buildingsRef.current.forEach(building => {
        if (building.userData && building.userData.platform) {
          const distance = player.position.distanceTo(building.position);
          if (distance < 8 && distance < minDistance) {
            minDistance = distance;
            nearestPlatform = building.userData.platform;
          }
        }
      });

      if (nearestPlatform !== currentNearbyPlatform) {
        currentNearbyPlatform = nearestPlatform;
        setCurrentPlatform(nearestPlatform);
        
        if (nearestPlatform) {
          setVisitedPlatforms(prev => new Set([...prev, nearestPlatform.name]));
        }
      }

      const cameraOffset = new THREE.Vector3(0, 12, 18);
      cameraOffset.applyQuaternion(player.quaternion);
      const targetCameraPos = player.position.clone().add(cameraOffset);
      camera.position.lerp(targetCameraPos, 0.1);
      
      const lookAtTarget = player.position.clone();
      lookAtTarget.y += 2;
      camera.lookAt(lookAtTarget);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  };

  // Main useEffect
  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    if (!containerRef.current) return;

    const { scene, camera, renderer } = initScene();
    
    setupLighting(scene);
    createGround(scene);
    createStreets(scene, platforms);
    createPlayer(scene);
    
    buildingsRef.current = platforms.map(platform => {
      const building = createBuilding(platform);
      scene.add(building);
      return building;
    });

    document.title = 'Apps & Platforms City'
    
    createStreetLamps(scene);
    
    const { keys, handleKeyDown, handleKeyUp, handleResize } = setupEventListeners(renderer);
    const cleanupAnimation = startAnimation(keys);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('resize', handleResize);
      
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      cleanupAnimation && cleanupAnimation();
    };

  }, [navigate]);

  const handleTouchStart = (direction, e) => {
    e.preventDefault();
    touchControls.current[direction] = true;
  };

  const handleTouchEnd = (direction, e) => {
    e.preventDefault();
    touchControls.current[direction] = false;
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden', 
      position: 'relative',
      touchAction: 'none' 
    }}>
      <div ref={containerRef} />

      {/* Platform Info Panel with Image */}
      {currentPlatform && (
        <div style={{
          position: 'absolute',
          bottom: '500px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.85)',
          color: 'white',
          padding: '20px',
          
          fontFamily: 'Arial, sans-serif',
          maxWidth: '400px',
          width: '100%',
          zIndex: 100,
          backdropFilter: 'blur(10px)',
          
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {/* Platform Image */}
          <div style={{
            width: '80px',
            height: '80px',            
            marginBottom: '15px',
          }}>
            <img 
              src={currentPlatform.localImage} 
              alt={currentPlatform.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
              crossOrigin="anonymous"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <h3 style={{ 
            margin: '0 0 10px 0', 
            color: `#${currentPlatform.color.toString(16).padStart(6, '0')}`,
            textAlign: 'center',
            fontWeight: 'bolder',
            fontSize: '30px', 
          }}>
            {currentPlatform.name}
          </h3>
          
          <div style={{ 
            fontSize: '14px', 
            opacity: 0.8,
            marginBottom: '10px'
          }}>
            {visitedPlatforms.has(currentPlatform.name)}
          </div>
          
          {/* Navigate Button - Simple Version */}
          <button
            onClick={navigateToPlatform}
            style={{
              fontSize: '12px',
              padding: '8px 12px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textAlign: 'center',
              width: '100%',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            {isMobile ? 'Tap here to enter building' : 'Click here to enter building'}
          </button>
        </div>
      )}

      {/* Mobile Controls (same as before) */}
      {isMobile && (
        <>
          <div style={{
            position: 'absolute',
            right: '20px',
            bottom: '160px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            zIndex: 100
          }}>
            <button
              onTouchStart={(e) => handleTouchStart('forward', e)}
              onTouchEnd={(e) => handleTouchEnd('forward', e)}
              style={{
                width: '80px',
                height: '80px',
                fontSize: '36px',
                border: 'none',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3498db, #2980b9)',
                color: 'white',
                boxShadow: '0 6px 20px rgba(52, 152, 219, 0.4)',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ▲
            </button>
            <button
              onTouchStart={(e) => handleTouchStart('backward', e)}
              onTouchEnd={(e) => handleTouchEnd('backward', e)}
              style={{
                width: '80px',
                height: '80px',
                fontSize: '36px',
                border: 'none',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3498db, #2980b9)',
                color: 'white',
                boxShadow: '0 6px 20px rgba(52, 152, 219, 0.4)',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ▼
            </button>
          </div>
          <div style={{
            position: 'absolute',
            left: '20px',
            bottom: '160px',
            display: 'flex',
            gap: '15px',
            zIndex: 100
          }}>
            <button
              onTouchStart={(e) => handleTouchStart('left', e)}
              onTouchEnd={(e) => handleTouchEnd('left', e)}
              style={{
                width: '80px',
                height: '80px',
                fontSize: '36px',
                border: 'none',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                color: 'white',
                boxShadow: '0 6px 20px rgba(231, 76, 60, 0.4)',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ◄
            </button>
            <button
              onTouchStart={(e) => handleTouchStart('right', e)}
              onTouchEnd={(e) => handleTouchEnd('right', e)}
              style={{
                width: '80px',
                height: '80px',
                fontSize: '36px',
                border: 'none',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                color: 'white',
                boxShadow: '0 6px 20px rgba(231, 76, 60, 0.4)',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ►
            </button>
          </div>
        </>
      )}
    </div>
  );
}