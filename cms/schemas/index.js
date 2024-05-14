// Document Schemas
import {service} from './documents/service'
import {category} from './documents/category'
import {post} from './documents/post'
import {author} from './documents/author'
import {page} from './documents/page'
import {project} from './documents/project'
import {navigation} from './documents/navigation'
import {siteConfig} from './documents/siteConfig'
import {niche} from './documents/niche'
import {tag} from './documents/tag'
import {socialMedia} from './documents/socialMedia'
import {legal} from './documents/legalDoc'

// Object Schemas
import {blockContent} from './objects/blockContent'
import {timeline} from './objects/timeline'
import {milestone} from './objects/milestone'
import {duration} from './objects/duration'
import {seo} from './objects/seo'
import {openGraph} from './objects/openGraph'
import {siteIndex} from './objects/siteIndex'
import {pageSection} from './objects/pageSection'
import {pageSectionColumns} from './objects/pageSectionColumns'
import {pageSectionContent} from './objects/pageSectionContent'
import {column} from './objects/column'
import {conditionalHeading} from './objects/conditionalHeading'
import {basicFields} from './objects/basicFields'
import {button} from './objects/button'
import {hero} from './objects/hero'
import {area} from './objects/area'
import {navItem} from './objects/navItem'
import {link} from './objects/link'
import {textItem} from './objects/textItem'
import {manifest} from './objects/manifest'
import {cta} from './objects/cta'
import {figure} from './objects/figure'

export const schemaTypes = [
  service,
  category,
  blockContent,
  post,
  project,
  author,
  page,
  timeline,
  milestone,
  duration,
  seo,
  openGraph,
  siteIndex,
  pageSection,
  pageSectionColumns,
  pageSectionContent,
  column,
  conditionalHeading,
  basicFields,
  button,
  hero,
  area,
  navigation,
  navItem,
  link,
  siteConfig,
  textItem,
  manifest,
  cta,
  niche,
  tag,
  socialMedia,
  figure,
  legal,
]
