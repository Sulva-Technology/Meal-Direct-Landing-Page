import Roadmap from '@/components/Roadmap';
import ClosingCTA from '@/components/ClosingCTA';
export default function FeaturesContent() {
  return <><section className="page-intro shell"><span className="eyebrow">MEAL DIRECT, POWERED BY AI</span><h1>Good food.<br /><em>With a little AI help.</em></h1><p>AI means less time deciding what to eat, updating a kitchen’s menu or organising deliveries. Explore the everyday jobs it helps students, vendors and delivery teams handle.</p></section>
  <div className="feature-basics shell"><article><h2>Find your kitchen.</h2><p>Explore campus vendors and available meals in the student portal.</p></article><article><h2>Choose your window.</h2><p>Plan ahead around available delivery slots and the kitchen’s order cutoff.</p></article><article><h2>Know your total.</h2><p>Review meal options, delivery details and the checkout total before paying.</p></article></div><Roadmap full /><ClosingCTA /></>;
}
