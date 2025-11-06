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
    title: "Hemsamtal: Designing for Safety & Simplicity in MedTech",
    description: "How a user-centric, 'less is more' design approach reduced anxiety for elderly care patients.",
    longDescription: "Hemsamtal is a secure, digital platform for remote elderly care. I co-founded the company and led the entire product lifecycle as both the **Lead Product Designer and Lead Frontend Developer**. Our primary goal was to build a tool that increases the feeling of safety for caretakers while remaining affordable and simple for municipalities to adopt.",
    challengeText: "The initial challenge was twofold: a business goal (build a more affordable alternative) and a human goal (increase the feeling of safety for caretakers). Our clients (municipalities) needed to reduce logistical strain, but our end-users (caretakers) needed to feel *safer*.\n\nThis was not a theoretical problem; one user, who previously had frequent ER visits for anxiety, found her visits **stopped completely** after using Hemsamtal to feel more connected and secure.\n\nThe core design task: How do you build a highly secure, legally-compliant product for users who may have **zero tech confidence**? The guiding principle became my core mandate: **'Keep it clean, keep it less, keep it easy.'**",
    processText: "I acted as the **Lead Product Designer and Frontend Developer**, which allowed me to **design and develop at the same time**. My process was a continuous, collaborative feedback loop, not a series of rigid handoffs:\n\n1.  I would design and implement a change (e.g., in the calendar).\n2.  I would email our domain expert partners, explaining the 'why' behind the change.\n3.  I'd receive specific feedback (or silence, which meant 'all good').\n4.  I would act on the feedback, sometimes bouncing ideas back, and publish the final tweak.\n\nThis tight collaboration with our first client, who was a fantastic 'sounding board', was essential. My core design philosophy was to *increase user confidence* by providing clear guidance, instant action feedback, and a simple UI that never felt overwhelming or scary.",
    solutionText: "The final product is a clean, reliable, and WCAG-compliant web app that achieves the primary goal: users feel safer.\n\nA feature I'm most proud of is the **device enrollment flow**. We simplified it to a QR-code scan, allowing a new device to be securely provisioned and ready for a caretaker in **under 3 minutes**.\n\nWe also found success in small, iterative tweaks. For example, our calendar admin filter was causing friction; users 'couldn't... find this filter.' We discovered the *default* was the problem. By changing the default from 'show logged-in user' to 'show all users,' the friction disappeared—a classic example of a simple design change solving a major usability issue.\n\nAs the lead developer, the main challenge was adapting third-party packages (like video) to be more intuitive, often using familiar Google patterns as a base but simplifying them to fit the Hemsamtal 'easy' mandate.",
    headerImage: signImageUrl('hemsamtal'),
    showcaseImages: [
      signImageUrl('hemsamtal1'),
      signImageUrl('hemsamtal2'),
      signImageUrl('hemsamtal3'),
      signImageUrl('hemsamtal4'),
    ],
    tags: [
      "Product Design",
      "Founder",
      "MedTech",
      "Accessibility (WCAG)",
      "User Research",
      "Frontend Development",
      "Figma"
    ],
    link: "https://www.hemsamtal.se"
  },
  {
    id: 2,
    title: "Pension on Demand: Simplifying a Complex Financial World",
    description: "Designing a complex FinTech platform to empower a wide audience, from financial novices to experts.",
    longDescription: "I was the Lead Designer and Frontend Developer for a new pension platform. The client's goal was to move users from being 'passive' about their pensions to being 'active'—to increase their knowledge, encourage action, and make professional pension counseling more accessible.",
    challengeText: "The primary challenge was our massively broad target audience. How do you design one interface for two opposite personas?\n\n1.  **The 'Novice User' (e.g., the Nurse):** Found pensions confusing. Details like evaluating 'art, boats, and jewelry' were totally alien to them.\n2.  **The 'Expert User' (e.g., the CEO):** Needed more complexity and control. In user tests, they'd scoff at a salary range topping out at 60k, saying, 'That's a low for a salary!'\n\nThese two users needed *fundamentally different things*. My challenge was to create a single, cohesive system that could 'encompasse all'—simplifying for the nurse while increasing complexity for the CEO.",
    processText: "Our process was anchored in user testing to navigate this user gap.\n\n- **User Recruitment:** Our client's network consisted mostly of 'CEO-types.' I pushed for and helped recruit a 'broader representation' from our own network to ensure we weren't designing in a bubble.\n\n- **Hybrid Iteration:** As the lead designer and developer, I made small tweaks *directly in the code* for testing, not just in Figma. This made our feedback loops incredibly fast. We could test a real, functioning input field, get feedback, and have a new version ready in hours.\n\n- **Discovery & Sketching:** After each test, we'd return to the sketching board to find the balance, simplifying the main flow while adding more powerful features in discrete, advanced sections. The system grew to include property evaluation and other complex assets, as we learned this was critical for the 'expert' user's calculations.",
    solutionText: "The final solution was a **personalized, multi-layered platform**. It used a short introductory form to gauge the user's financial knowledge and then tailored the experience, guiding 'novice' users while giving 'experts' the detailed data they craved.\n\nThe most difficult part was designing the **data-intake flow**—all the user's inputs on salary, assets, and savings—and then displaying that information in both a simple **overview** and a **detailed breakdown**.\n\nWhile I was laid off before the final public launch, the design was validated in our final round of user testing. The users who interacted with the platform were **'very happy'** and consistently reported that the complex subject of their pension was now much easier to understand.",
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
    title: "Foptec: Making a Niche B2B Product Easy to Digest",
    description: "A solo, end-to-end redesign of a food-tech SaaS website to modernize the brand and make a complex product easy to digest.",
    longDescription: "Foptec is a B2B SaaS platform for food compliance—a domain that can be complex and dry. Their old website was outdated and failed to make their powerful product desirable. I was hired to lead the entire project as the sole designer, developer, and graphic artist.",
    challengeText: "I had three main challenges on this one-month, solo project:\n\n1.  **The Domain Problem:** The product (recipe and compliance tracking) is complex. The old site didn't make it feel approachable. My goal was to make the topic 'digestible' and 'readable.'\n\n2.  **The UX Problem:** The primary business goal was to 'spread the word' and get demo bookings. The site needed a clear information architecture to lead a visitor from being 'unknowing to knowledgeable' and then convert them.\n\n3.  **The Brand Problem:** The client's main brand color was a bright red. My design challenge was to use this logo color heavily, but in a way that felt modern and confident, not alarming or like a series of error messages.",
    processText: "As a one-person team on a fast timeline, I handled the entire end-to-end process.\n\n- **Information Architecture:** I started by mapping the user journey. The key was to guide the user from 'unknowing to knowledgeable.' I structured the site to first explain the *problem* (saving time, data in one place), then the *solution* (specific features like CO2 calculation), and finally, a clear, persistent call-to-action ('Boka demo').\n\n- **Wireframing & Visual Design:** I created wireframes in Figma for the key pages. To solve the 'red color problem,' I used it strategically as a powerful accent for headlines and calls-to-action, balancing it with a very clean, neutral UI. This made the red feel intentional, not like an error.\n\n- **Graphic Design & Development:** I created all the custom graphics needed to make the product features feel more tangible. I then developed the entire site, ensuring the design was fully responsive and pixel-perfect.",
    solutionText: "The final product is a modern, clean, and responsive website that successfully translates a complex B2B system into a desirable, easy-to-understand sales tool. We turned the 'alarming' red into a 'confident' brand accent.\n\nThe client was 'VERY happy' with the result, as the new design made their product and its benefits much more 'digestible' for new customers. The site is still live and in use today, successfully guiding users from discovery to demo.",
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
  },
  /*{
    id: 4,
    title: "Collaborative Design Tool",
    description: "Real-time collaborative design tool for teams to brainstorm and prototype together.",
    longDescription: "Developed a web-based design tool with real-time collaboration features, allowing multiple users to work on the same canvas simultaneously. Includes vector editing, commenting system, version history, and seamless Figma integration. Used by design teams at startups and enterprises for rapid prototyping and ideation sessions.",
    image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW98ZW58MXx8fHwxNzYyMzE5NzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["WebGL", "Socket.io", "Vue.js", "Canvas"],
    link: "https://example.com",
    layout: {
      style: { top: '72%', right: '15%', width: '370px' },
      delay: 200
    }
  },*/
];