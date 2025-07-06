import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { Camera, Heart, Lightbulb, Users, Award } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Mohammed Suhail",
      role: "Lead Photographer & Founder",
      bio: "With over 4 years of experience, Suhail’s journey in photography is more than just a profession—it’s a heartfelt passion. He is dedicated to freezing time, preserving emotions, and creating art that speaks to the soul.",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/2c2414451f5682adbd6b2f4cbaf3ffe6.jpg",
      imgName: "Mohammed Suhail, Lead Photographer and Founder of Lensography",
      imgDescription: "Professional headshot of Mohammed Suhail"
    },
  ];

  const values = [
    { icon: <Heart size={32} className="text-primary" />, title: "Authentic Storytelling", description: "We believe in capturing the genuine laughter, tears, and joyful chaos that make life beautifully unpredictable." },
    { icon: <Camera size={32} className="text-primary" />, title: "Artistic Vision", description: "Combining technical expertise with an artistic eye to create timeless images." },
    { icon: <Users size={32} className="text-primary" />, title: "Client Connection", description: "Building genuine connections with every client is at the heart of what we do." },
    { icon: <Award size={32} className="text-primary" />, title: "Memory Making", description: "We don’t just take pictures—we create memories that last a lifetime." },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 bg-gradient-to-br from-primary/30 to-background"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Welcome to Lensography
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Where every click tells a story, and every frame captures a moment that lasts a lifetime. We are storytellers, dream-catchers, and memory-makers.
          </p>
        </div>
      </motion.section>

      {/* Meet the Team Section (Moved Up) */}
      <motion.section 
        className="py-16 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Meet Our Founder"
            subtitle="The creative mind ensuring your special moments are perfectly preserved."
          />
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start text-center md:text-left max-w-2xl"
                custom={index}
                variants={itemVariants}
              >
                <img   
                  className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover mb-6 md:mb-0 md:mr-8 shadow-md" 
                  alt={member.imgName}
                  src={member.imgSrc} />
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img   
              className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video" 
              alt="Artistic shot of a camera lens or a photographer in action"
              src="https://images.unsplash.com/photo-1698358695376-d816cbd500e0" />
          </div>
          <div>
            <SectionHeading 
              title="Our Story: More Than Just Photography"
              align="left"
              className="mb-6"
            />
            <p className="text-muted-foreground mb-4">
              At the heart of Lensography is **Mohammed Suhail**, our Lead Photographer and Founder. With over **4 years of experience**, Suhail’s journey in photography is more than just a profession—it’s a heartfelt passion. From the first time he held a camera, he knew he had found his calling: to freeze time, to preserve emotions, and to create art that speaks to the soul.
            </p>
            <p className="text-muted-foreground mb-4">
              What makes Lensography special is not just the technical expertise or the artistic eye, but the genuine connection we strive to build with every client. We believe that photography is not about perfection—it’s about authenticity. It’s about capturing the laughter, the tears, the quiet glances, and the joyful chaos that make life so beautifully unpredictable.
            </p>
             <p className="text-muted-foreground">
              Whether it’s a wedding, a family portrait, or a candid moment, we pour our heart into every project. We don’t just take pictures—we create memories. At Lensography, we’re not just photographers; we’re storytellers, dream-catchers, and memory-makers.
            </p>
            <p className="text-muted-foreground mt-4 italic">
              Thank you for trusting us to be a part of your story. Let’s create something timeless together.
            </p>
            <p className="text-muted-foreground mt-2 font-semibold">
              With love and light,
            </p>
            <p className="text-muted-foreground font-semibold">
              Mohammed Suhail & the Lensography Team
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section 
        className="container mx-auto px-4 md:px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <SectionHeading 
          title="What We Stand For"
          subtitle="Our core values guide every aspect of our work, ensuring an exceptional experience for you."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="p-6 bg-card rounded-xl shadow-lg text-center"
              custom={index}
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Behind the Scenes Glimpse */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="A Peek Behind the Lens"
            subtitle="We love what we do, and it shows in every interaction and every photograph."
          />
          <div className="grid md:grid-cols-3 gap-4">
            <motion.div custom={0} variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg">
              <img   className="w-full h-64 object-cover" alt="Photographer setting up equipment" src="https://images.unsplash.com/photo-1692375180291-27c5c6d715a7" />
            </motion.div>
            <motion.div custom={1} variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg">
              <img   className="w-full h-64 object-cover" alt="Photographer interacting with a couple" src="https://images.unsplash.com/photo-1602084709049-5135db4e5969" />
            </motion.div>
            <motion.div custom={2} variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg">
              <img   className="w-full h-64 object-cover" alt="Photo editing process on a computer" src="https://images.unsplash.com/photo-1536724609414-5f000e9a2745" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;