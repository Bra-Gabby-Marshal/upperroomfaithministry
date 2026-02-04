// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const SectionHeading = ({ title }: { title: string }) => (
//   <h2
//     className="relative inline-block text-2xl sm:text-3xl lg:text-4xl
//       font-serif font-bold mb-12
//       after:absolute after:left-0 after:-bottom-2
//       after:h-1.5 after:w-24 after:rounded-full
//       after:bg-[var(--color-accent)]"
//   >
//     {title}
//   </h2>
// );

// export default function WhoWeAre() {
//   return (
//     <section className="py-24 bg-[var(--color-cream)] overflow-hidden min-h-[50vh]">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:items-stretch">
          
//           {/* Left: Animated Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -60, scale: 0.95 }}
//             whileInView={{ opacity: 1, x: 0, scale: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg"
//           >
//             <Image
//               src="/who-we-are.jpg"
//               alt="Upper Room Faith Ministry"
//               fill
//               className="object-cover object-center transition-transform duration-500 hover:scale-105"
//             />
//           </motion.div>

//           {/* Right: Text */}
//           <div className="flex flex-col justify-center text-center md:text-left">
            
//             {/* Animate the heading itself */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <SectionHeading title="Who We Are?" />
//             </motion.div>

//             {/* Animate the paragraph itself */}
//             <motion.p
//               className="max-w-2xl mx-auto text-[var(--color-dark)]/80 leading-relaxed"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//             >
//               Upper Room Faith Ministry is a Christ-centered church devoted to
//               the teaching of God’s Word, prayer, and the demonstration of the
//               Holy Spirit’s power. We exist to raise believers who walk in
//               faith, love, and spiritual maturity.
//             </motion.p>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SectionHeading = ({ title }: { title: string }) => (
  <h2
    className="relative inline-block text-2xl sm:text-3xl lg:text-4xl
      font-serif font-bold mb-8
      after:absolute after:left-0 after:-bottom-2
      after:h-1.5 after:w-24 after:rounded-full
      after:bg-[var(--color-accent)]"
  >
    {title}
  </h2>
);

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-[var(--color-cream)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

          {/* Image: 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:col-span-2 relative w-full h-80 sm:h-96 md:h-[420px] lg:h-[520px]
                       rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/who-we-are.jpg"
              alt="Upper Room Faith Ministry"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Text: 3/5 */}
          <div className="md:col-span-3 flex flex-col justify-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="Our History" />
            </motion.div>

            <motion.p
              className="max-w-xl text-[var(--color-dark)]/80 leading-relaxed text-base sm:text-lg text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
Upper Room Faith Ministry is a Pentecostal Christian church based in Ghana, founded by the late Rev. Henry Ahiable in 2004. It began humbly in Omanjor, a community in the Greater Accra region, as Upper Room Pentecostal Church.
The church was established on solid Pentecostal principles, with a core mission to reveal and expose Christ in a profound way—making the truth of His incarnation a living reality in the lives of believers. From its inception, the ministry has emphasized experiential faith, spiritual empowerment, and a deep encounter with the person of Jesus Christ.
Central to its doctrine is the five-fold ministry (apostles, prophets, evangelists, pastors, and teachers, as outlined in Ephesians 4:11), which serves as the cornerstone of the church’s teachings and structure. This framework guides leadership, equipping, and ministry operations. The church also strongly practices the ordinances of water baptism and the regular partaking of Holy Communion, viewing them as essential acts of obedience and remembrance that strengthen believers’ faith.
Over the years, the ministry grew and evolved under Rev. Ahiable’s visionary leadership until his passing. In 2024, reflecting its broader focus on faith, spiritual growth, and ministry beyond traditional Pentecostal labeling, the church officially changed its name from Upper Room Pentecostal Church to Upper Room Faith Ministry.
Today, Upper Room Faith Ministry continues to stand as a vibrant community in Greater Accra, committed to Pentecostal worship, biblical truth, and making Christ’s reality tangible in everyday life.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}

