/**
 * Team Members Mock Data
 * 
 * Contains team member profiles for About page and team sections.
 * 
 * **Used By:**
 * - PageAbout.tsx
 * - TeamGridSection.tsx
 * - About patterns
 * 
 * **Data Structure:**
 * - Team member profiles with roles
 * - Department organization
 * - Social media links
 * - Bio and expertise
 * 
 * @module data/team
 */

/**
 * Team Member Social Media Links
 * 
 * @typedef {Object} TeamMemberSocial
 * @property {string} [linkedin] - LinkedIn URL
 * @property {string} [twitter] - Twitter/X URL
 * @property {string} [github] - GitHub URL
 * @property {string} [email] - Email address
 */

/**
 * Team Member Interface
 * 
 * Defines a team member profile.
 * 
 * @typedef {Object} TeamMember
 * @property {string} id - Unique member identifier
 * @property {string} name - Full name
 * @property {string} role - Job title/role
 * @property {string} department - Department (Leadership, Design, Engineering, etc.)
 * @property {string} image - Profile image URL
 * @property {string} [bio] - Optional bio/description
 * @property {string[]} [expertise] - Optional areas of expertise
 * @property {TeamMemberSocial} [social] - Optional social media links
 */

/**
 * Team Members
 * 
 * Company team organized by department.
 * 
 * @type {TeamMember[]}
 */
export var teamMembers = [
  // Leadership
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    department: 'Leadership',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Passionate about creating exceptional shopping experiences. 15+ years in e-commerce.',
    expertise: ['E-commerce Strategy', 'Business Development', 'Customer Experience'],
    social: {
      linkedin: 'https://linkedin.com/in/sarahmitchell',
      twitter: 'https://twitter.com/sarahmitchell',
      email: 'sarah@example.com',
    },
  },
  {
    id: '2',
    name: 'James Anderson',
    role: 'Chief technology officer',
    department: 'Leadership',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Tech visionary building scalable, customer-centric platforms.',
    expertise: ['Platform Architecture', 'Team Leadership', 'Innovation'],
    social: {
      linkedin: 'https://linkedin.com/in/jamesanderson',
      github: 'https://github.com/jamesanderson',
      email: 'james@example.com',
    },
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Chief marketing officer',
    department: 'Leadership',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'Data-driven marketer focused on brand storytelling and growth.',
    expertise: ['Brand Strategy', 'Digital Marketing', 'Growth Hacking'],
    social: {
      linkedin: 'https://linkedin.com/in/emilychen',
      twitter: 'https://twitter.com/emilychen',
      email: 'emily@example.com',
    },
  },

  // Design
  {
    id: '4',
    name: 'Michael Torres',
    role: 'Head of design',
    department: 'Design',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    bio: 'Creating beautiful, accessible experiences that delight customers.',
    expertise: ['UI/UX Design', 'Design Systems', 'User Research'],
    social: {
      linkedin: 'https://linkedin.com/in/michaeltorres',
      twitter: 'https://twitter.com/michaeltorres',
    },
  },
  {
    id: '5',
    name: 'Olivia Parker',
    role: 'Senior product designer',
    department: 'Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    bio: 'Designing intuitive interfaces that solve real user problems.',
    expertise: ['Product Design', 'Prototyping', 'Accessibility'],
    social: {
      linkedin: 'https://linkedin.com/in/oliviaparker',
    },
  },

  // Engineering
  {
    id: '6',
    name: 'David Kim',
    role: 'Lead frontend engineer',
    department: 'Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'Building fast, responsive web experiences with modern technologies.',
    expertise: ['React', 'TypeScript', 'Performance Optimization'],
    social: {
      github: 'https://github.com/davidkim',
      linkedin: 'https://linkedin.com/in/davidkim',
    },
  },
  {
    id: '7',
    name: 'Rachel Williams',
    role: 'Lead backend engineer',
    department: 'Engineering',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400',
    bio: 'Architecting scalable systems that power exceptional experiences.',
    expertise: ['System Architecture', 'API Design', 'Database Optimization'],
    social: {
      github: 'https://github.com/rachelwilliams',
      linkedin: 'https://linkedin.com/in/rachelwilliams',
    },
  },

  // Customer Success
  {
    id: '8',
    name: 'Alex Johnson',
    role: 'Head of customer success',
    department: 'Customer Success',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Dedicated to making every customer interaction exceptional.',
    expertise: ['Customer Support', 'Team Management', 'Process Optimization'],
    social: {
      linkedin: 'https://linkedin.com/in/alexjohnson',
      email: 'alex@example.com',
    },
  },
  {
    id: '9',
    name: 'Sophie Martin',
    role: 'Customer success manager',
    department: 'Customer Success',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    bio: 'Helping customers succeed and achieve their goals.',
    expertise: ['Customer Relationships', 'Problem Solving', 'Product Training'],
    social: {
      linkedin: 'https://linkedin.com/in/sophiemartin',
    },
  },

  // Operations
  {
    id: '10',
    name: 'Daniel Brown',
    role: 'Operations manager',
    department: 'Operations',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    bio: 'Streamlining operations for maximum efficiency and customer satisfaction.',
    expertise: ['Supply Chain', 'Logistics', 'Process Improvement'],
    social: {
      linkedin: 'https://linkedin.com/in/danielbrown',
    },
  },
  {
    id: '11',
    name: 'Lisa Zhang',
    role: 'Warehouse manager',
    department: 'Operations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'Ensuring fast, accurate fulfillment of every order.',
    expertise: ['Warehouse Management', 'Inventory Control', 'Quality Assurance'],
    social: {
      linkedin: 'https://linkedin.com/in/lisazhang',
    },
  },

  // Marketing
  {
    id: '12',
    name: 'Chris Thompson',
    role: 'Content marketing lead',
    department: 'Marketing',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'Crafting compelling stories that connect with our audience.',
    expertise: ['Content Strategy', 'SEO', 'Copywriting'],
    social: {
      linkedin: 'https://linkedin.com/in/christhompson',
      twitter: 'https://twitter.com/christhompson',
    },
  },
];

