import { MessageSquare, Megaphone, MessageCircle } from "lucide-react";
import type { ChatChannel } from "./ChatThreadDemo";

export const textChannel: ChatChannel = {
  id: "text",
  label: "Text",
  icon: MessageSquare,
  leadName: "AI Lead Response",
  statusLabel: "active",
  aiBubbleClassName: "bg-accent text-black",
  accentClassName: "bg-accent/15 text-accent",
  responseTime: "8 seconds",
  qualifiedTitle: "Lead qualified: HOT",
  qualifiedNote: "Motivated seller · inherited property · 30 day timeline",
  footerNote: "Sample text conversation · illustrates response and qualification speed",
  script: [
    {
      sender: "lead",
      text: "Hi, saw your ad about buying houses for cash. Might be interested in selling 412 Maple St.",
    },
    {
      sender: "ai",
      text: "Thanks for reaching out! I can help with that. First off, what condition is the property in?",
    },
    {
      sender: "lead",
      text: "Needs some work. Roof's old and there's water damage in the basement.",
    },
    {
      sender: "ai",
      text: "Got it, thank you. What's your timeline to sell? Moving fast, or just exploring options for now?",
    },
    {
      sender: "lead",
      text: "Pretty fast honestly. It's an inherited property, want it off my hands within a month.",
    },
    {
      sender: "ai",
      text: "Understood. One last thing, do you have a price in mind, or would a cash offer estimate be useful?",
    },
    {
      sender: "lead",
      text: "Not sure, open to hearing an offer.",
    },
    {
      sender: "ai",
      text: "Perfect, this looks like a great fit. I'm flagging you as a priority lead now, and someone from the team will call you within the hour.",
    },
  ],
};

export const whatsappChannel: ChatChannel = {
  id: "whatsapp",
  label: "WhatsApp",
  icon: MessageCircle,
  leadName: "WhatsApp Business",
  statusLabel: "online",
  aiBubbleClassName: "bg-emerald-600/90 text-white",
  accentClassName: "bg-emerald-500/15 text-emerald-400",
  responseTime: "5 seconds",
  qualifiedTitle: "Lead qualified: HOT",
  qualifiedNote: "Tired landlord · vacant property · out of town owner",
  footerNote: "Sample WhatsApp conversation · common for out of state and international owners",
  script: [
    {
      sender: "lead",
      text: "Hello, I saw your ad about buying houses quickly. I have a rental property in Houston I might want to sell, tenant just moved out.",
    },
    {
      sender: "ai",
      text: "Hi! Thanks for messaging, appreciate you reaching out. Is the property vacant now, and what condition would you say it's in?",
    },
    {
      sender: "lead",
      text: "Yes it's vacant now. Needs new flooring and maybe the AC unit is old, tenants weren't great about upkeep.",
    },
    {
      sender: "ai",
      text: "Got it, thanks for the detail. What's driving the sale, being done being a landlord, or something else timing wise?",
    },
    {
      sender: "lead",
      text: "Honestly just tired of dealing with tenants and repairs from a distance, I live in Dallas.",
    },
    {
      sender: "ai",
      text: "That makes a lot of sense, a lot of the owners we work with feel the same way. I'll get this to our team right now so someone can call you today with next steps, does that work?",
    },
    {
      sender: "lead",
      text: "Yes that works, thank you.",
    },
  ],
};

export const facebookChannel: ChatChannel = {
  id: "facebook",
  label: "Facebook",
  icon: Megaphone,
  leadName: "Facebook Lead Ad",
  statusLabel: "active",
  aiBubbleClassName: "bg-blue-600/90 text-white",
  accentClassName: "bg-blue-500/15 text-blue-400",
  responseTime: "4 seconds",
  qualifiedTitle: "Lead qualified: HOT",
  qualifiedNote: "Relocating · 6 week timeline · dated but sound condition",
  footerNote: "Sample Messenger conversation · triggered instantly by a Facebook Lead Ad form",
  script: [
    {
      sender: "ai",
      text: "Hi Denise, thanks for requesting info through our Facebook ad about 227 Larkspur Dr! I'd love to get you a fair cash offer, mind if I ask a couple quick questions?",
    },
    {
      sender: "lead",
      text: "Sure, go ahead.",
    },
    {
      sender: "ai",
      text: "What's the property's condition like right now, any major repairs needed?",
    },
    {
      sender: "lead",
      text: "It's actually in decent shape, just outdated. Kitchen and bathrooms are original from the 90s.",
    },
    {
      sender: "ai",
      text: "Good to know. What's your timeline like, hoping to sell quickly, or just curious what it's worth?",
    },
    {
      sender: "lead",
      text: "We're relocating for a job in 6 weeks so kind of need this done soon.",
    },
    {
      sender: "ai",
      text: "That's a tight but very doable timeline for us. I'm marking this as urgent and getting one of our acquisition specialists to call you today, sound good?",
    },
    {
      sender: "lead",
      text: "Perfect, thank you!",
    },
  ],
};

export const chatChannels: ChatChannel[] = [
  textChannel,
  whatsappChannel,
  facebookChannel,
];
