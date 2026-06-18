"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeDCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera - closer zoom for a single showpiece
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.0;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- PROCEDURAL 3D GELATO CUP (Central Hero Showpiece) ---
    const gelatoGroup = new THREE.Group();
    gelatoGroup.position.set(0, -0.4, 0);
    mainGroup.add(gelatoGroup);

    // 1. Pink Gelato Cup
    const cupGeo = new THREE.CylinderGeometry(0.85, 0.65, 1.0, 32);
    const cupMat = new THREE.MeshStandardMaterial({
      color: 0xf472b6, // vibrant warm pink
      roughness: 0.45,
      metalness: 0.05,
    });
    const cup = new THREE.Mesh(cupGeo, cupMat);
    cup.castShadow = true;
    cup.receiveShadow = true;
    gelatoGroup.add(cup);

    // Cup Rim (cream color rim)
    const bandGeo = new THREE.CylinderGeometry(0.88, 0.88, 0.08, 32);
    const bandMat = new THREE.MeshStandardMaterial({ color: 0xfdfbf7, roughness: 0.5 });
    const rim = new THREE.Mesh(bandGeo, bandMat);
    rim.position.y = 0.48;
    cup.add(rim);

    // Procedural canvas-drawn logo on pink cup
    const logoCanvas = document.createElement('canvas');
    logoCanvas.width = 256;
    logoCanvas.height = 128;
    const ctx = logoCanvas.getContext('2d');
    if (ctx) {
      // White label background
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(10, 20, 236, 88, 25);
      } else {
        ctx.rect(10, 20, 236, 88);
      }
      ctx.fill();
      // Text "ameeco" in retro brown
      ctx.fillStyle = '#3c2218';
      ctx.font = 'black 48px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ameeco', 128, 64);
    }
    const logoTexture = new THREE.CanvasTexture(logoCanvas);
    const logoMat = new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true });
    // Slight curved plate matching cup cylinder geometry
    const logoPlane = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 0.41), logoMat);
    logoPlane.position.set(0, -0.05, 0.81);
    cup.add(logoPlane);

    // 2. Ice Cream Scoops (Cream color dusted with cocoa powder)
    const scoopGeo = new THREE.SphereGeometry(0.53, 32, 16);
    const scoopBaseMat = new THREE.MeshStandardMaterial({
      color: 0xf5ede2, // vanilla cream color
      roughness: 0.85,
      flatShading: true,
    });

    const cocoaMat = new THREE.MeshStandardMaterial({
      color: 0x4a2c1b, // cocoa powder dusting
      roughness: 1.0,
      flatShading: true,
    });

    // Scoop positions
    const scoopPositions = [
      { x: -0.32, y: 0.52, z: -0.05 },
      { x: 0.32, y: 0.52, z: -0.05 },
      { x: 0, y: 0.85, z: 0.05 },
    ];

    scoopPositions.forEach((pos, idx) => {
      const scoop = new THREE.Mesh(scoopGeo, scoopBaseMat);
      scoop.position.set(pos.x, pos.y, pos.z);
      scoop.castShadow = true;
      gelatoGroup.add(scoop);

      // Cocoa dusting layer (a dome sitting on top of the scoop)
      const cocoaDomeGeo = new THREE.SphereGeometry(0.54, 32, 12, 0, Math.PI * 2, 0, Math.PI * 0.4);
      const cocoaDome = new THREE.Mesh(cocoaDomeGeo, cocoaMat);
      cocoaDome.position.set(pos.x, pos.y, pos.z);
      cocoaDome.rotation.x = -0.15;
      cocoaDome.castShadow = true;
      gelatoGroup.add(cocoaDome);
    });

    // 3. Shiny Gold Spoon
    const spoonGroup = new THREE.Group();
    spoonGroup.position.set(0.1, -0.2, 1.25);
    spoonGroup.rotation.set(-0.25, 0.4, 0.5);
    gelatoGroup.add(spoonGroup);

    const spoonMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37, // gold spoon
      metalness: 0.9,
      roughness: 0.1,
    });

    // Spoon handle
    const handleMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.8, 0.015), spoonMat);
    handleMesh.position.y = -0.1;
    spoonGroup.add(handleMesh);

    // Spoon head
    const headGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const headMesh = new THREE.Mesh(headGeo, spoonMat);
    headMesh.scale.set(1.0, 0.3, 1.4);
    headMesh.position.y = 0.35;
    spoonGroup.add(headMesh);


    // --- PROCEDURAL 3D WAFFLE CONE (Left Background) ---
    const backgroundConeGroup = new THREE.Group();
    backgroundConeGroup.position.set(-1.6, 0.6, -1.8);
    mainGroup.add(backgroundConeGroup);

    const coneGeo = new THREE.ConeGeometry(0.5, 1.3, 16, 1, true);
    const coneMat = new THREE.MeshStandardMaterial({
      color: 0xcd853f, // golden caramel
      roughness: 0.85,
    });
    const waffleCone = new THREE.Mesh(coneGeo, coneMat);
    waffleCone.rotation.x = Math.PI; // flip upside down
    waffleCone.castShadow = true;
    backgroundConeGroup.add(waffleCone);

    // Double scoops inside background cone
    const bgScoopGeo = new THREE.SphereGeometry(0.36, 16, 16);
    // Scoop A (Mango)
    const mangoScoop = new THREE.Mesh(bgScoopGeo, new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.8, flatShading: true }));
    mangoScoop.position.set(-0.1, 0.65, 0);
    backgroundConeGroup.add(mangoScoop);

    // Scoop B (Mint)
    const mintScoop = new THREE.Mesh(bgScoopGeo, new THREE.MeshStandardMaterial({ color: 0xa7f3d0, roughness: 0.8, flatShading: true }));
    mintScoop.position.set(0.1, 0.8, 0.05);
    backgroundConeGroup.add(mintScoop);


    // --- ORBITING MINI COOKIES ---
    // 1. Red Velvet Mini
    const miniRVGroup = new THREE.Group();
    miniRVGroup.position.set(-1.2, -1.0, -0.8);
    mainGroup.add(miniRVGroup);

    const miniRVBase = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 20, 10),
      new THREE.MeshStandardMaterial({ color: 0xbe123c, roughness: 0.9, flatShading: true })
    );
    miniRVBase.scale.set(1.4, 0.5, 1.4);
    miniRVBase.castShadow = true;
    miniRVGroup.add(miniRVBase);

    // White chocolate chips
    for (let k = 0; k < 5; k++) {
      const chip = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.05, 1),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.6 })
      );
      const angle = (k / 5) * Math.PI * 2;
      chip.position.set(Math.cos(angle) * 0.22, 0.1, Math.sin(angle) * 0.22);
      miniRVGroup.add(chip);
    }

    // 2. Dark Chocolate Lava Mini
    const miniLavaGroup = new THREE.Group();
    miniLavaGroup.position.set(1.4, 1.2, -1.0);
    mainGroup.add(miniLavaGroup);

    const miniLavaBase = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 20, 10),
      new THREE.MeshStandardMaterial({ color: 0x3b1e08, roughness: 0.95, flatShading: true })
    );
    miniLavaBase.scale.set(1.4, 0.45, 1.4);
    miniLavaBase.castShadow = true;
    miniLavaGroup.add(miniLavaBase);

    // Lava core
    const lavaCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4, emissive: 0x7c2d12 })
    );
    lavaCore.position.y = 0.1;
    miniLavaGroup.add(lavaCore);


    // --- FLOATING INGREDIENTS (Pecans & Chocolate Chunks) ---
    const ingredientGroup = new THREE.Group();
    mainGroup.add(ingredientGroup);

    const ingredientMeshes: THREE.Mesh[] = [];
    const chocoChunkGeo = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    const miniPecanGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const berryGeo = new THREE.ConeGeometry(0.1, 0.18, 12);

    const chocoMat = new THREE.MeshStandardMaterial({ color: 0x1d0f08, roughness: 0.8 });
    const miniPecanMat = new THREE.MeshStandardMaterial({ color: 0x542306, roughness: 0.75 });
    const berryMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.6 });

    // Generate 18 floating ingredients
    for (let i = 0; i < 18; i++) {
      let mesh: THREE.Mesh;
      if (i % 3 === 0) {
        mesh = new THREE.Mesh(chocoChunkGeo, chocoMat);
      } else if (i % 3 === 1) {
        mesh = new THREE.Mesh(miniPecanGeo, miniPecanMat);
      } else {
        mesh = new THREE.Mesh(berryGeo, berryMat);
      }

      mesh.position.set(
        (Math.random() - 0.5) * 6.5,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 4.0
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      ingredientGroup.add(mesh);
      ingredientMeshes.push(mesh);
    }

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    // Primary bright light
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.3);
    dirLight1.position.set(6, 10, 5);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    dirLight1.shadow.bias = -0.001;
    scene.add(dirLight1);

    // Colored accent spotlight
    const spotLight = new THREE.SpotLight(0xd97706, 3, 15, Math.PI * 0.25, 0.5, 1);
    spotLight.position.set(0, 5, 2);
    spotLight.target = mainGroup;
    scene.add(spotLight);

    // Warm fill light
    const dirLight2 = new THREE.DirectionalLight(0xf5ede2, 0.7);
    dirLight2.position.set(-6, 4, -4);
    scene.add(dirLight2);

    // Mouse Tracking for tilt animation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 1.5;
        mouseY = -(e.touches[0].clientY / window.innerHeight - 0.5) * 1.5;
      }
    };
    window.addEventListener('touchmove', handleTouchMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth follow for mouse input
      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      // Apply tilt to main group
      mainGroup.rotation.y = targetX * 0.45;
      mainGroup.rotation.x = -targetY * 0.35;

      // Slow base rotation for primary gelato item
      gelatoGroup.rotation.y = -elapsedTime * 0.3;
      gelatoGroup.rotation.x = Math.cos(elapsedTime * 0.45) * 0.04;

      // Left background cone orbital rotation
      backgroundConeGroup.rotation.y = -elapsedTime * 0.15;
      backgroundConeGroup.position.y = 0.6 + Math.sin(elapsedTime * 1.0) * 0.1;

      // Orbiting mini cookies animation
      miniRVGroup.position.x = -1.5 + Math.cos(elapsedTime * 0.8) * 0.4;
      miniRVGroup.position.y = -0.5 + Math.sin(elapsedTime * 0.6) * 0.25;
      miniRVGroup.rotation.y += 0.015;
      miniRVGroup.rotation.x += 0.01;

      miniLavaGroup.position.x = 1.5 + Math.sin(elapsedTime * 0.7) * 0.4;
      miniLavaGroup.position.y = 0.8 + Math.cos(elapsedTime * 0.5) * 0.25;
      miniLavaGroup.rotation.y -= 0.01;
      miniLavaGroup.rotation.z += 0.012;

      // Primary group float effect
      gelatoGroup.position.y = -0.45 + Math.sin(elapsedTime * 1.4 + 1.2) * 0.15;

      // Animate floating ingredients
      ingredientMeshes.forEach((mesh, idx) => {
        mesh.position.y += Math.sin(elapsedTime * 0.8 + idx) * 0.003;
        mesh.rotation.x += 0.007;
        mesh.rotation.y += 0.004;
      });

      // Slowly move spotlight
      spotLight.position.x = Math.sin(elapsedTime * 0.5) * 2;

      renderer.render(scene, camera);
    };

    setLoading(false);
    animate();

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      // Adaptive scaling based on layout width (Single Center Showpiece)
      if (width < 640) {
        // Mobile view
        gelatoGroup.position.set(0, -0.4, 0);
        backgroundConeGroup.position.set(-1.1, 1.2, -2.0);
        miniRVGroup.position.set(-0.9, -1.2, -1.0);
        miniLavaGroup.position.set(0.9, 1.3, -1.0);
        camera.position.z = 7.2;
      } else if (width < 1024) {
        // Tablet view
        gelatoGroup.position.set(0, -0.45, 0);
        backgroundConeGroup.position.set(-1.4, 0.8, -1.8);
        camera.position.z = 6.4;
      } else {
        // Desktop view
        gelatoGroup.position.set(0, -0.45, 0);
        backgroundConeGroup.position.set(-1.6, 0.6, -1.8);
        camera.position.z = 6.0;
      }

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    // Trigger initially
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Dispose meshes
      cupGeo.dispose();
      cupMat.dispose();
      bandGeo.dispose();
      bandMat.dispose();
      scoopGeo.dispose();
      coneGeo.dispose();
      coneMat.dispose();
      bgScoopGeo.dispose();
      mangoScoop.material.dispose();
      mintScoop.material.dispose();
      miniRVBase.geometry.dispose();
      miniRVBase.material.dispose();
      miniLavaBase.geometry.dispose();
      miniLavaBase.material.dispose();
      lavaCore.geometry.dispose();
      lavaCore.material.dispose();
      spoonGroup.clear();
      handleMesh.geometry.dispose();
      headGeo.dispose();
      
      chocoChunkGeo.dispose();
      miniPecanGeo.dispose();
      berryGeo.dispose();
      chocoMat.dispose();
      miniPecanMat.dispose();
      berryMat.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full border-4 border-brown-light border-t-brown-dark animate-spin" />
          <p className="font-display font-bold text-brown-default text-sm tracking-widest animate-pulse">
            BAKING 3D SCENE...
          </p>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing z-10" />
      <div className="absolute inset-0 bg-radial from-transparent to-cream-default/60 pointer-events-none z-0" />
    </div>
  );
}
