import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const isMobile = window.innerWidth < 768;

        // --- Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile, powerPreference: "high-performance" });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 0.8 : 1.5));
        mount.appendChild(renderer.domElement);

        // --- Shader Gradient ---
        const gradientUniforms = {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uMouse: { value: new THREE.Vector2(0, 0) }
        };

        const gradientMaterial = new THREE.ShaderMaterial({
            uniforms: gradientUniforms,
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform vec2 uResolution;
                uniform vec2 uMouse;
                varying vec2 vUv;

                // Simplex Noise (Standard)
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
                float snoise(vec2 v) {
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1;
                    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;
                    i = mod289(i);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ;
                    m = m*m ;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g;
                    g.x  = a0.x  * x0.x  + h.x  * x0.y;
                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy/uResolution.xy;
                    
                    // Single noise lookup to save GPU cycles (major scroll performance boost)
                    float n = snoise(st * 1.5 + uTime * 0.08); 
                    
                    // Blue Gradient Palette
                    vec3 colorA = vec3(0.0, 0.0, 0.05);   // Deep Blue/Black
                    vec3 colorB = vec3(0.0, 0.1, 0.5);    // Royal Blue
                    vec3 colorC = vec3(0.0, 0.5, 1.0);    // Cyan Highlight
                    
                    // Map noise [-1, 1] to color interpolation
                    vec3 color = mix(colorA, colorB, n * 0.5 + 0.5);
                    color = mix(color, colorC, smoothstep(0.2, 0.8, n)); 
                    
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            depthWrite: false
        });

        // 2000x2000 Plane - Enough for any screen at z=-50
        const bgPlane = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), gradientMaterial);
        bgPlane.position.z = -50;
        scene.add(bgPlane);

        // --- Particles ---
        const particlesGeo = new THREE.BufferGeometry();
        const pCount = isMobile ? 80 : 250;
        const pPos = [];
        const pSizes = [];

        for (let i = 0; i < pCount; i++) {
            pPos.push((Math.random() - 0.5) * 300);
            pPos.push((Math.random() - 0.5) * 200);
            pPos.push((Math.random() - 0.5) * 100);
            pSizes.push(Math.random() * 2);
        }

        particlesGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
        particlesGeo.setAttribute('size', new THREE.Float32BufferAttribute(pSizes, 1));

        const particlesMat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 1.5,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particles);

        // --- Interaction ---
        const mouseObj = { x: 0, y: 0, isOnScreen: false };

        const handleMouseMove = (event) => {
            const x = event.clientX / window.innerWidth;
            const y = 1.0 - (event.clientY / window.innerHeight);
            gradientUniforms.uMouse.value.set(x, y);
            mouseObj.x = x;
            mouseObj.y = y;
            mouseObj.isOnScreen = true;

            // Parallax for particles
            particles.targetRotationX = (y - 0.5) * 0.2;
            particles.targetRotationY = (x - 0.5) * 0.2;
        };

        const handleMouseEnter = () => {
            mouseObj.isOnScreen = true;
        };

        const handleMouseLeave = () => {
            mouseObj.isOnScreen = false;
        };

        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // --- Animation ---
        let frameId;
        const clock = new THREE.Clock();

        // Init target rotations
        particles.targetRotationX = 0;
        particles.targetRotationY = 0;

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            gradientUniforms.uTime.value = time;

            if (mouseObj.isOnScreen) {
                particles.rotation.x += (particles.targetRotationX - particles.rotation.x) * 0.05;
                particles.rotation.y += (particles.targetRotationY - particles.rotation.y) * 0.05;
                particles.position.y += (Math.sin(time * 1.0) * 5 - particles.position.y) * 0.05;
            } else {
                particles.rotation.x += (0 - particles.rotation.x) * 0.05;
                particles.rotation.y += (0 - particles.rotation.y) * 0.05;
                particles.position.y += (0 - particles.position.y) * 0.05;

                const positions = particles.geometry.attributes.position.array;
                const speed = 0.2;
                for (let i = 1; i < positions.length; i += 3) {
                    positions[i] += speed;
                    if (positions[i] > 100) positions[i] = -100;
                }
                particles.geometry.attributes.position.needsUpdate = true;
            }

            particles.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        // --- Resize ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            gradientUniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- Cleanup ---
        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            gradientMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000000' }} />;
};

export default ParticleBackground;
