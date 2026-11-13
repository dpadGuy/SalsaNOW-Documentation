// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const banner =
	'https://documentation.salsanowfiles.work/images/SalsaNOWDocumentationBanner.jpg';

// https://astro.build/config
export default defineConfig({
	site: 'https://documentation.salsanowfiles.work',
	trailingSlash: 'always',
	build: {
		format: 'directory',
	},
	integrations: [
		starlight({
			title: 'SalsaNOW',
			favicon: '/images/salsanow-logo.png',
			description:
				'Turn a GeForce NOW session into a desktop you can use for games and other software.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/dpadGuy/SalsaNOW',
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/ZZDAyUC9a4',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/dpadGuy/SalsaNOW-Documentation/edit/main/',
			},
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: banner } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{
					tag: 'meta',
					attrs: { name: 'twitter:card', content: 'summary_large_image' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: `${banner}?v=2` },
				},
			],
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Setup', slug: 'setup' },
				{
					label: 'Features',
					collapsed: false,
					items: [
						{ label: 'Overview', slug: 'features' },
						{ label: 'Desktop shortcuts', slug: 'features/shortcuts' },
						{ label: 'Startup batch script', slug: 'features/startup-script' },
						{ label: 'SalsaSteam', slug: 'features/salsasteam' },
						{ label: 'Change wallpaper', slug: 'features/wallpaper' },
					],
				},
				{
					label: 'Getting over obstacles',
					collapsed: false,
					items: [
						{ label: 'Choosing saving a file or folder', slug: 'obstacles/choosing-a-file' },
						{ label: 'Gamepad issues', slug: 'obstacles/gamepad' },
					],
				},
				{ label: 'Keyboard shortcuts', slug: 'shortcuts' },
				{ label: 'Commands', slug: 'commands' },
				{ label: 'FAQ', slug: 'faq' },
				{ label: 'Donations', slug: 'donations' },
			],
		}),
	],
	redirects: {
		'/SetupGuide/VideoTutorial': '/setup/',
		'/Features/ShortcutsSaving': '/features/shortcuts/',
		'/Features/StartupBatchScript': '/features/startup-script/',
		'/Features/WallpaperChange': '/features/wallpaper/',
		'/KeyboardShortcuts/CTRLF4': '/shortcuts/',
		'/KeyboardShortcuts/CTRLL': '/shortcuts/',
		'/KeyboardShortcuts/CTRLTAB': '/shortcuts/',
		'/KeyboardShortcuts/CTRLWIN': '/shortcuts/',
		'/CommandPromptCommands/Powershell': '/commands/',
		'/FAQ': '/faq/',
		'/Donations': '/donations/',
	},
});
