const NavMeta = {
  "navigation": [
    {
      "route": "/about",
      "label": "About"
    },
    {
      "route": "/services",
      "label": "Services"
    },
    {
      "route": "/results",
      "label": "Results"
    },
    {
      "route": "/the-humanoko-difference",
      "label": "The Humanoko Difference"
    },
    {
      "route": "/contact",
      "label": "Let's Talk"
    }
  ],
  "sidebar": [
    {
      "route": "/",
      "label": "Home",
      "childs": []
    },
    {
      "route": "/about",
      "label": "About Humanoko",
      "childs": [
        {
          "route": "/about",
          "label": "Overview"
        },
        {
          "route": "/team",
          "label": "Team"
        },
        {
          "route": "/career",
          "label": "Carrers"
        }
      ]
    },
    {
      "route": "/services",
      "label": "Services",
      "childs": [
        {
          "route": "/services",
          "label": "Overview"
        },
        {
          "route": "/services/mobile",
          "label": "Mobile"
        },
        {
          "route": "/services/web",
          "label": "Web"
        },
        {
          "route": "/services/devops",
          "label": "DevOps"
        },
        {
          "route": "/services/recruitment-and-staffing",
          "label": "Recruitment and Staffing"
        },
        {
          "route": "/services/salesforce",
          "label": "Salesforce"
        }
      ]
    },
    {
      "route": "/results",
      "label": "Results",
      "childs": [
        {
          "route": "/results#clients",
          "label": "Clients & Testimonial"
        },
        {
          "route": "/results",
          "label": "Select Case Studies"
        }
      ]
    },
    {
      "route": "/the-humanoko-difference",
      "label": "The Humanoko Difference",
      "childs": [
        {
          "route": "/the-humanoko-difference",
          "label": "Overview"
        },
        {
          "route": "/the-humanoko-difference/process",
          "label": "Process"
        },
        {
          "route": "/the-humanoko-difference/pricing",
          "label": "Pricing"
        },
        {
          "route": "/the-humanoko-difference/manifesto",
          "label": "Manifesto"
        },
        {
          "route": "/the-humanoko-difference/faq",
          "label": "FAQs"
        }
      ]
    }
  ]
}

export default NavMeta;