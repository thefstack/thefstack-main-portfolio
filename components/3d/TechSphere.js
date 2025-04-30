"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function TechSphere() {
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
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(500, 500)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x0077ff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0x00ffdd, 1)
    pointLight2.position.set(-10, -10, -10)
    scene.add(pointLight2)

    // Create tech sphere
    const sphereGeometry = new THREE.SphereGeometry(10, 32, 32) // Reduced complexity
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)

    // Add tech icons as points around the sphere
    const iconsCount = 20 // Reduced for better performance
    const iconGeometry = new THREE.SphereGeometry(0.5, 8, 8) // Reduced complexity
    const iconMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x61dafb }), // React blue
      new THREE.MeshStandardMaterial({ color: 0x3c873a }), // Node green
      new THREE.MeshStandardMaterial({ color: 0xf0db4f }), // JavaScript yellow
      new THREE.MeshStandardMaterial({ color: 0x007acc }), // TypeScript blue
      new THREE.MeshStandardMaterial({ color: 0xe34c26 }), // HTML orange
      new THREE.MeshStandardMaterial({ color: 0x563d7c }), // CSS purple
    ]

    const icons = []

    for (let i = 0; i < iconsCount; i++) {
      const icon = new THREE.Mesh(iconGeometry, iconMaterials[Math.floor(Math.random() * iconMaterials.length)])

      // Position icons randomly on the sphere surface
      const phi = Math.acos(-1 + (2 * i) / iconsCount)
      const theta = Math.sqrt(iconsCount * Math.PI) * phi

      icon.position.x = 12 * Math.cos(theta) * Math.sin(phi)
      icon.position.y = 12 * Math.sin(theta) * Math.sin(phi)
      icon.position.z = 12 * Math.cos(phi)

      scene.add(icon)
      icons.push(icon)
    }

    // Add connecting lines between nearby icons
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.3,
    })

    const lines = []

    for (let i = 0; i < icons.length; i++) {
      for (let j = i + 1; j < icons.length; j++) {
        const distance = icons[i].position.distanceTo(icons[j].position)

        if (distance < 10) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([icons[i].position, icons[j].position])

          const line = new THREE.Line(lineGeometry, lineMaterial)
          scene.add(line)
          lines.push(line)
        }
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
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate sphere
      sphere.rotation.y += 0.001

      // Apply mouse-based rotation
      const targetRotationX = mousePosition.y * 0.5
      const targetRotationY = mousePosition.x * 0.5

      sphere.rotation.x += (targetRotationX - sphere.rotation.x) * 0.05
      sphere.rotation.y += (targetRotationY - sphere.rotation.y) * 0.05

      // Also affect icons slightly
      icons.forEach((icon) => {
        icon.rotation.x += (targetRotationX - icon.rotation.x) * 0.02
        icon.rotation.y += (targetRotationY - icon.rotation.y) * 0.02
      })

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      renderer.setSize(500, 500)
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
      sphereGeometry.dispose()
      sphereMaterial.dispose()
      iconGeometry.dispose()
      iconMaterials.forEach((material) => material.dispose())
      lineMaterial.dispose()

      lines.forEach((line) => {
        line.geometry.dispose()
        scene.remove(line)
      })

      icons.forEach((icon) => {
        scene.remove(icon)
      })

      scene.remove(sphere)
      renderer.dispose()
    }
  }, [isMounted, mousePosition])

  if (!isMounted) return <div className="w-[500px] h-[500px] max-w-full mx-auto bg-gray-900/30 rounded-lg" />

  return (
    <div
      ref={containerRef}
      className="w-[500px] h-[500px] max-w-full mx-auto cursor-move"
      title="Move your cursor to interact with the sphere"
    />
  )
}
