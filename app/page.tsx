'use client';

import { motion } from 'motion/react';
import { 
  ArrowRight, Code2, Zap, Shield, Cpu, ChevronRight, 
  CheckCircle2, Star, Sparkles, Terminal, GitBranch, Blocks, Handshake
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden selection:bg-blue-500/30">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[800px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-40 blur-[80px]" style={{ background: 'radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 40%), radial-gradient(circle at 50% 50%, #db2777 0%, transparent 50%)' }} />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="size-4 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Nexar AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="text-sm font-bold bg-white text-slate-950 shadow-xl px-5 py-2 rounded-full hover:bg-slate-200 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl flex flex-col items-center"
      >
        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-8">
          <Sparkles className="size-4" />
          <span>Next-Gen Development is Here</span>
        </motion.div>
        
        <motion.h1 variants={fadeIn} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6">
          Ship intelligent <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            software, faster.
          </span>
        </motion.h1>
        
        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Nexar AI gives your engineering team superpowers. Real-time bug fixing, 
          architecture planning, and automated code generation entirely within your IDE.
        </motion.p>
        
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 shadow-xl font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
            Start building for free <ArrowRight className="size-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            View Documentation
          </button>
        </motion.div>
      </motion.div>

      {/* Editor Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-20 w-full max-w-5xl relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-pink-600 rounded-2xl blur-2xl opacity-20" />
        <div className="relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded bg-slate-950/50 text-xs text-slate-400 border border-white/5 border-t-white/10">
              <Terminal className="size-3" /> main.rs
            </div>
          </div>
          <div className="p-6 font-mono text-sm md:text-base text-slate-300 overflow-x-auto text-left whitespace-pre">
            <span className="text-pink-400">fn</span> <span className="text-blue-400">process_data</span>(input: &<span className="text-yellow-200">Vec</span>&lt;<span className="text-purple-400">i32</span>&gt;) -&gt; <span className="text-yellow-200">Result</span>&lt;<span className="text-purple-400">f64</span>, Error&gt; {'{\n'}
            {'  '}{'//'} Nexar AI: Optimizing for SIMD instructions...
            {'\n  '}<span className="text-pink-400">let</span> sum: <span className="text-purple-400">i32</span> = input.iter().sum();
            {'\n  '}<span className="text-pink-400">let</span> mean = sum <span className="text-pink-400">as</span> <span className="text-purple-400">f64</span> / input.len() <span className="text-pink-400">as</span> <span className="text-purple-400">f64</span>;
            {'\n  '}<span className="text-pink-400">Ok</span>(mean)
            {'\n}'}
            <br/><br/>
            <span className="opacity-50 flex items-center gap-2 animate-pulse"><Sparkles className="size-3 text-blue-400" /> Generating comprehensive tests...</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: 'Context-Aware Completion',
      description: 'Understands your entire codebase, not just the file you are currently working on.',
      icon: <Code2 className="size-6 text-blue-400" />,
      colSpan: 'md:col-span-2'
    },
    {
      title: 'Lightning Fast',
      description: 'Powered by custom silicon for sub-50ms inference times.',
      icon: <Zap className="size-6 text-amber-400" />,
      colSpan: 'md:col-span-1'
    },
    {
      title: 'Enterprise Security',
      description: 'Your code never trains our models. SOC2 Type II and HIPAA compliant.',
      icon: <Shield className="size-6 text-emerald-400" />,
      colSpan: 'md:col-span-1'
    },
    {
      title: 'Auto-Refactoring',
      description: 'Modernize legacy systems with guaranteed semantic equivalence.',
      icon: <GitBranch className="size-6 text-purple-400" />,
      colSpan: 'md:col-span-2'
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold">Unfair Advantage</h2>
        <p className="text-slate-400 text-lg">
          Designed for elite engineering teams who care about 
          craftsmanship and velocity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors ${feature.colSpan}`}
          >
            <div className="size-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Nexar has completely changed how we ship. What used to take two weeks of planning and boilerplate now happens in an afternoon.",
      author: "Sarah Chen",
      role: "CTO, FinFlow",
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "The context awareness is unreal. It caught a subtle race condition across three microservices before we even deployed.",
      author: "Marcus Doe",
      role: "Lead Engineer, DeltaSpace",
      image: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      quote: "We evaluated every AI assistant on the market. Nexar was the only one that met our security requirements while actually being useful.",
      author: "Elena Rodriguez",
      role: "VP Eng, SecureHealth",
      image: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-left mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Trusted by the best</h2>
        <p className="text-slate-400 text-lg">Engineering leaders from high-growth companies rely on Nexar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-4 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <p className="text-lg text-slate-300 italic leading-relaxed mb-8">&quot;{t.quote}&quot;</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Image 
                src={t.image} 
                alt={t.author} 
                width={48} 
                height={48} 
                className="rounded-full bg-slate-800 border-2 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-bold text-sm text-white">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: 'Hobby',
      price: 'Free',
      description: 'Perfect for exploring and side projects.',
      features: ['Basic code completion', '50 uses of chat / day', 'Community support'],
      cta: 'Start for free',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$20',
      period: '/mo',
      description: 'For professional developers who want to move faster.',
      features: ['Everything in Hobby', 'Unlimited chat & completion', 'Full codebase context', 'Priority support'],
      cta: 'Upgrade to Pro',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams that need security and control.',
      features: ['Everything in Pro', 'Zero data retention', 'SSO & Audit logs', 'Dedicated success manager'],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Simple pricing</h2>
        <p className="text-slate-400 text-lg">No hidden fees, no complicated tiers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {tiers.map((tier, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={`p-8 rounded-3xl overflow-hidden ${tier.highlighted ? 'bg-white/10 border border-white/20 backdrop-blur-2xl shadow-2xl relative' : 'bg-white/5 border border-white/10 backdrop-blur-md'}`}
          >
            {tier.highlighted && (
              <div className="absolute top-0 right-0 p-4">
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-[10px] font-bold uppercase tracking-wider">
                  Popular
                </span>
              </div>
            )}
            <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">{tier.description}</p>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-4xl font-bold font-mono">{tier.price}</span>
              {tier.period && <span className="text-slate-400">{tier.period}</span>}
            </div>

            <ul className="space-y-3 font-medium mb-8">
              {tier.features.map((feature, fId) => (
                <li key={fId} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="size-4 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-colors text-lg ${tier.highlighted ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white/10 text-white hover:bg-white/20'}`}>
              {tier.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-24 relative overflow-hidden rounded-[3rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 opacity-90" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
      
      <div className="relative p-12 md:p-20 text-center flex flex-col items-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Ready to transform <br/> your workflow?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mb-10">
          Join thousands of developers who are already shipping faster with Nexar. 
          Get started for free today.
        </p>
        <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors shadow-xl flex items-center justify-center gap-2 group">
          Start for free <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-lg bg-blue-500 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                <Sparkles className="size-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Nexar</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs mb-6">
              Building the next generation of AI tooling for ambitious engineering teams around the globe.
            </p>
            <div className="flex gap-4">
              <div className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <span className="text-slate-400">𝕏</span>
              </div>
              <div className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <span className="text-slate-400">gh</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Nexar Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Status: All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
