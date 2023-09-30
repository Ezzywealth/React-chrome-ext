import HeroSection from '../components/HomePage/HeroSection';
import FeaturesSection from '../components/HomePage/Features';
import HowItWorks from '../components/HomePage/HowItWorks';
import Layout from '../components/Layout';

export default function Home() {
	return (
		<div>
			<Layout>
				<section className='divide-y-[60px] divide-[#F4F6F8] '>
					<HeroSection />
					<FeaturesSection />
					<HowItWorks />
				</section>
			</Layout>
		</div>
	);
}
