import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { contact, profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
          Contact
        </span>
        <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-ink md:text-4xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
          {contact.body}
        </p>

        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-base font-medium text-cream transition-colors hover:bg-coral"
        >
          <Mail className="h-4 w-4" />
          {profile.email}
        </motion.a>
      </Reveal>
    </section>
  )
}
