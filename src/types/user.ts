export type LocalGithubUser = {
  login: string,
  avatar: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter: string,
  repos: number,
  followers: number,
  following: number,
  created: string
}

export type GithubUser = {
  login: string,
  id: number,
  avatar_url: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter_username: string,
  public_repos: number,
  followers: number,
  following: number,
  created_at: string
}

export type GithubError = {
  message: string,
  documentation_url: string
}

//https://api.github.com/users/Jekarter
/*{
  "login": "Jekarter",
  "id": 101813294,
  "node_id": "U_kgDOBhGMLg",
  "avatar_url": "https://avatars.githubusercontent.com/u/101813294?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Jekarter",
  "html_url": "https://github.com/Jekarter",
  "followers_url": "https://api.github.com/users/Jekarter/followers",
  "following_url": "https://api.github.com/users/Jekarter/following{/other_user}",
  "gists_url": "https://api.github.com/users/Jekarter/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Jekarter/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Jekarter/subscriptions",
  "organizations_url": "https://api.github.com/users/Jekarter/orgs",
  "repos_url": "https://api.github.com/users/Jekarter/repos",
  "events_url": "https://api.github.com/users/Jekarter/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Jekarter/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Evgeniy",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-03-17T13:40:51Z",
  "updated_at": "2023-02-25T14:38:54Z"
} */