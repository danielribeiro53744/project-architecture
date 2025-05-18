import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Glass House Retreat",
    slug: "glass-house-retreat",
    category: "residential",
    description:
      "The Glass House Retreat is a minimalist residential project that explores the relationship between indoor and outdoor spaces. Floor-to-ceiling windows blur the boundaries between the interior living areas and the surrounding natural landscape. Sustainable materials and energy-efficient systems are integrated throughout, including solar panels and a rainwater collection system. The open floor plan maximizes natural light and creates a sense of spaciousness, while thoughtful zoning ensures privacy where needed. Inspired by modernist principles, this home represents a harmonious balance between functionality, aesthetics, and environmental responsibility.",
    shortDescription:
      "A minimalist residential design that harmoniously blends indoor and outdoor living spaces.",
    coverImage:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    year: 2022,
    client: "Private Client",
    location: "Malibu, California",
    architect: "Jane Doe",
    size: "4,500 sq ft",
    featured: true,
  },
  {
    id: "2",
    title: "Urban Office Tower",
    slug: "urban-office-tower",
    category: "commercial",
    description:
      "The Urban Office Tower redefines the modern workplace with its innovative design and sustainable features. Standing at 35 stories, this commercial building features a double-skin façade that reduces energy consumption while providing abundant natural light to interior spaces. The ground floor is dedicated to public use, with retail spaces, cafes, and a central atrium that connects to a rooftop garden accessible to all building users. Each office floor is designed with flexibility in mind, allowing for various configurations to accommodate different business needs. Advanced technologies for climate control, energy management, and workplace wellness create an environment that prioritizes both productivity and well-being.",
    shortDescription:
      "A sustainable commercial tower that reimagines the modern workplace experience.",
    coverImage:
      "https://images.pexels.com/photos/2564045/pexels-photo-2564045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/2564045/pexels-photo-2564045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    year: 2021,
    client: "Metro Development Group",
    location: "Chicago, Illinois",
    architect: "John Smith",
    size: "750,000 sq ft",
    featured: true,
  },
  {
    id: "3",
    title: "Minimalist Apartment Renovation",
    slug: "minimalist-apartment-renovation",
    category: "interior",
    description:
      "This interior design project transformed a dated apartment into a minimalist sanctuary in the heart of the city. By removing unnecessary walls, we created an open concept living space that maximizes both light and functionality. Custom built-in storage solutions eliminate clutter while maintaining the clean aesthetic. A restrained material palette of white walls, pale oak flooring, and black accents creates a timeless foundation, punctuated by carefully selected furniture pieces that combine comfort with sculptural forms. Lighting was a key consideration, with a layered approach that includes ambient, task, and accent lighting to create different moods throughout the day.",
    shortDescription:
      "A transformative interior renovation that creates a serene, minimalist living space.",
    coverImage:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    year: 2023,
    client: "Private Client",
    location: "New York, NY",
    architect: "Sarah Johnson",
    size: "1,200 sq ft",
    featured: false,
  },
  {
    id: "4",
    title: "Floating Pavilion",
    slug: "floating-pavilion",
    category: "conceptual",
    description:
      "The Floating Pavilion is an experimental design that challenges traditional notions of architectural permanence and interaction with natural elements. Designed to be installed on bodies of water, this modular structure appears to hover just above the surface, creating a mesmerizing visual effect. The pavilion's translucent panels change appearance throughout the day as light conditions shift, while also allowing views through to the water below. Conceived as a multi-purpose space for exhibitions, performances, or contemplation, the design can be adapted to various contexts and needs. This conceptual project explores themes of temporality, reflection, and the boundary between built and natural environments.",
    shortDescription:
      "A conceptual pavilion that appears to float above water, creating a dynamic space for cultural events.",
    coverImage:
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    year: 2022,
    client: "Arts Foundation",
    location: "Various Locations",
    architect: "Michael Chen",
    size: "1,800 sq ft",
    featured: true,
  },
  {
    id: "5",
    title: "Sustainable Mountain Lodge",
    slug: "sustainable-mountain-lodge",
    category: "residential",
    description:
      "Nestled in the mountains, this residential lodge was designed to minimize environmental impact while maximizing connection to the stunning natural surroundings. The structure uses locally sourced timber and stone, while its orientation optimizes passive solar heating and cooling. A living green roof provides insulation and blends the building into the landscape when viewed from above. Inside, the open floor plan centers around a double-height living space with panoramic views, complemented by cozy, more intimate areas for relaxation and retreat. Off-grid systems including solar power, geothermal heating, and water harvesting make this a model of sustainable mountain architecture that respects and celebrates its alpine setting.",
    shortDescription:
      "An eco-friendly mountain residence that blends harmoniously with its natural environment.",
    coverImage:
      "https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    year: 2021,
    client: "Private Client",
    location: "Aspen, Colorado",
    architect: "Robert Wilson",
    size: "6,200 sq ft",
    featured: false,
  },
  {
    id: "6",
    title: "Urban Micro-Retail Complex",
    slug: "urban-micro-retail-complex",
    category: "commercial",
    description:
      "This innovative commercial project reimagines retail spaces for the post-pandemic era. The complex features multiple small-footprint retail pods arranged around a central outdoor plaza, creating a vibrant shopping environment that prioritizes open air and flexibility. Each retail unit can function independently with its own entrance, while the overall design creates a cohesive shopping destination. Digital integration is a key component, with infrastructure supporting omnichannel retail operations. The architecture employs modular construction techniques for sustainability and adaptability, allowing the complex to evolve as retail needs change. This forward-thinking approach to commercial space addresses contemporary challenges while creating opportunities for meaningful in-person shopping experiences.",
    shortDescription:
      "A flexible retail complex that reimagines commercial space for changing consumer behaviors.",
    coverImage:
      "https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2861656/pexels-photo-2861656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    year: 2023,
    client: "Urban Development Partners",
    location: "Portland, Oregon",
    architect: "Emma Rodriguez",
    size: "28,000 sq ft",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function getAllProjects() {
  return projects;
}