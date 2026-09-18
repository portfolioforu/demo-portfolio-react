import { motion } from 'framer-motion'
import { experience } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="parcours" className="bg-cream-dim/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Parcours" title="Formations & expériences" />

        <div className="relative mt-14 space-y-10 border-l border-line pl-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: 'easeOut' }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-coral bg-cream" />
              <span className="text-xs font-semibold uppercase tracking-wide text-coral">
                {e.period}
              </span>
              <h3 className="font-display mt-1.5 text-xl font-medium text-ink">{e.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-ink-faint">{e.org}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft md:text-base">
                {e.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
