test('validateUrls', async t => {
	await t.notThrowAsync(awesomeLint.validateUrls('README.md'));
	t.fail('This test is broken!');
});
