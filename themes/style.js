import CONFIG from './config'
import FloatDarkModeButton from './components/FloatDarkModeButton'
import Footer from './components/Footer'
import JumpToBottomButton from './components/JumpToBottomButton'
import JumpToTopButton from './components/JumpToTopButton'
import SideAreaLeft from './components/SideAreaLeft'
import SideAreaRight from './components/SideAreaRight'
import TopNav from './components/TopNav'
import { useGlobal } from '@/lib/global'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import BlogPostListScroll from './components/BlogPostListScroll'
import BlogPostListPage from './components/BlogPostListPage'
import StickyBar from './components/StickyBar'
import { isBrowser } from '@/lib/utils'
import TocDrawerButton from './components/TocDrawerButton'
import TocDrawer from './components/TocDrawer'
import { ArticleLock } from './components/ArticleLock'
import BlogPostArchive from './components/BlogPostArchive'
import TagItem from './components/TagItem'
import { useRouter } from 'next/router'
import ArticleDetail from './components/ArticleDetail'
import Link from 'next/link'
import BlogListBar from './components/BlogListBar'
import { Style } from './style'
import replaceSearchResult from '@/components/Mark'
import { siteConfig } from '@/lib/config'
import AlgoliaSearchModal from '@/components/AlgoliaSearchModal'
import Announcement from './components/Announcement'
import Card from './components/Card'

var script = document.createElement("script");
script.setAttribute("type","text/javascript");
script.setAttribute("id","myhk");
script.setAttribute("src","https://myhkw.cn/api/player/159336591778");
script.setAttribute("key","159336591778");
document.documentElement.appendChild(script);
