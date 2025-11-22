import { ExamResult, StaffMember, Facility } from './types';

export const SCHOOL_NAME = "Rajkiya Ashram Paddhati Vidyalaya";
export const SCHOOL_LOCATION = "Saharanpur, Uttar Pradesh";
export const SCHOOL_ESTABLISHED = 2008;
export const SCHOOL_OPERATIONAL = 2011;
export const TOTAL_CAPACITY = 490;

export const RESULTS_DATA: ExamResult[] = [
  { year: '2012-13', class10: 100, class12: 100, topper10: 'Ashutosh Raj', topper12: 'Govinda' },
  { year: '2013-14', class10: 100, class12: null, topper10: 'Nitin Kumar', topper12: 'N/A' },
  { year: '2014-15', class10: 100, class12: 100, topper10: 'Vibhor', topper12: 'Ajeet' },
  { year: '2015-16', class10: 100, class12: 100, topper10: 'Vishal Saini', topper12: 'Arshad' },
  { year: '2016-17', class10: 96.15, class12: 91.67, topper10: 'Ishant', topper12: 'Virendra' },
  { year: '2017-18', class10: 100, class12: 100, topper10: 'Manish Saini', topper12: 'Vishal Saini' },
  { year: '2018-19', class10: 88.88, class12: 77.77, topper10: 'Abhishek', topper12: 'Tanveer' },
  { year: '2019-20', class10: 61.11, class12: 66.66, topper10: 'Adil Chaudhary', topper12: 'Junaid' },
  { year: '2020-21', class10: 100, class12: 100, topper10: 'Sonu', topper12: 'Vikas Kumar' },
  { year: '2021-22', class10: 100, class12: 100, topper10: 'Akash Kumar', topper12: 'Sonu Saini' },
  { year: '2022-23', class10: 80.76, class12: 87.50, topper10: 'Vishal Sharma', topper12: 'Ajay' },
  { year: '2023-24', class10: 53.33, class12: 100, topper10: 'Nitin Kumar', topper12: 'Shivam' },
];

export const STAFF_DATA: StaffMember[] = [
  { id: 1, name: "Dr. Dinesh Kumar", designation: "Principal", subject: "History" },
  { id: 2, name: "Sh. Pawan Kumar", designation: "Lecturer", subject: "Biology" },
  { id: 3, name: "Sh. Sanjeev Kumar Soundarya", designation: "Lecturer", subject: "Sociology" },
  { id: 4, name: "Sh. Khaliq Ahmed", designation: "Lecturer", subject: "Economics" },
  { id: 5, name: "Sh. Anil Kumar", designation: "Lecturer", subject: "Chemistry" },
  { id: 6, name: "Sh. Ashu Kumar", designation: "Asst. Teacher", subject: "Science" },
  { id: 7, name: "Sh. Hardeep Singh", designation: "Asst. Teacher", subject: "Physical Edu." },
  { id: 8, name: "Smt. Priyanka Sharma", designation: "Asst. Teacher", subject: "Hindi" },
  { id: 9, name: "Smt. Karuna Rani", designation: "Asst. Teacher", subject: "Social Science" },
  { id: 10, name: "Smt. Priyanka", designation: "Asst. Teacher", subject: "English" },
  { id: 11, name: "Sh. Rajneesh Kumar", designation: "Asst. Teacher", subject: "Social Science" },
  { id: 12, name: "Smt. Priyanka Tyagi", designation: "Asst. Teacher", subject: "English" },
];

export const FACILITIES: Facility[] = [
  {
    title: "Digital Education (Smart Class)",
    description: "Modern smart classes equipped with projectors, tablets, and computer labs. Partnership with Khan Academy for Mathematics and Embibe for Science.",
    iconName: "Monitor",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "Laboratories",
    description: "Fully equipped Physics, Chemistry, and Biology laboratories to foster scientific temper and practical learning among students.",
    iconName: "FlaskConical",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "Library",
    description: "A rich collection of books to develop reading habits and knowledge enhancement. A dedicated space for quiet study.",
    iconName: "BookOpen",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    title: "Residential Hostel",
    description: "Complete residential facilities with a capacity of 490 students. Separate dormitories ensuring comfort and safety.",
    iconName: "Home",
    image: "https://picsum.photos/600/400?random=4"
  },
  {
    title: "Mess & Nutrition",
    description: "Nutritious meals served in a dining hall. Menu decided by the Mess Committee to ensure a balanced diet.",
    iconName: "Utensils",
    image: "https://picsum.photos/600/400?random=5"
  },
  {
    title: "Sports & Yoga",
    description: "Daily morning yoga sessions and regular sports activities including cricket, volleyball, and kabaddi for physical fitness.",
    iconName: "Activity",
    image: "https://picsum.photos/600/400?random=6"
  }
];
