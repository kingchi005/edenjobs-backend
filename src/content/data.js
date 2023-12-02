let job_sample_type = {
  employer_name: "Walmart Inc.",
  employer_logo:
    "https://animationvisarts.com/wp-content/uploads/2020/08/Walmart-logo-2008-Now.jpg",
  employer_website: "https://www.walmart.com",
  employer_company_type: "Retail",
  job_publisher: "Workday",
  job_id: "geuhmjqscmzz1S0bAAAAAA==",
  job_employment_type: "FULLTIME",
  job_title: "Senior Analyst, Temp Services (H)",
  job_apply_link:
    "https://walmart.wd5.myworkdayjobs.com/en-US/WalmartExternal/job/Bentonville-AR/Senior-Analyst--Temp-Services--H-_R-1724392-1",
  job_apply_is_direct: false,
  job_apply_quality_score: 0.686,
  apply_options: [
    {
      publisher: "Workday",
      apply_link:
        "https://walmart.wd5.myworkdayjobs.com/en-US/WalmartExternal/job/Bentonville-AR/Senior-Analyst--Temp-Services--H-_R-1724392-1",
      is_direct: false,
    },
    {
      publisher: "Learn4Good",
      apply_link:
        "https://www.learn4good.com/jobs/online_remote/finance/2722090979/e/",
      is_direct: false,
    },
  ],
  job_description:
    "Position Summary... What you'll do... Position Summary... What you'll do... Our Legal, Compliance, and Ethics teams ensure we make decisions that are not only good for our associates and customers, but also lawful and ethical. We need experts to make sure our facilities follow all laws and regulations. More than that, we need to work together to make sure we operate according to our high ethical standards. This role will be a temporary assignment that is anticipated to last up to 6 months. Great opportunity to get your foot in the door with the world’s largest retailer. This position is currently qualified for remote work, but will ultimately be based on Home Office Campus guidelines. As a Senior Analyst, Temp Services Global Ethics-Intake you will… 1. Review and assess claims and concerns that come in through our Global Ethics helpline, email, and website 2. Utilize proactive thinking and research to provide consistent guidance and advice to our clients. 3. Implement compliance and ethics programs and review to capture industry best practices. 4. Conduct detailed analysis of identified compliance mandates/changes/concerns and lead or provide direction with the implementation of resolutions for production problems/questions. 5. Conduct research and analyze data to determine trends or areas of opportunity. 6. Support project requests from Counsel, Compliance and Ethics Managers and others as needed. Minimum Qualification: Bachelor’s degree in Business, Journalism, Marketing, Communications, Public Relations, or related field OR 2 years’ experience in human resources, ethics and compliance, corporate communications, or related area. Nice to haves...but not required Bilingual Experience Preferred (Spanish) Juris Doctor Certified Compliance and Ethics Professional designation. The above information has been designed to indicate the general nature and level of work performed in the role. It is not designed to contain or be interpreted as a comprehensive inventory of all duties, responsibilities and qualifications required of employees assigned to this job. The full Job Description can be made available as part of the hiring process. Minimum Qualifications... Outlined below are the required minimum qualifications for this position. If none are listed, there are no minimum qualifications. Preferred Qualifications... Outlined below are the optional preferred qualifications for this position. If none are listed, there are no preferred qualifications. Primary Location... 702 SW 8TH ST, BENTONVILLE, AR 72716, United States of America About Walmart: Fifty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. You'll play a crucial role in shaping the future of retail, improving millions of lives around the world. This is that place where your passions meet purpose. Join our family and create a career you're proud of.",
  job_is_remote: true,
  job_posted_at_timestamp: 1700524800,
  job_posted_at_datetime_utc: "2023-11-21T00:00:00.000Z",
  job_city: null,
  job_state: null,
  job_country: "US",
  job_latitude: 37.09024,
  job_longitude: -95.71289,
  job_benefits: null,
  job_google_link:
    "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=jobs&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=jobs&htidocid=geuhmjqscmzz1S0bAAAAAA%3D%3D",
  job_offer_expiration_datetime_utc: null,
  job_offer_expiration_timestamp: null,
  job_required_experience: {
    no_experience_required: false,
    required_experience_in_months: 24,
    experience_mentioned: true,
    experience_preferred: true,
  },
  job_required_skills: null,
  job_required_education: {
    postgraduate_degree: false,
    professional_certification: false,
    high_school: false,
    associates_degree: false,
    bachelors_degree: false,
    degree_mentioned: true,
    degree_preferred: true,
    professional_certification_mentioned: true,
  },
  job_experience_in_place_of_education: false,
  job_min_salary: null,
  job_max_salary: null,
  job_salary_currency: null,
  job_salary_period: null,
  job_highlights: {
    Qualifications: [
      "Minimum Qualification: Bachelor’s degree in Business, Journalism, Marketing, Communications, Public Relations, or related field OR 2 years’ experience in human resources, ethics and compliance, corporate communications, or related area",
    ],
    Responsibilities: [
      "This role will be a temporary assignment that is anticipated to last up to 6 months",
      "Review and assess claims and concerns that come in through our Global Ethics helpline, email, and website 2",
      "Utilize proactive thinking and research to provide consistent guidance and advice to our clients",
      "Implement compliance and ethics programs and review to capture industry best practices",
      "Conduct detailed analysis of identified compliance mandates/changes/concerns and lead or provide direction with the implementation of resolutions for production problems/questions",
      "Conduct research and analyze data to determine trends or areas of opportunity",
      "Support project requests from Counsel, Compliance and Ethics Managers and others as needed",
    ],
  },
  job_job_title: "Senior analyst",
  job_posting_language: "en",
  job_onet_soc: "45302100",
  job_onet_job_zone: "1",
  job_naics_code: "452990",
  job_naics_name: "All Other General Merchandise Stores",
};

async () => {
  const url =
    "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7957e2a45msh5513a1b64612e5ep1f77d5jsnb4b0718b1a10",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
