import { Database, Thermometer, Factory, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { ServiceItem, NavItem } from './types';

export const COMPANY_NAME = "Hydrixon Tech Ltd";

export const NAV_ITEMS: NavItem[] = [
  { label: 'HyDrox10', href: '#hero' },
  { label: 'Technology', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Advantages', href: '#mission' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "HyDrox10 Storage",
    description: "Smart, safe, solid-state hydrogen storage operating at moderate temperature and pressure with higher volumetric density than liquid hydrogen.",
    icon: ShieldCheck
  },
  {
    title: "Thermal Management",
    description: "Advanced active cooling and control algorithms to optimize absorption/desorption kinetics and ensure system safety.",
    icon: Thermometer
  },
  {
    title: "AWS Smart Manufacturing",
    description: "Utilizing AWS IoT SiteWise and Greengrass for real-time monitoring, ensuring batch-to-batch consistency and quality control.",
    icon: Factory
  },
  {
    title: "Predictive Analytics",
    description: "Machine Learning models (Amazon SageMaker) to correlate manufacturing parameters with product performance and reduce waste.",
    icon: Database
  },
  {
    title: "Supply Chain Visibility",
    description: "Centralized data lakes tracking raw material origin and rare-earth certification using AWS S3 and Glue.",
    icon: Zap
  },
  {
    title: "Embedded Control Systems",
    description: "Intelligent sensors and solid-state logic to prevent heat accumulation and manage hydrogen uptake efficiency.",
    icon: Cpu
  }
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for Hydrixon Tech Ltd.
We specialize in "HyDrox10", a smart, safe, solid-state hydrogen storage system.
Our technology solves the thermal management challenges of metal hydrides using advanced sensors and AWS-powered analytics.
Key advantages over liquid/compressed hydrogen: 
1. Moderate temperature/pressure operation.
2. 30-40% lower capital cost vs 700 bar compressed.
3. 75% lower energy cost per cycle vs Liquid H2.
4. Higher safety due to solid-state storage.
Team: Dr. Amir Zomorodian (CEO), Mohamad Fard, Usef Alem.
Be professional, technical, and helpful.`;