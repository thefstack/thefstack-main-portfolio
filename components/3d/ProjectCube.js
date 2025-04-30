"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function ProjectCube() {
  const containerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(200, 200)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 3

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x0077ff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    // Create cube
    const geometry = new THREE.BoxGeometry(2, 2, 2)

    // Create materials with different colors for each face
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x3178c6, metalness: 0.7, roughness: 0.2 }), // Front - TypeScript blue
      new THREE.MeshStandardMaterial({ color: 0x61dafb, metalness: 0.7, roughness: 0.2 }), // Back - React blue
      new THREE.MeshStandardMaterial({ color: 0x3c873a, metalness: 0.7, roughness: 0.2 }), // Top - Node green
      new THREE.MeshStandardMaterial({ color: 0x4db33d, metalness: 0.7, roughness: 0.2 }), // Bottom - MongoDB green
      new THREE.MeshStandardMaterial({ color: 0xf0db4f, metalness: 0.7, roughness: 0.2 }), // Right - JavaScript yellow
      new THREE.MeshStandardMaterial({ color: 0xe34c26, metalness: 0.7, roughness: 0.2 }), // Left - HTML orange
    ]

    const cube = new THREE.Mesh(geometry, materials)
    scene.add(cube)

    // Add wireframe
    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }),
    )
    cube.add(wireframe)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Simple rotation
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      renderer.setSize(200, 200)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }

      // Dispose of resources
      geometry.dispose()
      materials.forEach((material) => material.dispose())
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} style={{ width: "200px", height: "200px" }}></div>
}
