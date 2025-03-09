"use client"

import { useEffect, useRef } from "react"

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star particles
    const stars: Star[] = []
    const numStars = Math.floor((canvas.width * canvas.height) / 1000)

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.2,
        brightness: Math.random() * 0.8 + 0.2,
        color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
        originalX: 0,
        originalY: 0,
      })
    }

    // Set original positions for parallax effect
    stars.forEach((star) => {
      star.originalX = star.x
      star.originalY = star.y
    })

    // Larger stars/celestial objects
    const celestialObjects: CelestialObject[] = []
    const numObjects = 15

    for (let i = 0; i < numObjects; i++) {
      const hue = Math.random() * 60 + 180 // Blue to purple hues
      const size = Math.random() * 4 + 2

      celestialObjects.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: size,
        speed: Math.random() * 0.05,
        color: `hsla(${hue}, 80%, 70%, ${Math.random() * 0.5 + 0.5})`,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseAmount: Math.random() * 0.5 + 0.5,
        pulseOffset: Math.random() * Math.PI * 2,
        originalX: 0,
        originalY: 0,
      })
    }

    // Set original positions for parallax effect
    celestialObjects.forEach((obj) => {
      obj.originalX = obj.x
      obj.originalY = obj.y
    })

    // Voyager spacecraft
    const voyager = {
      x: -100, // Start off-screen
      y: canvas.height / 2,
      width: 80,
      height: 50,
      speed: 0.6,
      draw: (ctx: CanvasRenderingContext2D) => {
        // Save the current context state
        ctx.save()

        // Translate to the voyager position for easier drawing
        ctx.translate(voyager.x, voyager.y)

        // Main body - simple rectangle with rounded ends
        ctx.fillStyle = "#e0e0e0"
        ctx.beginPath()
        // Use a polyfill for roundRect for older browsers
        if (ctx.roundRect) {
          ctx.roundRect(-20, -5, 40, 10, 5)
        } else {
          // Fallback for browsers without roundRect
          ctx.rect(-20, -5, 40, 10)
        }
        ctx.fill()

        // Solar panels - clean rectangular shapes
        ctx.fillStyle = "#4169e1"
        ctx.fillRect(-10, -25, 20, 5) // Top panel
        ctx.fillRect(-10, 20, 20, 5) // Bottom panel

        // Antenna - single clean line
        ctx.strokeStyle = "#e0e0e0"
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(-20, 0)
        ctx.lineTo(-40, -15)
        ctx.stroke()

        // Antenna dish - simple circle
        ctx.beginPath()
        ctx.arc(-40, -15, 4, 0, Math.PI * 2)
        ctx.stroke()

        // Thruster glow - subtle gradient
        const gradient = ctx.createRadialGradient(25, 0, 0, 25, 0, 15)
        gradient.addColorStop(0, "rgba(80, 170, 255, 0.8)")
        gradient.addColorStop(1, "rgba(80, 170, 255, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(25, 0, 15, 0, Math.PI * 2)
        ctx.fill()

        // Restore the context state
        ctx.restore()
      },
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get scroll position for parallax effect
      const scrollY = window.scrollY

      // Draw background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, "#0a0a2a")
      bgGradient.addColorStop(1, "#1a1a3a")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars with parallax effect
      stars.forEach((star) => {
        // Apply parallax effect based on scroll
        star.x = star.originalX - scrollY * star.speed * 0.1

        ctx.fillStyle = star.color
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        // Move stars slightly for subtle twinkling effect
        star.originalX -= star.speed

        // Reset position when star goes off screen
        if (star.originalX < 0) {
          star.originalX = canvas.width
          star.originalY = Math.random() * canvas.height
          star.x = star.originalX
          star.y = star.originalY
        }
      })

      // Draw celestial objects with pulsing effect and parallax
      const time = Date.now() / 1000
      celestialObjects.forEach((obj) => {
        // Apply parallax effect based on scroll (stronger than stars)
        obj.x = obj.originalX - scrollY * obj.speed * 0.3

        const pulseScale = 1 + Math.sin(time * obj.pulseSpeed + obj.pulseOffset) * obj.pulseAmount

        ctx.fillStyle = obj.color
        ctx.beginPath()
        ctx.arc(obj.x, obj.y, obj.radius * pulseScale, 0, Math.PI * 2)
        ctx.fill()

        // Move objects
        obj.originalX -= obj.speed

        // Reset position when object goes off screen
        if (obj.originalX < -obj.radius * 2) {
          obj.originalX = canvas.width + obj.radius * 2
          obj.originalY = Math.random() * canvas.height
          obj.x = obj.originalX
          obj.y = obj.originalY
        }
      })

      // Draw and move Voyager
      voyager.draw(ctx)
      voyager.x += voyager.speed

      // Reset Voyager position when it goes off screen
      if (voyager.x > canvas.width + 100) {
        voyager.x = -100
        voyager.y = Math.random() * (canvas.height * 0.6) + canvas.height * 0.2
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}

// Types
interface Star {
  x: number
  y: number
  radius: number
  speed: number
  brightness: number
  color: string
  originalX: number
  originalY: number
}

interface CelestialObject {
  x: number
  y: number
  radius: number
  speed: number
  color: string
  pulseSpeed: number
  pulseAmount: number
  pulseOffset: number
  originalX: number
  originalY: number
}
