
import { Article, Category, Tool } from './types';
import { ARTICLE_G1 } from './data/articles/g1';
import { ARTICLE_UX_DEMO_1 } from './data/articles/ux-demo-1';
import { ARTICLE_TEMPLATE_BEHANCE } from './data/articles/template-behance';
import { ARTICLE_A1 } from './data/articles/a1';
import { ARTICLE_A2 } from './data/articles/a2';
import { ARTICLE_A5 } from './data/articles/a5';
import { ARTICLE_A6 } from './data/articles/a6';
import { ARTICLE_P1 } from './data/articles/p1';
import { ARTICLE_P2 } from './data/articles/p2';
import { ARTICLE_P3 } from './data/articles/p3';
import { ARTICLE_U1 } from './data/articles/u1';
import { ARTICLE_U2 } from './data/articles/u2';
import { ARTICLE_A3 } from './data/articles/a3';
import { ARTICLE_A4 } from './data/articles/a4';
import { TOOL_T1 } from './data/tools/t1';
import { TOOL_T2 } from './data/tools/t2';

export const NAV_LINKS = [
  { name: 'DISCOVER', href: '#discover' },
  { name: 'ARCHIVE', href: '#archive' },
  { name: 'TOOLS', href: '#tools' },
];

export const TOPIC_DATA: Article[] = [
  ARTICLE_U2,
  ARTICLE_U1,
  ARTICLE_UX_DEMO_1,
  ARTICLE_A1,
  ARTICLE_A2,
  ARTICLE_A5,
  ARTICLE_A6,
  ARTICLE_P1,
  ARTICLE_P2,
  ARTICLE_P3,
  ARTICLE_A3,
  ARTICLE_A4,
  ARTICLE_G1,
  ARTICLE_TEMPLATE_BEHANCE
];

export const FEATURED_ARTICLES: Article[] = TOPIC_DATA.filter(
  (article) =>
    Boolean(
      article.isFeatured ||
        article.isUxUi ||
        article.isAigc ||
        article.isArchitecture ||
        article.isPhotography
    )
);

export const DESIGN_TOOLS: Tool[] = [
  TOOL_T1,
  TOOL_T2
];
