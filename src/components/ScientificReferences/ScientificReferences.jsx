import Container from '../Container/Container';

// Componente que renderiza a seção de referências científicas
const ScientificReferences = () => {
  return (
    <div className="bg-white py-12 px-4">
      <Container>
        <div className="flex flex-col items-center justify-center px-4 gap-8">
          <h2 className="text-3xl md:text-4xl font-medium text-center">
            Scientific <span className="font-bold">References</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            <img
              src="/assets/refs/refs1.jpg"
              alt="American Diabetes Association"
              className="h-12"
            />
            <img
              src="/assets/refs/refs2.jpg"
              alt="Newcastle University"
              className="h-12"
            />
          </div>
          <p className="text-center text-xs">
            The company is not endorsed by, sponsored by, or affiliated with any
            of these organizations
          </p>
          <div className="w-full p-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 list-decimal">
              {scientificReferences.map((reference, index) => (
                <li key={index} className="text-xs leading-tight">
                  {reference}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

// Lista de referências para ser exibida
const scientificReferences = [
  'Healthy behavior change and cardiovascular outcomes in newly diagnosed type 2 diabetic patients: a cohort analysis of the ADDITION-Cambridge study',
  'Effects of short-term chromium supplementation on insulin sensitivity and body composition in overweight children: randomized, double-blind, placebo-controlled study',
  'Reversing Type 2 Diabetes and ongoing remission',
  'Ginseng therapy in non-insulin-dependent diabetic patients',
  'Role of chromium supplementation in Indians with type 2 diabetes mellitus',
  'Elevated intakes of supplemental chromium improve glucose and insulin variables in individuals with type 2 diabetes',
  'Understanding the root causes of diabetes to develop effective therapies for individuals with type 2 diabetes mellitus',
  'Chromium supplementation shortens QTc interval duration in patients with type 2 diabetes mellitus',
  'Single doses of Panax ginseng (G115) reduce blood glucose levels and improve cognitive performance during sustained mental activity',
  'Effect of chromium on glucose and lipid profiles in patients with type 2 diabetes; a meta-analysis review of randomized trials',
  'Effect of Korean red ginseng on arterial stiffness in subjects with hypertension',
  'Yale scientists study how some insulin-producing cells survive in type 1 diabetes',
  'Effects of oral L-carnitine supplementation on insulin sensitivity indices in response to glucose feeding in lean and overweight/obese males',
  'Effects of Panax ginseng supplementation on muscle damage and inflammation after uphill treadmill running in humans',
  'Ameliorating hypertension and insulin resistance in subjects at increased cardiovascular risk: effects of acetyl-L-carnitine therapy',
  'The effects of L-carnitine supplementation on glycemic control: a systematic review and meta-analysis of randomized controlled trials',
  'Pharmacokinetic and the effect of capsaicin in Capsicum frutescens on decreasing plasma glucose level',
  'The effect of eight weeks of supplementation with Eleutherococcus senticosus on endurance capacity and metabolism in human',
  'Effect of 2-month controlled green tea intervention on lipoprotein cholesterol, glucose, and hormone levels in healthy postmenopausal women',
  'The effect of Irvingia gabonensis seeds on body weight and blood lipids of obese subjects in Cameroon',
  'Acceptability, Safety, and Efficacy of Oral Administration of Extracts of Black or Red Maca (Lepidium meyenii) in Adult Human Subjects: A Randomized, Double-Blind, Placebo-Controlled Study'
];

export default ScientificReferences;
