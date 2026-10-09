/* =============================================================
   INDIA GCC INTELLIGENCE & TRACKER — INTERACTIVE ENGINE
   Independent analytical dashboard module
   Scoped to .gcc-app / .gcc-page
   ============================================================= */

(function () {
    'use strict';

    // SVG India Boundaries & Projection
    const INDIA_MAP_PATH = "M128.0,23.8L133.3,24.1L133.7,22.7L136.7,22.8L137.9,20.2L145.5,18.1L146.2,16.6L148.6,17.4L152.9,16.4L154.9,18.4L156.0,17.7L157.8,21.5L161.9,22.0L162.6,24.7L164.7,22.4L167.5,23.9L165.8,25.7L164.7,32.5L162.9,35.3L159.0,36.4L159.1,38.6L155.2,39.0L156.5,42.2L153.7,45.7L146.7,46.1L149.4,51.1L146.9,51.3L147.4,54.9L149.7,57.5L153.8,57.7L152.7,60.5L155.7,65.2L153.9,67.6L152.0,67.0L147.8,70.3L145.2,68.2L144.6,65.0L139.9,67.4L141.2,71.2L145.2,75.3L144.1,78.1L146.1,81.0L144.4,82.5L145.2,85.4L146.8,85.7L149.6,83.3L154.1,89.7L156.5,90.9L160.1,90.4L165.2,93.5L164.9,96.2L176.0,101.1L166.9,108.5L167.5,110.7L165.2,113.0L166.0,116.5L163.9,118.0L162.9,122.1L169.0,126.1L169.7,124.1L178.5,129.0L179.9,132.3L181.7,131.9L187.7,136.4L190.2,135.4L195.4,139.0L199.0,138.4L199.3,141.6L205.5,142.3L207.3,144.2L208.3,142.0L214.8,143.9L214.6,142.5L218.7,141.4L220.6,143.4L225.1,144.0L225.5,148.4L229.8,149.6L230.7,151.2L232.9,151.0L233.2,152.6L238.9,150.9L242.0,155.4L244.4,154.0L248.6,154.7L254.0,157.6L258.7,155.2L259.0,157.2L262.4,158.7L269.9,156.6L271.5,158.5L273.9,152.9L273.3,149.3L271.2,147.3L274.1,137.4L273.0,135.5L280.1,132.5L282.8,134.1L283.6,136.4L281.8,140.7L283.9,144.7L281.6,146.9L283.3,147.4L283.4,149.9L284.0,149.1L286.9,151.9L290.3,151.1L296.9,153.4L303.6,150.5L308.6,152.4L321.9,151.9L324.7,150.2L326.9,151.3L327.8,149.6L326.7,145.2L327.8,144.8L326.4,141.9L321.4,141.9L320.2,139.7L321.3,137.8L325.1,138.5L329.5,135.9L332.4,137.3L336.1,134.6L335.4,132.0L338.8,131.3L345.7,124.5L349.6,124.5L357.1,120.5L358.5,119.1L357.5,117.3L362.1,115.1L364.6,117.1L370.8,118.5L381.6,113.9L385.0,116.7L383.5,119.0L385.4,117.8L389.5,123.4L386.5,126.8L387.7,127.9L387.7,126.3L390.6,125.3L393.6,129.1L396.3,128.9L399.5,131.3L398.9,133.4L400.0,134.1L399.6,136.1L398.0,135.8L393.1,140.1L396.5,147.7L392.8,146.3L393.0,145.2L390.5,143.5L384.0,144.9L373.1,153.5L369.3,154.7L368.1,157.2L369.8,162.7L367.4,165.3L367.9,167.3L365.8,170.2L362.2,172.7L361.4,175.4L363.7,176.7L363.3,179.5L359.0,186.2L355.7,195.6L350.2,193.2L346.8,194.2L344.3,192.1L345.8,198.0L345.1,206.1L343.9,208.0L341.6,207.4L341.3,215.1L342.6,219.0L341.9,220.3L340.4,220.0L339.9,223.0L339.2,222.4L338.6,223.7L335.7,220.6L335.5,222.7L334.4,223.2L330.0,197.5L326.8,198.6L325.6,197.3L325.7,201.0L322.9,203.7L323.9,206.7L320.9,209.0L318.1,203.9L318.2,207.1L317.2,206.6L316.8,202.8L314.6,199.1L317.6,191.7L320.5,192.3L321.6,189.9L322.9,191.2L322.7,189.7L324.8,191.3L325.1,188.4L328.4,187.1L330.2,182.5L329.3,180.0L333.0,180.4L332.0,178.1L327.0,175.8L304.8,176.4L296.6,174.2L296.3,166.5L297.2,164.6L294.4,160.3L293.0,164.3L290.0,163.7L287.2,161.8L286.3,157.9L283.8,157.8L285.8,160.2L280.5,159.9L281.6,158.7L276.9,154.6L275.9,156.7L278.0,157.0L278.6,158.5L273.8,161.6L272.9,166.5L275.1,166.6L278.8,171.1L282.5,170.8L282.9,173.2L285.2,174.1L285.2,174.7L284.0,176.1L277.4,175.5L276.9,179.4L275.9,180.5L273.3,179.5L273.8,180.6L271.5,183.5L276.0,187.7L281.5,189.2L281.9,193.6L279.3,195.4L279.0,198.5L282.4,200.8L281.2,204.3L285.0,204.9L283.0,208.0L284.7,210.4L284.2,214.6L286.4,220.6L284.9,224.4L286.4,228.2L284.0,228.3L283.2,226.1L283.0,228.5L281.3,227.6L282.1,222.6L280.1,221.7L279.0,225.6L278.5,223.6L277.7,224.4L277.6,228.6L277.3,228.7L277.4,228.4L277.2,228.0L277.3,227.3L277.2,227.0L276.8,228.9L276.9,227.0L275.2,226.8L274.8,229.3L274.6,227.8L274.1,227.6L274.4,227.3L274.4,226.4L273.5,223.5L274.3,220.7L273.9,220.0L271.7,219.6L274.0,221.3L272.1,222.6L268.7,227.3L259.0,229.7L256.5,232.6L255.3,235.6L257.4,240.3L255.9,240.9L258.7,241.7L254.0,244.5L253.7,246.3L254.8,246.8L253.2,248.0L255.0,247.3L251.2,249.7L249.8,252.3L248.3,252.6L249.1,253.1L237.7,256.9L230.9,261.4L218.4,277.3L210.6,281.5L205.9,288.0L193.5,296.1L192.7,297.6L192.7,298.5L194.2,299.3L193.8,296.8L194.4,298.0L194.2,299.4L194.0,300.6L193.0,301.0L194.3,300.7L193.5,302.6L192.8,301.3L193.4,303.2L185.3,306.9L183.2,305.9L179.2,307.1L174.7,315.7L173.3,315.8L172.9,313.8L171.2,313.1L165.5,316.3L162.6,325.1L164.6,332.4L163.6,340.0L166.6,351.5L164.0,363.7L160.2,369.9L158.6,375.3L160.3,395.4L157.0,394.6L152.2,396.2L151.9,399.4L146.8,407.6L147.7,409.7L150.8,410.6L146.3,411.1L138.2,414.5L135.5,424.0L128.4,428.4L125.2,427.7L121.0,424.4L114.6,416.2L116.3,414.9L114.5,415.7L112.0,409.4L110.8,399.5L110.4,400.4L105.9,388.4L105.4,383.4L100.9,374.8L96.2,370.4L91.1,358.1L89.3,350.7L89.7,346.3L85.6,336.9L86.8,337.4L85.5,336.7L83.7,330.4L81.4,329.6L82.0,328.3L78.6,325.0L78.4,321.3L76.8,320.2L78.2,319.9L76.1,317.5L76.9,316.6L76.1,317.1L72.3,310.6L71.1,305.8L72.5,305.3L71.1,305.6L70.4,303.9L72.2,304.0L70.4,302.6L71.6,302.3L70.3,300.7L70.6,297.1L69.8,296.9L69.6,296.0L70.0,296.7L70.5,296.1L68.7,292.3L69.7,292.9L70.2,292.4L68.4,290.8L68.0,288.4L69.0,288.0L68.0,287.7L66.5,282.7L67.3,282.0L65.2,278.7L65.6,277.8L67.5,279.8L67.3,277.2L66.5,278.0L65.0,276.8L64.8,273.9L66.2,275.0L64.1,271.7L65.3,269.7L66.0,270.4L65.8,270.8L66.1,271.2L66.3,271.3L65.9,269.1L64.8,268.7L67.0,266.8L66.1,267.1L65.9,264.3L65.5,266.6L63.4,268.7L63.2,262.6L64.9,262.9L62.6,260.4L64.6,259.4L62.4,259.3L61.4,254.8L64.7,244.6L64.0,241.4L64.4,241.5L65.1,241.2L63.7,240.7L64.0,238.0L62.8,238.7L62.4,237.6L64.0,237.1L62.1,236.3L63.2,235.0L61.2,236.4L61.1,234.6L61.5,234.3L61.9,234.8L62.5,234.7L60.6,233.2L62.8,231.0L61.2,231.0L61.7,230.2L65.1,227.6L59.7,227.8L60.9,224.2L61.3,223.6L62.2,223.8L62.5,223.5L62.7,223.2L61.3,223.4L59.8,224.4L59.3,223.2L60.4,219.8L62.8,220.3L64.9,218.9L59.7,218.3L58.3,219.8L56.9,218.3L56.5,221.3L54.9,222.5L55.8,224.0L55.6,223.7L55.3,223.5L54.6,223.5L56.6,228.4L53.6,233.0L53.9,234.7L44.8,239.6L36.3,242.2L27.2,236.8L10.4,218.3L12.3,215.8L11.8,217.1L14.0,216.7L14.4,219.1L17.9,218.0L18.3,216.6L20.5,218.1L21.3,215.8L22.4,217.0L24.8,214.8L27.4,214.9L31.1,208.5L29.0,208.9L28.0,207.3L28.1,208.8L23.4,209.4L21.1,212.0L17.5,211.4L16.3,209.8L14.0,210.5L12.4,208.8L12.2,209.3L11.5,208.3L11.2,208.8L11.1,208.2L10.8,208.6L8.0,206.9L6.3,205.6L7.5,206.2L5.6,204.7L6.9,203.6L3.8,201.0L4.1,200.0L3.5,200.6L5.1,197.5L8.7,195.1L4.7,197.1L3.5,196.0L2.4,199.5L0.0,199.0L2.4,197.3L0.2,197.4L2.5,193.7L8.0,193.8L8.7,188.7L9.5,190.2L10.6,188.9L11.4,190.0L19.5,189.0L21.3,190.8L25.4,190.8L26.5,189.0L32.7,187.1L32.8,189.6L34.8,190.1L40.3,187.4L38.7,186.8L38.5,184.5L40.0,183.2L37.2,176.4L34.1,172.7L34.1,168.2L28.7,168.0L26.4,164.7L27.4,155.7L22.6,155.1L18.3,152.8L19.4,146.3L30.1,134.1L33.1,134.1L35.1,138.1L37.0,138.6L51.0,134.9L57.7,122.9L65.3,119.1L69.9,111.1L71.5,105.6L79.4,101.8L78.1,99.4L78.9,97.5L80.8,97.0L85.5,90.9L89.3,88.9L86.8,88.0L87.3,84.6L88.7,83.7L86.4,79.4L88.1,76.9L91.8,74.4L96.7,73.9L98.6,71.9L94.9,68.2L89.1,68.0L89.4,62.8L88.5,64.1L84.9,63.9L78.8,60.0L74.8,59.1L74.2,47.3L71.5,40.1L72.3,37.3L75.1,37.4L76.0,34.4L80.4,32.6L81.6,29.2L76.3,27.7L75.6,25.8L76.8,23.2L71.6,23.1L70.6,21.2L67.8,20.3L68.5,18.2L60.2,18.4L59.9,12.7L65.6,9.1L66.9,5.9L77.9,5.5L75.3,2.6L80.3,3.9L85.6,1.3L87.5,1.8L89.2,0.0L91.3,0.4L92.1,2.3L95.5,0.9L99.2,2.0L99.8,5.4L103.5,5.1L107.5,9.7L117.0,13.8L118.6,18.3L125.6,20.3L128.0,23.8ZM333.7,387.2L334.7,388.8L334.1,391.6L331.5,392.2L331.4,388.3L333.7,387.2ZM336.0,367.3L335.9,369.8L337.1,369.7L336.3,370.0L336.0,371.6L337.1,372.0L335.3,375.7L336.6,375.5L336.0,378.3L333.3,372.8L334.0,371.4L334.6,372.7L336.0,367.3ZM338.0,357.6L339.5,363.3L338.8,364.5L337.2,363.7L338.4,365.7L336.4,366.1L335.6,361.4L337.0,361.1L337.0,360.1L336.3,360.6L336.4,359.8L336.1,358.3L337.1,357.4L338.0,357.6ZM351.6,440.8L353.0,444.2L351.4,447.9L348.9,442.4L351.6,440.8ZM340.6,348.0L341.2,350.9L339.3,350.7L340.8,351.8L340.4,354.9L339.4,355.6L339.1,354.3L338.4,354.4L338.3,355.1L339.1,356.2L337.3,357.3L337.8,349.8L338.9,347.9L340.6,348.0Z";
    const CITY_COORDINATES = {
  "Hyderabad": [
    141.2,
    291
  ],
  "Bengaluru": [
    129,
    356.1
  ],
  "Pune": [
    77.8,
    274.2
  ],
  "Chennai": [
    165.6,
    354.5
  ],
  "Gurugram": [
    121.2,
    127.5
  ],
  "Noida": [
    126.2,
    126.4
  ],
  "Mumbai": [
    64.4,
    266
  ],
  "Navi Mumbai": [
    66.5,
    266.7
  ],
  "Thane": [
    65.8,
    263.9
  ],
  "Coimbatore": [
    120.2,
    385
  ],
  "Kolkata": [
    276.4,
    214.4
  ],
  "Visakhapatnam": [
    206,
    286.5
  ],
  "Thiruvananthapuram": [
    120,
    421.8
  ],
  "Ahmedabad (GIFT City)": [
    61.7,
    205.7
  ],
  "Vadodara": [
    68.6,
    218.3
  ]
};

    // Fallback authentic database for offline/local file:// access
    const EMBEDDED_GCC_DATA = {
  "meta": {
    "title": "India GCC Intelligence & Tracker",
    "description": "Comprehensive, source-backed tracking of Global Capability Centre openings, expansions, and talent commitments across India.",
    "dataCoverage": "2022 – 2026 Announced & Operational GCC Initiatives",
    "lastRefreshedIso": "2026-10-09T12:21:46.381Z",
    "lastRefreshedDisplay": "9 October 2026, 5:51 pm IST",
    "pipelineSchedule": "Refreshed twice daily at 06:00 & 18:00 UTC via automated GitHub Actions",
    "totalTracked": 211,
    "newCount": 127,
    "expansionCount": 84,
    "totalDisclosedJobsTarget": 93820,
    "activeCitiesCount": 15,
    "sectorsCount": 19,
    "primarySourceRatio": 18,
    "disclaimer": "Data is systematically compiled from official corporate disclosures, stock exchange filings (NSE/BSE/SEC), and verified business reporting. Stated job numbers represent public hiring targets and commitments disclosed by corporate leadership."
  },
  "kpis": {
    "totalTracked": 211,
    "newGCCs": 127,
    "expansions": 84,
    "plannedJobsDisclosed": 93820,
    "activeCities": 15,
    "activeSectors": 19,
    "primaryVerifiedCount": 37
  },
  "cities": {
    "Hyderabad": {
      "total": 77,
      "new": 55,
      "expansion": 22,
      "jobs": 43450
    },
    "Bengaluru": {
      "total": 59,
      "new": 30,
      "expansion": 29,
      "jobs": 38200
    },
    "Noida": {
      "total": 5,
      "new": 3,
      "expansion": 2,
      "jobs": 500
    },
    "Chennai": {
      "total": 21,
      "new": 10,
      "expansion": 11,
      "jobs": 5170
    },
    "Gurugram": {
      "total": 11,
      "new": 6,
      "expansion": 5,
      "jobs": 2300
    },
    "Pune": {
      "total": 24,
      "new": 15,
      "expansion": 9,
      "jobs": 1300
    },
    "Thiruvananthapuram": {
      "total": 1,
      "new": 1,
      "expansion": 0,
      "jobs": 0
    },
    "Mumbai": {
      "total": 3,
      "new": 1,
      "expansion": 2,
      "jobs": 0
    },
    "Thane": {
      "total": 1,
      "new": 0,
      "expansion": 1,
      "jobs": 0
    },
    "Navi Mumbai": {
      "total": 2,
      "new": 1,
      "expansion": 1,
      "jobs": 0
    },
    "Visakhapatnam": {
      "total": 1,
      "new": 1,
      "expansion": 0,
      "jobs": 0
    },
    "Coimbatore": {
      "total": 3,
      "new": 2,
      "expansion": 1,
      "jobs": 2400
    },
    "Ahmedabad (GIFT City)": {
      "total": 1,
      "new": 1,
      "expansion": 0,
      "jobs": 0
    },
    "Vadodara": {
      "total": 1,
      "new": 1,
      "expansion": 0,
      "jobs": 0
    },
    "Kolkata": {
      "total": 1,
      "new": 0,
      "expansion": 1,
      "jobs": 500
    }
  },
  "cityCoordinates": {
    "Bengaluru": {
      "x": 129,
      "y": 356.1,
      "state": "Karnataka",
      "tier": "Tier 1"
    },
    "Hyderabad": {
      "x": 141.2,
      "y": 291,
      "state": "Telangana",
      "tier": "Tier 1"
    },
    "Pune": {
      "x": 77.8,
      "y": 274.2,
      "state": "Maharashtra",
      "tier": "Tier 1"
    },
    "Chennai": {
      "x": 165.6,
      "y": 354.5,
      "state": "Tamil Nadu",
      "tier": "Tier 1"
    },
    "Gurugram": {
      "x": 121.2,
      "y": 127.5,
      "state": "Haryana",
      "tier": "Tier 1 (NCR)"
    },
    "Noida": {
      "x": 126.2,
      "y": 126.4,
      "state": "Uttar Pradesh",
      "tier": "Tier 1 (NCR)"
    },
    "Mumbai": {
      "x": 64.4,
      "y": 266,
      "state": "Maharashtra",
      "tier": "Tier 1"
    },
    "Navi Mumbai": {
      "x": 66.5,
      "y": 266.7,
      "state": "Maharashtra",
      "tier": "Tier 1"
    },
    "Thane": {
      "x": 65.8,
      "y": 263.9,
      "state": "Maharashtra",
      "tier": "Tier 1"
    },
    "Coimbatore": {
      "x": 120.2,
      "y": 385,
      "state": "Tamil Nadu",
      "tier": "Tier 2"
    },
    "Ahmedabad (GIFT City)": {
      "x": 61.7,
      "y": 205.7,
      "state": "Gujarat",
      "tier": "Tier 1 / Emerging"
    },
    "Vadodara": {
      "x": 68.6,
      "y": 218.3,
      "state": "Gujarat",
      "tier": "Tier 2"
    },
    "Kolkata": {
      "x": 276.4,
      "y": 214.4,
      "state": "West Bengal",
      "tier": "Tier 1"
    },
    "Visakhapatnam": {
      "x": 206,
      "y": 286.5,
      "state": "Andhra Pradesh",
      "tier": "Tier 2"
    },
    "Thiruvananthapuram": {
      "x": 120,
      "y": 421.8,
      "state": "Kerala",
      "tier": "Tier 2"
    },
    "Kochi": {
      "x": 114.5,
      "y": 405,
      "state": "Kerala",
      "tier": "Tier 2"
    },
    "Jaipur": {
      "x": 98,
      "y": 145,
      "state": "Rajasthan",
      "tier": "Tier 2"
    }
  },
  "sectors": {
    "Industrial & Automotive": 29,
    "Consumer & Retail": 25,
    "Technology & Software": 30,
    "Professional Services": 11,
    "Pharma & Life Sciences": 19,
    "Aerospace": 5,
    "Travel & Aviation": 3,
    "BFSI": 37,
    "Semiconductors": 6,
    "Chemicals": 3,
    "Healthcare & MedTech": 19,
    "Energy": 5,
    "Logistics": 8,
    "Real Estate": 2,
    "Media & Entertainment": 4,
    "Consumer Electronics": 1,
    "Hospitality": 1,
    "Telecom": 2,
    "Agriculture": 1
  },
  "years": {
    "2022": 8,
    "2023": 5,
    "2024": 24,
    "2025": 87,
    "2026": 87
  },
  "statePolicies": [
    {
      "state": "Karnataka",
      "policyName": "Karnataka GCC Policy 2024–29",
      "launched": "September 2024",
      "targetSummary": "500 new GCCs, 3.5 lakh jobs, and $50B in economic output by 2029",
      "keyIncentive": "Higher incentives for centres established beyond Bengaluru (Hub & Spoke model).",
      "sourceName": "The South First / Dept. of Electronics & IT Karnataka",
      "sourceUrl": "https://thesouthfirst.com/news/karnataka-launches-indias-first-gcc-policy-aiming-50-billion-economic-output-by-2029/"
    },
    {
      "state": "Telangana",
      "policyName": "Telangana Global Capability Strategy",
      "launched": "Active Framework",
      "targetSummary": "Fastest growing hub in South Asia; target $250B tech ecosystem",
      "keyIncentive": "Dedicated single-window clearance, high-density IT clustering in HITEC City & Financial District.",
      "sourceName": "Telangana Today / ITE&C Department",
      "sourceUrl": "https://telanganatoday.com/hyderabad-becomes-fastest-growing-gcc-hub-in-india-1973127"
    },
    {
      "state": "Tamil Nadu",
      "policyName": "Tamil Nadu R&D and GCC Incentive Framework",
      "launched": "2023–2025 Framework",
      "targetSummary": "Position Chennai & Tier-2 cities (Coimbatore, Madurai) as premier engineering & automotive GCC capital",
      "keyIncentive": "Payroll subsidies, capital subsidies on high-end lab setup, and green energy concessions.",
      "sourceName": "Guidance Tamil Nadu",
      "sourceUrl": "https://investtamilnadu.com/"
    },
    {
      "state": "Uttar Pradesh",
      "policyName": "UP IT & GCC Promotion Policy (Noida/Greater Noida)",
      "launched": "2023–2027",
      "targetSummary": "Establish Noida as the premier Northern India data, AI, and enterprise tech hub",
      "keyIncentive": "Land allocation concessions, stamp duty exemptions, and capital subsidies.",
      "sourceName": "Invest UP",
      "sourceUrl": "https://invest.up.gov.in/"
    },
    {
      "state": "Gujarat",
      "policyName": "Gujarat IT/ITeS Policy & GIFT City FinTech GCC Scheme",
      "launched": "2022–2027",
      "targetSummary": "Attract global BFSI and treasury GCCs with special offshore regulatory benefits in GIFT City IFSC",
      "keyIncentive": "100% tax holiday for 10 consecutive years out of 15 years, competitive operational subsidies.",
      "sourceName": "GIFT City IFSC / DST Gujarat",
      "sourceUrl": "https://www.giftgujarat.in/"
    }
  ],
  "records": [
    {
      "id": "abb-hyd",
      "company": "ABB",
      "industry": "Industrial & Automotive",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "Business services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Global business services centre",
      "sourceUrl": "https://www.deccanchronicle.com/amp/southern-states/telangana/hyderabad-becomes-fastest-growing-gcc-hub-in-india-1973127",
      "sourceTitle": "Deccan Chronicle",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://careers.abb/global/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "abercrombie-blr",
      "company": "Abercrombie & Fitch",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026-08",
      "year": 2026,
      "hq": "United States",
      "focus": "Enterprise technology capabilities",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://m.thewire.in/article/ptiprnews/abercrombie-fitch-co-opens-global-capability-center-in-bengaluru-to-support-continued-global-growth-and-strengthen-enterprise-capabilities",
      "sourceTitle": "PTI via The Wire",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://corporate.abercrombie.com/careers/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "abinbev-blr",
      "company": "AB InBev",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Belgium",
      "focus": "Business operations and analytics",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Operations insourced from Accenture",
      "sourceUrl": "https://www.consultancy.in/news/604/ab-inbev-insources-bengaluru-business-operations-back-from-accenture",
      "sourceTitle": "Consultancy.in",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "acumatica-hyd",
      "company": "Acumatica",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-08",
      "year": 2026,
      "hq": "United States",
      "focus": "Engineering for cloud ERP",
      "headcountTarget": null,
      "headcountNow": 30,
      "metricType": "Reported Headcount",
      "metricValue": 30,
      "jobsNote": "30+ at launch, actively hiring",
      "sourceUrl": "https://www.acumatica.com/corporate-newsroom/press-releases/capability-center-hyderabad-india/",
      "sourceTitle": "Acumatica press release",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": "https://www.acumatica.com/careers/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "adecco-blr",
      "company": "Adecco",
      "industry": "Professional Services",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025-01",
      "year": 2025,
      "hq": "Switzerland",
      "focus": "Finance operations, HR operations, IT",
      "headcountTarget": 2500,
      "headcountNow": 400,
      "metricType": "Planned Hires",
      "metricValue": 2500,
      "jobsNote": "400+ growing to 2,500+",
      "sourceUrl": "https://www.staffingindustry.com/news/global-daily-news/adecco-india-to-expand-global-capability-centre-add-2500-jobs",
      "sourceTitle": "Staffing Industry Analysts",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "adobe-noida",
      "company": "Adobe",
      "industry": "Technology & Software",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "eventType": "Expansion",
      "announcementDate": "2026-04",
      "year": 2026,
      "hq": "United States",
      "focus": "AI and product R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Third Noida office",
      "sourceUrl": "https://news.adobe.com/en/apac/news/2026/04/adobe-opens-new-noida-office-expanding-investment-in-india-innovation",
      "sourceTitle": "Adobe newsroom",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": "https://careers.adobe.com/us/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "agilent-hyd",
      "company": "Agilent Technologies",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Biopharma capability and research",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://careers.agilent.com/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "airbus-blr",
      "company": "Airbus",
      "industry": "Aerospace",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2026-03",
      "year": 2026,
      "hq": "France",
      "focus": "Engineering for aircraft and helicopter systems",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New campus; second-largest digital centre outside Europe",
      "sourceUrl": "https://www.newsonair.gov.in/nation-has-emerged-as-a-hub-for-global-capability-centers-says-civil-aviation-minister-ram-mohan-naidu",
      "sourceTitle": "News On AIR",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": "https://www.airbus.com/en/careers",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "albertsons-blr",
      "company": "Albertsons",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "United States",
      "focus": "AI and data-driven retail",
      "headcountTarget": 1000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1000,
      "jobsNote": "1,000 tech hires over 18 months",
      "sourceUrl": "https://india.entrepreneur.com/technology/india-witnesses-a-fresh-wave-of-marquee-gcc-setups-and/495843",
      "sourceTitle": "Entrepreneur India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "alight-chennai",
      "company": "Alight Solutions",
      "industry": "Professional Services",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "United States",
      "focus": "HR and financial solutions technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://india.entrepreneur.com/technology/india-witnesses-a-fresh-wave-of-marquee-gcc-setups-and/495843",
      "sourceTitle": "Entrepreneur India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://careers.alight.com/us/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "alvarez-marsal-ggn",
      "company": "Alvarez & Marsal",
      "industry": "Professional Services",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Consulting delivery",
      "headcountTarget": 2000,
      "headcountNow": 700,
      "metricType": "Planned Hires",
      "metricValue": 2000,
      "jobsNote": "About 700 growing to ~2,000 by 2028",
      "sourceUrl": "https://www.consultancy.in/news/4032/alvarez-marsal-picks-india-for-inaugural-global-capability-center",
      "sourceTitle": "Consultancy.in",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "american-airlines-hyd",
      "company": "American Airlines",
      "industry": "Travel & Aviation",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Airline technology",
      "headcountTarget": 800,
      "headcountNow": 400,
      "metricType": "Planned Hires",
      "metricValue": 800,
      "jobsNote": "Tech workforce doubling to 800",
      "sourceUrl": "https://www.eplaneai.com/news/american-airlines-to-double-technology-workforce-in-india-to-800-employees",
      "sourceTitle": "ePlane AI",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "amex-ggn",
      "company": "American Express",
      "industry": "BFSI",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "Expansion",
      "announcementDate": "2024-05",
      "year": 2024,
      "hq": "United States",
      "focus": "Technology and operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Campus of nearly 1 million sq ft",
      "sourceUrl": "https://www.indiaretailing.com/2024/05/02/american-express-to-open-one-million-sq-ft-campus-in-gurugram",
      "sourceTitle": "India Retailing",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.americanexpress.com/en-us/careers/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "amgen-hyd",
      "company": "Amgen",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025-02",
      "year": 2025,
      "hq": "United States",
      "focus": "Technology and innovation, digital health",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "$200 million investment",
      "sourceUrl": "https://www.business-standard.com/technology/tech-news/amgen-opens-200-million-technology-and-innovation-hub-in-hyderabad-125022401027_1.html",
      "sourceTitle": "Business Standard",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://careers.amgen.com/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "aperam-hyd",
      "company": "Aperam",
      "industry": "Industrial & Automotive",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "Luxembourg",
      "focus": "Digital transformation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.cxodigitalpulse.com/aperam-opens-global-capability-center-in-hyderabad-to-accelerate-digital-transformation/",
      "sourceTitle": "CXO Digital Pulse",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "apple-chennai",
      "company": "Apple",
      "industry": "Technology & Software",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2026-01",
      "year": 2026,
      "hq": "United States",
      "focus": "Corporate GCC entry",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Leased a dedicated facility",
      "sourceUrl": "https://www.aniisu.com/wp-content/uploads/2026/02/GCC-Voices-Monthly-Roundup-January-February-2026.pdf",
      "sourceTitle": "GCC Voices roundup (Jan–Feb 2026)",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://jobs.apple.com/en-in/search?location=india-INDC",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "applied-materials-chennai",
      "company": "Applied Materials",
      "industry": "Semiconductors",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2024-09",
      "year": 2024,
      "hq": "United States",
      "focus": "AI and data science for chip equipment",
      "headcountTarget": 500,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 500,
      "jobsNote": "500+ technical jobs planned",
      "sourceUrl": "https://cxotoday.com/press-release/applied-materials-teams-with-tamil-nadu-government-to-establish-center-of-excellence-in-ai-and-data-science-for-semiconductor-manufacturing-and-equipment/",
      "sourceTitle": "CXOToday",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "arch-capital-pune",
      "company": "Arch Capital Group",
      "industry": "BFSI",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "Bermuda",
      "focus": "Analytics, technology, insurance operations",
      "headcountTarget": null,
      "headcountNow": 350,
      "metricType": "Reported Headcount",
      "metricValue": 350,
      "jobsNote": "350+ across Pune and Thiruvananthapuram",
      "sourceUrl": "https://www.businesswire.com/news/home/20250731766626/en/Arch-Capital-Group-Opens-Global-Capabilities-Centers-in-India",
      "sourceTitle": "Business Wire",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "arch-capital-tvm",
      "company": "Arch Capital Group",
      "industry": "BFSI",
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "eventType": "New GCC",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "Bermuda",
      "focus": "Analytics, technology, insurance operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Headcount shared with Pune centre",
      "sourceUrl": "https://www.businesswire.com/news/home/20250731766626/en/Arch-Capital-Group-Opens-Global-Capabilities-Centers-in-India",
      "sourceTitle": "Business Wire",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "arctic-wolf-blr",
      "company": "Arctic Wolf",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2024-10",
      "year": 2024,
      "hq": "United States",
      "focus": "Cybersecurity R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Largest global R&D hub",
      "sourceUrl": "https://cxotoday.com/media-coverage/arctic-wolf-makes-bengaluru-its-largest-global-rd-hub/",
      "sourceTitle": "CXOToday",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "astera-labs-hyd",
      "company": "Astera Labs",
      "industry": "Semiconductors",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Engineering and product development",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.deccanchronicle.com/amp/southern-states/telangana/hyderabad-becomes-fastest-growing-gcc-hub-in-india-1973127",
      "sourceTitle": "Deccan Chronicle",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "astrazeneca-chennai",
      "company": "AstraZeneca",
      "industry": "Pharma & Life Sciences",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2024-07",
      "year": 2024,
      "hq": "United Kingdom",
      "focus": "Global innovation and technology centre",
      "headcountTarget": 1300,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1300,
      "jobsNote": "₹250 crore; 1,300 jobs",
      "sourceUrl": "https://www.biospectrumindia.com/news/86/24867/astrazeneca-to-invest-rs-250-cr-to-grow-global-innovation-and-technology-centre-in-india.html",
      "sourceTitle": "BioSpectrum India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://careers.astrazeneca.com/location/india-jobs/7684/1269750/2",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "atlassian-blr",
      "company": "Atlassian",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "Australia",
      "focus": "Product R&D",
      "headcountTarget": 1000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1000,
      "jobsNote": "New R&D centre for up to 1,000",
      "sourceUrl": "https://www.peoplematters.in/news/business/atlassian-expands-its-india-footprint-with-new-randd-centre-in-bengaluru-43334",
      "sourceTitle": "People Matters",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.atlassian.com/company/careers",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "barclays-chennai",
      "company": "Barclays",
      "industry": "BFSI",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United Kingdom",
      "focus": "Global service centre",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://flexiple.com/global-capability-centers/list-of-global-capability-centers-in-chennai",
      "sourceTitle": "Flexiple",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://search.jobs.barclays/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "basf-hyd",
      "company": "BASF",
      "industry": "Chemicals",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-05",
      "year": 2026,
      "hq": "Germany",
      "focus": "Global Digital Hub and Global Services Hub",
      "headcountTarget": 3000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 3000,
      "jobsNote": "About 3,000 jobs across two hubs",
      "sourceUrl": "https://test.uniindia.com/basf-to-set-up-two-gccs-in-hyderabad-3-000-jobs-to-be-created/south/news/3833304.html",
      "sourceTitle": "UNI",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.basf.com/global/en/careers",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "bdo-noida",
      "company": "BDO (BDO EDGE)",
      "industry": "Professional Services",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "Belgium",
      "focus": "Audit, advisory and tax delivery for the BDO network",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.bdo.in/en-gb/news/2024/bdo-india-to-set-up-bdo-edge,-an-india-based-gcc-in-noida",
      "sourceTitle": "BDO India",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "best-buy-blr",
      "company": "Best Buy",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "AI, data platforms, digital products",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Largest global tech hub",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://jobs.bestbuy.com/bby",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "blupace-hyd",
      "company": "Blupace Tech",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United Kingdom",
      "focus": "Technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.cxodigitalpulse.com/blupace-tech-launches-global-capability-centre-in-hyderabad/",
      "sourceTitle": "CXO Digital Pulse",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "bms-group-mumbai",
      "company": "BMS Group",
      "industry": "BFSI",
      "city": "Mumbai",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United Kingdom",
      "focus": "AI and analytics for insurance broking",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.bmsgroup.com/en/news/bms-opens-global-capability-centre-in-mumbai",
      "sourceTitle": "BMS Group",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "bmw-techworks-pune",
      "company": "BMW TechWorks India",
      "industry": "Industrial & Automotive",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2024-10",
      "year": 2024,
      "hq": "Germany",
      "focus": "Automotive software and business IT",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "JV with Tata Technologies; also Bengaluru and Chennai",
      "sourceUrl": "https://www.press.bmwgroup.com/global/article/detail/T0445452EN/bmw-group-and-tata-technologies-establish-bmw-techworks-india",
      "sourceTitle": "BMW Group",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "bnp-paribas-thane",
      "company": "BNP Paribas",
      "industry": "BFSI",
      "city": "Thane",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "France",
      "focus": "Banking operations and technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Large office lease at Hiranandani Centaurus",
      "sourceUrl": "https://housiey.com/blogs/?p=7707",
      "sourceTitle": "Housiey",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "boeing-blr",
      "company": "Boeing",
      "industry": "Aerospace",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2024-01",
      "year": 2024,
      "hq": "United States",
      "focus": "Engineering and technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Largest campus outside the US",
      "sourceUrl": "https://www.pmindia.gov.in/en/news_updates/pm-inaugurates-new-state-of-the-art-boeing-india-engineering-technology-center-campus-in-bengaluru-karnataka/",
      "sourceTitle": "PM India",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": "https://jobs.boeing.com/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "boston-sci-pune",
      "company": "Boston Scientific",
      "industry": "Healthcare & MedTech",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2022-03",
      "year": 2022,
      "hq": "United States",
      "focus": "Medical device R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Second India R&D centre",
      "sourceUrl": "https://biospectrumindia.com/news/97/20896/boston-scientific-expands-footprint-in-india-with-second-rd-centre.html",
      "sourceTitle": "BioSpectrum India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "bp-blr",
      "company": "bp",
      "industry": "Energy",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025-05",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Energy engineering and transition",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Engineering hub expanded with Quest Global",
      "sourceUrl": "https://www.questglobal.com/news/press-releases/quest-global-bp-collaborate-to-further-energy-innovation/",
      "sourceTitle": "Quest Global",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "bp-pune",
      "company": "bp",
      "industry": "Energy",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United Kingdom",
      "focus": "AI, engineering, energy innovation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Now a global hub",
      "sourceUrl": "https://ssfglobal.in/industry_actions/ssf-global-news/",
      "sourceTitle": "SSF Global",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "bristol-myers-hyd",
      "company": "Bristol Myers Squibb",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "United States",
      "focus": "Drug development, IT, digital",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "₹828 crore innovation hub",
      "sourceUrl": "https://www.siasat.com/bristol-myers-squibb-launches-rs-828-cr-innovation-hub-in-hyderabad-2983196/amp/",
      "sourceTitle": "Siasat",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://careers.bms.com/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "candescent-hyd",
      "company": "Candescent",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026-04",
      "year": 2026,
      "hq": "United States",
      "focus": "Digital banking engineering, real-time payments, AI",
      "headcountTarget": 1000,
      "headcountNow": 280,
      "metricType": "Planned Hires",
      "metricValue": 1000,
      "jobsNote": "About 280 now; scaling to 1,000",
      "sourceUrl": "https://www.uniindia.com/us-based-candescent-opens-hyderabad-tech-centre-strengthens-india-as-global-engineering-hub/business-economy/news/3812303.html",
      "sourceTitle": "UNI",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "care-adhd-blr",
      "company": "Care ADHD",
      "industry": "Healthcare & MedTech",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025-12",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Digital mental health technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First India GCC",
      "sourceUrl": "https://www.indianpharmapost.com/healthcare/lite/care-adhd-opens-its-first-global-capability-centre-in-india-18634",
      "sourceTitle": "Indian Pharma Post",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "carlsberg-ggn",
      "company": "Carlsberg",
      "industry": "Consumer & Retail",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Denmark",
      "focus": "Managed IT, infrastructure ops, application support",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First GCC; a Hyderabad centre followed",
      "sourceUrl": "https://analyticsindiamag.com/ai-trends/top-10-new-gccs-in-india-to-watch-in-2025",
      "sourceTitle": "Analytics India Magazine",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "carlsberg-hyd",
      "company": "Carlsberg",
      "industry": "Consumer & Retail",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Denmark",
      "focus": "Technology, managed services, automation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Opened a day after the Gurugram centre",
      "sourceUrl": "https://analyticsindiamag.com/ai-trends/top-10-new-gccs-in-india-to-watch-in-2025",
      "sourceTitle": "Analytics India Magazine",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "caterpillar-chennai",
      "company": "Caterpillar",
      "industry": "Industrial & Automotive",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2024-09",
      "year": 2024,
      "hq": "United States",
      "focus": "Engineering and manufacturing",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "₹500 crore expansion MoU",
      "sourceUrl": "https://www.theweek.in/wire-updates/national/2024/09/12/mds15-tn-cm-caterpillar-mou.html",
      "sourceTitle": "The Week",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "cba-blr",
      "company": "Commonwealth Bank of Australia",
      "industry": "BFSI",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Australia",
      "focus": "Technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "244 more roles moved to Bengaluru",
      "sourceUrl": "https://www.bankingday.com/cba-to-send-more-jobs-to-bangalore",
      "sourceTitle": "Banking Day",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "celonis-blr",
      "company": "Celonis",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "Germany",
      "focus": "AI-driven process automation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "chevron-blr",
      "company": "Chevron",
      "industry": "Energy",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2024-08",
      "year": 2024,
      "hq": "United States",
      "focus": "Engineering and digital (ENGINE hub)",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "About $1 billion investment",
      "sourceUrl": "https://allthingstalent.org/chevron-to-establish-1-billion-global-capability-centre-in-bengaluru/2024/08/22/",
      "sourceTitle": "All Things Talent",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://careers.chevron.com/india",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "chubb-chennai",
      "company": "Chubb",
      "industry": "BFSI",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2026-07",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "Insurance platform development",
      "headcountTarget": 220,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 220,
      "jobsNote": "220 jobs; MoU with Tamil Nadu",
      "sourceUrl": "https://www.dtnext.in/news/tamilnadu/global-firms-line-up-investments-in-tn-to-generate-over-2900-jobs",
      "sourceTitle": "DT Next",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "cibc-hyd",
      "company": "CIBC",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "Canada",
      "focus": "Operations, technology, risk",
      "headcountTarget": 2000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 2000,
      "jobsNote": "2,000 jobs planned",
      "sourceUrl": "https://www.thepeoplesboard.com/?p=19007",
      "sourceTitle": "The People's Board",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "citizens-hyd",
      "company": "Citizens Financial Group",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "United States",
      "focus": "Technology and operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Built with Cognizant",
      "sourceUrl": "https://www.siasat.com/citizens-and-cognizant-launch-hyderabad-gcc-at-kokapet-gmr-infobahn-it-building-3207860/",
      "sourceTitle": "Siasat",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "cloudangles-hyd",
      "company": "Cloudangles",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-08",
      "year": 2026,
      "hq": "United States",
      "focus": "Engineering",
      "headcountTarget": 1000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1000,
      "jobsNote": "1,000 engineers planned over two years",
      "sourceUrl": "https://www.etvbharat.com/en/state/cloudangles-launches-global-engineering-centre-in-hyderabad-enn26081403341",
      "sourceTitle": "ETV Bharat",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "cnh-ggn",
      "company": "CNH Industrial",
      "industry": "Industrial & Automotive",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "New GCC",
      "announcementDate": "2022-03",
      "year": 2022,
      "hq": "United Kingdom",
      "focus": "Product development, simulation, digital",
      "headcountTarget": null,
      "headcountNow": 100,
      "metricType": "Reported Headcount",
      "metricValue": 100,
      "jobsNote": "Technology centre",
      "sourceUrl": "https://equipmentindia.com/construction-machinery-news/top-equipment-news/webexclusive/CNH-Industrial-inaugurates-technology-centre-in-Gurugram/127902",
      "sourceTitle": "Equipment India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "codec-blr",
      "company": "Codec",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "AI, cloud infrastructure, application modernisation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Set up with Trigent; also in Hyderabad",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "cohere-health-hyd",
      "company": "Cohere Health",
      "industry": "Healthcare & MedTech",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "AI/ML engineering, clinical intelligence, analytics",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Scaling into a centre of excellence",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "columbia-group-navimumbai",
      "company": "Columbia Group",
      "industry": "Logistics",
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026-08",
      "year": 2026,
      "hq": "Cyprus",
      "focus": "Ship management operations and digital services",
      "headcountTarget": null,
      "headcountNow": 220,
      "metricType": "Reported Headcount",
      "metricValue": 220,
      "jobsNote": "20,000 sq ft at Mindspace",
      "sourceUrl": "https://news.outsourceaccelerator.com/columbia-group-india-gcc/",
      "sourceTitle": "Outsource Accelerator",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "costco-hyd",
      "company": "Costco",
      "industry": "Consumer & Retail",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "United States",
      "focus": "Digital platforms, data, AI, supply chain systems",
      "headcountTarget": 1000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1000,
      "jobsNote": "About 1,000 planned",
      "sourceUrl": "https://finance.yahoo.com/news/us-retail-giant-costco-set-180417937.html",
      "sourceTitle": "Yahoo Finance",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.costco.com/f/-/careers",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "cummins-pune",
      "company": "Cummins",
      "industry": "Industrial & Automotive",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Enterprise IT",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First IT GCC",
      "sourceUrl": "https://www.autocarpro.in/news/cummins-india-opens-its-first-it-gcc-in-pune-121510",
      "sourceTitle": "Autocar Professional",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "daikin-ggn",
      "company": "Daikin",
      "industry": "Industrial & Automotive",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "Japan",
      "focus": "GCC operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Set up with EY",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "daimler-truck-blr",
      "company": "Daimler Truck",
      "industry": "Industrial & Automotive",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2022",
      "year": 2022,
      "hq": "Germany",
      "focus": "Vehicle engineering, software, electrification",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Innovation and development centre",
      "sourceUrl": "https://commercialvehicle.in/daimler-truck-announces-launch-of-innovation-development-center-in-india/",
      "sourceTitle": "CommercialVehicle.in",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "damac-noida",
      "company": "DAMAC Group",
      "industry": "Real Estate",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "UAE",
      "focus": "Finance, sales, digital transformation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Pune expansion planned",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "danaher-blr",
      "company": "Danaher",
      "industry": "Pharma & Life Sciences",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Global capability and R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://biospectrumindia.com/news/104/28472/danaher-expands-global-capability-and-rd-presence-in-bengaluru.html",
      "sourceTitle": "BioSpectrum India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "dazn-hyd",
      "company": "DAZN",
      "industry": "Media & Entertainment",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Sports operations, engineering, data science, AI",
      "headcountTarget": 3000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 3000,
      "jobsNote": "3,000+ by end of 2026",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "dbs-hyd",
      "company": "DBS Bank",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Singapore",
      "focus": "Technology",
      "headcountTarget": 2000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 2000,
      "jobsNote": "Innovation hub growing to 2,000 engineers",
      "sourceUrl": "https://asianprivatebanker.com/technology/dbs-bolster-india-based-innovation-hub-2000-engineers/",
      "sourceTitle": "Asian Private Banker",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.dbs.com/careers/default.page",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "deepwatch-blr",
      "company": "Deepwatch",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "AI threat detection, product development",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "depuy-synthes-blr",
      "company": "DePuy Synthes",
      "industry": "Healthcare & MedTech",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Orthopaedics technology",
      "headcountTarget": 500,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 500,
      "jobsNote": "500 hires planned",
      "sourceUrl": "https://www.indianpharmapost.com/news/depuy-synthes-to-set-up-bengaluru-gcc-hire-500-professionals-21289",
      "sourceTitle": "Indian Pharma Post",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "deutsche-boerse-hyd",
      "company": "Deutsche Börse",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025-11",
      "year": 2025,
      "hq": "Germany",
      "focus": "Technology and operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.etvbharat.com/en/business/deutsche-borse-to-open-global-capability-centre-in-hyderabad-enn25110404864",
      "sourceTitle": "ETV Bharat",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "diageo-blr",
      "company": "Diageo",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Business services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Diageo Business Services India",
      "sourceUrl": "https://drinks-insight-network.com/news/newsdiageo-launches-services-centre-in-india-5035305",
      "sourceTitle": "Drinks Insight Network",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "disney-chennai",
      "company": "Disney",
      "industry": "Media & Entertainment",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Engineering insourcing",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://flexiple.com/global-capability-centers/list-of-global-capability-centers-in-chennai",
      "sourceTitle": "Flexiple",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.disneycareers.com/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "doordash-hyd",
      "company": "DoorDash",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-10",
      "year": 2026,
      "hq": "United States",
      "focus": "Customer support, administration, operations",
      "headcountTarget": 3000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 3000,
      "jobsNote": "3,000 over two years; 500 in phase one",
      "sourceUrl": "https://www.peoplematters.in/news/business/doordash-opens-hyderabad-gcc-plans-to-create-3000-jobs-in-india-52474",
      "sourceTitle": "People Matters",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "dover-chennai",
      "company": "Dover",
      "industry": "Industrial & Automotive",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Global innovation labs",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://flexiple.com/global-capability-centers/list-of-global-capability-centers-in-chennai",
      "sourceTitle": "Flexiple",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "dp-world-navimumbai",
      "company": "DP World",
      "industry": "Logistics",
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2024-05",
      "year": 2024,
      "hq": "UAE",
      "focus": "Logistics technology and services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Fourth India GCC; 1.5 lakh sq ft",
      "sourceUrl": "https://indiaseatradenews.com/dp-world-acquires-1-5-lakh-sq-ft-office-space-in-navi-mumbai/",
      "sourceTitle": "India Seatrade News",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "eaton-pune",
      "company": "Eaton",
      "industry": "Industrial & Automotive",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2025-10",
      "year": 2025,
      "hq": "Ireland",
      "focus": "Engineering and innovation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New centre of excellence",
      "sourceUrl": "https://www.theweek.in/wire-updates/business/2025/10/13/dcm87-biz-mh-eaton-centre.html",
      "sourceTitle": "The Week (PTI)",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "ebay-blr",
      "company": "eBay",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "E-commerce engineering",
      "headcountTarget": 300,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 300,
      "jobsNote": "65,000 sq ft; 300+ engineers",
      "sourceUrl": "https://analyticsindiamag.com/ai-trends/top-10-new-gccs-in-india-to-watch-in-2025",
      "sourceTitle": "Analytics India Magazine",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://careers.ebayinc.com/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "eisai-vizag",
      "company": "Eisai",
      "industry": "Pharma & Life Sciences",
      "city": "Visakhapatnam",
      "state": "Andhra Pradesh",
      "eventType": "New GCC",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "Japan",
      "focus": "Standardising global IT",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.nasdaq.com/press-release/eisai-established-global-capability-centre-visakhapatnam-india-standardize-global-it",
      "sourceTitle": "Nasdaq (press release)",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "eli-lilly-hyd",
      "company": "Eli Lilly",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "AI, automation, software product engineering, cloud",
      "headcountTarget": 1500,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1500,
      "jobsNote": "Up to 1,500 by 2026–27",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "entain-hyd",
      "company": "Entain",
      "industry": "Media & Entertainment",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Platform architecture, AI personalisation, trading engines",
      "headcountTarget": null,
      "headcountNow": 3400,
      "metricType": "Reported Headcount",
      "metricValue": 3400,
      "jobsNote": "3,400 staff; rebranded from Ivy",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "evernorth-hyd",
      "company": "Evernorth (Cigna)",
      "industry": "Healthcare & MedTech",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Health services technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First global innovation hub",
      "sourceUrl": "https://www.digitalhealthnews.com/cigna-s-evernorth-launches-first-global-innovation-hub-in-hyderabad",
      "sourceTitle": "Digital Health News",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "experian-hyd",
      "company": "Experian",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Ireland",
      "focus": "Global technology delivery",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Office space doubled",
      "sourceUrl": "https://www.experianplc.com/newsroom/press-releases/2025/experian-expands-global-innovation-centre---powers-global-tech-d",
      "sourceTitle": "Experian",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "ferguson-blr",
      "company": "Ferguson",
      "industry": "Industrial & Automotive",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "United States",
      "focus": "Software engineering, data, digital transformation",
      "headcountTarget": null,
      "headcountNow": 1000,
      "metricType": "Reported Headcount",
      "metricValue": 1000,
      "jobsNote": "About 1,000 initially",
      "sourceUrl": "https://analyticsindiamag.com/ai-trends/top-10-new-gccs-in-india-to-watch-in-2025",
      "sourceTitle": "Analytics India Magazine",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "ford-coimbatore",
      "company": "Ford",
      "industry": "Industrial & Automotive",
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2026-07",
      "year": 2026,
      "hq": "United States",
      "focus": "Data analytics, business transformation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New site beyond Chennai",
      "sourceUrl": "https://community.verified.realestate/article/the-evolution-of-indias-gccs-from-cost-centres-to-global-engineering-powerhouses/",
      "sourceTitle": "Verified.RealEstate",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.careers.ford.com/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "ge-aerospace-blr",
      "company": "GE Aerospace",
      "industry": "Aerospace",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Engineering and AI",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Investing in AI talent",
      "sourceUrl": "https://www.eplaneai.com/news/ge-aerospace-invests-in-ai-talent-and-innovation-in-india",
      "sourceTitle": "ePlane AI",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "generac-pune",
      "company": "Generac",
      "industry": "Industrial & Automotive",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Engineering and technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First India GCC",
      "sourceUrl": "https://www.constructionworld.in/amp/latest-construction-news/real-estate-news/generac-opens-first-india-gcc-in-pune/92945",
      "sourceTitle": "Construction World",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "general-mills-pune",
      "company": "General Mills",
      "industry": "Consumer & Retail",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2025-10",
      "year": 2025,
      "hq": "United States",
      "focus": "Digital and technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://india.entrepreneur.com/?p=89626",
      "sourceTitle": "Entrepreneur India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "gi-outsourcing-hyd",
      "company": "GI Outsourcing",
      "industry": "Professional Services",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-02",
      "year": 2026,
      "hq": "United Kingdom",
      "focus": "Accounting, compliance and financial services",
      "headcountTarget": 200,
      "headcountNow": 50,
      "metricType": "Planned Hires",
      "metricValue": 200,
      "jobsNote": "50 at launch; about 200 by 2028",
      "sourceUrl": "https://builtin.com/articles/gi-outsourcing-launches-global-capability-center-in-hyderabad-20260204",
      "sourceTitle": "Built In",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "goldman-hyd",
      "company": "Goldman Sachs",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2023",
      "year": 2023,
      "hq": "United States",
      "focus": "Engineering and operations",
      "headcountTarget": 2000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 2000,
      "jobsNote": "About 2,000 employees planned",
      "sourceUrl": "https://www.peoplematters.in/news/business/goldman-sachs-to-strengthen-hyderabads-bfsi-sector-with-new-office-and-2000-employees-38814",
      "sourceTitle": "People Matters",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.goldmansachs.com/careers/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "google-blr",
      "company": "Google (Alphabet)",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2026-01",
      "year": 2026,
      "hq": "United States",
      "focus": "Engineering",
      "headcountTarget": 20000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 20000,
      "jobsNote": "About 20,000 planned",
      "sourceUrl": "https://www.aniisu.com/wp-content/uploads/2026/02/GCC-Voices-Monthly-Roundup-January-February-2026.pdf",
      "sourceTitle": "GCC Voices roundup (Jan–Feb 2026)",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.google.com/about/careers/applications/locations/india/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "guidewire-blr",
      "company": "Guidewire Software",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "United States",
      "focus": "Product engineering, SaaS",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Also in Chennai",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "hapag-lloyd-chennai",
      "company": "Hapag-Lloyd",
      "industry": "Logistics",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2023-11",
      "year": 2023,
      "hq": "Germany",
      "focus": "Maritime software",
      "headcountTarget": 400,
      "headcountNow": 180,
      "metricType": "Planned Hires",
      "metricValue": 400,
      "jobsNote": "180 at launch; 300–400 planned",
      "sourceUrl": "https://indiaseatradenews.com/hapag-lloyd-opens-new-technology-center-in-india/",
      "sourceTitle": "India Seatrade News",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "hapag-lloyd-mumbai",
      "company": "Hapag-Lloyd",
      "industry": "Logistics",
      "city": "Mumbai",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2022-11",
      "year": 2022,
      "hq": "Germany",
      "focus": "Shipping operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Global Service Centre moved to new office",
      "sourceUrl": "https://www.hapag-lloyd.com/fr/company/about-us/newsletter/2022/11/gsc-mumbai-inaugurates-new-office-.html",
      "sourceTitle": "Hapag-Lloyd",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "hartford-hyd",
      "company": "The Hartford",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Insurance technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First India tech centre",
      "sourceUrl": "https://uatcdn.angelone.in/news/global-market/us-insurer-the-hartford-launches-first-india-tech-centre-in-hyderabad",
      "sourceTitle": "Angel One",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.thehartford.com/careers",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "hca-hyd",
      "company": "HCA Healthcare",
      "industry": "Healthcare & MedTech",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025-09",
      "year": 2025,
      "hq": "United States",
      "focus": "Hospital operations, healthcare technology",
      "headcountTarget": 3000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 3000,
      "jobsNote": "Hiring 3,000 by end of 2026",
      "sourceUrl": "https://www.thepeoplesboard.com/?p=10949",
      "sourceTitle": "The People's Board",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "heineken-hyd",
      "company": "Heineken",
      "industry": "Consumer & Retail",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-04",
      "year": 2026,
      "hq": "Netherlands",
      "focus": "Multifunctional business services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First multifunctional GCC in Asia",
      "sourceUrl": "https://test.uniindia.com/news/south/tech-telangana-lead-heineken/3826659.html",
      "sourceTitle": "UNI",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "infineon-ahd",
      "company": "Infineon Technologies",
      "industry": "Semiconductors",
      "city": "Ahmedabad (GIFT City)",
      "state": "Gujarat",
      "eventType": "New GCC",
      "announcementDate": "2025-03",
      "year": 2025,
      "hq": "Germany",
      "focus": "Semiconductor design and engineering",
      "headcountTarget": null,
      "headcountNow": 400,
      "metricType": "Reported Headcount",
      "metricValue": 400,
      "jobsNote": "About 400 engineers",
      "sourceUrl": "https://yourstory.com/enterprise-story/2025/03/infineon-technologies-opens-gcc-in-ahmedabad",
      "sourceTitle": "YourStory",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "inovalon-hyd",
      "company": "Inovalon",
      "industry": "Healthcare & MedTech",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Health tech software",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "India development centre",
      "sourceUrl": "https://biospectrumindia.com/news/95/21926/health-tech-firm-inovalons-india-development-centre-opens-in-hyderabad.html",
      "sourceTitle": "BioSpectrum India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "insight-global-hyd",
      "company": "Insight Global",
      "industry": "Professional Services",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Staffing and IT services delivery",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Second India delivery centre",
      "sourceUrl": "https://insightglobal.com/news/insight-global-announces-plans-for-second-delivery-center-in-hyderabad/",
      "sourceTitle": "Insight Global",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "intuitive-blr",
      "company": "Intuitive",
      "industry": "Healthcare & MedTech",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Surgical robotics technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://medtechspectrum.com/news/1/23514/surgical-robotics-pioneer-intuitive-opens-global-capability-centre-in-bengaluru-india.html",
      "sourceTitle": "Medtech Spectrum",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "invoicecloud-hyd",
      "company": "InvoiceCloud",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Payments software",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.deccanchronicle.com/amp/southern-states/telangana/hyderabad-becomes-fastest-growing-gcc-hub-in-india-1973127",
      "sourceTitle": "Deccan Chronicle",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "jaggaer-hyd",
      "company": "JAGGAER",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025-09",
      "year": 2025,
      "hq": "United States",
      "focus": "AI-powered procurement software",
      "headcountTarget": 500,
      "headcountNow": 180,
      "metricType": "Planned Hires",
      "metricValue": 500,
      "jobsNote": "180 at launch; 500 planned",
      "sourceUrl": "https://www.peoplematters.in/news/business/us-firm-jaggaer-opens-hyderabad-gcc-to-hire-up-to-500-staff-43366",
      "sourceTitle": "People Matters",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "jll-hyd",
      "company": "JLL",
      "industry": "Real Estate",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-08",
      "year": 2026,
      "hq": "United States",
      "focus": "Global business services and technology",
      "headcountTarget": 1600,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1600,
      "jobsNote": "120,000 sq ft; scaling to 1,600",
      "sourceUrl": "https://www.cxodigitalpulse.com/jll-opens-global-capability-centre-in-hyderabad-plans-to-scale-workforce-to-1600/",
      "sourceTitle": "CXO Digital Pulse",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "jnj-hyd",
      "company": "Johnson & Johnson",
      "industry": "Healthcare & MedTech",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Global healthcare operations, digital technology, enterprise support",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "jpmorgan-mumbai",
      "company": "JPMorgan Chase",
      "industry": "BFSI",
      "city": "Mumbai",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2025-12",
      "year": 2025,
      "hq": "United States",
      "focus": "Global technology and operations hub",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "About 20 lakh sq ft; Asia's largest GCC",
      "sourceUrl": "https://techstory.in/jp-morgan-expands-india-presence-with-massive-20-lakh-sq-ft-global-hub-in-mumbai/",
      "sourceTitle": "TechStory",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.jpmorganchase.com/careers",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "kimberly-clark-blr",
      "company": "Kimberly-Clark",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Digital technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Global Digital Technology Centre",
      "sourceUrl": "https://www.thenewsminute.com/amp/story/atom/kimberly-clark-open-global-digital-technology-centre-bengaluru-97534",
      "sourceTitle": "The News Minute",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "kla-chennai",
      "company": "KLA",
      "industry": "Semiconductors",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Semiconductor process control",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://flexiple.com/global-capability-centers/list-of-global-capability-centers-in-chennai",
      "sourceTitle": "Flexiple",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lexitas-chennai",
      "company": "Lexitas",
      "industry": "Professional Services",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2026-09",
      "year": 2026,
      "hq": "United States",
      "focus": "R&D, data operations, finance, IT, AI innovation hub",
      "headcountTarget": 100,
      "headcountNow": 60,
      "metricType": "Planned Hires",
      "metricValue": 100,
      "jobsNote": "About 60 now; nearly 100 by end of 2026",
      "sourceUrl": "https://macaubusiness.com/lexitas-expands-global-operations-with-india-global-capability-center-ai-innovation-hub-and-strategic-operations-center-in-a-new-facility/",
      "sourceTitle": "Macau Business",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lg-noida",
      "company": "LG Electronics",
      "industry": "Consumer Electronics",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "South Korea",
      "focus": "R&D",
      "headcountTarget": 500,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 500,
      "jobsNote": "About 500 direct jobs; ₹1,000 crore",
      "sourceUrl": "https://flexiple.com/global-capability-centers/list-of-global-capability-centers-in-delhi-ncr",
      "sourceTitle": "Flexiple",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "linde-wiemann-ggn",
      "company": "Linde-Wiemann",
      "industry": "Industrial & Automotive",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "New GCC",
      "announcementDate": "2026-07",
      "year": 2026,
      "hq": "Germany",
      "focus": "ERP, BI, finance, sales and supply chain",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Built and run by Primus Partners",
      "sourceUrl": "https://businessnewsthisweek.com/news/gurugram-emerges-as-indias-next-global-capability-centre-hub-as-primus-partners-expands-into-gcc-build-operate-services/",
      "sourceTitle": "Business News This Week",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lloyds-hyd",
      "company": "Lloyds Banking Group",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "United Kingdom",
      "focus": "Technology",
      "headcountTarget": 600,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 600,
      "jobsNote": "600 tech hires planned",
      "sourceUrl": "https://www.peoplematters.in/news/economy-policy/lloyds-banking-group-to-hire-600-techies-for-its-technology-centre-in-hyderabad-39357",
      "sourceTitle": "People Matters",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lloyds-list-chennai",
      "company": "Lloyd's List Intelligence",
      "industry": "Logistics",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2025-11",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Maritime data and intelligence",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.dtnext.in/news/chennai/lloyds-list-intelligence-sets-up-gcc-in-chennai-854047",
      "sourceTitle": "DT Next",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lonza-hyd",
      "company": "Lonza",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-03",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "Life sciences business services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://biovoicenews.com/lonza-selects-hyderabad-as-new-gcc-location-reinforces-telanganas-global-life-sciences-leadership/",
      "sourceTitle": "BioVoice News",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "loreal-hyd",
      "company": "L'Oréal",
      "industry": "Consumer & Retail",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "France",
      "focus": "Beauty tech hub",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First India GCC",
      "sourceUrl": "https://kpiasacademy.com/hyderabad-gcc-hub/",
      "sourceTitle": "KP IAS Academy",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://careers.loreal.com/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lowes-blr",
      "company": "Lowe's",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Retail technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Global innovation centre",
      "sourceUrl": "https://retail4growth.com/news/lowes-inaugurates-its-global-innovation-center-in-bangalore-1390",
      "sourceTitle": "Retail4Growth",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://talent.lowes.com/us/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lpl-hyd",
      "company": "LPL Financial",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Technology, digital platforms, cybersecurity, data, risk",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Hundreds over 3–5 years",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lubrizol-pune",
      "company": "Lubrizol",
      "industry": "Chemicals",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2024-04",
      "year": 2024,
      "hq": "United States",
      "focus": "Engineering, supply chain, technology, finance",
      "headcountTarget": 200,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 200,
      "jobsNote": "200+ hires in first year",
      "sourceUrl": "https://lubesngreases.com/?p=208780",
      "sourceTitle": "Lubes'n'Greases",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "lufthansa-blr",
      "company": "Lufthansa Group",
      "industry": "Travel & Aviation",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Germany",
      "focus": "Aviation technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Set up with Infosys",
      "sourceUrl": "https://www.infosys.com/newsroom/press-releases/2025/accelerate-digital-innovation-aviation-industry.html",
      "sourceTitle": "Infosys",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "maersk-blr",
      "company": "Maersk",
      "industry": "Logistics",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Denmark",
      "focus": "Global services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New capability centre",
      "sourceUrl": "https://www.itln.in/maersk-opens-new-capability-center-in-bangalore-shipping",
      "sourceTitle": "ITLN",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "magnum-pune",
      "company": "The Magnum Ice Cream Company",
      "industry": "Consumer & Retail",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026-09",
      "year": 2026,
      "hq": "Netherlands",
      "focus": "Finance, procurement, supply chain, AI and analytics",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "67,000 sq ft",
      "sourceUrl": "https://news.magnumicecream.com/the-magnum-ice-cream-company-inaugurates-new-global-capability-centre-in-pune/",
      "sourceTitle": "Magnum Ice Cream newsroom",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "marelli-blr",
      "company": "Marelli",
      "industry": "Industrial & Automotive",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025-11",
      "year": 2025,
      "hq": "Japan",
      "focus": "Electronics, automotive lighting, propulsion",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Technical R&D centre",
      "sourceUrl": "https://autotechinsight.spglobal.com/news/5284957/marelli-opens-new-technical-r-d-center-in-india-to-enhance-automotive-technology-capabilities",
      "sourceTitle": "S&P Global AutoTechInsight",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "marriott-hyd",
      "company": "Marriott International",
      "industry": "Hospitality",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Technology, operations, shared services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First offshore GCC",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "mastercard-pune",
      "company": "Mastercard",
      "industry": "BFSI",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2024-10",
      "year": 2024,
      "hq": "United States",
      "focus": "Payments technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New tech hub",
      "sourceUrl": "https://www.mastercard.com/news/ap/en/newsroom/press-releases/en/2024/mastercard-opens-new-state-of-the-art-tech-hub-in-pune-india/",
      "sourceTitle": "Mastercard newsroom",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": "https://careers.mastercard.com/us/en/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "maximus-hyd",
      "company": "Maximus",
      "industry": "Professional Services",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Government health and human services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Second India GCC",
      "sourceUrl": "https://www.m9.news/politics/hyderabad-gcc-boom-4-new-centres-2025-update/",
      "sourceTitle": "M9 News",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "mcdonalds-hyd",
      "company": "McDonald's",
      "industry": "Consumer & Retail",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025-10",
      "year": 2025,
      "hq": "United States",
      "focus": "Global technology and operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Largest GCC outside the US",
      "sourceUrl": "https://www.aniisu.com/wp-content/uploads/2026/02/GCC-Voices-Monthly-Roundup-January-February-2026.pdf",
      "sourceTitle": "GCC Voices roundup (Jan–Feb 2026)",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "mckinsey-ggn",
      "company": "McKinsey & Company",
      "industry": "Professional Services",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Research, analytics and firm operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "McKinsey Global Capabilities & Services",
      "sourceUrl": "https://www.mckinsey.com/in/our-work/mckinsey-global-capabilities-and-services-in-india-gurugram",
      "sourceTitle": "McKinsey",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "medtronic-pune",
      "company": "Medtronic",
      "industry": "Healthcare & MedTech",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Diabetes operations, analytics, digital technology",
      "headcountTarget": 600,
      "headcountNow": 300,
      "metricType": "Planned Hires",
      "metricValue": 600,
      "jobsNote": "300+ in year one, doubling planned",
      "sourceUrl": "https://biovoicenews.com/medtronic-to-invest-50-million-over-5-years-in-new-diabetes-global-capability-centre-in-pune/",
      "sourceTitle": "BioVoice News",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.medtronic.com/en-us/about/careers.html",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "mercedes-rd-blr",
      "company": "Mercedes-Benz R&D India",
      "industry": "Industrial & Automotive",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Germany",
      "focus": "Automotive R&D and software",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Research wing expansion",
      "sourceUrl": "https://autocomponentsindia.com/mercedes-benz-expands-bengaluru-presence-with-research-wing-expansion/",
      "sourceTitle": "Auto Components India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "merck-blr",
      "company": "Merck Group",
      "industry": "Pharma & Life Sciences",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "Germany",
      "focus": "Digital, technology and enterprise operations",
      "headcountTarget": null,
      "headcountNow": 3300,
      "metricType": "Reported Headcount",
      "metricValue": 3300,
      "jobsNote": "About 3,300 at the campus",
      "sourceUrl": "https://www.cxodigitalpulse.com/?p=56882",
      "sourceTitle": "CXO Digital Pulse",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "metso-vadodara",
      "company": "Metso",
      "industry": "Industrial & Automotive",
      "city": "Vadodara",
      "state": "Gujarat",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "Finland",
      "focus": "Engineering for mining and process industries",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://india.entrepreneur.com/?p=89626",
      "sourceTitle": "Entrepreneur India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "milacron-cbe",
      "company": "Milacron",
      "industry": "Industrial & Automotive",
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2026-07",
      "year": 2026,
      "hq": "United States",
      "focus": "Engineering and innovation",
      "headcountTarget": null,
      "headcountNow": 60,
      "metricType": "Reported Headcount",
      "metricValue": 60,
      "jobsNote": "60+ engineers",
      "sourceUrl": "https://www.milacron.com/news/milacron-inaugurates-its-first-global-capability-center-in-coimbatore-india/",
      "sourceTitle": "Milacron newsroom",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "mizuho-pune",
      "company": "Mizuho Financial Group",
      "industry": "BFSI",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026-05",
      "year": 2026,
      "hq": "Japan",
      "focus": "Technology, operations, shared services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.mizuhogroup.com/americas-news/mizuho-financial-group-launches-strategic-technology-and-operations-center-in-pune",
      "sourceTitle": "Mizuho newsroom",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "msd-hyd",
      "company": "MSD",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026-09",
      "year": 2026,
      "hq": "United States",
      "focus": "AI, data, cloud, cybersecurity, software engineering",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Launched 2025, expanded 2026",
      "sourceUrl": "https://www.uniindia.com/business-economy/business-telangana-msd/175378",
      "sourceTitle": "UNI",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "multivac-hyd",
      "company": "MULTIVAC",
      "industry": "Industrial & Automotive",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025-05",
      "year": 2025,
      "hq": "Germany",
      "focus": "IT support and software development",
      "headcountTarget": 50,
      "headcountNow": 30,
      "metricType": "Planned Hires",
      "metricValue": 50,
      "jobsNote": "30+ now; about 50 by 2027",
      "sourceUrl": "https://multivac.com/gb/en/company/news/multivac-technology-solutions-india-private-ltd",
      "sourceTitle": "MULTIVAC",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "n-able-blr",
      "company": "N-able",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026-06",
      "year": 2026,
      "hq": "United States",
      "focus": "Cybersecurity",
      "headcountTarget": 150,
      "headcountNow": 100,
      "metricType": "Planned Hires",
      "metricValue": 150,
      "jobsNote": "100+ now; +50% by end of 2026",
      "sourceUrl": "https://www.hrkatha.com/?p=58057",
      "sourceTitle": "HR Katha",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "nationwide-hyd",
      "company": "Nationwide",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Insurance technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First India GCC",
      "sourceUrl": "https://gdeltcloud.com/events/nationwide-insurance-opens-its-first-india-gcc-in-hyderabad--cameoplus_d7616db2",
      "sourceTitle": "GDELT Cloud",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "natwest-blr",
      "company": "NatWest Group",
      "industry": "BFSI",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Engineering and innovation",
      "headcountTarget": 4000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 4000,
      "jobsNote": "4,000 new hires planned",
      "sourceUrl": "https://businessworld.in/article/uk-banking-giant-natwest-plans-4000-new-hires-in-bengaluru-528798",
      "sourceTitle": "BusinessWorld",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "nemetschek-hyd",
      "company": "Nemetschek Group",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025-09",
      "year": 2025,
      "hq": "Germany",
      "focus": "Construction software, AI, R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Plans to grow India operations 4–5x",
      "sourceUrl": "https://uniindia.com/nemetschek-group-launches-gcc-in-hyderabad-to-boost-construction-tech/business-economy/news/3571470.html",
      "sourceTitle": "UNI",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "nestle-hyd",
      "company": "Nestlé",
      "industry": "Consumer & Retail",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-06",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "Shared services via Nestlé Business Solutions",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Set up with Genpact",
      "sourceUrl": "https://www.sightsinplus.com/editorial/major-gcc-announcements-in-2026-set-to-create-thousands-of-jobs-in-india/",
      "sourceTitle": "Sightsinplus",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "netflix-hyd",
      "company": "Netflix",
      "industry": "Media & Entertainment",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Technology and operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.newsbytesapp.com/news/business/hyderabad-draws-197-gccs-with-43-new-centers-by-mid-2026/tldr",
      "sourceTitle": "NewsBytes",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://jobs.netflix.com/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "nike-blr",
      "company": "Nike",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Technology for Nike, Jordan and Converse",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New campus planned by FY28",
      "sourceUrl": "https://lapaasvoice.com/nike-plans-new-bengaluru-campus-by-fy28-for-nike-jordan-converse/",
      "sourceTitle": "Lapaas Voice",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://careers.nike.com/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "nokia-blr",
      "company": "Nokia",
      "industry": "Telecom",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Finland",
      "focus": "Telecom R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Eyeing GCC and research expansion",
      "sourceUrl": "https://oga-prod.angelone.in/news/market-updates/nokia-eyes-gcc-and-research-expansion-in-karnataka",
      "sourceTitle": "Angel One",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.nokia.com/careers/",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "nordex-chennai",
      "company": "Nordex",
      "industry": "Energy",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2026-07",
      "year": 2026,
      "hq": "Germany",
      "focus": "Wind turbine R&D",
      "headcountTarget": 1000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1000,
      "jobsNote": "R&D centre; MoU with Tamil Nadu",
      "sourceUrl": "https://www.dtnext.in/news/tamilnadu/global-firms-line-up-investments-in-tn-to-generate-over-2900-jobs",
      "sourceTitle": "DT Next",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "novant-hyd",
      "company": "Novant Health",
      "industry": "Healthcare & MedTech",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Hospital system operations and technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.m9.news/politics/hyderabad-gcc-boom-4-new-centres-2025-update/",
      "sourceTitle": "M9 News",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "novartis-hyd",
      "company": "Novartis",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "Global operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Largest hub outside Switzerland",
      "sourceUrl": "https://www.deccanchronicle.com/amp/southern-states/telangana/hyderabad-becomes-fastest-growing-gcc-hub-in-india-1973127",
      "sourceTitle": "Deccan Chronicle",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.novartis.com/careers",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "novo-nordisk-blr",
      "company": "Novo Nordisk",
      "industry": "Pharma & Life Sciences",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "Denmark",
      "focus": "Global business services and research",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.businesstoday.in/industry/pharma/story/novo-nordisk-bets-big-on-india-creates-new-jobs-486739-2025-07-29",
      "sourceTitle": "Business Today",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://www.novonordisk.com/careers.html",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "octave-hyd",
      "company": "Octave",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-08",
      "year": 2026,
      "hq": "International",
      "focus": "Technology and innovation",
      "headcountTarget": 2000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 2000,
      "jobsNote": "2 lakh sq ft; scaling to 2,000 engineers",
      "sourceUrl": "https://www.peoplematters.in/news/business/octave-launches-hyderabad-gcc-targets-2000-engineering-jobs-expansion-51725",
      "sourceTitle": "People Matters",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "omnicom-hyd",
      "company": "Omnicom",
      "industry": "Professional Services",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025-01",
      "year": 2025,
      "hq": "United States",
      "focus": "Marketing, data and creative services",
      "headcountTarget": 2500,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 2500,
      "jobsNote": "Fourth India centre of excellence; 2,500 planned",
      "sourceUrl": "https://telanganatoday.com/omnicom-group-to-employ-2500-people-in-hyderabad-global-generation-centre-telangana-today",
      "sourceTitle": "Telangana Today",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "payoneer-ggn",
      "company": "Payoneer",
      "industry": "BFSI",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "Expansion",
      "announcementDate": "2026-07",
      "year": 2026,
      "hq": "United States",
      "focus": "AI and payments platform",
      "headcountTarget": 300,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 300,
      "jobsNote": "Second-largest R&D hub worldwide",
      "sourceUrl": "https://www.newsbytesapp.com/news/business/payoneer-opens-gurugram-ai-rd-hub-to-hire-300-engineers/tldr",
      "sourceTitle": "NewsBytes",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "pepsico-hyd",
      "company": "PepsiCo",
      "industry": "Consumer & Retail",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Global business services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "₹35 crore office lease in Kokapet",
      "sourceUrl": "https://business-news-today.com/pepsicos-rs-35cr-hyderabad-lease-deepens-kokapets-gcc-office-momentum/",
      "sourceTitle": "Business News Today",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.pepsicojobs.com/main/jobs?location=India",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "pfizer-chennai",
      "company": "Pfizer",
      "industry": "Pharma & Life Sciences",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2022",
      "year": 2022,
      "hq": "United States",
      "focus": "Drug development",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Asia's first global drug development centre",
      "sourceUrl": "https://www.biospectrumindia.com/news/95/21172/pfizer-opens-global-drug-development-centre-in-chennai.html",
      "sourceTitle": "BioSpectrum India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "philips-blr",
      "company": "Philips",
      "industry": "Healthcare & MedTech",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2023-11",
      "year": 2023,
      "hq": "Netherlands",
      "focus": "Health technology R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New innovation campus in Yelahanka",
      "sourceUrl": "https://www.philips.co.in/about/news-and-insights/press-release/philips-inaugurates-new-innovation-campus-in-yelahanka-bengaluru",
      "sourceTitle": "Philips",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "philips-pune",
      "company": "Philips",
      "industry": "Healthcare & MedTech",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Netherlands",
      "focus": "Health technology R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New R&D centre",
      "sourceUrl": "https://www.philips.co.in/about/news-and-insights/press-release/philips-expands-innovation-footprint-in-india-with-a-new-r-and-d-center-in-pune",
      "sourceTitle": "Philips",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "pratt-whitney-blr",
      "company": "Pratt & Whitney",
      "industry": "Aerospace",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2024-02",
      "year": 2024,
      "hq": "United States",
      "focus": "Digital transformation",
      "headcountTarget": 300,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 300,
      "jobsNote": "300 by 2027",
      "sourceUrl": "https://www.aviationbusinessnews.com/cabin/pw-to-employ-300-at-new-india-digital-capability-centre",
      "sourceTitle": "Aviation Business News",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "propharma-hyd",
      "company": "ProPharma",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Regulatory and clinical services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.m9.news/politics/hyderabad-gcc-boom-4-new-centres-2025-update/",
      "sourceTitle": "M9 News",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "protolabs-hyd",
      "company": "Protolabs",
      "industry": "Industrial & Automotive",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-04",
      "year": 2026,
      "hq": "United States",
      "focus": "Digital manufacturing operations",
      "headcountTarget": 300,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 300,
      "jobsNote": "Eyes 300 jobs",
      "sourceUrl": "https://www.uniindia.com/protolabs-plans-to-set-up-gcc-in-hyderabad-eyes-300-jobs/business-economy/news/3812302.html",
      "sourceTitle": "UNI",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "providence-hyd",
      "company": "Providence",
      "industry": "Healthcare & MedTech",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-01",
      "year": 2026,
      "hq": "United States",
      "focus": "Healthcare technology and operations",
      "headcountTarget": 2000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 2000,
      "jobsNote": "2,000+ jobs expected",
      "sourceUrl": "https://www.aniisu.com/wp-content/uploads/2026/02/GCC-Voices-Monthly-Roundup-January-February-2026.pdf",
      "sourceTitle": "GCC Voices roundup (Jan–Feb 2026)",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "prudential-fin-ggn",
      "company": "Prudential Financial",
      "industry": "BFSI",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "New GCC",
      "announcementDate": "2026-09",
      "year": 2026,
      "hq": "United States",
      "focus": "Innovation and technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First India innovation centre",
      "sourceUrl": "https://www.uniindia.com/business-economy/business-haryana-pfi-innovation-centre/188639",
      "sourceTitle": "UNI",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "prudential-plc-blr",
      "company": "Prudential plc",
      "industry": "BFSI",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025-06",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Technology, AI, data analytics, cybersecurity",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.prudentialplc.com/en/news-and-insights/all-news/news-releases/2025/23-06-2025",
      "sourceTitle": "Prudential plc",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "pwc-blr",
      "company": "PwC",
      "industry": "Professional Services",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United Kingdom",
      "focus": "Cybersecurity",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Connected Cybersecurity Solutions Centre",
      "sourceUrl": "https://www.sightsinplus.com/editorial/major-gcc-announcements-in-2026-set-to-create-thousands-of-jobs-in-india/",
      "sourceTitle": "Sightsinplus",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "qad-pune",
      "company": "QAD | Redzone",
      "industry": "Technology & Software",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026-05",
      "year": 2026,
      "hq": "United States",
      "focus": "Manufacturing software",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Regional hub",
      "sourceUrl": "https://www.outlookbusiness.com/spotlight/news-wire/qad-redzone-to-inaugurate-new-regional-hub-in-pune-on-national-technology-day",
      "sourceTitle": "Outlook Business",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "rakuten-blr",
      "company": "Rakuten",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Japan",
      "focus": "Technology and infrastructure for 70+ global businesses",
      "headcountTarget": null,
      "headcountNow": 4000,
      "metricType": "Reported Headcount",
      "metricValue": 4000,
      "jobsNote": "About 4,000 staff, expanding",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "ralph-lauren-blr",
      "company": "Ralph Lauren",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026-06",
      "year": 2026,
      "hq": "United States",
      "focus": "Digital, cloud and AI",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "GCC head appointed",
      "sourceUrl": "https://news.outsourceaccelerator.com/ralph-lauren-india-gcc/",
      "sourceTitle": "Outsource Accelerator",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "reckitt-hyd",
      "company": "Reckitt",
      "industry": "Consumer & Retail",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Finance, supply chain and business services",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Reckitt Global Hub",
      "sourceUrl": "https://reckitt.com/careers/reckitt-global-hub-hyderabad/",
      "sourceTitle": "Reckitt careers",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "redwood-hyd",
      "company": "Redwood Software",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Agentic AI and automation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://test.uniindia.com/news/business-economy/tech-telangana-redwood-software/3818765.html",
      "sourceTitle": "UNI",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "regeneron-hyd",
      "company": "Regeneron",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-05",
      "year": 2026,
      "hq": "United States",
      "focus": "Global business functions",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Hundreds of roles planned; opening H2 2026",
      "sourceUrl": "https://www.biospectrumindia.com/news/109/27849/us-biotech-regeneron-to-launch-global-capability-centre-in-hyderabad.html",
      "sourceTitle": "BioSpectrum India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "reltio-blr",
      "company": "Reltio",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "United States",
      "focus": "AI-powered data unification",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "roche-hyd",
      "company": "Roche",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "Data analytics and digital technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Second digital tech hub; operations from Q1 2027",
      "sourceUrl": "https://www.digitalhealthnews.com/roche-opens-second-digital-technology-hub-in-hyderabad-targets-q1-2027-operations",
      "sourceTitle": "Digital Health News",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "rolls-royce-blr",
      "company": "Rolls-Royce",
      "industry": "Aerospace",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025-09",
      "year": 2025,
      "hq": "United Kingdom",
      "focus": "Engineering and innovation",
      "headcountTarget": 700,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 700,
      "jobsNote": "700-seat centre",
      "sourceUrl": "https://machinist.in/2025/09/rolls-royce-inaugurates-700-seat-global-capability-centre-in-bengaluru/",
      "sourceTitle": "Machinist",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": "https://careers.rolls-royce.com/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "sandvik-pune",
      "company": "Sandvik",
      "industry": "Industrial & Automotive",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2025-08",
      "year": 2025,
      "hq": "Sweden",
      "focus": "Digital manufacturing, CAD/CAM software, AI",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Fully operational early 2026",
      "sourceUrl": "https://www.home.sandvik/en/stories/articles/2025/08/indian-hub-will-boost-innovation-and-efficiency/",
      "sourceTitle": "Sandvik",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "sanofi-hyd",
      "company": "Sanofi",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "France",
      "focus": "Digital, data science, clinical operations",
      "headcountTarget": 4500,
      "headcountNow": 2600,
      "metricType": "Planned Hires",
      "metricValue": 4500,
      "jobsNote": "2,600+ today, growing to 4,500+",
      "sourceUrl": "https://www.sightsinplus.com/editorial/major-gcc-announcements-in-2026-set-to-create-thousands-of-jobs-in-india/",
      "sourceTitle": "Sightsinplus",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://jobs.sanofi.com/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "schneider-blr",
      "company": "Schneider Electric",
      "industry": "Industrial & Automotive",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2024-05",
      "year": 2024,
      "hq": "France",
      "focus": "Global hub operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "One of its largest employee campuses in India",
      "sourceUrl": "https://www.se.com/in/en/about-us/newsroom/news/press-releases/schneider-electric-inaugurates-one-of-its-largest-employee-campuses-in-india-6672aee1141c63b9af0d372a",
      "sourceTitle": "Schneider Electric",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": "https://careers.se.com/life-at-schneider",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "servicenow-hyd",
      "company": "ServiceNow",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Product development",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Second-largest development centre globally",
      "sourceUrl": "https://www.crn.in/?p=7512",
      "sourceTitle": "CRN India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "sigma-chennai",
      "company": "Sigma Technology Group",
      "industry": "Technology & Software",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2026-09",
      "year": 2026,
      "hq": "Sweden",
      "focus": "Embedded systems, industrial digitalisation",
      "headcountTarget": 600,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 600,
      "jobsNote": "600 jobs across Chennai and Tiruchy",
      "sourceUrl": "https://www.dtnext.in/news/tamilnadu/tn-signs-pacts-for-rs-15300-cr-investments-in-uk-over-10000-jobs-expected",
      "sourceTitle": "DT Next",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "silicon-labs-hyd",
      "company": "Silicon Labs",
      "industry": "Semiconductors",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026-03",
      "year": 2026,
      "hq": "United States",
      "focus": "Wireless R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Footprint up about 50%",
      "sourceUrl": "https://news.silabs.com/2026-03-02-Silicon-Labs-Expands-Hyderabad-Facility-in-Ceremony-Attended-by-U-S-Consul-General",
      "sourceTitle": "Silicon Labs newsroom",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "smartsheet-blr",
      "company": "Smartsheet",
      "industry": "Technology & Software",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "AI, engineering, cybersecurity",
      "headcountTarget": 200,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 200,
      "jobsNote": "200+ hires planned in 2026",
      "sourceUrl": "https://cxotoday.com/media-coverage/smartsheet-investing-in-global-capabilities-center-in-india-to-accelerate-innovation/",
      "sourceTitle": "CXOToday",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "sonatype-hyd",
      "company": "Sonatype",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Software supply-chain security, product development",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "sonnys-pune",
      "company": "Sonny's Enterprises",
      "industry": "Industrial & Automotive",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Engineering and operations",
      "headcountTarget": 100,
      "headcountNow": 25,
      "metricType": "Planned Hires",
      "metricValue": 100,
      "jobsNote": "25 at launch; 100 by year-end",
      "sourceUrl": "https://analyticsindiamag.com/ai-trends/top-10-new-gccs-in-india-to-watch-in-2025",
      "sourceTitle": "Analytics India Magazine",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "sonoco-hyd",
      "company": "Sonoco",
      "industry": "Industrial & Automotive",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Global IT operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "$10 million initial investment",
      "sourceUrl": "https://analyticsindiamag.com/news/gcc/page/3",
      "sourceTitle": "Analytics India Magazine",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "southwest-hyd",
      "company": "Southwest Airlines",
      "industry": "Travel & Aviation",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-05",
      "year": 2026,
      "hq": "United States",
      "focus": "Technology and innovation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Global Innovation Centre",
      "sourceUrl": "https://www.uniindia.com/southwest-airlines-opens-global-innovation-centre-in-hyderabad/south/news/3849130.html",
      "sourceTitle": "UNI",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "sp-global-blr",
      "company": "S&P Global",
      "industry": "BFSI",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Data, ratings and analytics",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New Bengaluru hub",
      "sourceUrl": "https://news.outsourceaccelerator.com/sp-global-bengaluru-hub/",
      "sourceTitle": "Outsource Accelerator",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "sp-global-ggn",
      "company": "S&P Global",
      "industry": "BFSI",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Data, ratings and analytics",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New hub in Downtown Gurugram",
      "sourceUrl": "https://www.spglobal.com/en/press/press-release/sp-global-strengthens-india-presence-with-new-hub-in-downtown-gurugram",
      "sourceTitle": "S&P Global",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "starbucks-chennai",
      "company": "Starbucks",
      "industry": "Consumer & Retail",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2026-09",
      "year": 2026,
      "hq": "United States",
      "focus": "Technology hub",
      "headcountTarget": 800,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 800,
      "jobsNote": "~800 tech jobs in phase one; MoU with Tamil Nadu",
      "sourceUrl": "https://currentaffairs.adda247.com/2026/09/22/",
      "sourceTitle": "Adda247 Current Affairs",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://careers.starbucks.com",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "state-street-cbe",
      "company": "State Street",
      "industry": "BFSI",
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2025-07",
      "year": 2025,
      "hq": "United States",
      "focus": "Financial services operations",
      "headcountTarget": 2400,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 2400,
      "jobsNote": "Up to ~2,400; also Chennai",
      "sourceUrl": "https://india.entrepreneur.com/technology/india-witnesses-a-fresh-wave-of-marquee-gcc-setups-and/495843",
      "sourceTitle": "Entrepreneur India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "stellantis-hyd",
      "company": "Stellantis",
      "industry": "Industrial & Automotive",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Netherlands",
      "focus": "Automotive software",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Software and digital hub",
      "sourceUrl": "https://autocarpro.in/news/stellantis-india-opens-digital-hub-in-hyderabad-115735",
      "sourceTitle": "Autocar Professional",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "stolt-nielsen-hyd",
      "company": "Stolt-Nielsen",
      "industry": "Logistics",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Bermuda",
      "focus": "Product development, DevOps, data and automation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Digital Innovation Center",
      "sourceUrl": "https://www.m9.news/politics/hyderabad-gcc-boom-4-new-centres-2025-update/",
      "sourceTitle": "M9 News",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "stryker-ggn",
      "company": "Stryker",
      "industry": "Healthcare & MedTech",
      "city": "Gurugram",
      "state": "Haryana",
      "eventType": "New GCC",
      "announcementDate": "2022",
      "year": 2022,
      "hq": "United States",
      "focus": "Medical device R&D",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Global Technology Centre",
      "sourceUrl": "https://biospectrumindia.com/news/91/21385/strykers-global-technology-centre-opens-in-gurugram.html",
      "sourceTitle": "BioSpectrum India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "syngenta-pune",
      "company": "Syngenta",
      "industry": "Agriculture",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2026-01",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "AI-driven agricultural innovation",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.aniisu.com/wp-content/uploads/2026/02/GCC-Voices-Monthly-Roundup-January-February-2026.pdf",
      "sourceTitle": "GCC Voices roundup (Jan–Feb 2026)",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "synopsys-noida",
      "company": "Synopsys",
      "industry": "Semiconductors",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "eventType": "Expansion",
      "announcementDate": "2023",
      "year": 2023,
      "hq": "United States",
      "focus": "Chip design",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Second-largest India design centre",
      "sourceUrl": "https://www.eetindia.co.in/?p=22579",
      "sourceTitle": "EE Times India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "t-mobile-hyd",
      "company": "T-Mobile US",
      "industry": "Telecom",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "AI, cloud, engineering",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First global tech hub in India",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "takeda-blr",
      "company": "Takeda",
      "industry": "Pharma & Life Sciences",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025-01",
      "year": 2025,
      "hq": "Japan",
      "focus": "AI, data and digital",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "First innovation capability centre in Asia",
      "sourceUrl": "https://www.theweek.in/news/biz-tech/2025/01/15/japanese-biopharmaceutical-major-takeda-sets-up-its-first-global.amp.html",
      "sourceTitle": "The Week",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "target-blr",
      "company": "Target",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Technology and operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "₹1,250 crore office lease",
      "sourceUrl": "https://www.constructionworld.in/latest-construction-news/real-estate-news/target-india-signs-rs12.5-bn-bengaluru-office-lease-for-gcc-expansion/93525",
      "sourceTitle": "Construction World",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://corporate.target.com/careers",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "tesco-blr",
      "company": "Tesco",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2022",
      "year": 2022,
      "hq": "United Kingdom",
      "focus": "Business services and technology",
      "headcountTarget": 1000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 1000,
      "jobsNote": "1,000 hires planned",
      "sourceUrl": "https://www.peoplematters.in/news/employee-engagement/tesco-plans-for-india-expansion-to-hire-1000-people-35333",
      "sourceTitle": "People Matters",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "the-standard-blr",
      "company": "The Standard",
      "industry": "BFSI",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026-04",
      "year": 2026,
      "hq": "United States",
      "focus": "AI engineering, cloud, data, insurance operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://reinasia.com/us-insurance-firm-the-standard-opens-global-capability-centre-in-india/",
      "sourceTitle": "Reinsurance Asia",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "thermo-fisher-hyd",
      "company": "Thermo Fisher Scientific",
      "industry": "Pharma & Life Sciences",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2022",
      "year": 2022,
      "hq": "United States",
      "focus": "R&D engineering",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "R&D facility expanded",
      "sourceUrl": "https://www.indianpharmapost.com/news/thermo-fisher-scientific-expands-rd-facility-in-hyderabad-12080",
      "sourceTitle": "Indian Pharma Post",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "toyo-modec-blr",
      "company": "TOYO & MODEC",
      "industry": "Energy",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "Japan",
      "focus": "Offshore floating production engineering",
      "headcountTarget": 750,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 750,
      "jobsNote": "750 hires planned",
      "sourceUrl": "https://india.entrepreneur.com/news-and-trends/japanese-firms-toyo-and-modec-to-hire-750-people-in-its-new/493362",
      "sourceTitle": "Entrepreneur India",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "transunion-pune",
      "company": "TransUnion",
      "industry": "BFSI",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Credit information technology and analytics",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://cxotoday.com/media-coverage/transunions-gcc-india-expands-in-pune-to-accommodate-growing-capabilities/",
      "sourceTitle": "CXOToday",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "tvh-pune",
      "company": "TVH",
      "industry": "Industrial & Automotive",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2026-07",
      "year": 2026,
      "hq": "Belgium",
      "focus": "Engineering, digital products, data, enterprise tech",
      "headcountTarget": 400,
      "headcountNow": 250,
      "metricType": "Planned Hires",
      "metricValue": 400,
      "jobsNote": "Seating raised from 250 to 400",
      "sourceUrl": "https://www.thepeoplesboard.com/news/tvh-india-expands-pune-gcc-to-scale-digital-capabilities/",
      "sourceTitle": "The People's Board",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "uber-hyd",
      "company": "Uber",
      "industry": "Technology & Software",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Technology and operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.deccanchronicle.com/amp/southern-states/telangana/hyderabad-becomes-fastest-growing-gcc-hub-in-india-1973127",
      "sourceTitle": "Deccan Chronicle",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "ubs-hyd",
      "company": "UBS",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "AI, technology, finance and operations",
      "headcountTarget": 3000,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 3000,
      "jobsNote": "3,000+ hires over two years",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "ups-chennai",
      "company": "UPS",
      "industry": "Logistics",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2026-05",
      "year": 2026,
      "hq": "United States",
      "focus": "Global supply-chain technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Phase 3 facility",
      "sourceUrl": "https://community.verified.realestate/article/the-evolution-of-indias-gccs-from-cost-centres-to-global-engineering-powerhouses/",
      "sourceTitle": "Verified.RealEstate",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.jobs-ups.com/imea/en",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "vanderlande-pune",
      "company": "Vanderlande",
      "industry": "Industrial & Automotive",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "Netherlands",
      "focus": "Logistics automation engineering",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "India innovation centre",
      "sourceUrl": "https://www.hrkatha.com/expansion/vanderlande-opens-india-innovation-centre-in-pune/",
      "sourceTitle": "HR Katha",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "vanguard-hyd",
      "company": "Vanguard",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "AI, cloud engineering, data analytics",
      "headcountTarget": 2500,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 2500,
      "jobsNote": "About 2,500 professionals planned",
      "sourceUrl": "https://deccanchronicle.com/southern-states/telangana/vanguard-to-establish-first-india-gcc-in-hyderabad-1870017",
      "sourceTitle": "Deccan Chronicle",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "veradigm-pune",
      "company": "Veradigm",
      "industry": "Healthcare & MedTech",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Healthcare analytics",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://ssfglobal.in/industry_actions/ssf-global-news/",
      "sourceTitle": "SSF Global",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "visteon-kolkata",
      "company": "Visteon",
      "industry": "Industrial & Automotive",
      "city": "Kolkata",
      "state": "West Bengal",
      "eventType": "Expansion",
      "announcementDate": "2025-01",
      "year": 2025,
      "hq": "United States",
      "focus": "Android infotainment, cockpit software, cybersecurity",
      "headcountTarget": 500,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 500,
      "jobsNote": "300 by end-2026; 500+ in 2–3 years",
      "sourceUrl": "https://themachinemaker.com/news/visteon-expands-presence-in-india-with-new-technical-center-in-kolkata/",
      "sourceTitle": "The Machine Maker",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "vontier-blr",
      "company": "Vontier",
      "industry": "Industrial & Automotive",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "Expansion",
      "announcementDate": "2025-01",
      "year": 2025,
      "hq": "United States",
      "focus": "Innovation and technology",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "New capability centre",
      "sourceUrl": "https://www.businesswire.com/news/home/20250129890010/en/Vontier-Expands-India-Innovation-and-Technology-Footprint-Opens-New-State-Of-The-Art-Capability-Center-in-Bengaluru",
      "sourceTitle": "Business Wire",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "voya-hyd",
      "company": "Voya Financial",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "Expansion",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Technology and operations",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.deccanchronicle.com/amp/southern-states/telangana/hyderabad-becomes-fastest-growing-gcc-hub-in-india-1973127",
      "sourceTitle": "Deccan Chronicle",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "wacker-pune",
      "company": "Wacker",
      "industry": "Chemicals",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026-08",
      "year": 2026,
      "hq": "Germany",
      "focus": "Digital and IT",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Set up with HCLTech",
      "sourceUrl": "https://www.drweb.de/wacker-digitalzentrum-pune-indien/",
      "sourceTitle": "Dr. Web",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "walgreens-chennai",
      "company": "Walgreens",
      "industry": "Healthcare & MedTech",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "New GCC",
      "announcementDate": "2026-09",
      "year": 2026,
      "hq": "United States",
      "focus": "Pharmacy technology and operations",
      "headcountTarget": 250,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 250,
      "jobsNote": "250+ in the first year",
      "sourceUrl": "https://theprint.in/india/walgreens-to-set-up-gcc-in-chennai-cm-vijay-reviews-overseas-investments/3046404/",
      "sourceTitle": "ThePrint",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Announced",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "walmart-chennai",
      "company": "Walmart Global Tech",
      "industry": "Consumer & Retail",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Engineering, product development, infrastructure",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "Second hub after Bengaluru",
      "sourceUrl": "https://www.ceipal.com/resources/new-gccs-in-india-who-launched-whos-expanding-and-whos-coming-next-2024-2026",
      "sourceTitle": "Ceipal",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://tech.walmart.com/content/walmart-global-tech/en_us/careers.html",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "wayfair-blr",
      "company": "Wayfair",
      "industry": "Consumer & Retail",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2023-09",
      "year": 2023,
      "hq": "United States",
      "focus": "E-commerce technology",
      "headcountTarget": 300,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 300,
      "jobsNote": "300 tech hires planned",
      "sourceUrl": "https://cxotoday.com/media-coverage/wayfair-enters-indian-market-with-bengaluru-technology-development-centre-plans-to-recruit-300-tech-experts/",
      "sourceTitle": "CXOToday",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "western-union-hyd",
      "company": "Western Union",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-01",
      "year": 2026,
      "hq": "United States",
      "focus": "Technology, platform engineering, digital transformation",
      "headcountTarget": 400,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 400,
      "jobsNote": "400+ professionals expected; built with HCLTech",
      "sourceUrl": "https://nsearchives.nseindia.com/corporate/HCLTECH_27012026132057_Release27Jan2026.pdf",
      "sourceTitle": "HCLTech filing (NSE)",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "wex-blr",
      "company": "WEX",
      "industry": "BFSI",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Payments engineering",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://www.cxodigitalpulse.com/wex-opens-bengaluru-technology-center-to-expand-global-engineering-capabilities/",
      "sourceTitle": "CXO Digital Pulse",
      "sourceType": "Verified Primary",
      "verificationStatus": "Verified Primary",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "workday-chennai",
      "company": "Workday",
      "industry": "Technology & Software",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "eventType": "Expansion",
      "announcementDate": "2025",
      "year": 2025,
      "hq": "United States",
      "focus": "Finance and HR platform engineering",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://flexiple.com/global-capability-centers/list-of-global-capability-centers-in-chennai",
      "sourceTitle": "Flexiple",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": "https://www.workday.com/en-us/company/careers/overview.html",
      "careerVerified": true,
      "careerLastVerified": "2026-10-08",
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "zeiss-blr",
      "company": "Carl Zeiss",
      "industry": "Healthcare & MedTech",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2024",
      "year": 2024,
      "hq": "Germany",
      "focus": "Cloud, cybersecurity, network ops, medtech software",
      "headcountTarget": 5000,
      "headcountNow": 2500,
      "metricType": "Planned Hires",
      "metricValue": 5000,
      "jobsNote": "India workforce (all roles) to double to 5,000",
      "sourceUrl": "https://www.aol.com/news/zeiss-opens-tech-focussed-centre-115554578.html",
      "sourceTitle": "Reuters (via AOL)",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "zendesk-pune",
      "company": "Zendesk",
      "industry": "Technology & Software",
      "city": "Pune",
      "state": "Maharashtra",
      "eventType": "New GCC",
      "announcementDate": "2026-02",
      "year": 2026,
      "hq": "United States",
      "focus": "AI product development",
      "headcountTarget": null,
      "headcountNow": 300,
      "metricType": "Reported Headcount",
      "metricValue": 300,
      "jobsNote": "About 300; +15% by end-2026",
      "sourceUrl": "https://www.crnasia.com/india/news/2026/zendesk-establishes-innovation-hub-in-pune-to-lead-global-ai-product-development",
      "sourceTitle": "CRN Asia",
      "sourceType": "Verified News",
      "verificationStatus": "Verified News",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "zimmer-biomet-blr",
      "company": "Zimmer Biomet",
      "industry": "Healthcare & MedTech",
      "city": "Bengaluru",
      "state": "Karnataka",
      "eventType": "New GCC",
      "announcementDate": "2026",
      "year": 2026,
      "hq": "United States",
      "focus": "Medical technology engineering",
      "headcountTarget": 500,
      "headcountNow": null,
      "metricType": "Planned Hires",
      "metricValue": 500,
      "jobsNote": "About 500 hires over three years",
      "sourceUrl": "https://www.sightsinplus.com/editorial/major-gcc-announcements-in-2026-set-to-create-thousands-of-jobs-in-india/",
      "sourceTitle": "Sightsinplus",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    },
    {
      "id": "zurich-hyd",
      "company": "Zurich Insurance",
      "industry": "BFSI",
      "city": "Hyderabad",
      "state": "Telangana",
      "eventType": "New GCC",
      "announcementDate": "2026-04",
      "year": 2026,
      "hq": "Switzerland",
      "focus": "Cloud engineering, data and AI, application development, cybersecurity",
      "headcountTarget": null,
      "headcountNow": null,
      "metricType": "Undisclosed",
      "metricValue": null,
      "jobsNote": "",
      "sourceUrl": "https://explorer.hub71.com/news/feed/zurich-insurance-launches-global-capability-center-in-hyderabad-to-advance-ai-and-tech-capabilities",
      "sourceTitle": "Hub71 Explorer (PR Newswire)",
      "sourceType": "Secondary Research",
      "verificationStatus": "Secondary Research",
      "careerUrl": null,
      "careerVerified": false,
      "careerLastVerified": null,
      "status": "Operational",
      "lastVerified": "2026-10-06"
    }
  ]
};

    // App State
    let AppState = {
        data: EMBEDDED_GCC_DATA,
        records: EMBEDDED_GCC_DATA.records || [],
        filteredRecords: [],
        filters: {
            search: '',
            city: 'ALL',
            sector: 'ALL',
            eventType: 'ALL',
            sourceType: 'ALL'
        },
        sort: 'date-desc',
        page: 1,
        pageSize: 15,
        chartView: 'years',
        selectedRecord: null
    };

    // DOM Elements Cache
    let DOM = {};

    function init() {
        cacheDOM();
        bindEvents();
        loadLiveData();
        applyFiltersAndRender();
        renderRecentAnnouncements();
        renderStatePolicies();
    }

    function cacheDOM() {
        DOM.kpiTotal = document.getElementById('gccKpiTotal');
        DOM.kpiNew = document.getElementById('gccKpiNew');
        DOM.kpiExpansion = document.getElementById('gccKpiExpansion');
        DOM.kpiJobs = document.getElementById('gccKpiJobs');
        DOM.kpiCities = document.getElementById('gccKpiCities');
        DOM.kpiPrimary = document.getElementById('gccKpiPrimary');
        DOM.kpiRatioBarNew = document.getElementById('gccKpiRatioBarNew');
        DOM.kpiRatioBarExp = document.getElementById('gccKpiRatioBarExp');

        DOM.mapWrapper = document.getElementById('gccMapWrapper');
        DOM.mapTooltip = document.getElementById('gccMapTooltip');
        DOM.cityPills = document.getElementById('gccCityPills');

        DOM.chartContainer = document.getElementById('gccChartContainer');
        DOM.chartSubtitle = document.getElementById('gccChartSubtitle');

        DOM.searchInput = document.getElementById('gccSearchInput');
        DOM.citySelect = document.getElementById('gccCitySelect');
        DOM.sectorSelect = document.getElementById('gccSectorSelect');
        DOM.eventTypeSelect = document.getElementById('gccEventTypeSelect');
        DOM.sourceTypeSelect = document.getElementById('gccSourceTypeSelect');
        DOM.sortSelect = document.getElementById('gccSortSelect');
        DOM.resetBtn = document.getElementById('gccResetBtn');

        DOM.resultCount = document.getElementById('gccResultCount');
        DOM.tableBody = document.getElementById('gccTableBody');
        DOM.pagePrev = document.getElementById('gccPagePrev');
        DOM.pageNext = document.getElementById('gccPageNext');
        DOM.pageIndicator = document.getElementById('gccPageIndicator');

        DOM.modalBackdrop = document.getElementById('gccModalBackdrop');
        DOM.modalContent = document.getElementById('gccModalContent');
        DOM.modalCloseBtn = document.getElementById('gccModalCloseBtn');

        DOM.methodModal = document.getElementById('gccMethodModal');
        DOM.methodModalClose = document.getElementById('gccMethodModalClose');
        DOM.openMethodBtn = document.getElementById('gccOpenMethodBtn');

        DOM.announcementsList = document.getElementById('gccAnnouncementsList');
        DOM.policiesList = document.getElementById('gccPoliciesList');
    }

    function bindEvents() {
        // Search & Filter listeners
        if (DOM.searchInput) {
            DOM.searchInput.addEventListener('input', function (e) {
                AppState.filters.search = e.target.value.toLowerCase().trim();
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.citySelect) {
            DOM.citySelect.addEventListener('change', function (e) {
                AppState.filters.city = e.target.value;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.sectorSelect) {
            DOM.sectorSelect.addEventListener('change', function (e) {
                AppState.filters.sector = e.target.value;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.eventTypeSelect) {
            DOM.eventTypeSelect.addEventListener('change', function (e) {
                AppState.filters.eventType = e.target.value;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.sourceTypeSelect) {
            DOM.sourceTypeSelect.addEventListener('change', function (e) {
                AppState.filters.sourceType = e.target.value;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.sortSelect) {
            DOM.sortSelect.addEventListener('change', function (e) {
                AppState.sort = e.target.value;
                applyFiltersAndRender();
            });
        }

        if (DOM.resetBtn) {
            DOM.resetBtn.addEventListener('click', function () {
                resetFilters();
            });
        }

        // Pagination
        if (DOM.pagePrev) {
            DOM.pagePrev.addEventListener('click', function () {
                if (AppState.page > 1) {
                    AppState.page--;
                    renderTable();
                }
            });
        }

        if (DOM.pageNext) {
            DOM.pageNext.addEventListener('click', function () {
                const totalPages = Math.ceil(AppState.filteredRecords.length / AppState.pageSize);
                if (AppState.page < totalPages) {
                    AppState.page++;
                    renderTable();
                }
            });
        }

        // Chart view switchers
        const chartTabYears = document.getElementById('gccTabYears');
        const chartTabSectors = document.getElementById('gccTabSectors');
        if (chartTabYears && chartTabSectors) {
            chartTabYears.addEventListener('click', function () {
                AppState.chartView = 'years';
                chartTabYears.classList.add('is-active');
                chartTabSectors.classList.remove('is-active');
                renderChart();
            });
            chartTabSectors.addEventListener('click', function () {
                AppState.chartView = 'sectors';
                chartTabSectors.classList.add('is-active');
                chartTabYears.classList.remove('is-active');
                renderChart();
            });
        }

        // Detail Modal close
        if (DOM.modalCloseBtn) {
            DOM.modalCloseBtn.addEventListener('click', closeModal);
        }
        if (DOM.modalBackdrop) {
            DOM.modalBackdrop.addEventListener('click', function (e) {
                if (e.target === DOM.modalBackdrop) closeModal();
            });
        }

        // Methodology Modal
        if (DOM.openMethodBtn && DOM.methodModal) {
            DOM.openMethodBtn.addEventListener('click', function () {
                DOM.methodModal.classList.add('is-open');
            });
        }
        if (DOM.methodModalClose && DOM.methodModal) {
            DOM.methodModalClose.addEventListener('click', function () {
                DOM.methodModal.classList.remove('is-open');
            });
            DOM.methodModal.addEventListener('click', function (e) {
                if (e.target === DOM.methodModal) DOM.methodModal.classList.remove('is-open');
            });
        }

        // Keyboard Escape
        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeModal();
                if (DOM.methodModal) DOM.methodModal.classList.remove('is-open');
            }
        });
    }

    function formatRefreshIST(isoString, fallbackDisplay) {
        if (!isoString) return fallbackDisplay || 'Unavailable';
        const date = new Date(isoString);
        if (isNaN(date.getTime())) return fallbackDisplay || 'Unavailable';
        const day = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', day: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', month: 'long' }).format(date);
        const year = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric' }).format(date);
        const time = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true }).format(date);
        return day + ' ' + month + ' ' + year + ', ' + time.toLowerCase() + ' IST';
    }

    function loadLiveData() {
        // Try fetching external gcc-data.json
        const dataPath = window.location.pathname.endsWith('/gcc-tracker') || window.location.pathname.endsWith('/gcc-tracker/')
            ? 'gcc-data.json'
            : 'gcc-tracker/gcc-data.json';

        fetch(dataPath)
            .then(function (res) {
                if (!res.ok) throw new Error('Live data fetch offline');
                return res.json();
            })
            .then(function (json) {
                if (json && json.records && json.records.length > 0) {
                    AppState.data = json;
                    AppState.records = json.records;
                    populateDropdowns();
                    applyFiltersAndRender();
                    renderRecentAnnouncements();
                    renderStatePolicies();
                    updateTimestamp(formatRefreshIST(json.meta?.lastRefreshedIso, json.meta?.lastRefreshedDisplay));
                }
            })
            .catch(function () {
                // Smoothly continue using embedded authentic dataset
                populateDropdowns();
                updateTimestamp(formatRefreshIST(AppState.data?.meta?.lastRefreshedIso, AppState.data?.meta?.lastRefreshedDisplay));
            });
    }

    function updateTimestamp(displayDate) {
        const timeEl = document.getElementById('gccRefreshDate');
        if (timeEl && displayDate) {
            timeEl.textContent = displayDate;
        }
    }

    function populateDropdowns() {
        if (!DOM.citySelect || !DOM.sectorSelect) return;

        // Populate Cities
        const cities = Array.from(new Set(AppState.records.map(r => r.city))).sort();
        DOM.citySelect.innerHTML = '<option value="ALL">All Cities (' + cities.length + ')</option>';
        cities.forEach(function (c) {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            DOM.citySelect.appendChild(opt);
        });

        // Populate Sectors
        const sectors = Array.from(new Set(AppState.records.map(r => r.industry))).sort();
        DOM.sectorSelect.innerHTML = '<option value="ALL">All Sectors (' + sectors.length + ')</option>';
        sectors.forEach(function (s) {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = s;
            DOM.sectorSelect.appendChild(opt);
        });
    }

    function resetFilters() {
        AppState.filters = {
            search: '',
            city: 'ALL',
            sector: 'ALL',
            eventType: 'ALL',
            sourceType: 'ALL'
        };
        AppState.page = 1;

        if (DOM.searchInput) DOM.searchInput.value = '';
        if (DOM.citySelect) DOM.citySelect.value = 'ALL';
        if (DOM.sectorSelect) DOM.sectorSelect.value = 'ALL';
        if (DOM.eventTypeSelect) DOM.eventTypeSelect.value = 'ALL';
        if (DOM.sourceTypeSelect) DOM.sourceTypeSelect.value = 'ALL';

        applyFiltersAndRender();
    }

    function applyFiltersAndRender() {
        const f = AppState.filters;

        AppState.filteredRecords = AppState.records.filter(function (r) {
            if (f.city !== 'ALL' && r.city !== f.city) return false;
            if (f.sector !== 'ALL' && r.industry !== f.sector) return false;
            if (f.eventType !== 'ALL' && r.eventType !== f.eventType) return false;
            if (f.sourceType !== 'ALL' && r.sourceType !== f.sourceType) return false;

            if (f.search) {
                const q = f.search;
                const matchName = r.company.toLowerCase().includes(q);
                const matchFocus = (r.focus || '').toLowerCase().includes(q);
                const matchHq = (r.hq || '').toLowerCase().includes(q);
                const matchCity = r.city.toLowerCase().includes(q);
                if (!matchName && !matchFocus && !matchHq && !matchCity) return false;
            }

            return true;
        });

        // Apply Sorting
        AppState.filteredRecords.sort(function (a, b) {
            if (AppState.sort === 'date-desc') return (b.announcementDate || '').localeCompare(a.announcementDate || '');
            if (AppState.sort === 'date-asc') return (a.announcementDate || '').localeCompare(b.announcementDate || '');
            if (AppState.sort === 'company-asc') return a.company.localeCompare(b.company);
            if (AppState.sort === 'company-desc') return b.company.localeCompare(a.company);
            if (AppState.sort === 'jobs-desc') return (b.headcountTarget || 0) - (a.headcountTarget || 0);
            return 0;
        });

        renderKPIs();
        renderMap();
        renderChart();
        renderTable();
    }

    function renderKPIs() {
        const total = AppState.filteredRecords.length;
        let newCount = 0;
        let expCount = 0;
        let plannedJobs = 0;
        let primaryCount = 0;
        const cities = new Set();

        AppState.filteredRecords.forEach(function (r) {
            if (r.eventType === 'New GCC') newCount++;
            else expCount++;

            if (r.sourceType === 'Verified Primary') primaryCount++;
            if (r.headcountTarget) plannedJobs += r.headcountTarget;
            cities.add(r.city);
        });

        if (DOM.kpiTotal) DOM.kpiTotal.textContent = total.toLocaleString();
        if (DOM.kpiNew) DOM.kpiNew.textContent = newCount.toLocaleString();
        if (DOM.kpiExpansion) DOM.kpiExpansion.textContent = expCount.toLocaleString();
        if (DOM.kpiJobs) DOM.kpiJobs.textContent = plannedJobs > 0 ? plannedJobs.toLocaleString() : '—';
        if (DOM.kpiCities) DOM.kpiCities.textContent = cities.size;
        if (DOM.kpiPrimary) {
            const pct = total > 0 ? Math.round((primaryCount / total) * 100) : 0;
            DOM.kpiPrimary.textContent = pct + '%';
        }

        if (DOM.kpiRatioBarNew && DOM.kpiRatioBarExp) {
            const newPct = total > 0 ? (newCount / total) * 100 : 50;
            const expPct = total > 0 ? (expCount / total) * 100 : 50;
            DOM.kpiRatioBarNew.style.width = newPct + '%';
            DOM.kpiRatioBarExp.style.width = expPct + '%';
        }
    }

    function renderMap() {
        if (!DOM.mapWrapper) return;

        // Calculate count per city from current filtered view
        const cityCounts = {};
        AppState.records.forEach(function (r) {
            cityCounts[r.city] = (cityCounts[r.city] || 0) + 1;
        });

        let nodesHtml = '';
        const coords = CITY_COORDINATES;

        for (const [cityName, coord] of Object.entries(coords)) {
            const count = cityCounts[cityName] || 0;
            if (count === 0) continue;

            const radius = Math.min(Math.max(Math.sqrt(count) * 2.4, 4), 16);
            const isActive = AppState.filters.city === cityName;
            const activeClass = isActive ? 'is-active' : '';

            // Smart label offset to prevent collisions
            let labelDx = radius + 4;
            let labelDy = 3;
            if (cityName === 'Bengaluru') { labelDx = -55; labelDy = 4; }
            if (cityName === 'Pune') { labelDx = -32; labelDy = 10; }
            if (cityName === 'Mumbai' || cityName === 'Navi Mumbai' || cityName === 'Thane') { labelDx = -45; labelDy = -4; }
            if (cityName === 'Gurugram') { labelDx = -52; labelDy = -4; }
            if (cityName === 'Kolkata') { labelDx = radius + 3; labelDy = 3; }

            nodesHtml += `
                <g class="gcc-map-node ${activeClass}" data-city="${cityName}" transform="translate(${coord[0]}, ${coord[1]})">
                    <circle class="gcc-node-outer" r="${radius}" />
                    <circle class="gcc-node-core" r="3" />
                    <text class="gcc-node-label" x="${labelDx}" y="${labelDy}">${cityName} (${count})</text>
                </g>
            `;
        }

        DOM.mapWrapper.innerHTML = `
            <svg viewBox="0 0 360 440" class="gcc-india-svg" role="img" aria-label="Interactive India GCC Ecosystem Map">
                <path class="gcc-map-path" d="${INDIA_MAP_PATH}" />
                ${nodesHtml}
            </svg>
            <div class="gcc-map-tooltip" id="gccMapTooltip"></div>
        `;

        // Bind interactive events to map nodes
        const nodes = DOM.mapWrapper.querySelectorAll('.gcc-map-node');
        const tooltip = document.getElementById('gccMapTooltip');

        nodes.forEach(function (node) {
            const cityName = node.getAttribute('data-city');
            const count = cityCounts[cityName] || 0;

            node.addEventListener('mouseenter', function (e) {
                if (!tooltip) return;
                tooltip.innerHTML = `
                    <span><strong>${cityName}</strong> · ${count} GCC Initiatives</span>
                    <span style="font-family: var(--mono); font-size: 0.65rem; color: #BFFF00;">Select to filter →</span>
                `;
                tooltip.classList.add('is-visible');
            });

            node.addEventListener('mouseleave', function () {
                if (tooltip) tooltip.classList.remove('is-visible');
            });

            node.addEventListener('click', function () {
                if (AppState.filters.city === cityName) {
                    AppState.filters.city = 'ALL';
                    if (DOM.citySelect) DOM.citySelect.value = 'ALL';
                } else {
                    AppState.filters.city = cityName;
                    if (DOM.citySelect) DOM.citySelect.value = cityName;
                }
                AppState.page = 1;
                applyFiltersAndRender();
            });
        });

        renderCityPills();
    }

    function renderCityPills() {
        if (!DOM.cityPills) return;

        const majorCities = ['ALL', 'Hyderabad', 'Bengaluru', 'Pune', 'Chennai', 'Gurugram', 'Noida', 'Mumbai', 'Coimbatore', 'Ahmedabad (GIFT City)', 'Kolkata'];
        let html = '';

        majorCities.forEach(function (c) {
            const isActive = AppState.filters.city === c;
            const label = c === 'ALL' ? 'All Hubs' : c;
            html += `<button type="button" class="gcc-city-pill ${isActive ? 'is-active' : ''}" data-pill-city="${c}">${label}</button>`;
        });

        DOM.cityPills.innerHTML = html;

        DOM.cityPills.querySelectorAll('.gcc-city-pill').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const target = btn.getAttribute('data-pill-city');
                AppState.filters.city = target;
                if (DOM.citySelect) DOM.citySelect.value = target;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        });
    }

    function generateInsightText(records, currentCity, currentSector) {
        const total = records.length;
        if (total === 0) return 'No initiatives match the active filter criteria.';
        const yr2526 = records.filter(r => (r.year || 2025) >= 2025).length;
        const pct2526 = Math.round((yr2526 / total) * 100);
        const newCount = records.filter(r => r.eventType === 'New GCC').length;
        const expCount = total - newCount;
        const newPct = Math.round((newCount / total) * 100);

        if (currentCity && currentCity !== 'ALL') {
            return 'In ' + currentCity + ', ' + total + ' initiatives are tracked (' + newPct + '% new launches, ' + (100 - newPct) + '% expansions), with ' + pct2526 + '% announced in 2025–2026.';
        }
        if (currentSector && currentSector !== 'ALL') {
            return 'In ' + currentSector + ', ' + total + ' initiatives are tracked across Indian hubs, with ' + newPct + '% representing first-time centre launches.';
        }
        if (pct2526 >= 65) {
            return pct2526 + '% of tracked GCC initiatives occurred in 2025–2026, marking a pronounced post-2024 acceleration as global enterprises expanded beyond core tech into full enterprise functions.';
        }
        return 'Activity spans ' + total + ' verified initiatives across 2022–2026 (' + newCount + ' new launches, ' + expCount + ' expansions).';
    }

    function renderChart() {
        if (!DOM.chartContainer) return;

        if (AppState.chartView === 'years') {
            if (DOM.chartSubtitle) DOM.chartSubtitle.textContent = 'Announcements by Year (New Launches vs Expansions)';
            renderYearChart();
        } else {
            if (DOM.chartSubtitle) DOM.chartSubtitle.textContent = 'Distribution by Leading Industry Sector';
            renderSectorChart();
        }
    }

    function renderYearChart() {
        const yearBuckets = {
            '2022': { new: 0, exp: 0, total: 0 },
            '2023': { new: 0, exp: 0, total: 0 },
            '2024': { new: 0, exp: 0, total: 0 },
            '2025': { new: 0, exp: 0, total: 0 },
            '2026': { new: 0, exp: 0, total: 0 }
        };

        AppState.filteredRecords.forEach(function (r) {
            const yr = String(r.year || '2025');
            if (yearBuckets[yr]) {
                if (r.eventType === 'New GCC') yearBuckets[yr].new++;
                else yearBuckets[yr].exp++;
                yearBuckets[yr].total++;
            }
        });

        let maxVal = 1;
        Object.values(yearBuckets).forEach(function (b) {
            if (b.total > maxVal) maxVal = b.total;
        });

        const years = ['2022', '2023', '2024', '2025', '2026'];
        const xCoords = [50, 140, 230, 320, 410];
        const yBaseline = 162;
        const maxBarH = 125;

        const points = [];
        let svgElements = '';

        // Subtle background gridlines
        svgElements += '<line x1="30" y1="37" x2="430" y2="37" class="gcc-chart-svg-gridline" />' +
            '<line x1="30" y1="78" x2="430" y2="78" class="gcc-chart-svg-gridline" />' +
            '<line x1="30" y1="120" x2="430" y2="120" class="gcc-chart-svg-gridline" />' +
            '<line x1="20" y1="' + yBaseline + '" x2="440" y2="' + yBaseline + '" class="gcc-chart-axis-line" />';

        years.forEach(function (yr, idx) {
            const b = yearBuckets[yr];
            const x = xCoords[idx];
            const total = b.total;
            const hTotal = total > 0 ? Math.round((total / maxVal) * maxBarH) + 4 : 0;
            const hNew = total > 0 ? Math.round((b.new / total) * hTotal) : 0;
            const hExp = hTotal - hNew;
            const yTop = total > 0 ? (yBaseline - hTotal) : yBaseline;

            points.push({ x: x, y: yTop, yr: yr, total: total, newCount: b.new, expCount: b.exp });

            const expRectY = yBaseline - hTotal;
            const expRectH = hNew > 0 ? Math.max(hExp - 1.5, 0) : hExp;
            const newRectY = yBaseline - hNew;

            svgElements += '<g class="gcc-chart-year-group" data-year="' + yr + '" data-new="' + b.new + '" data-exp="' + b.exp + '" data-total="' + total + '">' +
                '<rect x="' + (x - 38) + '" y="10" width="76" height="175" fill="transparent" />' +
                (hExp > 0 ? '<rect class="gcc-bar-rect gcc-bar-rect--exp" x="' + (x - 18) + '" y="' + expRectY + '" width="36" height="' + expRectH + '" rx="2" />' : '') +
                (hNew > 0 ? '<rect class="gcc-bar-rect gcc-bar-rect--new" x="' + (x - 18) + '" y="' + newRectY + '" width="36" height="' + hNew + '" rx="2" />' : '') +
                '<text class="gcc-chart-val-label" x="' + x + '" y="' + (yTop - 6) + '">' + total + '</text>' +
                '<text class="gcc-chart-axis-label" x="' + x + '" y="179">' + yr + '</text>' +
                '</g>';
        });

        // Trajectory Path
        let trajectoryD = 'M ' + points[0].x + ' ' + points[0].y;
        for (let i = 1; i < points.length; i++) {
            trajectoryD += ' L ' + points[i].x + ' ' + points[i].y;
        }

        let trajectoryNodes = '';
        points.forEach(function (p) {
            trajectoryNodes += '<circle class="gcc-traj-dot" cx="' + p.x + '" cy="' + p.y + '" r="3.5" data-yr="' + p.yr + '" />';
        });

        // 2026 Halo indicator
        const p2026 = points[4];
        const haloSvg = '<circle class="gcc-traj-halo" cx="' + p2026.x + '" cy="' + p2026.y + '" r="6.5" />';

        // Momentum Track HTML
        let momentumTrackHtml = '';
        years.forEach(function (yr, idx) {
            const b = yearBuckets[yr];
            const isSurge = yr === '2025';
            const isCurrent = yr === '2026';
            const stepClass = isCurrent ? 'is-current' : (isSurge ? 'is-surge' : '');

            momentumTrackHtml += '<div class="gcc-track-step ' + stepClass + '" data-yr="' + yr + '">' +
                '<span class="gcc-track-val">' + b.total + '</span>' +
                '<span class="gcc-track-node"></span>' +
                '<span class="gcc-track-yr">' + yr + '</span>' +
                '</div>';

            if (idx < years.length - 1) {
                const nextYr = years[idx + 1];
                let connClass = '';
                if (nextYr === '2024' || nextYr === '2025') connClass = 'gcc-track-connector--active';
                if (nextYr === '2026') connClass = 'gcc-track-connector--surge';
                momentumTrackHtml += '<div class="gcc-track-connector ' + connClass + '"></div>';
            }
        });

        const insightText = generateInsightText(AppState.filteredRecords, AppState.filters.city, AppState.filters.sector);

        const refreshDisplay = formatRefreshIST(AppState.data?.meta?.lastRefreshedIso, AppState.data?.meta?.lastRefreshedDisplay);

        const statusStripHtml = '<div class="gcc-chart-status-strip">' +
            '<div class="gcc-status-strip-left">' +
            '<span class="gcc-status-label">CURRENT PERIOD</span>' +
            '<span class="gcc-status-period">' +
            '<span class="gcc-status-live-dot" aria-hidden="true"></span>' +
            '<span><strong>2026</strong> — TRACKING ACTIVE</span>' +
            '</span>' +
            '</div>' +
            '<div class="gcc-status-strip-right">' +
            '<span class="gcc-status-refresh-label">LAST REFRESHED:</span>' +
            '<span class="gcc-status-refresh-val">' + refreshDisplay + '</span>' +
            '</div>' +
            '</div>';

        DOM.chartContainer.innerHTML = '<div class="gcc-chart-svg-stage">' +
            '<div class="gcc-chart-live-tooltip" id="gccChartTooltip"></div>' +
            '<svg viewBox="0 0 460 195" class="gcc-chart-svg" role="img" aria-label="Ecosystem Growth Dynamics Stacked Bar Chart with Activity Trajectory">' +
            svgElements +
            '<path class="gcc-trajectory-path" d="' + trajectoryD + '" />' +
            haloSvg +
            trajectoryNodes +
            '</svg>' +
            '</div>' +
            '<div class="gcc-chart-legend">' +
            '<div class="gcc-legend-item"><span class="gcc-legend-swatch" style="background:#2D6A4F;"></span><span>New GCC Launches</span></div>' +
            '<div class="gcc-legend-item"><span class="gcc-legend-swatch" style="background:#1D3557;"></span><span>Expansions</span></div>' +
            '<div class="gcc-legend-item"><span class="gcc-legend-line-swatch"></span><span>Annual Trajectory</span></div>' +
            '</div>' +
            '<div class="gcc-chart-takeaway">' +
            '<div class="gcc-takeaway-header">' +
            '<span class="gcc-takeaway-kicker">WHAT CHANGED?</span>' +
            '<span class="gcc-takeaway-signal">ANNUAL MOMENTUM INFLECTION</span>' +
            '</div>' +
            '<div class="gcc-momentum-track">' +
            momentumTrackHtml +
            '</div>' +
            '<div class="gcc-takeaway-insight">' +
            '<span class="gcc-insight-bullet">▸</span>' +
            '<span class="gcc-insight-text" id="gccChartInsightText">' + insightText + '</span>' +
            '</div>' +
            statusStripHtml +
            '</div>';

        // Wire Hover Events
        const tooltip = document.getElementById('gccChartTooltip');
        const yearGroups = DOM.chartContainer.querySelectorAll('.gcc-chart-year-group');
        const trajDots = DOM.chartContainer.querySelectorAll('.gcc-traj-dot');

        yearGroups.forEach(function (group) {
            const yr = group.getAttribute('data-year');
            const newC = group.getAttribute('data-new');
            const expC = group.getAttribute('data-exp');
            const totC = group.getAttribute('data-total');

            group.addEventListener('mouseenter', function () {
                if (!tooltip) return;
                tooltip.innerHTML = '<div style="font-weight:700; color:#BFFF00; margin-bottom:2px;">' + yr + ' Activity</div>' +
                    '<div>New Launches: <strong>' + newC + '</strong></div>' +
                    '<div>Expansions: <strong>' + expC + '</strong></div>' +
                    '<div style="border-top:1px solid rgba(255,255,255,0.15); margin-top:2px; padding-top:2px;">Total: <strong>' + totC + '</strong></div>';
                tooltip.classList.add('is-active');

                trajDots.forEach(function (d) {
                    if (d.getAttribute('data-yr') === yr) {
                        d.style.r = '5.5';
                        d.style.fill = '#BFFF00';
                    } else {
                        d.style.r = '3.5';
                        d.style.fill = '#FFFFFF';
                    }
                });
            });

            group.addEventListener('mouseleave', function () {
                if (tooltip) tooltip.classList.remove('is-active');
                trajDots.forEach(function (d) {
                    d.style.r = '3.5';
                    d.style.fill = '#FFFFFF';
                });
            });
        });
    }

    function renderSectorChart() {
        const sectorCounts = {};
        AppState.filteredRecords.forEach(function (r) {
            sectorCounts[r.industry] = (sectorCounts[r.industry] || 0) + 1;
        });

        const sorted = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
        const maxVal = sorted.length > 0 ? sorted[0][1] : 1;
        const total = AppState.filteredRecords.length;

        let rowsHtml = '';
        sorted.forEach(function ([sector, count]) {
            const pct = Math.round((count / maxVal) * 100);
            rowsHtml += '<div class="gcc-sector-row">' +
                '<span class="gcc-sector-name" title="' + sector + '">' + sector + '</span>' +
                '<div class="gcc-sector-track"><div class="gcc-sector-fill" style="width: ' + pct + '%;"></div></div>' +
                '<span class="gcc-sector-count">' + count + '</span>' +
                '</div>';
        });

        const top2 = sorted.slice(0, 2);
        const top2Count = top2.reduce((s, x) => s + x[1], 0);
        const top2Pct = total > 0 ? Math.round((top2Count / total) * 100) : 0;
        const insightText = sorted.length >= 2
            ? top2[0][0] + ' and ' + top2[1][0] + ' lead deployment, accounting for ' + top2Pct + '% of tracked capability centres across Indian hubs.'
            : 'Tracking ' + total + ' initiatives across active industry categories.';

        const refreshDisplay = formatRefreshIST(AppState.data?.meta?.lastRefreshedIso, AppState.data?.meta?.lastRefreshedDisplay);

        const statusStripHtml = '<div class="gcc-chart-status-strip">' +
            '<div class="gcc-status-strip-left">' +
            '<span class="gcc-status-label">CURRENT PERIOD</span>' +
            '<span class="gcc-status-period">' +
            '<span class="gcc-status-live-dot" aria-hidden="true"></span>' +
            '<span><strong>2026</strong> — TRACKING ACTIVE</span>' +
            '</span>' +
            '</div>' +
            '<div class="gcc-status-strip-right">' +
            '<span class="gcc-status-refresh-label">LAST REFRESHED:</span>' +
            '<span class="gcc-status-refresh-val">' + refreshDisplay + '</span>' +
            '</div>' +
            '</div>';

        DOM.chartContainer.innerHTML = '<div class="gcc-sector-bars-wrap">' +
            rowsHtml +
            '</div>' +
            '<div class="gcc-chart-legend">' +
            '<div class="gcc-legend-item"><span class="gcc-legend-swatch" style="background:#2D6A4F;"></span><span>Verified GCC Initiatives</span></div>' +
            '</div>' +
            '<div class="gcc-chart-takeaway">' +
            '<div class="gcc-takeaway-header">' +
            '<span class="gcc-takeaway-kicker">WHAT CHANGED?</span>' +
            '<span class="gcc-takeaway-signal">CAPABILITY CONCENTRATION</span>' +
            '</div>' +
            '<div class="gcc-takeaway-insight" style="border-top:none; padding-top:0;">' +
            '<span class="gcc-insight-bullet">▸</span>' +
            '<span class="gcc-insight-text">' + insightText + '</span>' +
            '</div>' +
            statusStripHtml +
            '</div>';
    }

    function renderTable() {
        if (!DOM.tableBody) return;

        const total = AppState.filteredRecords.length;
        if (DOM.resultCount) {
            DOM.resultCount.textContent = total === 1 ? '1 initiative found' : total + ' initiatives found';
        }

        if (total === 0) {
            DOM.tableBody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--light);">
                        No verified GCC records match the current filters.
                        <div style="margin-top: 0.5rem;"><button type="button" class="gcc-reset-btn" onclick="document.getElementById('gccResetBtn').click()">Clear All Filters</button></div>
                    </td>
                </tr>
            `;
            if (DOM.pageIndicator) DOM.pageIndicator.textContent = 'Page 0 of 0';
            if (DOM.pagePrev) DOM.pagePrev.disabled = true;
            if (DOM.pageNext) DOM.pageNext.disabled = true;
            return;
        }

        const totalPages = Math.ceil(total / AppState.pageSize);
        if (AppState.page > totalPages) AppState.page = totalPages;

        const startIdx = (AppState.page - 1) * AppState.pageSize;
        const pageItems = AppState.filteredRecords.slice(startIdx, startIdx + AppState.pageSize);

        let rowsHtml = '';
        pageItems.forEach(function (r) {
            const eventBadgeClass = r.eventType === 'New GCC' ? 'gcc-badge-new' : 'gcc-badge-expansion';
            const sourceBadgeClass = r.sourceType === 'Verified Primary' ? 'gcc-badge-primary' : 'gcc-badge-news';
            
            let jobsDisplay = '—';
            if (r.headcountTarget) {
                jobsDisplay = `<strong>${r.headcountTarget.toLocaleString()}</strong> <span style="font-size:0.6rem; color:var(--light);">planned</span>`;
            } else if (r.headcountNow) {
                jobsDisplay = `<strong>${r.headcountNow.toLocaleString()}</strong> <span style="font-size:0.6rem; color:var(--light);">current</span>`;
            }

            rowsHtml += `
                <tr>
                    <td>
                        <div class="gcc-company-name-cell">
                            <span>${r.company}</span>
                            <span class="gcc-hq-pill" title="Global Headquarters">${r.hq || 'Intl'}</span>
                        </div>
                    </td>
                    <td>${r.city}, <span style="color:var(--light); font-size:0.75rem;">${r.state}</span></td>
                    <td>${r.industry}</td>
                    <td><span style="font-size:0.75rem; color:var(--muted); max-width:240px; display:inline-block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r.focus || 'Technology & Operations'}</span></td>
                    <td><span class="gcc-badge ${eventBadgeClass}">${r.eventType}</span></td>
                    <td>${jobsDisplay}</td>
                    <td>
                        <button type="button" class="gcc-action-btn" data-record-id="${r.id}">Inspect →</button>
                    </td>
                </tr>
            `;
        });

        DOM.tableBody.innerHTML = rowsHtml;

        // Bind inspect buttons
        DOM.tableBody.querySelectorAll('.gcc-action-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const id = btn.getAttribute('data-record-id');
                const found = AppState.records.find(item => item.id === id);
                if (found) openModal(found);
            });
        });

        // Update pagination controls
        if (DOM.pageIndicator) {
            DOM.pageIndicator.textContent = `Page ${AppState.page} of ${totalPages}`;
        }
        if (DOM.pagePrev) DOM.pagePrev.disabled = AppState.page <= 1;
        if (DOM.pageNext) DOM.pageNext.disabled = AppState.page >= totalPages;
    }

    function openModal(record) {
        if (!DOM.modalContent || !DOM.modalBackdrop) return;
        AppState.selectedRecord = record;

        let jobsDetail = 'No specific hiring volume announced in initial public disclosure.';
        if (record.headcountTarget) {
            jobsDetail = `<strong>${record.headcountTarget.toLocaleString()} planned hires / target capacity</strong>`;
            if (record.jobsNote) jobsDetail += `<div style="font-size:0.75rem; color:var(--light); margin-top:4px;">Context: ${record.jobsNote}</div>`;
        } else if (record.headcountNow) {
            jobsDetail = `<strong>${record.headcountNow.toLocaleString()} current headcount in India</strong>`;
        }

        DOM.modalContent.innerHTML = `
            <div class="gcc-modal-header">
                <div>
                    <div class="gcc-kicker-group">
                        <span>${record.industry}</span> · <span>${record.city}</span>
                    </div>
                    <h2 class="gcc-title" style="font-size: 1.6rem; margin: 0.25rem 0;">${record.company}</h2>
                    <span class="gcc-hq-pill">Headquarters: ${record.hq || 'International'}</span>
                </div>
            </div>
            <div class="gcc-modal-body">
                <div class="gcc-detail-section">
                    <div class="gcc-detail-title">Initiative Classification</div>
                    <div class="gcc-detail-val">
                        <span class="gcc-badge ${record.eventType === 'New GCC' ? 'gcc-badge-new' : 'gcc-badge-expansion'}">${record.eventType}</span>
                        <span style="margin-left: 0.5rem; font-family: var(--mono); font-size: 0.72rem; color: var(--light);">Announced: ${record.announcementDate}</span>
                    </div>
                </div>

                <div class="gcc-detail-section">
                    <div class="gcc-detail-title">Stated Capabilities & Focus Areas</div>
                    <div class="gcc-detail-val">${record.focus || 'Enterprise Technology, R&D and Global Operations'}</div>
                </div>

                <div class="gcc-detail-section">
                    <div class="gcc-detail-title">Talent & Headcount Disclosures</div>
                    <div class="gcc-detail-val">${jobsDetail}</div>
                </div>

                <div class="gcc-detail-section">
                    <div class="gcc-detail-title">Source Provenance & Verification</div>
                    <div class="gcc-detail-val">
                        <div style="font-size: 0.8rem; margin-bottom: 0.4rem;">
                            <strong>Source:</strong> ${record.sourceTitle} (<span style="color: var(--light);">${record.sourceType}</span>)
                        </div>
                        <div style="font-size: 0.72rem; color: var(--light); font-family: var(--mono); margin-bottom: 0.75rem;">
                            Audited / Last Verified: ${record.lastVerified}
                        </div>
                        <div class="gcc-modal-actions">
                            <a href="${record.sourceUrl}" target="_blank" rel="noopener noreferrer" class="gcc-source-link-btn">
                                Open Official Reporting Link ↗
                            </a>
                            ${record.careerUrl ? `
                            <a href="${record.careerUrl}" target="_blank" rel="noopener noreferrer" class="gcc-career-link-btn" title="Explore careers at ${record.company}">
                                EXPLORE CAREERS ↗
                            </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;

        DOM.modalBackdrop.classList.add('is-open');
    }

    function closeModal() {
        if (DOM.modalBackdrop) {
            DOM.modalBackdrop.classList.remove('is-open');
        }
        AppState.selectedRecord = null;
    }

    function renderRecentAnnouncements() {
        if (!DOM.announcementsList) return;

        // Take recent items from 2026/2025
        const recents = AppState.records.filter(r => r.announcementDate && r.announcementDate.startsWith('2026')).slice(0, 6);
        let html = '';

        recents.forEach(function (r) {
            html += `
                <div class="gcc-announcement-item">
                    <div class="gcc-announcement-header">
                        <strong style="font-size: 0.85rem;">${r.company}</strong>
                        <span style="font-family: var(--mono); font-size: 0.65rem; color: var(--light);">${r.announcementDate}</span>
                    </div>
                    <div style="font-size: 0.78rem; color: var(--muted);">
                        ${r.eventType} in <strong>${r.city}</strong> · ${r.focus}
                    </div>
                    <div>
                        <a href="${r.sourceUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--mono); font-size: 0.62rem; color: #2D6A4F; text-decoration: underline;">
                            Source: ${r.sourceTitle} ↗
                        </a>
                    </div>
                </div>
            `;
        });

        DOM.announcementsList.innerHTML = html;
    }

    function renderStatePolicies() {
        if (!DOM.policiesList || !AppState.data.statePolicies) return;

        let html = '';
        AppState.data.statePolicies.forEach(function (p) {
            html += `
                <div class="gcc-policy-card">
                    <div class="gcc-policy-state">${p.state}: ${p.policyName}</div>
                    <div style="font-size: 0.78rem; color: var(--ink); margin-bottom: 0.35rem;">${p.targetSummary}</div>
                    <div style="font-size: 0.72rem; color: var(--light); margin-bottom: 0.4rem;"><em>${p.keyIncentive}</em></div>
                    <a href="${p.sourceUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--mono); font-size: 0.62rem; color: var(--ink); text-decoration: underline;">
                        Official Framework Link ↗
                    </a>
                </div>
            `;
        });

        DOM.policiesList.innerHTML = html;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
