import type {InferSchemaValues} from '@sanity-typed/types'
import {defineConfig} from '@sanity-typed/types'

import {CogIcon} from '@sanity/icons'
import {Card, Stack, Text} from '@sanity/ui'
import {visionTool} from '@sanity/vision'
import {NavbarProps} from 'sanity'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

const projectId = '9n6u2cil'
const dataset = 'production'

const navBarLinks = [
  {
    title: 'Site',
    url: 'https://joostschuur.com',
  },
  {
    title: 'Google Analytics',
    url: 'https://analytics.google.com/analytics/web/#/p343950044/reports/intelligenthome',
  },
  {
    title: 'Search Console',
    url: 'https://search.google.com/search-console?resource_id=sc-domain:joostschuur.com',
  },
  {
    title: 'Sanity Project',
    url: 'https://www.sanity.io/manage/personal/project/9n6u2cil',
  },
  {
    title: 'Vercel',
    url: 'https://vercel.com/joostschuur/joostschuur-com',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/jschuur/joostschuur.com',
  },
  {
    title: 'Icons',
    url: 'https://icon-sets.iconify.design',
  },
]

const singletonTypes = new Set(['sitesettings', 'homepage', 'projectspage', '404page'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

function CustomNavbar(props: NavbarProps) {
  return (
    <Stack>
      <Card padding={3} tone="primary">
        <Text size={2} align="right">
          {navBarLinks.map(({url, title}, i) => (
            <>
              <a key={i} target="_blank" rel="noopener noreferrer" href={url}>
                {title}
              </a>{' '}
              {i < navBarLinks.length - 1 && <>/ </>}
            </>
          ))}
        </Text>
      </Card>
      {props.renderDefault(props)}
    </Stack>
  )
}

const config = defineConfig({
  name: 'default',
  title: 'joostschuur.com',
  projectId,
  dataset,

  studio: {
    components: {
      navbar: CustomNavbar,
    },
  },

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('post'),
            S.documentTypeListItem('category'),
            S.documentTypeListItem('tech'),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .id('sitesettings')
              .icon(CogIcon)
              .child(
                S.document()
                  .title('Site Settings')
                  .schemaType('sitesettings')
                  .documentId('sitesettings'),
              ),
            S.listItem()
              .title('Home Page')
              .id('homepage')
              .icon(CogIcon)
              .child(S.document().title('Home Page').schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('Projects Page')
              .id('projectspage')
              .icon(CogIcon)
              .child(
                S.document()
                  .title('Projects Page')
                  .schemaType('projectspage')
                  .documentId('projectspage'),
              ),
            S.listItem()
              .title('404 Page')
              .id('404page')
              .icon(CogIcon)
              .child(S.document().title('404 Page').schemaType('404page').documentId('404page')),
          ]),
    }),
    vercelDeployTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // prevent creation of new documents for singletons that manage page/site settings
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) => {
      const {schemaType} = context

      // restrict document actions for singletons
      if (singletonTypes.has(schemaType))
        return input.filter(({action}) => action && singletonActions.has(action))

      return input
    },
  },
})

export type SanityValues = InferSchemaValues<typeof config>

export default config
