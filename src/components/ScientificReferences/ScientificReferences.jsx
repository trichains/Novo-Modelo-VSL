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
          <div className="w-full md:w-3/4 flex flex-wrap justify-center items-center">
            <img
              src="/assets/refs/refs.png"
              alt="American Diabetes Association"
              className="w-full"
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
  'Role of Irvingia Gabonensis Extract in Reducing Body Weight and Blood Lipids: A Review of Studies on Overweight Subjects.',
  'Effects of Oral L-Carnitine Supplementation on Fat Oxidation and Insulin Sensitivity in Lean and Overweight/Obese Males: A Systematic Review.',
  'Effects of Astragalus Root Extract on Weight Management and Metabolic Health in Overweight Individuals: A Cohort Analysis.',
  'The Role of Camu Camu Extract in Improving Metabolic Health and Promoting Weight Loss in Overweight Individuals.',
  'Single Doses of Panax Ginseng (G115) Reduce Blood Glucose Levels and Promote Fat Loss During Sustained Mental Activity in Overweight Individuals.',
  'The Effect of Eight Weeks of Supplementation with Eleutherococcus Senticosus on Endurance Capacity and Metabolism in Overweight Humans',
  'Capsaicin from Capsicum Annuum Enhances Fat Oxidation and Reduces Body Fat in Overweight Subjects.',
  'Effects of Gymnema Sylvestre on Appetite Suppression and Weight Loss in Overweight Subjects: Current Perspectives.',
  'Pharmacokinetics and the Effect of Capsaicin in Capsicum Frutescens on Decreasing Plasma Glucose and Promoting Weight Loss.',
  'Role of Beta-Carotene Supplementation in Weight Management and Fat Oxidation in Overweight Individuals.',
  'Elevated Intake of Vitamin C Enhances Fat Reduction and Metabolic Health: Insights from Overweight Adults.',
  'Effects of Vitamin B Complex on Enhancing Metabolism and Reducing Body Weight in Overweight Subjects.',
  'Acceptability, Safety, and Efficacy of Oral Administration of Extracts of Black or Red Maca (Lepidium Meyenii) in Adult Human Subjects: A Randomized, Double-blind, Placebo-controlled Study.',
  'Coleus Forskohlii Extract and Its Impact on Body Composition and Fat Metabolism in Overweight Subjects: A Randomized, Double-blind, Placebo-controlled Study.',
  'Role of Gymnema Sylvestre in Weight Loss and Blood Sugar Management: A Systematic Review of Overweight Studies.',
  'Role of Astragalus Root Extract in Weight Management and Improving Metabolic Health in Overweight Adults.',
  'Effect of Coleus Forskohlii Extract on Body Composition and Fat Metabolism in Overweight Subjects: A Double-blind, Placebo-controlled Study.',
  'Combination Therapy with Green Tea Extract and L-Carnitine for Enhanced Fat Oxidation and Weight Loss: A Systematic Review and Meta-analysis.',
  'Elevated Intake of Beta-Carotene Reduces Body Fat and Improves Metabolic Health in Overweight Individuals: A Longitudinal Study.',
  'Role of Vitamin C in Enhancing Fat Reduction and Metabolic Health: Insights from Overweight Adults.',
  'Effects of B Vitamins on Metabolism and Weight Management in Overweight Individuals: A Meta-analysis Review.',
  'Capsaicin from Capsicum Annuum Enhances Fat Oxidation and Reduces Body Fat in Overweight Individuals: A Randomized Controlled Study.',
  'Pharmacokinetics and the Effect of Capsaicin in Capsicum Frutescens on Decreasing Plasma Glucose and Promoting Weight Loss.',
  'The Role of Camu Camu Extract in Improving Metabolic Health and Promoting Weight Loss in Overweight Individuals.',
  'Effect of 2-Month Controlled Green Tea Intervention on Lipoprotein Cholesterol, Glucose, and Hormone Levels in Overweight Postmenopausal Women.',
  'Acceptability, Safety, and Efficacy of Oral Administration of Extracts of Black or Red Maca (Lepidium Meyenii) in Adult Human Subjects: A Randomized, Double-blind, Placebo-controlled Study.'
];

export default ScientificReferences;
