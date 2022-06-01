export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6297c05c726d8605f701db0f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wx2dco1g',
                  apiId: '1833e058-bbb3-46b5-98df-bdbf020c80f3'
                },
                {
                  buildHookId: '6297c05dacfc3d06b4250872',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z8eusi21',
                  apiId: '284961d4-57f0-40fa-9ba3-4258d07b2a07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abhishekkhanna-10/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z8eusi21.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
