"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create particles
    const particlesCount = 500 // Reduced for better performance
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)
    const sizes = new Float32Array(particlesCount)

    const colorOptions = [
      new THREE.Color(0x0077ff), // Blue
      new THREE.Color(0x00ddff), // Cyan
      new THREE.Color(0x00ffaa), // Teal
      new THREE.Color(0xffffff), // White
    ]

    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 100 // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 // z

      // Color
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      // Size
      sizes[i] = Math.random() * 2
    }

    // Create particle geometry
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

    // Create particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    // Create particles
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particles.rotation.x = elapsedTime * 0.02
      particles.rotation.y = elapsedTime * 0.01

      // Move particles based on mouse position
      const mouseX = (window.mouseX || 0) - window.innerWidth / 2
      const mouseY = (window.mouseY || 0) - window.innerHeight / 2

      particles.rotation.x += mouseY * 0.00001
      particles.rotation.y += mouseX * 0.00001

      // Render
      renderer.render(scene, camera)
    }

    animate()

    // Track mouse position
    const handleMouseMove = (event) => {
      window.mouseX = event.clientX
      window.mouseY = event.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)

      // Dispose resources
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      scene.remove(particles)
      renderer.dispose()
    }
  }, [isMounted])

  if (!isMounted) return null

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
