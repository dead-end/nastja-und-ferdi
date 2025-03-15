import ghpages from 'gh-pages';

ghpages.publish(
	'build', // path to public directory
	{
		branch: 'main',
		repo: 'https://github.com/dead-end/nastja-ferdi.git'
	},
	() => {
		console.log('Deploy Complete!');
	}
);
