export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  challengeText: string;
  processText: string;
  solutionText: string;
  headerImage: string;
  showcaseImages: string[];
  tags: string[];
  link?: string;
  github?: string;
}

const signImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Hemsamtal: Designing for Safety & Simplicity in MedTech',
    description: 'How a user-centric, "less is more" design approach reduced anxiety for elderly care patients.',
    longDescription: `Hemsamtal is a secure, digital platform for remote elderly care. As a co-founder, I led the entire product lifecycle as both the Lead Product Designer and Lead Frontend Developer for its two core products: a web app for caregivers (municipalities) and a native app (on the AppStore) for caretakers (patients). Our primary goal was to build a tool that increases the feeling of safety for end-users, with simplicity as our guiding principle.`,
    challengeText: `The challenge was applying our core value of simplicity to two very different users and platforms:

      1.  **For Caretakers (The Native App):** A user with usually zero tech confidence. The app *had* to be an 'invisible' tool and seamlessly integrate into their usually technology-free lives to reduce anxiety, not create it. The guiding mandate was 'Keep it clean, keep it less, keep it easy.'
      2.  **For Caregivers (The Web App):** Municipality staff needed more functionality (like scheduling and admin), but our simplicity value still applied. The system couldn't be another complex, overwhelming tool that added to their workload.

      The core human problem was validated by one user, whose frequent ER visits for anxiety (a few times a week) stopped almost completely after using the app to feel more connected and safe.`,
    
    processText: `I acted as the Lead Product Designer and Frontend Developer for both platforms, which allowed me to design and develop at the same time. My process was a continuous, collaborative feedback loop with our municipality partners, who acted as our domain experts.

      This loop was very practical. For example, after an update, users had a difficult time finding why their calendar didn't show all the users (when the user was admin). After a quick feedback session, we discovered the *default* setting of the calendar filter was the problem. It filtered on the logged-in user as default, which did not feel intuitive for the users so that was not the natural place to look for solutions. I changed it from 'show logged-in user' to 'show all users,' and the friction immediately disappeared.

      My core design philosophy is through-and-through to increase user confidence for both user groups through clear guidance and overwhelming simplicity. The ultimate success of this approach is seeing how easy it is for the municipality staff to onboard both colleagues and new caretakers, and how this digital solution has become a trusted tool in their daily work.`,
    
    solutionText: `The final solution is a seamless, two-part MedTech ecosystem, with simplicity at its core.

      - **The Caregiver Web App:** A powerful, secure administration tool (built in Vue.js) that allows municipality staff to manage schedules, users, and of course call the caretakers without feeling overwhelmed.

      - **The Caretaker Native App (iOS):** An ultra-simple, WCAG-compliant companion app that delivers a calm, reliable, and accessible experience, empowering elderly users to feel safe and connected.

      The two platforms are linked by a device enrollment flow we designed, which uses a simple QR scan to provision a new device securely in under 2 minutes. The entire system is a high-performant, user-centric solution that meets all client requirements.`,
    headerImage: signImageUrl('hemsamtal'),
    showcaseImages: [
      signImageUrl('hemsamtal1'),
      signImageUrl('hemsamtal2'),
      signImageUrl('hemsamtal3'),
      signImageUrl('hemsamtal4'),
    ],
    tags: [
      'Product Design', 
      'Founder', 
      'MedTech', 
      'Accessibility (WCAG)', 
      'Web App', 
      'Native App (iOS)', 
      'Figma',
      'Client Collaboration'
    ],
    link: "https://www.hemsamtal.se"
  },
  {
    id: 2,
    title: "Pension on Demand: Simplifying a Complex Financial World",
    description: "Designing a easy-to-use FinTech platform to empower a wide audience, from finance novices to experts, to take action on their pensions.",
    longDescription: "I was the Lead Designer and Frontend Developer for a new pension platform. The client's goal was to move users from being 'passive' about their pensions to being 'active' - to increase their knowledge, encourage action, and make professional pension counseling more accessible.",
    challengeText: "The primary challenge was our massively broad target audience. How do you design one interface for two opposite personas?\n\n1.  **The 'Novice User' (e.g., the Nurse):** Found pensions confusing, and let everything handle and go by with 'the default settings'. Details like evaluating 'art, boats, and jewelry' were totally alien to them.\n2.  **The 'Expert User' (e.g., the CEO):** Needed more complexity and control. In user tests, they'd scoff at a salary range topping out at 60k, saying, 'That's a low for a salary!'\n\nThese two users needed *fundamentally different things*. My challenge was to create a single, cohesive system that could include all — simplifying for the nurse while increasing complexity for the CEO.",
    processText: "Our process was anchored in user testing to navigate this user gap.\n\n- **User Recruitment:** Our client's network consisted mostly of 'CEO-types.' I pushed for and helped recruit a 'broader representation' from our own network to ensure we weren't designing in a bubble.\n\n- **Hybrid Iteration:** As the lead designer and developer, I made small tweaks *directly in the code* for testing, not just in Figma. This made our feedback loops incredibly fast. We could test a real, functioning input field, get feedback, and have a new version ready in hours.\n\n- **Discovery & Sketching:** After each test, we'd return to the sketching board to find the balance, simplifying the main flow while adding more powerful features in discrete, advanced sections. The system grew to include property evaluation and other complex assets, as we learned this was critical for the 'expert' user's calculations.",
    solutionText: "The final solution was a personalized, multi-layered platform. It used a short introductory form to gauge the user's financial knowledge and then tailored the experience, guiding 'novice' users while giving 'experts' the detailed data they craved.\n\nThe most difficult part was designing the data-intake flow — all the user's inputs on salary, assets, and savings — and then displaying that information in both a simple overview and a detailed breakdown, while also connecting the dots on *why* this was important.\n\nWhile I was laid off before the final public launch, the design was validated in our final round of user testing. The users who interacted with the platform were 'very happy' and consistently reported that the complex subject of their pension was now much easier to understand.",
    headerImage: signImageUrl('pensionondemandheader'),
    showcaseImages: [
      signImageUrl('pensionondemand'),
      signImageUrl('pensionondemand2'),
      signImageUrl('pensionondemand3'),
      signImageUrl('pensionondemand4'),
    ],
    tags: [
      "Product Design",
      "FinTech",
      "User Testing",
      "Frontend Development",
      "Data Visualization",
      "Complex UI",
      "Figma"
    ],
  },
  {
    id: 3,
    title: 'Atnotera: Designing a Brand of "Warmth" and "Professionalism"',
    description: 'Designing a new brand identity for a human-focused investment firm that balances childcare (warmth) with medicine (professionalism).',
    longDescription: `Atnotera is a human-focused investment company with a unique portfolio: they invest in both childcare and clinical research/medicine. I was hired as the Lead Designer and Project Manager to create a new website from scratch that could properly communicate this core duality.`,
  
    challengeText: `The core challenge was to create a single, cohesive brand identity for a company with two very different sectors: childcare (warmth, care) and medicine (professionalism, clinical).

      Their previous website was a complete mismatch. It felt more like a 'modern art studio' with an unfitting red and black color scheme, and failed to represent their 'human-focused' mission.

      My task was to scrap the old site and design a new, authentic identity that could clearly explain their unique philosophy and showcase their portfolio to all interested visitors.`,
      
    processText: `My process began with the client's core vision: find the balance. As the lead, I managed the project from discovery to final launch.

      - **Visual Exploration:** I worked in Figma to find a visual language that could be both warm and professional. The solution came from balancing a **warm beige/orange** (representing the 'care' of childcare) with a **calm, professional blue** (representing the 'clinical' side of medicine).

      - **Cohesive Imagery:** The hardest part was making images of 'children at daycare' and 'hospitals' feel like they belonged on the same site. I solved this by using a consistent photographic style and leveraging the new, blended color palette to create a cohesive theme.

      - **Client Collaboration:** As the Project Manager, I presented a few different homepage themes to the client. This allowed us to quickly align on a main direction, which I then applied smoothly across the rest of the site.`,
      
    solutionText: `The final solution is a clean, modern website that successfully navigates the brand's core duality. The new design feels trustworthy and professional, yet remains human-centered and warm, using the balanced color palette and curated imagery to tell a cohesive story.

      The part I'm most proud of is actually finding that balance, as it was a unique and interesting design challenge to solve. The client was very pleased with the final result, as it finally gave them a digital identity that truly represented who they are. The website is still live and in use today.`,
    headerImage: signImageUrl('atnoteraheader'),
    showcaseImages: [
      signImageUrl('atnotera1'),
      signImageUrl('atnotera2'),
      signImageUrl('atnotera3'),
      signImageUrl('atnotera4'),
    ],
    tags: [
      'UX/UI Design',
      'Brand Identity',
      'Visual Design',
      'Project Management',
      'Figma',
      'Client Collaboration'
    ],
    link: "https://atnotera.se",
  },
  {
    id: 4,
    title: "Foptec: Making a Niche B2B Product Easy to Digest",
    description: "A solo, end-to-end redesign of a food-tech SaaS website to modernize the brand and make a complex product easy to digest.",
    longDescription: "Foptec is a B2B SaaS platform for food compliance — a domain that can be complex and dry. Their old website was outdated and failed to make their powerful product desirable. I had the opportunity to lead a complete redesign of their website as a one-person design and development team.",
    challengeText: "I had three main challenges on this one-month, solo project:\n\n1. **The Domain Problem:** The product (recipe and compliance tracking) is complex. The old site didn't make it feel approachable. My goal was to make the topic digestible and readable.\n\n2.  **The UX Problem:** The primary business goal was to spread the word and get demo bookings. The site needed a clear information architecture to lead a visitor from being unknowing to knowledgeable and then convert them.\n\n3.  **The Brand Problem:** The client's main brand color was a bright red. My design challenge was to use this logo color heavily, but in a way that felt modern and confident, not alarming or like a series of error messages.",
    processText: "As a one-person team on a fast timeline, I handled the entire end-to-end process.\n\n- **Information Architecture:** I started by mapping the user journey. The key was to guide the user from 'unknowing to knowledgeable.' I structured the site to first explain the *problem* (saving time, data in one place), then the *solution* (specific features like CO2 calculation), and finally, a clear, persistent call-to-action ('Boka demo').\n\n- **Wireframing & Visual Design:** I created wireframes in Figma for the key pages. To solve the 'red color problem,' I used it strategically as a powerful accent for headlines and calls-to-action, balancing it with a very clean, neutral UI. This made the red feel intentional, not like an error.\n\n- **Graphic Design & Development:** I created all the custom graphics needed to make the product features feel more tangible. I then developed the entire site, ensuring the design was fully responsive and pixel-perfect.",
    solutionText: "The final product is a modern, clean, and responsive website that successfully translates a complex B2B system into a desirable, easy-to-understand sales tool. We turned the 'alarming' red into a 'confident' brand accent.\n\nThe client was VERY happy with the result, as the new design made their product and its benefits much more digestible for new customers. The site is still live and in use today, successfully guiding users from discovery to demo.",
    headerImage: signImageUrl('foptecheader'),
    showcaseImages: [
      signImageUrl('foptec'),
      signImageUrl('foptec3'),
      signImageUrl('foptec2'),
    ],
    tags: [
      "UX/UI Design",
      "B2B SaaS Website",
      "Visual Design",
      "Information Design",
      "Frontend Development",
      "Solo Project",
      "Figma"
    ],
    link: "https://foptec.com",
  }
];