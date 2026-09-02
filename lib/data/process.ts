export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, audience and goals.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Build the right digital strategy.",
  },
  {
    number: "03",
    title: "Create",
    description: "Develop creative assets and campaigns.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Launch campaigns and digital experiences.",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Analyze performance and continuously improve.",
  },
];

/** "From Attention to Action" workflow stages. */
export const workflow = [
  { title: "Strategy", description: "Define the audience, the offer and the objective." },
  { title: "Creative", description: "Produce content built to earn attention." },
  { title: "Advertising", description: "Put the message in front of the right people." },
  { title: "Optimization", description: "Test, learn and improve what performs." },
  { title: "Growth", description: "Turn attention into measurable business results." },
];
