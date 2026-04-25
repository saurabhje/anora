import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsTicker from '@/components/StatsTicker'
import Services from '@/components/Services'
import Customers from '@/components/Customers'
import Pricing from '@/components/Pricing'
import Blog from '@/components/Blog'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsTicker />
      <Services />
      <Customers />
      <Pricing />
      <Blog />
      <CTA />
      <Footer />
    </main>
  )
}
