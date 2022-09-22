export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '632c16c35368f362f4ee3ffa',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-bf6mh618',
                  apiId: '0db2be69-18ea-45bb-bf88-69e978a59806'
                },
                {
                  buildHookId: '632c16c3e3be775d8c52f522',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-bfoz9w4p',
                  apiId: 'ad66433c-523d-4cb6-a3fb-6ff9e021457a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aykanburcak/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-bfoz9w4p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
