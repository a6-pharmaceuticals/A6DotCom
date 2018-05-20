const peopleInfo = [
  {
    name: 'Hunter Jackson',
    title: 'Chairman and CEO',
    paragraphs: [
      `Hunter Jackson is co-founder and Chairman of the Board of Navigen, Inc.
      He was co-founder and served as Chairman and CEO of NPS Pharmaceuticals, Inc.
      (NASDAQ: NPSP) from 1986 to 2006. Three products were brought forward during
      Hunter's tenure at NPS. The first product, Sensipar®, was launched in
      2004 for the treatment of secondary hyperparathyroidism and hypercalcemia.
      It is marketed by Amgen in the U.S. and Europe and by Kyowa Hakko Kirin in
      Asia, and generates annual sales of over $2 billion. NPS's second product,
      Natpara®, an injectable synthetic hormone approved for treatment of
      hypoparathyroidism, is marketed by Shire. The company's third product,
      Gattex®, an injectable peptide for the treatment of short bowel syndrome,
      was launched worldwide in 2013. NPS was acquired by Shire in 2015 for $5.2B.`,
      `Hunter was a member of the Governing Authority of the Utah Science,
      Technology, and Research Economic Development Initiative (USTAR)
      from 2006-2012. He received the 1998 Ernst & Young Utah Entrepreneur
      of the Year Award, the 2002 Utah Governor's Medal for Science and
      Technology, and the 2017 BioUtah Willem J. Kolff Lifetime Achievement Award.`,
      `Hunter has a BA in American Literature from the University of Illinois,
      a PhD in Psychobiology from Yale University and did his postdoctoral work
      in the Neurosurgery Department at the University of Virginia Medical
      Center. Prior to co-founding NPS, he was on the faculty of the University
      of Utah School of Medicine, conducting research in the field of
      developmental neurobiology.`,
    ],
    imgPath: './assets/hunter_mgmt.jpg',
    imgAlt: 'Hunter Jackson',
  },
  {
    name: 'Dave Clark',
    title: 'Chief Operating Officer',
    paragraphs: [
      'Before joining A6, Dave was on the faculty of Utah State University, first as the Executive Director of Entrepreneurial Programs in the Huntsman School of Business. He was later appointed Director, Technology Commercialization and in 2016 was named Associate Vice President, Corporate Relations.',
      'Prior to his time at USU, Dave held senior management positions in both public and private companies. From 2005 to 2008, he was Chief Executive Officer at Prolexys Pharmaceuticals, Inc., a private company established as a spin-out from Myriad Genetics.  He led efforts culminating in a $20 million Series A investment and the subsequent work to develop the company’s small molecule drug candidate for treating solid tumors, including colon, pancreatic, and ovarian cancers, through to a Phase 1b trial.',
      'Between 1995 and 2005 Dave was Vice President, Investor Relations and then Vice President, Operations at NPS Pharmaceuticals, Inc.  During his tenure at NPS, a publicly traded entity, Dave participated in various offerings that brought over $600 million to the company.',
      'From 1988 to 1995, Dave worked as a business development officer with Agridnye, Inc., a publicly traded agricultural biotech firm.',
      'Dave earned his BS from Brigham Young University, his MS from the University of Illinois, and an MBA from the University of Utah. Dave was a founding trustee of the Utah Life Science Association and served as a member of the Governor’s State Advisory Council on Science and Technology.  He was a director and Vice Chairman of the Utah Technology Council.',
    ],
    imgPath: './assets/dave_mgmt.jpg',
    imgAlt: 'Dave Clark',
  },
  {
    name: 'Alan Mueller',
    title: 'Vice President of Research',
    paragraphs: [
      `Alan has over 30 years of industry R&D experience. Alan was a research scientist for
      five years in Neuroscience Drug Discovery at Abbott Laboratories in Abbott Park,
      Illinois. He then spent 19 years with NPS Pharmaceuticals as Vice President of Drug
      Discovery and later Vice President of Research and was also a member of the
      Executive Team and Operating Committee. He was responsible for all aspects of the
      Research Division, from early stage drug discovery through the completion of Phase 1
      clinical trials. Most recently, Alan was Executive Director of Clinical Site Operations and
      a member of the Executive Team for Lifetree Clinical Research, where he was
      responsible for all aspects of the conduct of Phase I through Phase III clinical trials for
      investigation of new drugs.`,
      `Alan received his undergraduate degree in Pharmacy from the University of Kansas and
      received his doctorate in Pharmacology from the University of Colorado Health
      Sciences Center. He was a postdoctoral fellow at the University of Washington in
      Seattle.`,
    ],
    imgPath: './assets/alan_mgmt.jpg',
    imgAlt: 'Alan Mueller',
  },
  {
    name: 'Daniel Wettstein',
    title: 'Senior Director of Pre-Clinical Development',
    paragraphs: [
      `Prior to joining A6, Daniel spent several years at Myriad Genetics and Myriad
      Pharmaceuticals (Myrexis) in roles of increasing responsibility. For three years at
      Myriad Genetics (ProNet), Daniel led projects to identify drug targets for genetic
      diseases, implemented cell-based validation assays to support target identification, and
      helped establish Myriad Proteomics (Prolexys Pharmaceuticals). Daniel then spent
      eight years at Myriad Pharmaceuticals, where he first served as Project Director for
      Cancer Target Identification and Validation, and then as Program Director for Cancer
      Therapeutics, Following the dissolution of Myriad Pharmaceuticals, Daniel was Director
      of Preclinical Studies at MediProPharma, consulted for the Huntsman Cancer Institute
      (University of Utah), and was a science advisor in pharmaceuticals and biotechnology at
      Tekcapital.`,
      `Daniel received his undergraduate degree in Biochemistry from the University of
      California, Los Angeles and received his PhD in Immunology and MD from Stanford
      University. He was a postdoctoral fellow in the Molecular Neurobiology Laboratories at
      the Salk Institute for Biological Studies in San Diego.`,
    ],
    imgPath: './assets/daniel_mgmt.jpg',
    imgAlt: 'Daniel Wettstein',
  },
];

