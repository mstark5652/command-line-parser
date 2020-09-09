const github = require('@actions/github')

const run = async () => {
  const octokit = github.getOctokit(process.env.GH_TOKEN)
  const { version } = require('../package.json')
  const tagCreateResponse = await octokit.git.createTag({
    ...github.context.repo,
    tag: version,
    message: version,
    object: process.env.GITHUB_SHA,
    type: 'commit'
  })

  console.log(`Pushing annotated tag to the repo: ${version}`)

  await octokit.git.createRef({
    ...github.context.repo,
    ref: `refs/tags/${version}`,
    sha: tagCreateResponse.data.sha
  })
}

run().catch(err => {
  console.error('Error: ', err)
  return process.exit(1)
})
