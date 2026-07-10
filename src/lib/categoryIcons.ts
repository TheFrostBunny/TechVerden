// src/lib/categoryIcons.ts
import type { Category } from '@/types';
import type { LucideIcon } from 'lucide-react';
import {
  MonitorPlay,
  Code,
  Apple,
  Smartphone,
  Wifi,
  Gamepad2,
  Home,
  Shield,
  Globe,
  Server,
  Cloud,
  Brain,
} from 'lucide-react';

export const categoryIcons: Record<Category, LucideIcon> = {
  Windows: MonitorPlay,
  Linux: Code,
  macOS: Apple,
  Android: Smartphone,
  iPhone: Smartphone,
  Programmering: Code,
  AI: Brain,
  Nettverk: Wifi,
  Spill: Gamepad2,
  Smarthjem: Home,
  Sikkerhet: Shield,
  Webutvikling: Globe,
  Servere: Server,
  Cloud: Cloud,
};

export const categoryColors: Record<Category, string> = {
  Windows: 'from-blue-500 to-blue-600',
  Linux: 'from-orange-500 to-orange-600',
  macOS: 'from-gray-500 to-gray-600',
  Android: 'from-green-500 to-green-600',
  iPhone: 'from-slate-500 to-slate-600',
  Programmering: 'from-purple-500 to-purple-600',
  AI: 'from-pink-500 to-pink-600',
  Nettverk: 'from-cyan-500 to-cyan-600',
  Spill: 'from-red-500 to-red-600',
  Smarthjem: 'from-amber-500 to-amber-600',
  Sikkerhet: 'from-red-600 to-red-700',
  Webutvikling: 'from-indigo-500 to-indigo-600',
  Servere: 'from-slate-600 to-slate-700',
  Cloud: 'from-sky-500 to-sky-600',
};
