"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function TechStack() {
  const containerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsMounted(true)

    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 15

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(400, 400)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x0077ff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    // Create tech stack cubes
    const technologies = [
      { name: "React", color: 0x61dafb, position: [0, 0, 0] },
      { name: "Node.js", color: 0x3c873a, position: [3, 0, 0] },
      { name: "MongoDB", color: 0x4db33d, position: [0, 3, 0] },
      { name: "JavaScript", color: 0xf0db4f, position: [0, 0, 3] },
      { name: "HTML", color: 0xe34c26, position: [-3, 0, 0] },
      { name: "CSS", color: 0x563d7c, position: [0, -3, 0] },
      { name: "Next.js", color: 0x000000, position: [0, 0, -3] },
    ]

    const cubes = []

    technologies.forEach((tech) => {
      // Create cube
      const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
      const material = new THREE.MeshStandardMaterial({
        color: tech.color,
        metalness: 0.7,
        roughness: 0.2,
      })

      const cube = new THREE.Mesh(geometry, material)
      cube.position.set(...tech.position)

      // Add wireframe
      const wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 }),
      )
      cube.add(wireframe)

      scene.add(cube)
      cubes.push(cube)
    })

    // Add connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.2,
    })

    const lines = []

    for (let i = 0; i < cubes.length; i++) {
      for (let j = i + 1; j < cubes.length; j++) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([cubes[i].position, cubes[j].position])

        const line = new THREE.Line(lineGeometry, lineMaterial)
        scene.add(line)
        lines.push(line)
      }
    }

    // Mouse move handler for container
    const handleMouseMove = (event) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      setMousePosition({ x, y })
    }

    containerRef.current.addEventListener("mousemove", handleMouseMove)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Apply mouse-based movement to cubes
      cubes.forEach((cube, index) => {
        // Base rotation
        cube.rotation.x = 0.2 * elapsedTime + index * 0.1
        cube.rotation.y = 0.3 * elapsedTime + index * 0.1

        // Mouse influence
        const distanceFromCenter = new THREE.Vector3().copy(cube.position).length()
        const influenceFactor = (1 / (distanceFromCenter + 1)) * 0.5

        // Move cubes slightly based on mouse position
        const targetX = cube.position.x + mousePosition.x * influenceFactor
        const targetY = cube.position.y + mousePosition.y * influenceFactor

        cube.position.x += (targetX - cube.position.x) * 0.05
        cube.position.y += (targetY - cube.position.y) * 0.05
      })

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      renderer.setSize(400, 400)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove)
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }

      // Dispose resources
      cubes.forEach((cube) => {
        cube.geometry.dispose()
        cube.material.dispose()
        scene.remove(cube)
      })

      lines.forEach((line) => {
        line.geometry.dispose()
        scene.remove(line)
      })

      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [isMounted, mousePosition])

  if (!isMounted) return <div className="w-[400px] h-[400px] max-w-full mx-auto bg-gray-900/30 rounded-lg" />

  return (
    <div
      ref={containerRef}
      className="w-[400px] h-[400px] max-w-full mx-auto cursor-move"
      title="Move your cursor to interact with the tech stack"
    />
  )
}
