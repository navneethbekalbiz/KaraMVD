import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Instagram, Linkedin, Facebook, Youtube, Phone, Mail, Heart, ArrowRight } from 'lucide-react';
import { siteConfig } from '../site.config';

export const Footer: React.FC = () => {
  const [brandFirst, ...brandRest] = siteConfig.brandName.split(' ');

  return (
    <footer className="bg-obsidian pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand & Address */}
          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <div className="text-center md:text-left">
              <h3 className="font-display text-3xl mb-8 text-sand uppercase">{brandFirst} <span className="text-gold italic font-light">{brandRest.join(' ')}</span></h3>
              <p className="font-sans text-sand/60 text-sm leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
                {siteConfig.description}
              </p>

              <div className="flex flex-col gap-4 text-sand/80 font-sans text-sm items-center md:items-start mb-8">
                <a href={`tel:${siteConfig.contactDetails.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 hover:text-gold transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-obsidian transition-all">
                    <Phone size={14} />
                  </span>
                  {siteConfig.contactDetails.phone}
                </a>
                <a href={`https://wa.me/${siteConfig.contactDetails.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-obsidian transition-all">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="text-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </span>
                  {siteConfig.contactDetails.whatsapp}
                </a>
                <a href={`mailto:${siteConfig.contactDetails.email}`} className="flex items-center gap-3 hover:text-gold transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-obsidian transition-all">
                    <Mail size={14} />
                  </span>
                  {siteConfig.contactDetails.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              <SocialIcon
                href={siteConfig.socialLinks.instagram}
                icon={<Instagram size={18} />}
                label="Instagram"
                hoverColor="hover:text-[#E1306C] hover:border-[#E1306C] hover:shadow-[0_0_15px_rgba(225,48,108,0.3)]"
              />
              <SocialIcon
                href={siteConfig.socialLinks.facebook}
                icon={<Facebook size={18} />}
                label="Facebook"
                hoverColor="hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]"
              />
              <SocialIcon
                href={siteConfig.socialLinks.linkedin}
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                hoverColor="hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]"
              />
              <SocialIcon
                href={siteConfig.socialLinks.youtube}
                icon={<Youtube size={18} />}
                label="YouTube"
                hoverColor="hover:text-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              />

              {/* Custom Pinterest Icon */}
              <a
                href={siteConfig.socialLinks.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sand transition-all duration-300 border border-white/10 hover:-translate-y-1 hover:text-[#E60023] hover:border-[#E60023] hover:shadow-[0_0_15px_rgba(230,0,35,0.3)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns (Split to match Navbar) */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-8">Company</h4>
            <ul className="space-y-4 font-display text-lg text-sand/80">
              <li><Link to="/" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Home</Link></li>
              <li><a href="#experts" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Our Team</a></li>
              <li><a href="#infrastructure" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Infrastructure</a></li>
              <li><Link to="/blog" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Journal</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-8">Our Treatments</h4>
            <ul className="space-y-4 font-display text-lg text-sand/80">
              <li><Link to="/treatments/chemical-peel" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Chemical Peel</Link></li>
              <li><Link to="/treatments/botox-treatment" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Botox Treatment</Link></li>
              <li><Link to="/treatments/dermal-fillers" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Dermal Fillers</Link></li>
              <li><Link to="/treatments/prp-hair-treatment" className="hover:text-gold hover:pl-2 transition-all duration-300 block">PRP Hair Treatment</Link></li>
              <li><Link to="/treatments/mesotherapy" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Mesotherapy</Link></li>
              <li><Link to="/treatments/medifacial" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Medifacial</Link></li>
              <li><Link to="/treatments/microneedling-rf" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Microneedling RF</Link></li>
              <li><Link to="/treatments/acne-scar-reduction" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Acne Scar Reduction</Link></li>
              <li><Link to="/treatments/laser-hair-reduction" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Laser Hair Reduction</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 text-center md:text-left">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-angled hover:border-gold/30 transition-colors">
              <h4 className="font-display text-xl mb-4 text-sand">The Skin Edit</h4>
              <p className="font-sans text-xs text-sand/60 mb-6 leading-relaxed">Join our community for expert dermatological tips and exclusive offers.</p>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-white/20 py-3 text-sm text-sand focus:outline-none focus:border-gold transition-colors placeholder:text-sand/20"
                />
                <Button variant="outline" className="w-full !py-3 !text-xs !border-white/20 !text-sand hover:!bg-gold hover:!text-obsidian hover:!border-gold !tracking-widest mt-2">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center font-sans text-[10px] text-sand/40 tracking-widest uppercase border-t border-white/5 pt-8 text-center gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.</p>

          {/* Credit Section */}
          <a
            href="https://notyouraverage.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors group cursor-pointer"
          >
            <span>Built with Love By NotYourAverage</span>
            <Heart size={12} className="text-red-500 fill-red-500 group-hover:scale-125 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon, label, hoverColor }: { href: string, icon: React.ReactNode, label: string, hoverColor: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sand transition-all duration-300 border border-white/10 hover:-translate-y-1 ${hoverColor}`}
  >
    {icon}
  </a>
)