// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "DataLoom",
	tagline:
		"Weave together data from diverse sources into a cohesive table view. Inspired by Excel Spreadsheets and Notion.so.",
	favicon: "img/favicon.png",

	// Set the production url of your site here
	url: "https://dataloom.xyz",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "decaf-dev", // Usually your GitHub org/user name.
	projectName: "obsidian-dataloom", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	scripts: [
		{
			src: "https://plausible.io/js/script.js",
			async: true,
			defer: true,
			dataDomain: "dataloom.xyz",
		},
		// <script defer data-domain="dataloom.xyz" src="https://plausible.io/js/script.js"></script>
	],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/", // Serve the docs at the site's root
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/decaf-dev/obsidian-dataloom/tree/master/docusaurus/",
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	plugins: [require.resolve("docusaurus-lunr-search")],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/social-card.png",
			blog: false,
			navbar: {
				title: "DataLoom",
				logo: {
					alt: "logo",
					src: "img/logo-light.png",
					srcDark: "img/logo-dark.png",
				},
				items: [
					{
						href: "https://github.com/decaf-dev/obsidian-dataloom",
						arialabel: "GitHub",
						position: "right",
						className: "fa-brands fa-github fa-xl",
					},
				],
			},
			footer: {
				style: "dark",
				copyright: `Copyright © ${new Date().getFullYear()} DecafDev. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
