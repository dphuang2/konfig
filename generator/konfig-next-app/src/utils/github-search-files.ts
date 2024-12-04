import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'
import {
  getGithubApiCache,
  setGithubApiCache,
} from '@/utils/github-api-redis-cache'

type FileInfo = {
  name: string
  path: string
  url: string
}

type SearchResponse = RestEndpointMethodTypes['search']['code']['response']

function computeCacheKey({
  filename,
  owner,
  repo,
}: {
  filename: string
  owner: string
  repo: string
}): string {
  return `${owner}/${repo}/${filename}`
}

export async function githubSearchFiles({
  filename,
  owner,
  repo,
  octokit,
}: {
  owner: string
  repo: string
  filename: string
  octokit: Octokit
}): Promise<FileInfo[] | null> {
  const cacheKey = computeCacheKey({ filename, owner, repo })
  const cached = await getGithubApiCache({ namespace: 'search', key: cacheKey })
  if (cached) {
    console.debug('using cached search results:', cached)
    return JSON.parse(cached)
  }
  try {
    console.log(
      `[GITHUB_SEARCH] Starting search for files with query: filename:${filename} in repo:${owner}/${repo}`
    )
    const query = `filename:${filename} repo:${owner}/${repo}`
    const start = Date.now()
    const response: SearchResponse = await octokit.search.code({ q: query })
    console.log(
      `[GITHUB_SEARCH] GitHub search API call took ${Date.now() - start}ms`
    )

    console.debug('[GITHUB_SEARCH] response.data', response.data)

    if (response.data.total_count === 0) {
      console.log('[GITHUB_SEARCH] No files found matching search criteria')
      return null
    }

    console.log(
      `[GITHUB_SEARCH] Found ${response.data.total_count} matching files`
    )
    const result = response.data.items.map((item) => ({
      name: item.name,
      path: item.path,
      url: item.html_url,
    }))

    const cacheStart = Date.now()
    await setGithubApiCache({
      namespace: 'search',
      key: cacheKey,
      value: JSON.stringify(result),
    })
    console.log(
      `[GITHUB_SEARCH] Caching search results took ${Date.now() - cacheStart}ms`
    )

    return result
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Error occurred while searching for files: ${error.message}`
      )
    throw error
  }
}
