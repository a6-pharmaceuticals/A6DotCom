const peopleInfo = [
  {
    name: 'Hunter Jackson',
    title: 'Chairman and CEO',
    paragraphs: [
      `Hunter was previously co-founder and Executive Chairman of Navigen. He was also a
      co-founder and served as Chairman and CEO of NPS Pharmaceuticals, Inc. (NASDAQ:
      NPSP) from 1986 to 2006. Prior to that, Hunter was on the faculty of the University of
      Utah Medical School doing research in developmental neurobiology.`,
      'Hunter has a BA in American Literature from the University of Illinois, a PhD in Psychobiology from Yale University and did his postdoctoral work in the Neurosurgery Department at the University of Virginia Medical Center.',
    ],
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
  },
];

const advisorInfo = [
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
    name: 'Edward Nemeth, Ph.D.',
    paragraphs: [
      `Ed is a consultant to the biopharmaceutical industry and academic consortiums focused
      on drug discovery. He has experience in both academia and industry and is the former
      Chief Scientific Officer of NPS Pharmaceuticals, acquired by Shire in 2015. He
      discovered the parathyroid calcium receptor and coined the terms calcimimetic and
      calcilytic to describe activators and antagonists of this receptor. He is an inventor of
      cinacalcet, the first allosteric modulator of a G protein-coupled receptor to reach the
      market. He is currently involved in the development of calcilytics for the treatment of
      autosomal dominant hypocalcemia.`,
      `Dr. Nemeth received a BA in chemistry and psychology from Lawrence University, a MA
      in psychology from Princeton University, and MS, M.Phil. and PhD degrees in
      pharmacology from Yale University.`,
    ],
  },
];

export { peopleInfo, advisorInfo };