const advisorInfo = [
  {
    name: 'Peter Adamson, Ph.D.',
    paragraphs: [
      `Peter is Honorary Professor of Molecular Pathology at the University College London
      Institute of Ophthalmology. He has more than 22 years of experience in academic and
      industrial research; other recent roles included serving as the Chief Executive Officer at
      Ophthaltec Limited and as the Senior Director of Inflammation Biology (and
      Ophthalmology), the Centre for Excellence in External Drug Discovery (CEED) at
      GlaxoSmithKline (GSK). Most recently, Peter was Vice President and Head of Research
      of the GlaxoSmithKline Ophthalmology Discovery Performance Unit.`,
      `Peter received a BSc degree in Biochemistry from the University of Newcastle-Upon-
      Tyne and a PhD degree in Biochemistry from the University of London. He has more
      than 90 publications that include research articles, reviews, and book chapters. Peter
      has received more than 25 research awards in the area of inflammation and
      ophthalmology.`,
    ],
  },
  {
    name: 'Paula Bokesch, M.D.',
    paragraphs: [
      `Paula is currently Senior Consultant at HDI Pharmaceutical Consultants. She was
      formerly Chief Medical Officer at Tenax Therapeutics, where she is focused on clinical
      development of products for the critical care market. Prior to that she was Senior
      Medical Director at Cubist Pharmaceuticals where she held various positions in both
      drug discovery and clinical development. Before moving to Cubist, she was Global
      Medical Director at Hospira.`,
      `Paula received her MD degree from Wake Forest University School of Medicine and
      served as a Pediatric Anesthesia Fellow at Harvard Medical School.`,
    ],
  },
  {
    name: 'Dean Y. Li, M.D., Ph.D.',
    paragraphs: [
      `Dean is currently Vice President, Head of Translational Medicine at Merck & Co. in New
      Jersey. Prior to his role at Merck, Dean worked as clinician and translational medical
      research scientist at the University of Utah for more than two decades. During his time
      at the University, he co-founded multiple biotech companies stemming from research
      from his laboratory, including Navigen, Recursion Pharmaceuticals, and Hydra
      Biosciences. Dean served as the H.A. & Edna Benning Professor of Medicine and
      Cardiology, the Vice-Dean of Research at the University of Utah Health Science Center,
      and as the Chief Scientific Officer of University of Utah Health Care.`,
      `Dean trained at Washington University in Saint Louis before coming to Utah to work as
      a post-doc in the laboratory of Mark Keating.`,
    ],
  },
  {
    name: 'Michael Matthay, M.D.',
    paragraphs: [
      `Michael is a Professor of Medicine and Anesthesia at the University of California at San
      Francisco and a Senior Associate at the Cardiovascular Research Institute. He is
      Director of the Critical Care Medicine Training in the Department of Medicine and
      Associate Director of the Intensive Care Unit. Michael has studied the pathogenesis and
      resolution of acute lung injury and the acute respiratory distress syndrome (ARDS), with
      an emphasis on translational work and patient-based research, including clinical trials.
      His recent research has focused on the biology and potential clinical use of allogeneic
      bone marrow derived mesenchymal stromal cells (MSCs) for ARDS. He is currently
      leading an NHLBI supported phase 1 and 2 clinical trial of MSCs for ARDS.`,
      `Michael received his AB from Harvard University and his MD from the University of
      Pennsylvania School of Medicine. Michael received clinical training in Internal Medicine
      at the University of Colorado and in Pulmonary and Critical Care Medicine from the
      University of California at San Francisco.`,
    ],
  },
  {
    name: 'John M. McCall, Ph.D.',
    paragraphs: [
      `John began his career as a medicinal chemist with UpJohn and has subsequently held
      senior leadership positions with UpJohn, Pharmacia, and Pfizer. He was Director of
      CNS Research with Upjohn, Vice President and Global Head of Chemistry for both
      Pharmacia and Pharmacia & Upjohn, and Vice President Research with Pfizer. He
      currently serves as president of PharMac, LLC. John has expertise in drug discovery,
      risk minimization, and medicinal chemistry. He has over 33 years of experience in the
      pharmaceutical industry and has worked in a number of disease areas.`,
      `Dr. McCall received his PhD from the University of Wisconsin and pursued his
      postdoctoral work at Harvard University.`,
    ],
  },
  {
    name: 'Guy A. Zimmerman, M.D.',
    paragraphs: [
      `Guy is Professor of Internal Medicine and Associate Chair of the Department of Internal
      Medicine at the University of Utah School of Medicine. Since joining the faculty in 1980,
      he has served as a pulmonary and critical care physician, investigator, and
      departmental leader. He began his faculty research career with studies involving
      patients with acute lung injury and the Acute Respiratory Distress Syndrome (ARDS).
      More recent and ongoing studies have generated discoveries in several areas in
      addition to ARDS, including systemic inflammatory and infectious syndromes (e.g.,
      sepsis, dengue, and malaria).`,
      `Guy was educated at Emory University and Baylor College of Medicine followed by
      postgraduate training at the University of Utah and the University of Washington.`,
    ],
  },
];

export { peopleInfo, advisorInfo };
