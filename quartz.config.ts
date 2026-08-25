import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cynthia's Office Edit",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "cynthiacisneros.github.io/affordable-office-fashion/",
    ignorePatterns: ["private", "_templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      fontOrigin: "googleFonts",
      typography: {
        title: { name: "DM Serif Display", weights: [400] },
        header: { name: "Manrope", weights: [500, 600, 700] },
        body: { name: "Manrope", weights: [400, 500, 600, 700], includeItalic: true },
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f3ee",
          lightgray: "#e5ddd3",
          gray: "#a89d92",
          darkgray: "#514a44",
          dark: "#241f1b",
          secondary: "#8a5a48",
          tertiary: "#a58c72",
          highlight: "rgba(165, 140, 114, 0.16)",
          textHighlight: "#ead8bf",
        },
        darkMode: {
          light: "#24211f",
          lightgray: "#403934",
          gray: "#8e8176",
          darkgray: "#ded4cb",
          dark: "#f7f1ea",
          secondary: "#d5a487",
          tertiary: "#c4b295",
          highlight: "rgba(213, 164, 135, 0.16)",
          textHighlight: "#5b4538",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
