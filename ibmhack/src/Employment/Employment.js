import React from 'react';


import './Employment.css';
class Employment extends React.Component {
 
        constructor(props) {
          super(props);
          this.state = {
            activeSection: null,
          };
        }
      
        toggleSection = (index) => {
          if (this.state.activeSection === index) {
            this.setState({ activeSection: null });
          } else {
            this.setState({ activeSection: index });
          }
        };
    render () {
        const sections = [
            {
              title: 'Administration and Management',
              content: [
                {
                  sub_title: 'Farm Manager',
                  sub_content: 'Overseeing agricultural operations, crop production, and resource allocation on farms.',
                },
                {
                  sub_title: 'Agribusiness Manager',
                  sub_content: 'Managing business aspects of agriculture, including marketing, sales, and supply chain management.',
                },
                {
                  sub_title: 'Rural Development Officer',
                  sub_content: 'Working on community development projects and initiatives to improve rural livelihoods.',
                },
                {
                  sub_title: 'Horticulture Manager',
                  sub_content: 'Supervising horticultural activities, including crop cultivation, landscaping, and nursery management.',
                },
                {
                  sub_title: 'Agricultural Extension Officer',
                  sub_content: 'Providing advisory and educational services to farmers, promoting best practices.',
                },
              ],
            },
            {
              title: 'Research and Development',
              content: [
                {
                  sub_title: 'Agricultural Scientist',
                  sub_content: 'Conducting research to improve crop varieties, enhance yields, and develop sustainable agricultural practices.',
                },
                {
                  sub_title: 'Plant Breeder',
                  sub_content: 'Developing new plant varieties with improved traits, such as yield, disease resistance, and nutritional content.',
                },
                {
                  sub_title: 'Entomologist',
                  sub_content: 'Studying insects and pests, and devising strategies for pest management.',
                },
                {
                  sub_title: 'Soil Scientist',
                  sub_content: 'Analyzing soil properties, fertility, and nutrient management to optimize plant growth.',
                },
                {
                  sub_title: 'Food Technologist',
                  sub_content: 'Researching and developing new food products, processing techniques, and quality control methods.',
                },
              ],
            },
            {
              title: 'Teaching and Education',
              content: [
                {
                  sub_title: 'Agricultural Professor/Lecturer',
                  sub_content: 'Teaching agriculture-related subjects at universities, colleges, and educational institutions.',
                },
                {
                  sub_title: 'Extension Educator',
                  sub_content: 'Providing agricultural training, workshops, and demonstrations to farmers and rural communities.',
                },
                {
                  sub_title: 'Agricultural Science Teacher',
                  sub_content: 'Educating students at the secondary school level about agricultural principles and practices.',
                },
              ],
            },
            {
              title: 'Consultancy and Advisory Services',
              content: [
                {
                  sub_title: 'Agricultural Consultant',
                  sub_content: 'Providing expert advice to farmers, businesses, and organizations on agricultural practices and strategies.',
                },
                {
                  sub_title: 'Horticulture Consultant',
                  sub_content: 'Offering specialized guidance on horticultural practices, landscaping, and plant management.',
                },
              ],
            },
            {
              title: 'Marketing and Sales',
              content: [
                {
                  sub_title: 'Agricultural Marketing Specialist',
                  sub_content: 'Managing the marketing, distribution, and sales of agricultural products.',
                },
                {
                  sub_title: 'Agribusiness Sales Manager',
                  sub_content: 'Overseeing sales activities for agricultural machinery, equipment, and products.',
                },
              ],
            },
            {
              title: 'Environmental and Conservation',
              content: [
                {
                  sub_title: 'Sustainable Agriculture Specialist',
                  sub_content: 'Promoting eco-friendly and sustainable agricultural practices to enhance environmental conservation.',
                },
                {
                  sub_title: 'Natural Resource Manager',
                  sub_content: 'Managing land, water, and other resources to ensure their sustainable use in agriculture.',
                },
              ],
            },
            {
              title: 'Quality Assurance and Inspection',
              content: [
                {
                  sub_title: 'Food Safety Inspector',
                  sub_content: 'Ensuring adherence to food safety standards and regulations in agricultural and food processing industries.',
                },
                {
                  sub_title: 'Horticulture Inspector',
                  sub_content: 'Inspecting horticultural facilities, farms, and nurseries to ensure compliance with regulations.',
                },
              ],
            },
            {
              title: 'Policy and Advocacy',
              content: [
                {
                  sub_title: 'Agricultural Policy Analyst',
                  sub_content: 'Analyzing agricultural policies, proposing reforms, and advocating for the interests of farmers and the agricultural sector.',
                },
                {
                  sub_title: 'Rural Development Specialist',
                  sub_content: 'Developing and implementing policies and programs to promote rural development and improve living conditions.',
                },
              ],
            },
            {
              title: 'Entrepreneurship',
              content: [
                {
                  sub_title: 'Agricultural Entrepreneur',
                  sub_content: 'Starting and managing agribusiness ventures, such as organic farming, value-added processing, or agritourism.',
                },
              ],
            },
            {
              title: 'Journalism and Communication',
              content: [
                {
                  sub_title: 'Agricultural Journalist',
                  sub_content: 'Reporting on agricultural news, innovations, and issues for media outlets.',
                },
                {
                  sub_title: 'Agricultural Communicator',
                  sub_content: 'Creating content and educational materials to communicate agricultural information to the public.',
                },
              ],
            },
            {
              title: 'Supply Chain and Logistics',
              content: [
                {
                  sub_title: 'Agricultural Logistics Manager',
                  sub_content: 'Managing the movement and distribution of agricultural products from farms to consumers.',
                },
              ],
            },
            {
              title: 'Technology and Innovation',
              content: [
                {
                  sub_title: 'Precision Agriculture Specialist',
                  sub_content: 'Applying technology and data analysis to optimize agricultural practices and resource use.',
                },
              ],
            },
            {
              title: 'Animal Husbandry and Veterinary Services',
              content: [
                {
                  sub_title: 'Veterinarian',
                  sub_content: 'Providing medical care and health services to livestock and animals.',
                },
              ],
            },
            {
              title: 'International Development and Aid Organizations',
              content: [
                {
                  sub_title: 'Agricultural Development Specialist',
                  sub_content: 'Working with international organizations to promote sustainable agricultural practices in developing countries.',
                },
              ],
            },
            {
                title: 'Research Technician and Field Assistant',
                content: [
                    {
                        sub_title: '',
                        sub_content: 'Assisting researchers in conducting experiments and data collection in various agricultural projects.'
                    }
                ]
            },
            {
                title: 'Agricultural Equipment Technician',
                content: [
                    {
                        sub_title: '',
                        sub_content: 'Repairing and maintaining agricultural machinery and equipment.'
                    }
                ]
            },
            {
                title: 'Agricultural Photographer or Filmmaker',
                content: [
                    {
                        sub_title: '',
                        sub_content: 'Documenting agricultural processes and innovations through visual media.'
                    }
                ]
            },
            {
                title: 'Seed Production Manager',
                content: [
                    {
                        sub_title: '',
                        sub_content: 'Overseeing the production and quality control of agricultural seeds.'
                    }
                ]
            },
            {
                title: 'Aquaculture Specialist',
                content: [
                    {
                        sub_title: '',
                        sub_content: 'Managing fish farming operations and aquatic resource conservation.'
                        
                    }
                ]
            },
            {
                title: 'Landscaping Designer or Contractor',
                content: [
                    {
                        sub_title: '',
                        sub_content: 'Planning and implementing landscape designs for residential, commercial, and public spaces'
                        
                        
                    }
                ]
            },
            // ... Add other sections similarly
          ];
        return (
            <div>
                
                    <h1 className='employment-title'>Employment Opportunities in Agriculture Sector</h1>
                    
                
                <div style={{ textAlign: 'center' }}>
                <iframe src="https://data.worldbank.org/share/widget?indicators=SL.AGR.EMPL.ZS&locations=IN" style={{ textAlign: 'center' }} width='700' height='466' frameBorder='0' scrolling="no" ></iframe>
                </div>
                <p>The NSSO’s latest annual Periodic Labour Force Survey (PLFS) report for 2021-22 (July-June) shows the farm sector’s share in the country’s employed labour force at 45.5%. That’s down from 46.5% in 2020-21, but still higher than the 2018-19 low of 42.5%. </p>

                <h3 className='gradient-employment-heading'>Diverse Careers in Agriculture and Agribusiness</h3>
                
      <div className="career-opportunities">
        {sections.map((section, index) => (
          <div key={index} className={`section ${this.state.activeSection === index ? 'active' : ''}`}>
            <div className="section-header" onClick={() => this.toggleSection(index)}>
              <h2>{section.title}</h2>
            </div>
            {this.state.activeSection === index && (
              <div className="section-content">
                <ul>
                {section.content.map((subSection, subIndex) => (
                    <li key={subIndex}>
                      <p className='subtitle'>{subSection.sub_title}</p>
                      <span id="sub-section-content">{subSection.sub_content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    );

            
        
    }
}

export default Employment;