/**
 * Department list with counts
 */
export var departments = [
  { id: 'all', name: 'All team members', count: teamMembers.length },
  { id: 'leadership', name: 'Leadership', count: teamMembers.filter(function(m) { return m.department === 'Leadership'; }).length },
  { id: 'design', name: 'Design', count: teamMembers.filter(function(m) { return m.department === 'Design'; }).length },
  { id: 'engineering', name: 'Engineering', count: teamMembers.filter(function(m) { return m.department === 'Engineering'; }).length },
  { id: 'customer-success', name: 'Customer success', count: teamMembers.filter(function(m) { return m.department === 'Customer Success'; }).length },
  { id: 'operations', name: 'Operations', count: teamMembers.filter(function(m) { return m.department === 'Operations'; }).length },
  { id: 'marketing', name: 'Marketing', count: teamMembers.filter(function(m) { return m.department === 'Marketing'; }).length },
];

/**
 * Helper function to get team members by department
 * 
 * @param {string} department - Department name
 * @returns {TeamMember[]}
 */
export function getTeamMembersByDepartment(department) {
  if (department.toLowerCase() === 'all' || !department) {
    return teamMembers;
  }
  return teamMembers.filter(function(member) { return member.department.toLowerCase() === department.toLowerCase(); });
}

/**
 * Helper function to get team member by ID
 * 
 * @param {string} id - Member ID
 * @returns {TeamMember | undefined}
 */
export function getTeamMemberById(id) {
  return teamMembers.find(function(member) { return member.id === id; });
}

/**
 * Helper function to get leadership team
 * 
 * @returns {TeamMember[]}
 */
export function getLeadershipTeam() {
  return getTeamMembersByDepartment('Leadership');
}

/**
 * Helper function to get total team count
 * 
 * @returns {number}
 */
export function getTotalTeamCount() {
  return teamMembers.length;
}

export var teamPageContent = {
  title: 'Meet our team',
  description: 'The passionate people behind our products. A diverse team united by a shared commitment to quality.',
  leadershipHeading: 'Leadership',
  departmentsHeading: 'Our departments',
  departmentsText: 'With over ' + teamMembers.length + ' team members across ' + (departments.length - 1) + ' departments, we work together to deliver the best experience.',
  ctaHeading: 'Want to join our team?',
  ctaText: 'We are always looking for talented people who share our values.',
  ctaButton: 'View Open Positions'
};

export default {
  teamMembers: teamMembers,
  departments: departments,
  teamPageContent: teamPageContent,
  getTeamMembersByDepartment: getTeamMembersByDepartment,
  getTeamMemberById: getTeamMemberById,
  getLeadershipTeam: getLeadershipTeam,
  getTotalTeamCount: getTotalTeamCount,
};