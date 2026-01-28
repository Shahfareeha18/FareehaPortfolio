import { Metadata } from 'next';
import PageLayout from '@/components/layout/page-layout';
import AboutHero from '@/features/about/components/about-hero';
import InvestorsSection from '@/features/about/components/investors-section';
import CompanyStory from '@/features/about/components/company-story';
import MissionStats from '@/features/about/components/mission-stats';
import JoinTeam from '@/features/about/components/join-team';
import CareersSection from '@/features/about/components/careers-section';
import LearnMoreCTA from '@/features/about/components/learn-more-cta';

export const metadata: Metadata = {
  title: 'About Us - Syeda Fareeha Portfolio',
  description: 'Learn about Syeda Fareeha Portfolio company, our mission, team, and career opportunities.',
};

export default function AboutPage() {
  return (
    <PageLayout title="About Us - Syeda Fareeha Portfolio">
      <div className="bg-darkPink-900">
        <AboutHero />
        <div className="pt-24">
          <div className="container mx-auto px-4">
            <InvestorsSection />
            <CompanyStory />
            <MissionStats />
          
          </div>
        </div>
      </div>
      <CareersSection />
   
    </PageLayout>
  );
}